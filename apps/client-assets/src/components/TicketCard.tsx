/**
 * Ticket Card Component
 * Draggable ticket with status and priority indicators
 */

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import type { Ticket, Priority } from '../types';

interface TicketCardProps {
  ticket: Ticket;
  isDragging?: boolean;
  onClick: () => void;
  onArchive?: (ticket: Ticket) => void;
  onDelete?: (ticket: Ticket) => void;
}

// Priority styling
const priorityClasses: Record<Priority, string> = {
  LOW: 'priority-low',
  MEDIUM: 'priority-medium',
  HIGH: 'priority-high',
  URGENT: 'priority-urgent',
};

export function TicketCard({ ticket, isDragging = false, onClick, onArchive, onDelete }: TicketCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging: isSortableDragging,
  } = useSortable({ id: ticket.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const isProcessing = ticket.status === 'HANDLE' || ticket.status === 'AI_PROCESSING';
  const hasCompleted = ticket.status === 'TO_REVIEW' && ticket.prLink;

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`ticket-card ${isDragging || isSortableDragging ? 'dragging' : ''} ${hasCompleted ? 'success-glow' : ''}`}
      onClick={onClick}
      {...attributes}
      {...listeners}
    >
      {/* Title */}
      <h4 className="ticket-title">{ticket.title}</h4>

      {/* Description */}
      {ticket.description && (
        <p className="ticket-description">{ticket.description}</p>
      )}

      {/* Meta Row */}
      <div className="ticket-meta">
        <div className="flex items-center gap-2">
          <span className={`ticket-priority ${priorityClasses[ticket.priority]}`}>
            {ticket.priority}
          </span>
          {ticket.targetBranch && (
            <span className="ticket-branch" title={`Target: ${ticket.targetBranch}`}>
              <BranchIcon />
              {ticket.targetBranch}
            </span>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          {ticket.assignee && (
            <div
              className="ticket-assignee"
              title={ticket.assignee.name}
            >
              {ticket.assignee.name.substring(0, 2).toUpperCase()}
            </div>
          )}
          <span className="text-xs text-muted-foreground">
            #{ticket.id.slice(-4)}
          </span>
        </div>
      </div>

      {/* AI Processing Status */}
      {isProcessing && (
        <div className={`ticket-ai-status ${ticket.status === 'AI_PROCESSING' ? 'processing' : ''}`}>
          <div className="ai-spinner" />
          <span>
            {ticket.status === 'HANDLE' ? 'Queued for AI' : 'AI Processing...'}
          </span>
        </div>
      )}

      {/* PR Link */}
      {ticket.prLink && (
        <a
          href={ticket.prLink}
          target="_blank"
          rel="noopener noreferrer"
          className="ticket-pr-link"
          onClick={(e) => e.stopPropagation()}
        >
          <GitPRIcon />
          View Pull Request
        </a>
      )}

      {/* AI Summary */}
      {ticket.aiSummary && (
        <div className="ticket-ai-summary">
          <strong>AI Summary:</strong> {ticket.aiSummary}
        </div>
      )}

      {/* Action Buttons Row */}
      {!isProcessing && (onArchive || onDelete) && (
        <div className="ticket-actions">
          {/* Delete Button - available for all non-processing statuses */}
          {onDelete && (
            <button
              className="ticket-action-btn delete"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(ticket);
              }}
              title="Delete this ticket"
            >
              <TrashIcon />
            </button>
          )}
          {/* Archive Button for Done tickets */}
          {ticket.status === 'DONE' && onArchive && (
            <button
              className="ticket-action-btn archive"
              onClick={(e) => {
                e.stopPropagation();
                onArchive(ticket);
              }}
              title="Archive this ticket"
            >
              <ArchiveIcon />
              Archive
            </button>
          )}
        </div>
      )}
    </div>
  );
}

// Trash icon
function TrashIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      style={{ width: '0.875rem', height: '0.875rem' }}
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}

// Archive icon
function ArchiveIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      style={{ width: '0.875rem', height: '0.875rem' }}
    >
      <rect x="2" y="4" width="20" height="5" rx="2" />
      <path d="M4 9v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9" />
      <path d="M10 13h4" />
    </svg>
  );
}

// Simple GitHub PR icon
function GitPRIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      style={{ width: '1rem', height: '1rem' }}
    >
      <path
        fillRule="evenodd"
        d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"
      />
    </svg>
  );
}

// Branch icon
function BranchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      style={{ width: '0.75rem', height: '0.75rem' }}
    >
      <line x1="6" x2="6" y1="3" y2="15" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M18 9a9 9 0 0 1-9 9" />
    </svg>
  );
}
