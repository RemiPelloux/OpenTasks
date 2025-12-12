/**
 * OpenTasks API Client
 * Handles all communication with the OpenTasks server
 */

export interface ApiUser {
  id: string;
  email: string;
  name: string;
  role: string;
}

export interface Project {
  id: string;
  name: string;
  slug: string;
  description?: string;
  defaultBranch?: string;
  role: string;
  updatedAt: string;
}

export interface Ticket {
  id: string;
  title: string;
  description?: string;
  status: string;
  priority: string;
  position: number;
  targetBranch?: string;
  aiSummary?: string;
  prLink?: string;
  agentStatus?: string;
  agentBranch?: string;
  assigneeId?: string;
  assignee?: {
    id: string;
    name: string;
    email: string;
  };
  createdBy: {
    id: string;
    name: string;
    email: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface CreateTicketRequest {
  title: string;
  description?: string;
  status?: string;
  targetBranch?: string;
  priority?: string;
}

export class OpenTasksClient {
  constructor(
    private baseUrl: string,
    private token: string
  ) {}

  private async request<T>(
    path: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${path}`;
    const headers = {
      'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'application/json',
      ...options.headers,
    };

    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      let errorMessage = `HTTP ${response.status}`;
      try {
        const errorData = await response.json();
        errorMessage = errorData.message || errorData.error || errorMessage;
      } catch {
        // Ignore JSON parse error
      }
      throw new Error(errorMessage);
    }

    return response.json();
  }

  async getCurrentUser(): Promise<ApiUser> {
    const data = await this.request<{ user: ApiUser }>('/api/ext/me');
    return data.user;
  }

  async getProjects(): Promise<Project[]> {
    const data = await this.request<{ projects: Project[] }>('/api/ext/projects');
    return data.projects;
  }

  async getTickets(projectId: string, status?: string): Promise<Ticket[]> {
    const query = status ? `?status=${encodeURIComponent(status)}` : '';
    const data = await this.request<{ tickets: Ticket[] }>(
      `/api/ext/projects/${projectId}/tickets${query}`
    );
    return data.tickets;
  }

  async createTicket(
    projectId: string,
    ticket: CreateTicketRequest
  ): Promise<Ticket> {
    const data = await this.request<{ ticket: Ticket }>(
      `/api/ext/projects/${projectId}/tickets`,
      {
        method: 'POST',
        body: JSON.stringify(ticket),
      }
    );
    return data.ticket;
  }

  async updateTicketStatus(
    projectId: string,
    ticketId: string,
    status: string
  ): Promise<Ticket> {
    const data = await this.request<{ ticket: Ticket }>(
      `/api/ext/projects/${projectId}/tickets/${ticketId}/status`,
      {
        method: 'PATCH',
        body: JSON.stringify({ status }),
      }
    );
    return data.ticket;
  }
}



