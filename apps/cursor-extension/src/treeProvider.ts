/**
 * OpenTasks Tree Provider
 * Displays projects, columns, and tickets in VS Code sidebar
 */

import * as vscode from 'vscode';
import { OpenTasksClient, Project, Ticket } from './api';

const TOKEN_KEY = 'opentasks.token';
const BASE_URL_KEY = 'opentasks.baseUrl';

type TreeItem = ProjectItem | ColumnItem | TicketItem;

class ProjectItem extends vscode.TreeItem {
  constructor(
    public readonly project: Project,
    public readonly baseUrl: string
  ) {
    super(project.name, vscode.TreeItemCollapsibleState.Collapsed);
    this.description = project.slug;
    this.tooltip = project.description || project.name;
    this.contextValue = 'project';
    this.iconPath = new vscode.ThemeIcon('folder');
  }
}

class ColumnItem extends vscode.TreeItem {
  constructor(
    public readonly columnId: string,
    public readonly columnName: string,
    public readonly projectId: string,
    public readonly ticketCount: number,
    public readonly baseUrl: string
  ) {
    super(columnName, vscode.TreeItemCollapsibleState.Collapsed);
    this.description = `${ticketCount}`;
    this.contextValue = 'column';
    this.iconPath = this.getIconForColumn(columnId);
  }

  private getIconForColumn(columnId: string): vscode.ThemeIcon {
    switch (columnId) {
      case 'BACKLOG':
        return new vscode.ThemeIcon('inbox');
      case 'TODO':
        return new vscode.ThemeIcon('checklist');
      case 'HANDLE':
        return new vscode.ThemeIcon('robot');
      case 'AI_PROCESSING':
        return new vscode.ThemeIcon('loading~spin');
      case 'TO_REVIEW':
        return new vscode.ThemeIcon('eye');
      case 'DONE':
        return new vscode.ThemeIcon('check');
      case 'CANCELLED':
        return new vscode.ThemeIcon('x');
      default:
        return new vscode.ThemeIcon('circle-outline');
    }
  }
}

class TicketItem extends vscode.TreeItem {
  public url: string;

  constructor(
    public readonly ticket: Ticket,
    public readonly projectId: string,
    public readonly baseUrl: string
  ) {
    super(ticket.title, vscode.TreeItemCollapsibleState.None);

    this.url = `${baseUrl}/project/${projectId}/board`;
    
    // Description shows priority and ID
    const priorityIcon = this.getPriorityIcon(ticket.priority);
    this.description = `${priorityIcon} #${ticket.id.slice(-4)}`;

    this.tooltip = this.buildTooltip();
    this.contextValue = 'ticket';
    this.iconPath = this.getIconForTicket();

    // Command to open in browser
    this.command = {
      command: 'opentasks.openInBrowser',
      title: 'Open in Browser',
      arguments: [this],
    };
  }

  private getIconForTicket(): vscode.ThemeIcon {
    if (this.ticket.prLink) {
      return new vscode.ThemeIcon('git-pull-request', new vscode.ThemeColor('charts.green'));
    }
    if (this.ticket.agentStatus === 'RUNNING') {
      return new vscode.ThemeIcon('loading~spin', new vscode.ThemeColor('charts.blue'));
    }
    if (this.ticket.aiSummary?.includes('failed') || this.ticket.aiSummary?.includes('error')) {
      return new vscode.ThemeIcon('error', new vscode.ThemeColor('charts.red'));
    }
    return new vscode.ThemeIcon('circle-outline');
  }

  private getPriorityIcon(priority: string): string {
    switch (priority) {
      case 'URGENT':
        return '🔴';
      case 'HIGH':
        return '🟠';
      case 'MEDIUM':
        return '🟡';
      case 'LOW':
        return '🟢';
      default:
        return '⚪';
    }
  }

  private buildTooltip(): vscode.MarkdownString {
    const tooltip = new vscode.MarkdownString();
    tooltip.isTrusted = true;

    tooltip.appendMarkdown(`### ${this.ticket.title}\n\n`);

    if (this.ticket.description) {
      tooltip.appendMarkdown(`${this.ticket.description}\n\n`);
    }

    tooltip.appendMarkdown(`---\n\n`);
    tooltip.appendMarkdown(`**Status:** ${this.ticket.status}  \n`);
    tooltip.appendMarkdown(`**Priority:** ${this.ticket.priority}  \n`);

    if (this.ticket.assignee) {
      tooltip.appendMarkdown(`**Assigned to:** ${this.ticket.assignee.name}  \n`);
    }

    if (this.ticket.aiSummary) {
      tooltip.appendMarkdown(`\n**AI Summary:**\n> ${this.ticket.aiSummary}\n\n`);
    }

    if (this.ticket.prLink) {
      tooltip.appendMarkdown(`\n[View Pull Request](${this.ticket.prLink})\n`);
    }

    return tooltip;
  }
}

export class ProjectsTreeProvider implements vscode.TreeDataProvider<TreeItem> {
  private _onDidChangeTreeData = new vscode.EventEmitter<TreeItem | undefined | void>();
  readonly onDidChangeTreeData = this._onDidChangeTreeData.event;

  private projects: Project[] = [];
  private ticketsByProject = new Map<string, Ticket[]>();

  constructor(private context: vscode.ExtensionContext) {}

  async refresh(): Promise<void> {
    const token = await this.context.secrets.get(TOKEN_KEY);
    const baseUrl = this.context.globalState.get<string>(
      BASE_URL_KEY,
      'https://www.opentasks.fr'
    );

    if (!token) {
      this.projects = [];
      this.ticketsByProject.clear();
      this._onDidChangeTreeData.fire();
      return;
    }

    try {
      const client = new OpenTasksClient(baseUrl, token);

      // Fetch projects
      this.projects = await client.getProjects();

      // Fetch tickets for each project
      this.ticketsByProject.clear();
      await Promise.all(
        this.projects.map(async (project) => {
          try {
            const tickets = await client.getTickets(project.id);
            this.ticketsByProject.set(project.id, tickets);
          } catch (error) {
            console.error(`Failed to fetch tickets for project ${project.id}:`, error);
          }
        })
      );

      this._onDidChangeTreeData.fire();
    } catch (error) {
      console.error('Failed to refresh projects:', error);
      vscode.window.showErrorMessage(
        `Failed to refresh: ${error instanceof Error ? error.message : 'Unknown error'}`
      );
    }
  }

  getTreeItem(element: TreeItem): vscode.TreeItem {
    return element;
  }

  async getChildren(element?: TreeItem): Promise<TreeItem[]> {
    const token = await this.context.secrets.get(TOKEN_KEY);
    const baseUrl = this.context.globalState.get<string>(
      BASE_URL_KEY,
      'https://www.opentasks.fr'
    );

    if (!token) {
      return [];
    }

    // Root level: show projects
    if (!element) {
      return this.projects.map((project) => new ProjectItem(project, baseUrl));
    }

    // Project level: show columns
    if (element instanceof ProjectItem) {
      const tickets = this.ticketsByProject.get(element.project.id) || [];
      const columns = this.getColumnsWithCounts(tickets);

      return columns.map(
        (col) =>
          new ColumnItem(
            col.id,
            col.name,
            element.project.id,
            col.count,
            baseUrl
          )
      );
    }

    // Column level: show tickets
    if (element instanceof ColumnItem) {
      const tickets = this.ticketsByProject.get(element.projectId) || [];
      const columnTickets = tickets.filter((t) => t.status === element.columnId);

      return columnTickets.map(
        (ticket) => new TicketItem(ticket, element.projectId, baseUrl)
      );
    }

    return [];
  }

  private getColumnsWithCounts(tickets: Ticket[]): Array<{ id: string; name: string; count: number }> {
    const columns = [
      { id: 'BACKLOG', name: 'Backlog' },
      { id: 'TODO', name: 'To Do' },
      { id: 'HANDLE', name: 'Handle' },
      { id: 'AI_PROCESSING', name: 'AI Processing' },
      { id: 'TO_REVIEW', name: 'To Review' },
      { id: 'DONE', name: 'Done' },
      { id: 'CANCELLED', name: 'Cancelled' },
    ];

    return columns.map((col) => ({
      ...col,
      count: tickets.filter((t) => t.status === col.id).length,
    }));
  }
}



