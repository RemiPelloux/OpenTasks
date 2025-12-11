/**
 * Type Definitions for Kanban Board
 */

export type Priority = 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';

export type ColumnId =
  | 'BACKLOG'
  | 'TODO'
  | 'HANDLE'
  | 'AI_PROCESSING'
  | 'TO_REVIEW'
  | 'DONE'
  | 'CANCELLED';

export type AgentStatus = 
  | 'QUEUED'
  | 'RUNNING'
  | 'FINISHED'
  | 'ERROR'
  | 'CANCELLED';

export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
}

export interface Ticket {
  id: string;
  title: string;
  description?: string | null;
  status: ColumnId;
  priority: Priority;
  position: number;
  targetBranch?: string | null;
  aiSummary?: string | null;
  prLink?: string | null;
  agentId?: string | null;
  agentStatus?: AgentStatus | null;
  agentBranch?: string | null;
  aiModel?: string | null;
  assignee?: User | null;
  assigneeId?: string | null;
  createdBy?: User | null;
  createdById: string;
  projectId: string;
  isArchived?: boolean;
  archivedAt?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface BranchPreset {
  name: string;
  branch: string;
}

export interface Column {
  id: ColumnId;
  title: string;
  icon: string;
  tickets: Ticket[];
}

export interface BoardState {
  projectId: string;
  projectName: string;
  tickets: Ticket[];
  members: User[];
  branchPresets: BranchPreset[];
  defaultBranch: string;
}

// Agent API Response Types
export interface AgentSource {
  repository: string;
  ref: string;
}

export interface AgentTarget {
  branchName?: string;
  url?: string;
  prUrl?: string;
  autoCreatePr?: boolean;
}

export interface AgentStatusResponse {
  id: string;
  name: string;
  status: AgentStatus;
  source?: AgentSource;
  target?: AgentTarget;
  summary?: string;
  createdAt: string;
}

export interface AgentMessage {
  id: string;
  type: 'user_message' | 'assistant_message';
  text: string;
}

export interface AgentConversationResponse {
  id: string;
  messages: AgentMessage[];
}
