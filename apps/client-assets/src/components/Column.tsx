/**
 * Kanban Column Component
 * Droppable container with visual hierarchy
 */

import { useDroppable } from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { TicketCard } from './TicketCard';
import type { Ticket, ColumnId } from '../types';

interface ColumnProps {
  id: ColumnId;
  title: string;
  icon: string;
  tickets: Ticket[];
  isActive?: boolean;
  onTicketClick: (ticket: Ticket) => void;
  onArchive?: (ticket: Ticket) => void;
  onDelete?: (ticket: Ticket) => void;
}

// Column configuration with icons and colors
const columnConfig: Record<ColumnId, { 
  variant: string; 
  emptyText: string;
  emptySubtext?: string;
  svgIcon?: string;
}> = {
  BACKLOG: { 
    variant: '', 
    emptyText: 'Drop tickets here',
  },
  TODO: { 
    variant: '', 
    emptyText: 'Drop tickets here',
  },
  HANDLE: { 
    variant: 'column-handle',
    emptyText: 'Drop here to start Agent',
    emptySubtext: 'AI will process automatically',
    svgIcon: 'robot',
  },
  AI_PROCESSING: { 
    variant: 'column-ai-processing',
    emptyText: 'AI is working...',
    emptySubtext: 'Tickets appear here while processing',
    svgIcon: 'brain',
  },
  TO_REVIEW: { 
    variant: 'column-to-review',
    emptyText: 'Drop tickets here',
    svgIcon: 'eye',
  },
  DONE: { 
    variant: 'column-done',
    emptyText: 'Completed tickets',
    svgIcon: 'check',
  },
  CANCELLED: { 
    variant: '',
    emptyText: 'Cancelled tickets',
  },
};

// SVG Icons for column headers
const ColumnIcons: Record<string, JSX.Element> = {
  robot: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="column-icon">
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v4" />
      <line x1="8" x2="8" y1="16" y2="16" />
      <line x1="16" x2="16" y1="16" y2="16" />
    </svg>
  ),
  brain: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="column-icon">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
  ),
  eye: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="column-icon">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="column-icon">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
};

export function Column({
  id,
  title,
  icon,
  tickets,
  isActive = false,
  onTicketClick,
  onArchive,
  onDelete,
}: ColumnProps) {
  const { setNodeRef, isOver } = useDroppable({ id });
  const config = columnConfig[id];

  return (
    <div className={`kanban-column ${config.variant} ${isActive ? 'active' : ''}`}>
      {/* Column Header */}
      <div className="column-header">
        <div className="column-title">
          {/* Show SVG icon or emoji */}
          {config.svgIcon && ColumnIcons[config.svgIcon] ? (
            ColumnIcons[config.svgIcon]
          ) : (
            <span className="column-emoji" role="img" aria-label={title}>
              {icon}
            </span>
          )}
          <span className="column-name">{title}</span>
        </div>
        <span className="column-count">{tickets.length}</span>
      </div>

      {/* Column Body */}
      <SortableContext items={tickets.map((t) => t.id)} strategy={verticalListSortingStrategy}>
        <div
          ref={setNodeRef}
          className={`column-body ${isOver ? 'drop-target' : ''}`}
        >
          {tickets.length === 0 ? (
            <div className={`column-empty ${id === 'HANDLE' ? 'handle-empty' : ''}`}>
              {id === 'HANDLE' ? (
                <>
                  <div className="empty-chute">
                    <ChuteIcon />
                  </div>
                  <span className="empty-title">{config.emptyText}</span>
                  <span className="empty-subtext">{config.emptySubtext}</span>
                </>
              ) : id === 'AI_PROCESSING' ? (
                <>
                  <div className="empty-ai">
                    <BrainPulseIcon />
                  </div>
                  <span className="empty-title">{config.emptyText}</span>
                  <span className="empty-subtext">{config.emptySubtext}</span>
                </>
              ) : (
                <>
                  <span className="empty-icon">{icon}</span>
                  <span className="empty-text">{config.emptyText}</span>
                </>
              )}
            </div>
          ) : (
            tickets.map((ticket) => (
              <TicketCard
                key={ticket.id}
                ticket={ticket}
                onClick={() => onTicketClick(ticket)}
                onArchive={onArchive}
                onDelete={onDelete}
              />
            ))
          )}
        </div>
      </SortableContext>
    </div>
  );
}

// Chute icon for Handle column
function ChuteIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="chute-icon">
      <path d="M12 3v18" strokeDasharray="3 3" />
      <path d="M5 8l7 7 7-7" />
      <rect x="4" y="18" width="16" height="3" rx="1" />
    </svg>
  );
}

// Brain with pulse for AI Processing
function BrainPulseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="brain-pulse-icon">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
  );
}
