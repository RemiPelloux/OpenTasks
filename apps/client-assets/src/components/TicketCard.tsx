/**
 * Ticket Card Component
 * Draggable ticket with clean design and status indicators
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

// Priority styling with colors
const priorityConfig: Record<Priority, { class: string; label: string; color: string }> = {
  LOW: { class: 'priority-low', label: 'Low', color: 'slate' },
  MEDIUM: { class: 'priority-medium', label: 'Medium', color: 'blue' },
  HIGH: { class: 'priority-high', label: 'High', color: 'amber' },
  URGENT: { class: 'priority-urgent', label: 'Urgent', color: 'red' },
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
  const hasError = ticket.aiSummary?.includes('failed') || ticket.aiSummary?.includes('Error');

  // Check if ticket has existing work (branch or PR)
  const hasExistingWork = ticket.prLink || ticket.agentBranch || ticket.agentId;
  const wasProcessedBefore = hasExistingWork && (ticket.status === 'TODO' || ticket.status === 'BACKLOG');

  // Determine card variant class
  const getCardClass = () => {
    const classes = ['ticket-card'];
    if (isDragging || isSortableDragging) classes.push('dragging');
    if (hasCompleted) classes.push('success-glow');
    if (ticket.status === 'AI_PROCESSING') classes.push('ai-processing');
    if (ticket.status === 'HANDLE') classes.push('queued');
    if (hasError) classes.push('has-error');
    if (wasProcessedBefore) classes.push('was-processed');
    return classes.join(' ');
  };

  // Truncate text helper
  const truncate = (text: string | null | undefined, maxLines: number = 2) => {
    if (!text) return null;
    const lines = text.split('\n').slice(0, maxLines);
    const truncated = lines.join('\n');
    return truncated.length < text.length ? `${truncated.slice(0, 100)}...` : truncated;
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={getCardClass()}
      onClick={onClick}
      {...attributes}
      {...listeners}
    >
      {/* AI Processing Indicator - Overlay + Terminal Icon */}
      {ticket.status === 'AI_PROCESSING' && (
        <>
          <div className="ticket-processing-overlay">
            <div className="processing-pulse" />
          </div>
          <div className="ticket-thinking-indicator" title="AI is working...">
            <ThinkingIcon />
          </div>
        </>
      )}

      {/* Card Content */}
      <div className="ticket-content">
        {/* Title - Bold and prominent */}
        <h4 className="ticket-title">{ticket.title}</h4>

        {/* Description - Truncated to 2 lines, gray */}
        {ticket.description && (
          <p className="ticket-description">{truncate(ticket.description, 2)}</p>
        )}

        {/* AI Status - Compact display */}
        {isProcessing && (
          <div className="ticket-ai-badge">
            <TerminalIcon />
            <span>{ticket.status === 'HANDLE' ? 'Queued' : 'Processing...'}</span>
            {ticket.status === 'AI_PROCESSING' && <div className="mini-spinner" />}
          </div>
        )}

        {/* AI Summary - Truncated to 3 lines max */}
        {ticket.aiSummary && !isProcessing && (
          <div className={`ticket-ai-summary ${hasError ? 'error' : ''}`}>
            {hasError ? <ErrorIcon /> : <AIIcon />}
            <span>{truncate(ticket.aiSummary, 3)}</span>
          </div>
        )}
      </div>

      {/* Previously Processed Indicator */}
      {wasProcessedBefore && (
        <div className="ticket-processed-badge" title="This ticket was previously processed by AI">
          <RetryIcon />
          <span>Previously processed</span>
          {ticket.prLink && (
            <a 
              href={ticket.prLink} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="processed-pr-link"
            >
              View PR
            </a>
          )}
        </div>
      )}

      {/* Footer Row - Always visible */}
      <div className="ticket-footer">
        <div className="ticket-footer-left">
          {/* Priority Badge - Pill shape */}
          <span className={`ticket-priority-pill ${priorityConfig[ticket.priority].class}`}>
            {priorityConfig[ticket.priority].label}
          </span>
          
          {/* Branch Badge - Show agent branch if exists, otherwise target branch */}
          {(ticket.agentBranch || ticket.targetBranch) && (
            <span 
              className={`ticket-branch-badge ${ticket.agentBranch ? 'has-agent-branch' : ''}`} 
              title={ticket.agentBranch || ticket.targetBranch || ''}
            >
              <BranchIcon />
              {(ticket.agentBranch || ticket.targetBranch || '').length > 12 
                ? (ticket.agentBranch || ticket.targetBranch || '').slice(0, 12) + '...' 
                : (ticket.agentBranch || ticket.targetBranch)}
            </span>
          )}
        </div>

        <div className="ticket-footer-right">
          {/* Ticket ID */}
          <span className="ticket-id">#{ticket.id.slice(-4)}</span>
          
          {/* PR Icon Button */}
          {ticket.prLink && (
            <a
              href={ticket.prLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ticket-pr-icon"
              onClick={(e) => e.stopPropagation()}
              title="View Pull Request"
            >
              <GitHubIcon />
            </a>
          )}
          
          {/* Status indicators */}
          {isProcessing ? (
            <div className="ticket-ai-avatar" title="AI Agent Processing">
              <RobotIcon />
            </div>
          ) : hasExistingWork && !wasProcessedBefore && !ticket.prLink ? (
            <div className="ticket-has-work" title="Has existing work">
              <CheckBadgeIcon />
            </div>
          ) : ticket.assignee ? (
            <div className="ticket-assignee" title={ticket.assignee.name}>
              {ticket.assignee.name.substring(0, 2).toUpperCase()}
            </div>
          ) : null}
        </div>
      </div>

      {/* Action Buttons - Only shown on hover for Done tickets */}
      {!isProcessing && ticket.status === 'DONE' && onArchive && (
        <div className="ticket-actions">
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
        </div>
      )}

      {/* Delete button - shown on hover for editable tickets */}
      {!isProcessing && onDelete && ticket.status !== 'DONE' && (
        <button
          className="ticket-delete-btn"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(ticket);
          }}
          title="Delete"
        >
          <TrashIcon />
        </button>
      )}
    </div>
  );
}

// Icon Components
function TrashIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon-sm">
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}

function ArchiveIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon-sm">
      <rect x="2" y="4" width="20" height="5" rx="2" />
      <path d="M4 9v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9" />
      <path d="M10 13h4" />
    </svg>
  );
}

function GitPRIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className="icon-sm">
      <path fillRule="evenodd" d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z" />
    </svg>
  );
}

function BranchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon-xs">
      <line x1="6" x2="6" y1="3" y2="15" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M18 9a9 9 0 0 1-9 9" />
    </svg>
  );
}

function TerminalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon-xs">
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" x2="20" y1="19" y2="19" />
    </svg>
  );
}

function RobotIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon-sm">
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v4" />
      <line x1="8" x2="8" y1="16" y2="16" />
      <line x1="16" x2="16" y1="16" y2="16" />
    </svg>
  );
}

function AIIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon-xs">
      <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13A1.5 1.5 0 0 0 6 14.5 1.5 1.5 0 0 0 7.5 16 1.5 1.5 0 0 0 9 14.5 1.5 1.5 0 0 0 7.5 13m9 0a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0-1.5-1.5" />
    </svg>
  );
}

function ErrorIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon-xs">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" x2="12" y1="8" y2="12" />
      <line x1="12" x2="12.01" y1="16" y2="16" />
    </svg>
  );
}

function RetryIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon-xs">
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </svg>
  );
}

function CheckBadgeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon-sm">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="icon-sm">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

function ThinkingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="thinking-icon">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 8h2" />
      <path d="M7 12h10" />
      <path d="M7 16h6" />
    </svg>
  );
}
