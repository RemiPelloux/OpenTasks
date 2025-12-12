# OpenTasks Cursor Extension

Manage your OpenTasks tickets directly from Cursor IDE.

## Features

- **Create Tickets**: Create tickets in any project directly from the command palette
- **Live Sync**: See your projects, columns, and tickets in real-time
- **Tree View**: Browse all projects, columns, and tickets in the sidebar
- **Quick Access**: Click any ticket to open it in the browser
- **Status Updates**: See ticket priorities, assignees, and AI status at a glance

## Getting Started

### 1. Generate an API Token

1. Open OpenTasks in your browser: https://www.opentasks.fr
2. Go to Settings
3. Scroll to "API Tokens" section
4. Click "Generate Token"
5. Give it a name (e.g., "Cursor Extension")
6. Copy the token (it will only be shown once!)

### 2. Sign In

1. Open Cursor
2. Look for the OpenTasks icon in the activity bar (left sidebar)
3. Click "Sign In"
4. Paste your API token when prompted

### 3. Create Your First Ticket

1. Click the "+" icon in the OpenTasks sidebar
2. Or run command: `OpenTasks: Create Ticket`
3. Select a project
4. Enter ticket title and description
5. Choose where to place it: Backlog, To Do, or Handle (AI Agent)

## Commands

- `OpenTasks: Sign In` - Authenticate with your API token
- `OpenTasks: Sign Out` - Sign out and clear credentials
- `OpenTasks: Create Ticket` - Create a new ticket
- `OpenTasks: Refresh` - Manually refresh the ticket list

## Settings

- `opentasks.baseUrl` - Base URL of your OpenTasks instance (default: `https://www.opentasks.fr`)
- `opentasks.refreshInterval` - Auto-refresh interval in seconds (default: 10, set to 0 to disable)

## Development

### Prerequisites

- Node.js 20+
- pnpm

### Build

```bash
cd apps/cursor-extension
pnpm install
pnpm run build
```

### Package

```bash
pnpm run package
```

This creates a `.vsix` file that can be installed manually in VS Code/Cursor.

### Install Locally

1. Build the extension: `pnpm run build`
2. Package it: `pnpm run package`
3. In Cursor: View → Extensions
4. Click "..." → Install from VSIX
5. Select the generated `.vsix` file

## License

Same as OpenTasks project.



