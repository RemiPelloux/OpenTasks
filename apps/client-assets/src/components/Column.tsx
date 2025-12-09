/**
 * Kanban Column Component
 * Droppable container for tickets
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

// Column variant styling
const columnVariants: Record<ColumnId, string> = {
  BACKLOG: '',
  TODO: '',
  HANDLE: 'column-handle',
  AI_PROCESSING: 'column-ai-processing',
  TO_REVIEW: 'column-to-review',
  DONE: 'column-done',
  CANCELLED: '',
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

  return (
    <div
      className={`kanban-column ${columnVariants[id]} ${isActive ? 'active' : ''}`}
    >
      {/* Column Header */}
      <div className="column-header">
        <div className="column-title">
          <span className="icon" role="img" aria-label={title}>
            {icon}
          </span>
          <span>{title}</span>
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
            <div className="column-empty">
              <span className="mb-1 text-lg">{icon}</span>
              <span>Drop tickets here</span>
              {id === 'HANDLE' && (
                <span className="text-xs mt-1">AI will process these</span>
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
