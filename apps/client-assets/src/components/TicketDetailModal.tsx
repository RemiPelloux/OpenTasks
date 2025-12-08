/**
 * Ticket Detail Modal Component
 * View and edit ticket details with AI status
 */

import { useState, useCallback } from 'react';
import type { Ticket, Priority, ColumnId } from '../types';

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
  IN_PROGRESS: 'In Progress',
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
    if (!confirm('Are you sure you want to delete this ticket?')) {
      return;
    }

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

      onUpdate({ ...ticket, status: 'CANCELLED' as ColumnId });
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete ticket');
    } finally {
      setIsSubmitting(false);
    }
  }, [projectId, ticket, onUpdate, onClose]);

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

        {/* Body */}
        <div className="modal-body">
          {error && (
            <div className="mb-4 p-3 text-sm rounded-md bg-destructive/10 text-destructive border border-destructive/20">
              {error}
            </div>
          )}

          {/* AI Processing Status */}
          {isProcessing && (
            <div className="mb-4 p-4 rounded-md bg-status-processing/10 border border-status-processing/20">
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

          {/* PR Link */}
          {ticket.prLink && (
            <div className="mb-4 p-4 rounded-md bg-status-success/10 border border-status-success/20">
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

          {/* AI Summary */}
          {ticket.aiSummary && (
            <div className="mb-4 p-4 rounded-md bg-muted">
              <h4 className="font-medium mb-2">AI Summary</h4>
              <p className="text-sm text-muted-foreground">{ticket.aiSummary}</p>
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
                rows={6}
                placeholder="Add task details, requirements, acceptance criteria..."
              />
            ) : (
              <div className="p-3 rounded-md bg-muted min-h-[100px] text-sm whitespace-pre-wrap">
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
                  <option value="IN_PROGRESS">In Progress</option>
                  <option value="DONE">Done</option>
                </select>
              </div>
            </div>
          )}

          {/* Meta Info */}
          <div className="mt-6 pt-4 border-t border-border">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Created:</span>
                <span className="ml-2">
                  {new Date(ticket.createdAt).toLocaleDateString()}
                </span>
              </div>
              <div>
                <span className="text-muted-foreground">Updated:</span>
                <span className="ml-2">
                  {new Date(ticket.updatedAt).toLocaleDateString()}
                </span>
              </div>
              {ticket.assignee && (
                <div>
                  <span className="text-muted-foreground">Assignee:</span>
                  <span className="ml-2">{ticket.assignee.name}</span>
                </div>
              )}
              {ticket.createdBy && (
                <div>
                  <span className="text-muted-foreground">Created by:</span>
                  <span className="ml-2">{ticket.createdBy.name}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="modal-actions">
          {isEditing ? (
            <>
              <button
                type="button"
                className="btn btn-destructive"
                onClick={handleDelete}
                disabled={isSubmitting}
              >
                Delete
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
