/**
 * OpenTasks Cursor Extension
 * Main entry point
 */

import * as vscode from 'vscode';
import { OpenTasksClient } from './api';
import { ProjectsTreeProvider } from './treeProvider';

const TOKEN_KEY = 'opentasks.token';
const BASE_URL_KEY = 'opentasks.baseUrl';

let treeProvider: ProjectsTreeProvider | undefined;
let refreshTimer: NodeJS.Timeout | undefined;

export async function activate(context: vscode.ExtensionContext) {
  console.log('OpenTasks extension activated');

  // Initialize tree provider
  treeProvider = new ProjectsTreeProvider(context);
  vscode.window.registerTreeDataProvider('opentasksProjects', treeProvider);

  // Register commands
  context.subscriptions.push(
    vscode.commands.registerCommand('opentasks.signIn', async () => {
      await signIn(context);
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand('opentasks.signOut', async () => {
      await signOut(context);
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand('opentasks.createTicket', async () => {
      await createTicket(context);
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand('opentasks.refresh', async () => {
      await treeProvider?.refresh();
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand('opentasks.openInBrowser', async (item) => {
      if (item && item.url) {
        vscode.env.openExternal(vscode.Uri.parse(item.url));
      }
    })
  );

  // New commands for context menu actions
  context.subscriptions.push(
    vscode.commands.registerCommand('opentasks.createProject', async () => {
      await createProject(context);
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand('opentasks.moveToHandle', async (item) => {
      await moveTicket(context, item, 'HANDLE', 'AI Agent');
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand('opentasks.moveToTodo', async (item) => {
      await moveTicket(context, item, 'TODO', 'To Do');
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand('opentasks.moveToDone', async (item) => {
      await moveTicket(context, item, 'DONE', 'Done');
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand('opentasks.copyTicket', async (item) => {
      await copyTicketDetails(item);
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand('opentasks.copyEnhanced', async (item) => {
      await copyEnhancedTicket(item);
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand('opentasks.editTicket', async (item) => {
      await editTicket(context, item);
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand('opentasks.deleteTicket', async (item) => {
      await deleteTicket(context, item);
    })
  );

  // Start auto-refresh timer
  startRefreshTimer(context);

  // Initial load
  await treeProvider.refresh();
}

export function deactivate() {
  if (refreshTimer) {
    clearInterval(refreshTimer);
  }
}

/**
 * Start auto-refresh timer
 */
function startRefreshTimer(context: vscode.ExtensionContext) {
  const config = vscode.workspace.getConfiguration('opentasks');
  const interval = config.get<number>('refreshInterval', 10);

  if (refreshTimer) {
    clearInterval(refreshTimer);
  }

  if (interval > 0) {
    refreshTimer = setInterval(async () => {
      await treeProvider?.refresh();
    }, interval * 1000);
  }
}

/**
 * Sign in command
 */
async function signIn(context: vscode.ExtensionContext) {
  // Get base URL
  const config = vscode.workspace.getConfiguration('opentasks');
  let baseUrl = config.get<string>('baseUrl', 'https://www.opentasks.fr');

  const customUrl = await vscode.window.showInputBox({
    prompt: 'OpenTasks Server URL',
    value: baseUrl,
    placeHolder: 'https://www.opentasks.fr',
    validateInput: (value) => {
      if (!value.startsWith('http://') && !value.startsWith('https://')) {
        return 'URL must start with http:// or https://';
      }
      return null;
    }
  });

  if (!customUrl) {
    return;
  }

  baseUrl = customUrl.trim();

  // Get token
  const token = await vscode.window.showInputBox({
    prompt: 'Enter your OpenTasks API Token',
    password: true,
    placeHolder: 'Paste your token here',
    ignoreFocusOut: true,
  });

  if (!token) {
    return;
  }

  // Test the token
  try {
    const client = new OpenTasksClient(baseUrl, token);
    const user = await client.getCurrentUser();

    // Save credentials
    await context.secrets.store(TOKEN_KEY, token);
    await context.globalState.update(BASE_URL_KEY, baseUrl);

    vscode.window.showInformationMessage(`Signed in as ${user.name}`);

    // Refresh tree
    await treeProvider?.refresh();
  } catch (error) {
    vscode.window.showErrorMessage(`Failed to sign in: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Sign out command
 */
async function signOut(context: vscode.ExtensionContext) {
  await context.secrets.delete(TOKEN_KEY);
  await context.globalState.update(BASE_URL_KEY, undefined);

  vscode.window.showInformationMessage('Signed out from OpenTasks');

  // Refresh tree
  await treeProvider?.refresh();
}

/**
 * Create ticket command
 */
async function createTicket(context: vscode.ExtensionContext) {
  const token = await context.secrets.get(TOKEN_KEY);
  const baseUrl = context.globalState.get<string>(BASE_URL_KEY, 'https://www.opentasks.fr');

  if (!token) {
    const signIn = 'Sign In';
    const result = await vscode.window.showErrorMessage(
      'You must sign in first',
      signIn
    );
    if (result === signIn) {
      vscode.commands.executeCommand('opentasks.signIn');
    }
    return;
  }

  try {
    const client = new OpenTasksClient(baseUrl, token);

    // Get projects
    const projects = await client.getProjects();
    if (projects.length === 0) {
      vscode.window.showWarningMessage('No projects found. Create a project first in the web UI.');
      return;
    }

    // Select project
    const projectItems = projects.map(p => ({
      label: p.name,
      description: p.slug,
      project: p,
    }));

    const selectedProject = await vscode.window.showQuickPick(projectItems, {
      placeHolder: 'Select a project',
    });

    if (!selectedProject) {
      return;
    }

    // Get title
    const title = await vscode.window.showInputBox({
      prompt: 'Ticket Title',
      placeHolder: 'e.g., Fix login bug',
      validateInput: (value) => {
        if (!value.trim()) {
          return 'Title is required';
        }
        return null;
      }
    });

    if (!title) {
      return;
    }

    // Get description (optional)
    const description = await vscode.window.showInputBox({
      prompt: 'Ticket Description (optional)',
      placeHolder: 'Describe the task...',
    });

    // Select column
    const columns = [
      { label: 'Backlog', value: 'BACKLOG' },
      { label: 'To Do', value: 'TODO' },
      { label: 'Handle (AI Agent)', value: 'HANDLE', description: 'Queue for AI processing' },
    ];

    const selectedColumn = await vscode.window.showQuickPick(columns, {
      placeHolder: 'Where should this ticket go?',
    });

    if (!selectedColumn) {
      return;
    }

    // Select priority
    const priorities = [
      { label: 'Low', value: 'LOW' },
      { label: 'Medium', value: 'MEDIUM', description: 'Default' },
      { label: 'High', value: 'HIGH' },
      { label: 'Urgent', value: 'URGENT' },
    ];

    const selectedPriority = await vscode.window.showQuickPick(priorities, {
      placeHolder: 'Select priority',
    });

    // Create ticket
    const ticket = await client.createTicket(selectedProject.project.id, {
      title: title.trim(),
      description: description?.trim() || undefined,
      status: selectedColumn.value,
      priority: selectedPriority?.value || 'MEDIUM',
      targetBranch: selectedProject.project.defaultBranch || 'main',
    });

    vscode.window.showInformationMessage(
      `Ticket created: ${ticket.title}`,
      'Open in Browser'
    ).then((action) => {
      if (action === 'Open in Browser') {
        const url = `${baseUrl}/project/${selectedProject.project.id}/board`;
        vscode.env.openExternal(vscode.Uri.parse(url));
      }
    });

    // Refresh tree
    await treeProvider?.refresh();
  } catch (error) {
    vscode.window.showErrorMessage(`Failed to create ticket: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Create project command
 */
async function createProject(context: vscode.ExtensionContext) {
  const token = await context.secrets.get(TOKEN_KEY);
  const baseUrl = context.globalState.get<string>(BASE_URL_KEY, 'https://www.opentasks.fr');

  if (!token) {
    vscode.window.showErrorMessage('You must sign in first');
    return;
  }

  // Get project name
  const name = await vscode.window.showInputBox({
    prompt: 'Project Name',
    placeHolder: 'e.g., My Awesome Project',
    validateInput: (value) => {
      if (!value.trim()) {
        return 'Project name is required';
      }
      return null;
    }
  });

  if (!name) {
    return;
  }

  // Get description (optional)
  const description = await vscode.window.showInputBox({
    prompt: 'Project Description (optional)',
    placeHolder: 'Describe your project...',
  });

  // Get default branch
  const defaultBranch = await vscode.window.showInputBox({
    prompt: 'Default Branch',
    value: 'main',
    placeHolder: 'main',
  });

  vscode.window.showInformationMessage(
    `⚠️ Note: Project creation is currently only available through the web UI at ${baseUrl}`,
    'Open Web UI'
  ).then((action) => {
    if (action === 'Open Web UI') {
      vscode.env.openExternal(vscode.Uri.parse(`${baseUrl}/dashboard`));
    }
  });
}

/**
 * Move ticket to a different column
 */
async function moveTicket(
  context: vscode.ExtensionContext,
  item: any,
  status: string,
  statusName: string
) {
  const token = await context.secrets.get(TOKEN_KEY);
  const baseUrl = context.globalState.get<string>(BASE_URL_KEY, 'https://www.opentasks.fr');

  if (!token || !item || !item.ticket) {
    return;
  }

  try {
    const client = new OpenTasksClient(baseUrl, token);
    await client.updateTicketStatus(item.projectId, item.ticket.id, status);

    vscode.window.showInformationMessage(
      `Ticket moved to ${statusName}${status === 'HANDLE' ? ' (AI Agent will process it)' : ''}`
    );

    // Refresh tree
    await treeProvider?.refresh();
  } catch (error) {
    vscode.window.showErrorMessage(`Failed to move ticket: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Copy ticket details to clipboard
 */
async function copyTicketDetails(item: any) {
  if (!item || !item.ticket) {
    return;
  }

  const ticket = item.ticket;
  const text = `# ${ticket.title}

**Priority:** ${ticket.priority}
**Status:** ${ticket.status}
**ID:** ${ticket.id}

## Description
${ticket.description || 'No description'}

${ticket.aiSummary ? `## AI Summary\n${ticket.aiSummary}` : ''}

${ticket.prLink ? `## Pull Request\n${ticket.prLink}` : ''}
`;

  await vscode.env.clipboard.writeText(text);
  vscode.window.showInformationMessage('Ticket details copied to clipboard');
}

/**
 * Copy ticket with enhanced context and AI prompt for analysis
 * NOW MUCH SIMPLER: Just opens Cursor Chat with the prompt!
 */
async function copyEnhancedTicket(item: any) {
  if (!item || !item.ticket) {
    return;
  }

  const ticket = item.ticket;
  const workspaceFolders = vscode.workspace.workspaceFolders;
  const activeEditor = vscode.window.activeTextEditor;

  // Get current file context
  let fileContext = '';
  let filePath = '';
  let selectedCode = '';
  
  if (activeEditor) {
    const document = activeEditor.document;
    const selection = activeEditor.selection;
    selectedCode = document.getText(selection);
    filePath = document.fileName;

    fileContext = `
## 📁 Current File Context
**File Path:** \`${document.fileName}\`
**Language:** ${document.languageId}
**Line:** ${selection.start.line + 1}${selectedCode ? `-${selection.end.line + 1}` : ''}

${selectedCode ? `**Selected Code:**\n\`\`\`${document.languageId}\n${selectedCode}\n\`\`\`` : '**Note:** No code selected'}
`;
  }

  // Get workspace info
  let workspaceInfo = '';
  if (workspaceFolders && workspaceFolders.length > 0) {
    workspaceInfo = `
## 🗂️ Workspace
**Path:** \`${workspaceFolders[0].uri.fsPath}\`
**Project:** ${workspaceFolders[0].name}
`;
  }

  // Create SIMPLE prompt - just ask AI to enhance the ticket!
  const simplePrompt = `# 🎫 Analyze This Ticket

## Ticket Details
**Title:** ${ticket.title}
**Priority:** ${ticket.priority}
**Status:** ${ticket.status}
**ID:** ${ticket.id}

**Description:**
${ticket.description || 'No description provided'}

${ticket.aiSummary ? `**Previous AI Summary:**\n${ticket.aiSummary}\n` : ''}

${fileContext}

${workspaceInfo}

---

## 🤖 Please Analyze and Enhance

Please provide a detailed analysis of this ticket including:

1. **Summary** - What needs to be done (2-3 sentences)
2. **Complexity** - Is this LOW, MEDIUM, HIGH, or CRITICAL?
3. **Time Estimate** - How long will this take?
4. **Implementation Steps** - Numbered list of what to do
5. **Files to Modify** - Which files need changes? (use the file path above if relevant)
6. **Risks & Challenges** - What could go wrong?
7. **Helpful Hints** - Any gotchas or tips?
8. **Test Strategy** - How to test this?

Please be specific and actionable!`;

  // Copy to clipboard
  await vscode.env.clipboard.writeText(simplePrompt);
  
  // Show simple instructions
  const action = await vscode.window.showInformationMessage(
    '✨ Prompt copied! Now:\n\n' +
    '1. Press Cmd+L (or Ctrl+L) to open Cursor Chat\n' +
    '2. Paste (Cmd+V) and press Enter\n' +
    '3. Read AI\'s analysis - that\'s it!\n\n' +
    'No JSON, no complicated steps!',
    'Open Cursor Chat',
    'Show Full Instructions'
  );

  if (action === 'Open Cursor Chat') {
    // Open Cursor chat
    vscode.commands.executeCommand('workbench.action.chat.open');
  } else if (action === 'Show Full Instructions') {
    const panel = vscode.window.createWebviewPanel(
      'simpleInstructions',
      'How to Use Enhanced Analysis',
      vscode.ViewColumn.Beside,
      {}
    );

    panel.webview.html = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            padding: 30px;
            line-height: 1.8;
            color: var(--vscode-foreground);
            background: var(--vscode-editor-background);
            max-width: 800px;
            margin: 0 auto;
          }
          h1 { color: var(--vscode-textLink-foreground); font-size: 28px; }
          h2 { color: var(--vscode-textLink-activeForeground); margin-top: 24px; font-size: 20px; }
          .step {
            background: var(--vscode-textCodeBlock-background);
            padding: 20px;
            margin: 16px 0;
            border-radius: 8px;
            border-left: 4px solid var(--vscode-textLink-foreground);
          }
          .step-number {
            display: inline-block;
            width: 32px;
            height: 32px;
            background: var(--vscode-textLink-foreground);
            color: var(--vscode-textCodeBlock-background);
            border-radius: 50%;
            text-align: center;
            line-height: 32px;
            font-weight: bold;
            margin-right: 12px;
          }
          code {
            background: var(--vscode-textCodeBlock-background);
            padding: 3px 8px;
            border-radius: 4px;
            font-family: 'Courier New', monospace;
          }
          .emoji { font-size: 1.4em; }
        </style>
      </head>
      <body>
        <h1>✨ Super Simple AI Analysis</h1>
        
        <p style="font-size: 18px; color: var(--vscode-textLink-foreground);">
          No complicated JSON! Just 3 easy steps:
        </p>

        <div class="step">
          <span class="step-number">1</span>
          <strong>Open Cursor Chat</strong><br>
          Press <code>Cmd+L</code> (Mac) or <code>Ctrl+L</code> (Windows/Linux)
        </div>

        <div class="step">
          <span class="step-number">2</span>
          <strong>Paste & Send</strong><br>
          Press <code>Cmd+V</code> (or <code>Ctrl+V</code>) to paste the prompt, then press <code>Enter</code>
        </div>

        <div class="step">
          <span class="step-number">3</span>
          <strong>Read AI's Analysis</strong><br>
          That's it! AI will give you a detailed breakdown in plain English.
        </div>

        <h2>💡 What AI Will Tell You:</h2>
        <ul>
          <li>📝 <strong>Summary</strong> - What needs to be done</li>
          <li>⚡ <strong>Complexity</strong> - How hard is this?</li>
          <li>⏱️ <strong>Time Estimate</strong> - How long will it take?</li>
          <li>🔨 <strong>Implementation Steps</strong> - What to do, in order</li>
          <li>📁 <strong>Files to Modify</strong> - Which files to change</li>
          <li>⚠️ <strong>Risks</strong> - What could go wrong</li>
          <li>💡 <strong>Hints</strong> - Helpful tips and gotchas</li>
          <li>🧪 <strong>Test Strategy</strong> - How to test it</li>
        </ul>

        <h2>🎯 Pro Tip:</h2>
        <p>
          Before right-clicking the ticket, <strong>select relevant code</strong> in your file.
          AI will see the code and give more specific advice!
        </p>

        <hr style="margin: 30px 0; border: 1px solid var(--vscode-widget-border);">
        
        <p style="text-align: center; color: var(--vscode-descriptionForeground);">
          <strong>No JSON copying!</strong> Just chat with AI like normal! 🎉
        </p>
      </body>
      </html>
    `;
  }
}

/**
 * Show instructions for updating ticket with AI response
 */
async function showTicketUpdateInstructions(item: any) {
  const instructions = `# 📝 Update Ticket with AI Response

## Steps:

1. **Paste the prompt in Cursor Chat** (Cmd+L or Ctrl+L)
2. **Wait for AI to respond** with JSON
3. **Copy the JSON response** from AI
4. **Run Command:** \`OpenTasks: Update Ticket from AI Response\`
5. **Paste the JSON** when prompted
6. ✅ **Ticket will be automatically updated!**

The ticket will be enhanced with:
- Improved description
- Implementation steps
- File paths and hints
- Complexity estimate
- Test strategy
`;

  const panel = vscode.window.createWebviewPanel(
    'opentasksInstructions',
    'Update Ticket Instructions',
    vscode.ViewColumn.Beside,
    {}
  );

  panel.webview.html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          padding: 20px;
          line-height: 1.6;
          color: var(--vscode-foreground);
          background: var(--vscode-editor-background);
        }
        h1 { color: var(--vscode-textLink-foreground); }
        h2 { color: var(--vscode-textLink-activeForeground); margin-top: 24px; }
        code {
          background: var(--vscode-textCodeBlock-background);
          padding: 2px 6px;
          border-radius: 3px;
          font-family: 'Courier New', monospace;
        }
        ol { margin-left: 20px; }
        li { margin: 8px 0; }
        .emoji { font-size: 1.2em; }
      </style>
    </head>
    <body>
      <h1>📝 Update Ticket with AI Response</h1>
      
      <h2>Steps:</h2>
      <ol>
        <li>📋 <strong>Paste the prompt in Cursor Chat</strong> (Cmd+L or Ctrl+L)</li>
        <li>⏳ <strong>Wait for AI to respond</strong> with JSON structure</li>
        <li>📄 <strong>Copy the JSON response</strong> from AI (everything between the \`\`\`json tags)</li>
        <li>⚡ <strong>Run Command:</strong> <code>OpenTasks: Update Ticket from AI Response</code></li>
        <li>📥 <strong>Paste the JSON</strong> when prompted</li>
        <li>✅ <strong>Ticket will be automatically updated!</strong></li>
      </ol>

      <h2>🎯 What Gets Updated:</h2>
      <ul>
        <li>Enhanced description with technical details</li>
        <li>Implementation steps and approach</li>
        <li>File paths to modify</li>
        <li>Complexity and time estimates</li>
        <li>Helpful hints and gotchas</li>
        <li>Test strategy</li>
      </ul>

      <h2>💡 Pro Tip:</h2>
      <p>Select relevant code in your file before using "Copy & Enhance" for more accurate AI analysis!</p>
    </body>
    </html>
  `;
}

/**
 * Edit ticket inline
 */
async function editTicket(context: vscode.ExtensionContext, item: any) {
  const token = await context.secrets.get(TOKEN_KEY);
  const baseUrl = context.globalState.get<string>(BASE_URL_KEY, 'https://www.opentasks.fr');

  if (!token || !item || !item.ticket) {
    return;
  }

  const ticket = item.ticket;

  // Edit title
  const newTitle = await vscode.window.showInputBox({
    prompt: 'Edit Ticket Title',
    value: ticket.title,
    validateInput: (value) => {
      if (!value.trim()) {
        return 'Title is required';
      }
      return null;
    }
  });

  if (!newTitle) {
    return;
  }

  // Edit description
  const newDescription = await vscode.window.showInputBox({
    prompt: 'Edit Description (optional)',
    value: ticket.description || '',
    placeHolder: 'Ticket description...',
  });

  // Update priority
  const priorities = [
    { label: 'Low', value: 'LOW' },
    { label: 'Medium', value: 'MEDIUM' },
    { label: 'High', value: 'HIGH' },
    { label: 'Urgent', value: 'URGENT' },
  ];

  const currentPriority = priorities.find(p => p.value === ticket.priority);
  const newPriority = await vscode.window.showQuickPick(priorities, {
    placeHolder: 'Select priority',
  });

  vscode.window.showInformationMessage(
    `Ticket editing is currently limited. Please use the web UI for full editing: ${baseUrl}`,
    'Open in Browser'
  ).then((action) => {
    if (action === 'Open in Browser') {
      vscode.env.openExternal(vscode.Uri.parse(item.url));
    }
  });
}

/**
 * Delete ticket
 */
async function deleteTicket(context: vscode.ExtensionContext, item: any) {
  const token = await context.secrets.get(TOKEN_KEY);
  const baseUrl = context.globalState.get<string>(BASE_URL_KEY, 'https://www.opentasks.fr');

  if (!token || !item || !item.ticket) {
    return;
  }

  const ticket = item.ticket;

  const confirm = await vscode.window.showWarningMessage(
    `Are you sure you want to delete "${ticket.title}"?`,
    { modal: true },
    'Delete'
  );

  if (confirm !== 'Delete') {
    return;
  }

  vscode.window.showInformationMessage(
    `Ticket deletion is currently only available through the web UI`,
    'Open in Browser'
  ).then((action) => {
    if (action === 'Open in Browser') {
      vscode.env.openExternal(vscode.Uri.parse(item.url));
    }
  });
}



/**
 * Update ticket from AI response (JSON)
 */
async function updateTicketFromAI(context: vscode.ExtensionContext) {
  const token = await context.secrets.get(TOKEN_KEY);
  const baseUrl = context.globalState.get<string>(BASE_URL_KEY, 'https://www.opentasks.fr');

  if (!token) {
    vscode.window.showErrorMessage('You must sign in first');
    return;
  }

  try {
    // Get the AI response JSON from clipboard or user input
    const clipboardText = await vscode.env.clipboard.readText();
    let initialValue = '';
    
    // Check if clipboard contains JSON
    try {
      JSON.parse(clipboardText);
      initialValue = clipboardText;
    } catch {
      // Not JSON, leave empty
    }

    const jsonInput = await vscode.window.showInputBox({
      prompt: 'Paste the AI JSON response here (or it may be pre-filled from clipboard)',
      value: initialValue,
      placeHolder: '{"analysis": {...}, "implementation": {...}, ...}',
      ignoreFocusOut: true,
      validateInput: (value) => {
        if (!value.trim()) {
          return 'JSON response is required';
        }
        try {
          JSON.parse(value);
          return null;
        } catch {
          return 'Invalid JSON format - make sure you copied the complete JSON from AI';
        }
      }
    });

    if (!jsonInput) {
      return;
    }

    // Parse the AI response
    const aiResponse = JSON.parse(jsonInput);
    
    // Validate structure
    if (!aiResponse.analysis || !aiResponse.implementation || !aiResponse.enhancedDescription) {
      vscode.window.showErrorMessage('Invalid AI response structure. Make sure the JSON includes: analysis, implementation, and enhancedDescription');
      return;
    }

    // Get the client
    const client = new OpenTasksClient(baseUrl, token);
    
    // Get projects
    const projects = await client.getProjects();
    if (projects.length === 0) {
      vscode.window.showWarningMessage('No projects found');
      return;
    }

    // Select project
    const projectItems = projects.map(p => ({
      label: p.name,
      description: p.slug,
      project: p,
    }));

    const selectedProject = await vscode.window.showQuickPick(projectItems, {
      placeHolder: 'Which project is this ticket in?',
    });

    if (!selectedProject) {
      return;
    }

    // Get tickets
    const tickets = await client.getTickets(selectedProject.project.id);
    
    // Select ticket
    const ticketItems = tickets.map(t => ({
      label: t.title,
      description: `#${t.id.slice(-4)} | ${t.status} | ${t.priority}`,
      detail: t.description?.substring(0, 100),
      ticket: t,
    }));

    const selectedTicketItem = await vscode.window.showQuickPick(ticketItems, {
      placeHolder: 'Which ticket should be updated?',
      matchOnDescription: true,
      matchOnDetail: true,
    });

    if (!selectedTicketItem) {
      return;
    }

    const ticket = selectedTicketItem.ticket;

    // Build enhanced description with AI insights
    const enhancedDescription = `${aiResponse.enhancedDescription}

---

## 🤖 AI Analysis

**Summary:** ${aiResponse.analysis.summary}

**Complexity:** ${aiResponse.analysis.complexity}
**Estimated Time:** ${aiResponse.analysis.estimatedTime}

**Risks & Challenges:**
${aiResponse.analysis.risksAndChallenges.map((r: string) => `- ${r}`).join('\n')}

## 🎯 Implementation Approach

${aiResponse.implementation.approach}

**Implementation Steps:**
${aiResponse.implementation.steps.map((s: string, i: number) => `${i + 1}. ${s}`).join('\n')}

**Files to Modify:**
${aiResponse.implementation.filesToModify.map((f: string) => `- \`${f}\``).join('\n')}

${aiResponse.implementation.dependencies && aiResponse.implementation.dependencies.length > 0 ? `**Dependencies:**\n${aiResponse.implementation.dependencies.map((d: string) => `- ${d}`).join('\n')}\n` : ''}

## 💡 Context & Hints

${aiResponse.context.hints.map((h: string) => `- ${h}`).join('\n')}

**Test Strategy:**
${aiResponse.context.testStrategy}

${aiResponse.context.relatedFiles && aiResponse.context.relatedFiles.length > 0 ? `\n**Related Files:**\n${aiResponse.context.relatedFiles.map((f: string) => `- \`${f}\``).join('\n')}` : ''}

---
*✨ Enhanced by Cursor AI via OpenTasks Extension*`;

    // Copy to clipboard
    await vscode.env.clipboard.writeText(enhancedDescription);

    // Show success with options
    const action = await vscode.window.showInformationMessage(
      `✅ Enhanced description created for "${ticket.title}"!\n\n` +
      `The enhanced description has been copied to your clipboard.\n` +
      `You can now paste it when editing the ticket.`,
      'Open Ticket in Browser',
      'Show Preview'
    );

    if (action === 'Open Ticket in Browser') {
      const url = `${baseUrl}/project/${selectedProject.project.id}/board`;
      vscode.env.openExternal(vscode.Uri.parse(url));
    } else if (action === 'Show Preview') {
      // Create preview panel
      const panel = vscode.window.createWebviewPanel(
        'ticketPreview',
        `Preview: ${ticket.title}`,
        vscode.ViewColumn.Beside,
        {}
      );

      panel.webview.html = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              padding: 20px;
              line-height: 1.6;
              color: #e5e7eb;
              background: #1e1e1e;
              max-width: 900px;
              margin: 0 auto;
            }
            h1 { color: #a78bfa; border-bottom: 2px solid #a78bfa; padding-bottom: 10px; }
            h2 { color: #60a5fa; margin-top: 24px; }
            code {
              background: #374151;
              padding: 2px 6px;
              border-radius: 3px;
              font-family: 'Courier New', monospace;
              color: #fbbf24;
            }
            .badge {
              display: inline-block;
              padding: 4px 12px;
              border-radius: 12px;
              font-size: 13px;
              font-weight: 600;
              margin: 4px;
            }
            .complexity-CRITICAL { background: #dc2626; color: white; }
            .complexity-HIGH { background: #f87171; color: white; }
            .complexity-MEDIUM { background: #fbbf24; color: #000; }
            .complexity-LOW { background: #34d399; color: #000; }
            ul, ol { margin-left: 20px; }
            li { margin: 8px 0; }
            hr { border: 1px solid #374151; margin: 24px 0; }
          </style>
        </head>
        <body>
          <h1>📋 ${ticket.title}</h1>
          <div style="margin: 16px 0;">
            <span class="badge complexity-${aiResponse.analysis.complexity}">${aiResponse.analysis.complexity}</span>
            <span class="badge" style="background: #6366f1; color: white;">⏱️ ${aiResponse.analysis.estimatedTime}</span>
            <span class="badge" style="background: #8b5cf6; color: white;">${ticket.priority}</span>
          </div>
          <div style="white-space: pre-wrap;">${enhancedDescription.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
        </body>
        </html>
      `;
    }

  } catch (error) {
    vscode.window.showErrorMessage(`Failed to process AI response: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

