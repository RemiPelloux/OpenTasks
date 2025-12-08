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
  | 'IN_PROGRESS'
  | 'DONE'
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
  description?: string;
  status: ColumnId;
  priority: Priority;
  position: number;
  targetBranch?: string;
  aiSummary?: string;
  prLink?: string;
  agentId?: string;
  assignee?: User;
  assigneeId?: string;
  createdBy?: User;
  createdById: string;
  projectId: string;
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
