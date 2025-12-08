/**
 * Cursor Cloud Agent API Client
 * Handles communication with the Cursor Cloud API
 */

import { config } from '../config.js';

interface LaunchAgentRequest {
  prompt: {
    text: string;
    images?: string[];
  };
  model?: string;
  source: {
    repository: string;
    ref?: string;
  };
  target?: {
    autoCreatePr?: boolean;
    openAsCursorGithubApp?: boolean;
    skipReviewerRequest?: boolean;
    branchName?: string;
  };
  webhook?: {
    url: string;
    secret?: string;
  };
}

interface AgentResponse {
  id: string;
  status: 'pending' | 'running' | 'completed' | 'failed' | 'stopped';
}

interface AgentStatusResponse {
  id: string;
  status: 'pending' | 'running' | 'completed' | 'failed' | 'stopped';
  result?: {
    prUrl?: string;
    summary?: string;
    filesChanged?: number;
  };
  error?: string;
}

interface WaitOptions {
  maxAttempts?: number;
  initialDelayMs?: number;
  maxDelayMs?: number;
  onStatusUpdate?: (status: AgentStatusResponse) => Promise<void> | void;
}

export class CursorApiClient {
  private readonly apiKey: string;
  private readonly baseUrl: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.baseUrl = config.cursor.apiBaseUrl;
  }

  /**
   * Get authorization header for API requests
   */
  private getAuthHeader(): string {
    // Cursor API uses Basic auth with the API key
    const credentials = Buffer.from(`${this.apiKey}:`).toString('base64');
    return `Basic ${credentials}`;
  }

  /**
   * Make an API request
   */
  private async request<T>(
    method: string,
    endpoint: string,
    body?: unknown
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;

    const response = await fetch(url, {
      method,
      headers: {
        'Authorization': this.getAuthHeader(),
        'Content-Type': 'application/json',
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Cursor API error (${response.status}): ${errorText}`
      );
    }

    return response.json() as Promise<T>;
  }

  /**
   * Launch a new Cursor Cloud Agent
   */
  async launchAgent(request: LaunchAgentRequest): Promise<AgentResponse> {
    return this.request<AgentResponse>('POST', '/v0/agents', request);
  }

  /**
   * Get agent status
   */
  async getAgentStatus(agentId: string): Promise<AgentStatusResponse> {
    return this.request<AgentStatusResponse>('GET', `/v0/agents/${agentId}`);
  }

  /**
   * Stop a running agent
   */
  async stopAgent(agentId: string): Promise<void> {
    await this.request('POST', `/v0/agents/${agentId}/stop`);
  }

  /**
   * Delete an agent
   */
  async deleteAgent(agentId: string): Promise<void> {
    await this.request('DELETE', `/v0/agents/${agentId}`);
  }

  /**
   * Add a follow-up instruction to an agent
   */
  async addFollowUp(
    agentId: string,
    prompt: { text: string; images?: string[] }
  ): Promise<void> {
    await this.request('POST', `/v0/agents/${agentId}/follow-up`, { prompt });
  }

  /**
   * Wait for agent completion with exponential backoff
   */
  async waitForCompletion(
    agentId: string,
    options: WaitOptions = {}
  ): Promise<AgentStatusResponse & { prUrl?: string; summary?: string }> {
    const {
      maxAttempts = 60,
      initialDelayMs = 5000,
      maxDelayMs = 30000,
      onStatusUpdate,
    } = options;

    let attempt = 0;
    let delay = initialDelayMs;

    while (attempt < maxAttempts) {
      attempt++;

      const status = await this.getAgentStatus(agentId);

      if (onStatusUpdate) {
        await onStatusUpdate(status);
      }

      // Check for terminal states
      if (['completed', 'failed', 'stopped'].includes(status.status)) {
        return {
          ...status,
          prUrl: status.result?.prUrl,
          summary: status.result?.summary,
        };
      }

      // Wait before next poll
      await this.sleep(delay);

      // Exponential backoff
      delay = Math.min(delay * 1.5, maxDelayMs);
    }

    throw new Error(`Agent did not complete within ${maxAttempts} attempts`);
  }

  /**
   * List available models
   */
  async listModels(): Promise<{ models: string[] }> {
    return this.request<{ models: string[] }>('GET', '/v0/models');
  }

  /**
   * Get API key info
   */
  async getApiKeyInfo(): Promise<{
    id: string;
    name: string;
    createdAt: string;
  }> {
    return this.request('GET', '/v0/api-key');
  }

  /**
   * List accessible GitHub repositories
   */
  async listRepositories(): Promise<{
    repositories: Array<{ url: string; name: string }>;
  }> {
    return this.request('GET', '/v0/repositories');
  }

  private sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

