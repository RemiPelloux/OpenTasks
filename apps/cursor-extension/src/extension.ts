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
 * Copy ticket with enhanced context (file paths, workspace info)
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
  if (activeEditor) {
    const document = activeEditor.document;
    const selection = activeEditor.selection;
    const selectedText = document.getText(selection);

    fileContext = `
## Current File Context
**File:** ${document.fileName}
**Language:** ${document.languageId}
${selectedText ? `**Selected Code:**\n\`\`\`${document.languageId}\n${selectedText}\n\`\`\`` : ''}
`;
  }

  // Get workspace info
  let workspaceInfo = '';
  if (workspaceFolders && workspaceFolders.length > 0) {
    workspaceInfo = `
## Workspace
**Path:** ${workspaceFolders[0].uri.fsPath}
**Name:** ${workspaceFolders[0].name}
`;
  }

  const enhancedText = `# ${ticket.title}

**Priority:** ${ticket.priority}
**Status:** ${ticket.status}
**ID:** ${ticket.id}

## Description
${ticket.description || 'No description'}

${fileContext}

${workspaceInfo}

${ticket.aiSummary ? `## AI Summary\n${ticket.aiSummary}` : ''}

---
*Enhanced ticket details with context from Cursor IDE*
`;

  await vscode.env.clipboard.writeText(enhancedText);
  vscode.window.showInformationMessage('Enhanced ticket details copied to clipboard! 🚀');
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

