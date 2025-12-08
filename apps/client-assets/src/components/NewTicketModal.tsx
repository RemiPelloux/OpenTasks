/**
 * New Ticket Modal Component
 * Form for creating new tickets with branch selection
 */

import { useState, useCallback } from 'react';
import type { Ticket, Priority, ColumnId, BranchPreset } from '../types';

interface NewTicketModalProps {
  projectId: string;
  branchPresets: BranchPreset[];
  defaultBranch: string;
  onClose: () => void;
  onSubmit: (ticket: Ticket) => void;
}

export function NewTicketModal({
  projectId,
  branchPresets,
  defaultBranch,
  onClose,
  onSubmit,
}: NewTicketModalProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<Priority>('MEDIUM');
  const [status, setStatus] = useState<ColumnId>('BACKLOG');
  const [targetBranch, setTargetBranch] = useState(defaultBranch);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setError('');

      if (!title.trim()) {
        setError('Title is required');
        return;
      }

      setIsSubmitting(true);

      try {
        const csrfToken = getCsrfToken();
        const response = await fetch(`/api/tickets/${projectId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': csrfToken,
          },
          body: JSON.stringify({
            title: title.trim(),
            description: description.trim(),
            priority,
            status,
            targetBranch,
          }),
        });

        if (!response.ok) {
          const data = await response.json().catch(() => ({}));
          throw new Error(data.message || 'Failed to create ticket');
        }

        const newTicket = await response.json();
        onSubmit(newTicket);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to create ticket');
      } finally {
        setIsSubmitting(false);
      }
    },
    [projectId, title, description, priority, status, targetBranch, onSubmit]
  );

  // Close on escape
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-labelledby="new-ticket-title"
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="modal-header">
          <div>
            <h2 id="new-ticket-title">New Ticket</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Create a new task for your project
            </p>
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
        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            {error && (
              <div className="mb-4 p-3 text-sm rounded-md bg-destructive/10 text-destructive border border-destructive/20">
                {error}
              </div>
            )}

            {/* Title */}
            <div className="form-group">
              <label htmlFor="ticket-title" className="form-label">
                Title <span className="text-destructive">*</span>
              </label>
              <input
                id="ticket-title"
                type="text"
                className="form-input"
                placeholder="What needs to be done?"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                autoFocus
                required
              />
            </div>

            {/* Description */}
            <div className="form-group">
              <label htmlFor="ticket-description" className="form-label">
                Description
              </label>
              <textarea
                id="ticket-description"
                className="form-input"
                placeholder="Add details, requirements, acceptance criteria..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
              />
              <p className="form-hint">
                The AI will use this description as context when implementing
              </p>
            </div>

            {/* Branch Selection */}
            <div className="form-group">
              <label htmlFor="ticket-branch" className="form-label">
                Target Branch
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="inline-block w-4 h-4 ml-1 text-muted-foreground"
                >
                  <line x1="6" x2="6" y1="3" y2="15" />
                  <circle cx="18" cy="6" r="3" />
                  <circle cx="6" cy="18" r="3" />
                  <path d="M18 9a9 9 0 0 1-9 9" />
                </svg>
              </label>
              {branchPresets.length > 0 ? (
                <div className="flex flex-wrap gap-2 mb-2">
                  {branchPresets.map((preset) => (
                    <button
                      key={preset.branch}
                      type="button"
                      className={`branch-preset-btn ${
                        targetBranch === preset.branch ? 'active' : ''
                      }`}
                      onClick={() => setTargetBranch(preset.branch)}
                    >
                      {preset.name}
                      <span className="branch-name">{preset.branch}</span>
                    </button>
                  ))}
                </div>
              ) : null}
              <input
                id="ticket-branch"
                type="text"
                className="form-input font-mono"
                placeholder="main"
                value={targetBranch}
                onChange={(e) => setTargetBranch(e.target.value)}
              />
              <p className="form-hint">
                The branch the AI will work on for this ticket
              </p>
            </div>

            {/* Priority & Status Row */}
            <div className="grid grid-cols-2 gap-4">
              {/* Priority */}
              <div className="form-group">
                <label htmlFor="ticket-priority" className="form-label">
                  Priority
                </label>
                <select
                  id="ticket-priority"
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

              {/* Initial Status */}
              <div className="form-group">
                <label htmlFor="ticket-status" className="form-label">
                  Status
                </label>
                <select
                  id="ticket-status"
                  className="form-input"
                  value={status}
                  onChange={(e) => setStatus(e.target.value as ColumnId)}
                >
                  <option value="BACKLOG">Backlog</option>
                  <option value="TODO">To Do</option>
                </select>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="modal-actions">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="ai-spinner" />
                  Creating...
                </>
              ) : (
                'Create Ticket'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function getCsrfToken(): string {
  const meta = document.querySelector('meta[name="csrf-token"]');
  return meta?.getAttribute('content') || '';
}
