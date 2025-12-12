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
      await copyEnhancedTicket(context, item);
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

  context.subscriptions.push(
    vscode.commands.registerCommand('opentasks.updateFromAI', async () => {
      await updateTicketFromAI(context);
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
 * This creates a smart prompt for Cursor AI to analyze and enhance the ticket
 */
async function copyEnhancedTicket(context: vscode.ExtensionContext, item: any) {
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

${selectedCode ? `**Selected Code:**\n\`\`\`${document.languageId}\n${selectedCode}\n\`\`\`` : '**Note:** No code selected - consider selecting relevant code for better analysis'}
`;
  }

  // Get workspace info
  let workspaceInfo = '';
  if (workspaceFolders && workspaceFolders.length > 0) {
    workspaceInfo = `
## 🗂️ Workspace Context
**Root Path:** \`${workspaceFolders[0].uri.fsPath}\`
**Project:** ${workspaceFolders[0].name}
`;
  }

  // Create the AI prompt with ticket info and context
  const aiPrompt = `# 🎫 Ticket Analysis & Enhancement Request

## 📋 Ticket Details
**ID:** ${ticket.id}
**Title:** ${ticket.title}
**Priority:** ${ticket.priority}
**Status:** ${ticket.status}

**Description:**
${ticket.description || 'No description provided'}

${ticket.aiSummary ? `**Previous AI Summary:**\n${ticket.aiSummary}\n` : ''}

${fileContext}

${workspaceInfo}

---

## 🤖 AI Task: Analyze and Enhance This Ticket

Please analyze the ticket above and provide a structured response in the following JSON format:

\`\`\`json
{
  "analysis": {
    "summary": "Brief summary of what needs to be done (2-3 sentences)",
    "complexity": "LOW | MEDIUM | HIGH | CRITICAL",
    "estimatedTime": "e.g., 2 hours, 1 day, etc.",
    "risksAndChallenges": ["List any potential risks or challenges"]
  },
  "implementation": {
    "approach": "Recommended approach to solve this",
    "steps": [
      "Step 1: ...",
      "Step 2: ...",
      "Step 3: ..."
    ],
    "filesToModify": [
      "${filePath ? filePath : '/path/to/file1.ts'}",
      "/path/to/file2.ts"
    ],
    "dependencies": ["Any dependencies or prerequisites"]
  },
  "context": {
    "relatedFiles": ["Files that might be affected"],
    "testStrategy": "How to test this change",
    "hints": [
      "Helpful hint 1",
      "Helpful hint 2"
    ]
  },
  "enhancedDescription": "A detailed, improved description for the ticket that includes technical details, context, and implementation notes"
}
\`\`\`

**Additional Instructions:**
1. If code is selected above, analyze it for potential issues or improvements
2. Consider the file path and workspace context in your recommendations
3. Be specific about which files need to be modified
4. Include practical hints and gotchas
5. The enhancedDescription should be suitable for updating the ticket

**After you provide the JSON response, I'll automatically update the ticket with your insights!**
`;

  // Copy to clipboard
  await vscode.env.clipboard.writeText(aiPrompt);
  
  // Show instruction to user
  const action = await vscode.window.showInformationMessage(
    '✨ Enhanced prompt copied! Now paste it in Cursor Chat (Cmd+L or Ctrl+L).',
    'Open Cursor Chat',
    'Open JSON Paste Panel'
  );

  if (action === 'Open Cursor Chat') {
    // Open Cursor chat
    vscode.commands.executeCommand('workbench.action.chat.open');
  } else if (action === 'Open JSON Paste Panel') {
    // Open the JSON paste panel immediately
    await showJsonPastePanel(context, item);
  }
}

/**
 * Show JSON paste panel for easy ticket updating
 */
async function showJsonPastePanel(context: vscode.ExtensionContext, ticketItem: any) {
  const panel = vscode.window.createWebviewPanel(
    'opentasksJsonPaste',
    '📋 Paste AI Response',
    vscode.ViewColumn.Beside,
    {
      enableScripts: true,
      retainContextWhenHidden: true
    }
  );

  panel.webview.html = getJsonPasteHtml();

  // Handle messages from the webview
  panel.webview.onDidReceiveMessage(
    async (message) => {
      switch (message.command) {
        case 'updateTicket':
          await processAIResponse(context, message.json, ticketItem);
          panel.dispose();
          break;
        case 'cancel':
          panel.dispose();
          break;
      }
    },
    undefined,
    context.subscriptions
  );
}

/**
 * Get HTML for JSON paste panel
 */
function getJsonPasteHtml(): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          padding: 24px;
          background: var(--vscode-editor-background);
          color: var(--vscode-editor-foreground);
          line-height: 1.6;
        }
        .container {
          max-width: 800px;
          margin: 0 auto;
        }
        h1 {
          color: var(--vscode-textLink-foreground);
          margin-bottom: 8px;
          font-size: 24px;
        }
        .subtitle {
          color: var(--vscode-descriptionForeground);
          margin-bottom: 24px;
          font-size: 14px;
        }
        .steps {
          background: var(--vscode-textBlockQuote-background);
          border-left: 4px solid var(--vscode-textLink-foreground);
          padding: 16px;
          margin-bottom: 24px;
          border-radius: 4px;
        }
        .steps h3 {
          color: var(--vscode-textLink-foreground);
          margin-bottom: 12px;
          font-size: 16px;
        }
        .steps ol {
          margin-left: 20px;
        }
        .steps li {
          margin: 8px 0;
          color: var(--vscode-foreground);
        }
        .steps code {
          background: var(--vscode-textCodeBlock-background);
          padding: 2px 6px;
          border-radius: 3px;
          font-family: 'Courier New', monospace;
          color: var(--vscode-textPreformat-foreground);
        }
        label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: var(--vscode-foreground);
        }
        textarea {
          width: 100%;
          min-height: 300px;
          padding: 12px;
          border: 1px solid var(--vscode-input-border);
          background: var(--vscode-input-background);
          color: var(--vscode-input-foreground);
          border-radius: 4px;
          font-family: 'Courier New', monospace;
          font-size: 13px;
          resize: vertical;
          margin-bottom: 16px;
        }
        textarea:focus {
          outline: 1px solid var(--vscode-focusBorder);
        }
        textarea::placeholder {
          color: var(--vscode-input-placeholderForeground);
        }
        .button-group {
          display: flex;
          gap: 12px;
          margin-top: 16px;
        }
        button {
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-primary {
          background: var(--vscode-button-background);
          color: var(--vscode-button-foreground);
          flex: 1;
        }
        .btn-primary:hover {
          background: var(--vscode-button-hoverBackground);
        }
        .btn-primary:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .btn-secondary {
          background: var(--vscode-button-secondaryBackground);
          color: var(--vscode-button-secondaryForeground);
        }
        .btn-secondary:hover {
          background: var(--vscode-button-secondaryHoverBackground);
        }
        .error {
          color: var(--vscode-errorForeground);
          background: var(--vscode-inputValidation-errorBackground);
          border: 1px solid var(--vscode-inputValidation-errorBorder);
          padding: 12px;
          border-radius: 4px;
          margin-bottom: 16px;
          display: none;
        }
        .success {
          color: #4ade80;
          margin-top: 8px;
          display: none;
        }
        .emoji {
          font-size: 1.2em;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1><span class="emoji">🤖</span> Paste AI Response Here</h1>
        <p class="subtitle">Copy the JSON response from Cursor Chat and paste it below</p>

        <div class="steps">
          <h3>📝 How to get the JSON:</h3>
          <ol>
            <li>Open Cursor Chat (<code>Cmd+L</code> or <code>Ctrl+L</code>)</li>
            <li>Paste the prompt that was copied</li>
            <li>Wait for AI to respond with JSON</li>
            <li>Copy <strong>only the JSON</strong> (everything between <code>\`\`\`json</code> and <code>\`\`\`</code>)</li>
            <li>Paste it in the box below</li>
          </ol>
        </div>

        <div id="error" class="error"></div>

        <label for="jsonInput">
          AI JSON Response:
          <span class="success" id="validJson">✓ Valid JSON</span>
        </label>
        <textarea 
          id="jsonInput" 
          placeholder='{
  "analysis": {
    "summary": "...",
    "complexity": "MEDIUM",
    "estimatedTime": "2 hours",
    "risksAndChallenges": [...]
  },
  "implementation": {
    "approach": "...",
    "steps": [...],
    "filesToModify": [...],
    "dependencies": [...]
  },
  "context": {
    "hints": [...],
    "testStrategy": "...",
    "relatedFiles": [...]
  },
  "enhancedDescription": "..."
}'
        ></textarea>

        <div class="button-group">
          <button class="btn-secondary" onclick="cancel()">Cancel</button>
          <button class="btn-primary" id="updateBtn" onclick="updateTicket()" disabled>
            <span class="emoji">✨</span> Update Ticket
          </button>
        </div>
      </div>

      <script>
        const vscode = acquireVsCodeApi();
        const textarea = document.getElementById('jsonInput');
        const updateBtn = document.getElementById('updateBtn');
        const errorDiv = document.getElementById('error');
        const successSpan = document.getElementById('validJson');

        // Auto-check clipboard on load
        navigator.clipboard.readText().then(text => {
          try {
            const parsed = JSON.parse(text);
            if (parsed.analysis && parsed.implementation && parsed.enhancedDescription) {
              textarea.value = text;
              validateJSON();
            }
          } catch (e) {
            // Not JSON, that's fine
          }
        }).catch(() => {
          // Clipboard access denied, that's fine
        });

        // Validate JSON as user types
        textarea.addEventListener('input', validateJSON);

        function validateJSON() {
          const value = textarea.value.trim();
          errorDiv.style.display = 'none';
          successSpan.style.display = 'none';
          updateBtn.disabled = true;

          if (!value) {
            return;
          }

          try {
            const json = JSON.parse(value);
            
            // Validate structure
            if (!json.analysis || !json.implementation || !json.enhancedDescription) {
              throw new Error('Missing required fields: analysis, implementation, or enhancedDescription');
            }

            // Valid!
            successSpan.style.display = 'inline';
            updateBtn.disabled = false;
          } catch (e) {
            errorDiv.textContent = '❌ ' + e.message;
            errorDiv.style.display = 'block';
          }
        }

        function updateTicket() {
          const value = textarea.value.trim();
          try {
            const json = JSON.parse(value);
            vscode.postMessage({
              command: 'updateTicket',
              json: json
            });
          } catch (e) {
            errorDiv.textContent = '❌ Invalid JSON: ' + e.message;
            errorDiv.style.display = 'block';
          }
        }

        function cancel() {
          vscode.postMessage({ command: 'cancel' });
        }

        // Keyboard shortcut: Cmd+Enter or Ctrl+Enter to update
        textarea.addEventListener('keydown', (e) => {
          if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
            if (!updateBtn.disabled) {
              updateTicket();
            }
          }
        });
      </script>
    </body>
    </html>
  `;
}

/**
 * Process AI response and update ticket
 */
async function processAIResponse(context: vscode.ExtensionContext, aiResponse: any, ticketItem: any) {
  const token = await context.secrets.get(TOKEN_KEY);
  const baseUrl = context.globalState.get<string>(BASE_URL_KEY, 'https://www.opentasks.fr');

  if (!token || !ticketItem || !ticketItem.ticket) {
    vscode.window.showErrorMessage('Missing authentication or ticket information');
    return;
  }

  try {
    const ticket = ticketItem.ticket;
    const projectId = ticketItem.projectId;

    // Build enhanced description
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

    // Show success
    const action = await vscode.window.showInformationMessage(
      `✅ Enhanced description created for "${ticket.title}"!\n\n` +
      `Complexity: ${aiResponse.analysis.complexity} | Time: ${aiResponse.analysis.estimatedTime}\n\n` +
      `The enhanced description has been copied to your clipboard.`,
      'Open in Browser',
      'Show Preview'
    );

    if (action === 'Open in Browser') {
      const url = `${baseUrl}/project/${projectId}/board`;
      vscode.env.openExternal(vscode.Uri.parse(url));
    } else if (action === 'Show Preview') {
      showPreviewPanel(ticket, aiResponse, enhancedDescription);
    }

    // Refresh tree
    await treeProvider?.refresh();

  } catch (error) {
    vscode.window.showErrorMessage(`Failed to process: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Show preview panel
 */
function showPreviewPanel(ticket: any, aiResponse: any, enhancedDescription: string) {
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
          padding: 32px;
          line-height: 1.6;
          color: #e5e7eb;
          background: #1e1e1e;
          max-width: 900px;
          margin: 0 auto;
        }
        h1 { 
          color: #a78bfa; 
          border-bottom: 2px solid #a78bfa; 
          padding-bottom: 12px;
          margin-bottom: 20px;
        }
        h2 { color: #60a5fa; margin-top: 24px; }
        code {
          background: #374151;
          padding: 2px 6px;
          border-radius: 3px;
          font-family: 'Courier New', monospace;
          color: #fbbf24;
        }
        .badges {
          margin: 20px 0;
        }
        .badge {
          display: inline-block;
          padding: 6px 14px;
          border-radius: 14px;
          font-size: 13px;
          font-weight: 600;
          margin: 4px;
        }
        .complexity-CRITICAL { background: #dc2626; color: white; }
        .complexity-HIGH { background: #f87171; color: white; }
        .complexity-MEDIUM { background: #fbbf24; color: #000; }
        .complexity-LOW { background: #34d399; color: #000; }
        ul, ol { margin-left: 24px; }
        li { margin: 10px 0; }
        hr { border: 1px solid #374151; margin: 28px 0; }
        pre {
          background: #374151;
          padding: 16px;
          border-radius: 6px;
          overflow-x: auto;
        }
      </style>
    </head>
    <body>
      <h1>📋 ${ticket.title}</h1>
      <div class="badges">
        <span class="badge complexity-${aiResponse.analysis.complexity}">${aiResponse.analysis.complexity}</span>
        <span class="badge" style="background: #6366f1; color: white;">⏱️ ${aiResponse.analysis.estimatedTime}</span>
        <span class="badge" style="background: #8b5cf6; color: white;">${ticket.priority}</span>
      </div>
      <pre style="white-space: pre-wrap; word-wrap: break-word;">${enhancedDescription.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
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

