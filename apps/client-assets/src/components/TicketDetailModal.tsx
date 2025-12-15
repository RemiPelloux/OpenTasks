/**
 * Ticket Detail Modal Component
 * View and edit ticket details with AI status
 */

import { useState, useCallback } from 'react';
import type { Ticket, Priority, ColumnId, AgentStatus } from '../types';
import { AgentStatusPanel } from './AgentStatusPanel';

// Toast helper
function showToast(message: string, type: 'success' | 'error' | 'warning' = 'success') {
  if (typeof window !== 'undefined' && (window as any).showToast) {
    (window as any).showToast(message, type);
  }
}

interface TicketDetailModalProps {
  ticket: Ticket;
  projectId: string;
  onClose: () => void;
  onUpdate: (ticket: Ticket) => void;
}

const statusLabels: Record<ColumnId, string> = {
  BACKLOG: 'Backlog',
  TODO: 'To Do',
  HANDLE: 'Handle (AI Queue)',
  AI_PROCESSING: 'AI Processing',
  TO_REVIEW: 'To Review',
  DONE: 'Done',
  CANCELLED: 'Cancelled',
};

export function TicketDetailModal({
  ticket,
  projectId,
  onClose,
  onUpdate,
}: TicketDetailModalProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(ticket.title);
  const [description, setDescription] = useState(ticket.description || '');
  const [priority, setPriority] = useState<Priority>(ticket.priority);
  const [status, setStatus] = useState<ColumnId>(ticket.status);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [localAgentStatus, setLocalAgentStatus] = useState<AgentStatus | null>(null);
  const [confirmAction, setConfirmAction] = useState<'delete' | 'archive' | null>(null);

  // Handle agent status changes from live polling
  const handleAgentStatusChange = useCallback((newStatus: AgentStatus) => {
    setLocalAgentStatus(newStatus);
    
    // Auto-update ticket status based on agent status
    if (newStatus === 'FINISHED' && ticket.status === 'AI_PROCESSING') {
      onUpdate({ ...ticket, status: 'TO_REVIEW' as ColumnId });
    } else if (newStatus === 'ERROR' && ticket.status === 'AI_PROCESSING') {
      onUpdate({ ...ticket, status: 'TODO' as ColumnId });
    }
  }, [ticket, onUpdate]);

  const handleSave = useCallback(async () => {
    if (!title.trim()) {
      setError('Title is required');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const csrfToken = getCsrfToken();
      const response = await fetch(`/api/tickets/${projectId}/${ticket.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken,
        },
        body: JSON.stringify({
          title: title.trim(),
          description: description.trim(),
          priority,
          status,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update ticket');
      }

      const updatedTicket = await response.json();
      onUpdate(updatedTicket);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update ticket');
    } finally {
      setIsSubmitting(false);
    }
  }, [projectId, ticket.id, title, description, priority, status, onUpdate]);

  const handleDelete = useCallback(async () => {
    setIsSubmitting(true);

    try {
      const csrfToken = getCsrfToken();
      const response = await fetch(`/api/tickets/${projectId}/${ticket.id}`, {
        method: 'DELETE',
        headers: {
          'X-CSRF-Token': csrfToken,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete ticket');
      }

      showToast(`Ticket "${ticket.title}" deleted successfully`, 'success');
      onUpdate({ ...ticket, status: 'CANCELLED' as ColumnId });
      onClose();
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Failed to delete ticket';
      setError(errorMsg);
      showToast(errorMsg, 'error');
    } finally {
      setIsSubmitting(false);
      setConfirmAction(null);
    }
  }, [projectId, ticket, onUpdate, onClose]);

  const handleArchive = useCallback(async () => {
    setIsSubmitting(true);

    try {
      const csrfToken = getCsrfToken();
      const response = await fetch(`/api/tickets/${ticket.id}/archive`, {
        method: 'POST',
        headers: {
          'X-CSRF-Token': csrfToken,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to archive ticket');
      }

      showToast(`Ticket "${ticket.title}" archived`, 'success');
      onUpdate({ ...ticket, isArchived: true });
      onClose();
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Failed to archive ticket';
      setError(errorMsg);
      showToast(errorMsg, 'error');
    } finally {
      setIsSubmitting(false);
      setConfirmAction(null);
    }
  }, [ticket, onUpdate, onClose]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  const isProcessing = ticket.status === 'HANDLE' || ticket.status === 'AI_PROCESSING';

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="modal-content modal-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="modal-header">
          <div className="flex-1">
            {isEditing ? (
              <input
                type="text"
                className="form-input text-lg font-semibold"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                autoFocus
              />
            ) : (
              <h2 className="text-lg font-semibold">{ticket.title}</h2>
            )}
            <div className="flex items-center gap-2 mt-2">
              <span className={`status-badge status-${ticket.status.toLowerCase()}`}>
                {statusLabels[ticket.status]}
              </span>
              <span className="text-sm text-muted-foreground">
                #{ticket.id.slice(-4)}
              </span>
            </div>
          </div>
          <button
            className="modal-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        {/* Body - Horizontal Layout */}
        <div className="modal-body">
          {/* Left Column: Main Content */}
          <div className="modal-body-left">
            {error && (
              <div className="mb-4 p-3 text-sm rounded-md bg-destructive/10 text-destructive border border-destructive/20">
                {error}
              </div>
            )}

            {/* Description */}
            <div className="form-group">
              <label className="form-label">Description</label>
              {isEditing ? (
                <textarea
                  className="form-input"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={12}
                  placeholder="Add task details, requirements, acceptance criteria..."
                />
              ) : (
                <div className="p-3 rounded-md bg-muted min-h-[300px] text-sm whitespace-pre-wrap">
                  {ticket.description || (
                    <span className="text-muted-foreground">No description</span>
                  )}
                </div>
              )}
            </div>

            {/* Priority & Status Row */}
            {isEditing && (
              <div className="grid grid-cols-2 gap-4">
                <div className="form-group">
                  <label className="form-label">Priority</label>
                  <select
                    className="form-input"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value as Priority)}
                  >
                    <option value="LOW">Low</option>
                    <option value="MEDIUM">Medium</option>
                    <option value="HIGH">High</option>
                    <option value="URGENT">Urgent</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Status</label>
                  <select
                    className="form-input"
                    value={status}
                    onChange={(e) => setStatus(e.target.value as ColumnId)}
                    disabled={isProcessing}
                  >
                    <option value="BACKLOG">Backlog</option>
                    <option value="TODO">To Do</option>
                    <option value="HANDLE">Handle (AI)</option>
                    <option value="TO_REVIEW">To Review</option>
                    <option value="DONE">Done</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Agent Status & Metadata */}
          <div className="modal-body-right">
            {/* AI Agent Status Panel - Live updates */}
            {ticket.agentId && (
              <AgentStatusPanel 
                agentId={ticket.agentId}
                ticketId={ticket.id}
                ticketTitle={ticket.title}
                ticketStatus={ticket.status}
                onStatusChange={handleAgentStatusChange}
                onFollowupSent={() => {
                  // Refresh ticket after follow-up sent
                  onUpdate({ ...ticket, status: 'AI_PROCESSING' });
                }}
                onValidate={() => {
                  // Move ticket to DONE when validated
                  onUpdate({ ...ticket, status: 'DONE' });
                  onClose();
                }}
              />
            )}

            {/* Fallback AI Processing Status (when no agentId yet) */}
            {isProcessing && !ticket.agentId && (
              <div className="p-4 rounded-md bg-status-processing/10 border border-status-processing/20">
                <div className="flex items-center gap-2 text-status-processing">
                  <div className="ai-spinner" />
                  <span className="font-medium">
                    {ticket.status === 'HANDLE'
                      ? 'Queued for AI Processing'
                      : 'AI is working on this ticket...'}
                  </span>
                </div>
                {ticket.status === 'AI_PROCESSING' && (
                  <p className="text-sm text-muted-foreground mt-2">
                    The Cursor Agent is implementing this task. Do not modify while processing.
                  </p>
                )}
              </div>
            )}

            {/* PR Link (shown only if not using AgentStatusPanel) */}
            {ticket.prLink && !ticket.agentId && (
              <div className="p-4 rounded-md bg-status-success/10 border border-status-success/20">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-status-success">
                    Pull Request Ready
                  </span>
                  <a
                    href={ticket.prLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary h-8 px-3 text-sm"
                  >
                    View PR →
                  </a>
                </div>
              </div>
            )}

            {/* AI Summary (shown only if not using AgentStatusPanel) */}
            {ticket.aiSummary && !ticket.agentId && (
              <div className="p-4 rounded-md bg-muted">
                <h4 className="font-medium mb-2">AI Summary</h4>
                <p className="text-sm text-muted-foreground">{ticket.aiSummary}</p>
              </div>
            )}

            {/* Meta Info Card */}
            <div className="p-4 rounded-md bg-muted border border-border">
              <h4 className="font-medium mb-3 text-sm">Details</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Priority:</span>
                  <span className={`ticket-priority-pill ${
                    ticket.priority === 'LOW' ? 'priority-low' :
                    ticket.priority === 'MEDIUM' ? 'priority-medium' :
                    ticket.priority === 'HIGH' ? 'priority-high' : 'priority-urgent'
                  }`}>
                    {ticket.priority}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status:</span>
                  <span className={`status-badge status-${ticket.status.toLowerCase()}`}>
                    {statusLabels[ticket.status]}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">ID:</span>
                  <code className="text-xs">#{ticket.id.slice(-8)}</code>
                </div>
                <hr className="border-border my-2" />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Created:</span>
                  <span>{new Date(ticket.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Updated:</span>
                  <span>{new Date(ticket.updatedAt).toLocaleDateString()}</span>
                </div>
                {ticket.assignee && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Assignee:</span>
                    <span>{ticket.assignee.name}</span>
                  </div>
                )}
                {ticket.createdBy && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Created by:</span>
                    <span>{ticket.createdBy.name}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Confirmation Dialog */}
        {confirmAction && (
          <div className="confirm-dialog">
            <div className="confirm-dialog-content">
              <p className="confirm-dialog-message">
                {confirmAction === 'delete' 
                  ? `Are you sure you want to delete "${ticket.title}"? This action cannot be undone.`
                  : `Archive "${ticket.title}"? It will be moved to the Archive page.`
                }
              </p>
              <div className="confirm-dialog-actions">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setConfirmAction(null)}
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className={`btn ${confirmAction === 'delete' ? 'btn-destructive' : 'btn-primary'}`}
                  onClick={confirmAction === 'delete' ? handleDelete : handleArchive}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Processing...' : confirmAction === 'delete' ? 'Delete' : 'Archive'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="modal-actions">
          {isEditing ? (
            <>
              <button
                type="button"
                className="btn btn-destructive"
                onClick={() => setConfirmAction('delete')}
                disabled={isSubmitting || !!confirmAction}
                title="Permanently delete this ticket"
              >
                Delete
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setConfirmAction('archive')}
                disabled={isSubmitting || !!confirmAction}
                title="Archive this ticket"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 mr-1">
                  <path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" />
                  <path d="M3.26 8.26 8 3l4 4" />
                  <rect x="3" y="10" width="18" height="12" rx="2" />
                  <path d="M10 15h4" />
                </svg>
                Archive
              </button>
              <div className="flex-1" />
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  setIsEditing(false);
                  setTitle(ticket.title);
                  setDescription(ticket.description || '');
                  setPriority(ticket.priority);
                  setStatus(ticket.status);
                }}
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSave}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Saving...' : 'Save Changes'}
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setIsEditing(true)}
                disabled={isProcessing}
              >
                Edit
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function getCsrfToken(): string {
  const meta = document.querySelector('meta[name="csrf-token"]');
  return meta?.getAttribute('content') || '';
}
