/**
 * Kanban Board Component
 * Main interactive board with drag-and-drop
 */

import { useState, useEffect, useCallback } from 'react';
import {
  DndContext,
  DragOverlay,
  DragStartEvent,
  DragEndEvent,
  DragOverEvent,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { Column } from './Column';
import { TicketCard } from './TicketCard';
import { NewTicketModal } from './NewTicketModal';
import { TicketDetailModal } from './TicketDetailModal';
import type { Ticket, BoardState, ColumnId } from '../types';

const COLUMNS: { id: ColumnId; title: string; icon: string }[] = [
  { id: 'BACKLOG', title: 'Backlog', icon: '📋' },
  { id: 'TODO', title: 'To Do', icon: '📝' },
  { id: 'HANDLE', title: 'Handle', icon: '🤖' },
  { id: 'AI_PROCESSING', title: 'AI Processing', icon: '⚡' },
  { id: 'TO_REVIEW', title: 'To Review', icon: '👀' },
  { id: 'IN_PROGRESS', title: 'In Progress', icon: '🔧' },
  { id: 'DONE', title: 'Done', icon: '✅' },
];

export function KanbanBoard() {
  const [boardState, setBoardState] = useState<BoardState | null>(null);
  const [activeTicket, setActiveTicket] = useState<Ticket | null>(null);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [isNewTicketOpen, setIsNewTicketOpen] = useState(false);
  const [mobileActiveColumn, setMobileActiveColumn] = useState<ColumnId>('BACKLOG');

  // Initialize board state from server-rendered data
  useEffect(() => {
    const stateEl = document.getElementById('board-state');
    if (stateEl?.textContent) {
      try {
        const state = JSON.parse(stateEl.textContent) as BoardState;
        setBoardState(state);
      } catch (e) {
        console.error('Failed to parse board state:', e);
      }
    }

    // New ticket button handler
    const newTicketBtn = document.getElementById('new-ticket-btn');
    if (newTicketBtn) {
      newTicketBtn.addEventListener('click', () => setIsNewTicketOpen(true));
    }

    // Mobile tab handlers
    document.querySelectorAll('.tab-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const column = (e.target as HTMLElement).dataset.column as ColumnId;
        if (column) {
          setMobileActiveColumn(column);
          document.querySelectorAll('.tab-btn').forEach((b) => {
            b.classList.remove('bg-muted');
            b.classList.add('hover:bg-muted');
          });
          (e.target as HTMLElement).classList.add('bg-muted');
          (e.target as HTMLElement).classList.remove('hover:bg-muted');
        }
      });
    });

    return () => {
      if (newTicketBtn) {
        newTicketBtn.removeEventListener('click', () => setIsNewTicketOpen(true));
      }
    };
  }, []);

  // DnD sensors configuration
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 8 },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // Handle drag start
  const handleDragStart = useCallback(
    (event: DragStartEvent) => {
      const ticketId = event.active.id as string;
      const ticket = boardState?.tickets.find((t) => t.id === ticketId);
      if (ticket) {
        setActiveTicket(ticket);
      }
    },
    [boardState]
  );

  // Handle drag over (for visual feedback)
  const handleDragOver = useCallback((_event: DragOverEvent) => {
    // Visual feedback handled by CSS
  }, []);

  // Handle drag end
  const handleDragEnd = useCallback(
    async (event: DragEndEvent) => {
      const { active, over } = event;
      setActiveTicket(null);

      if (!over || !boardState) return;

      const ticketId = active.id as string;
      const newStatus = over.id as ColumnId;
      const ticket = boardState.tickets.find((t) => t.id === ticketId);

      if (!ticket || ticket.status === newStatus) return;

      // Optimistic update
      setBoardState((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          tickets: prev.tickets.map((t) =>
            t.id === ticketId ? { ...t, status: newStatus } : t
          ),
        };
      });

      // Show toast
      if (newStatus === 'HANDLE') {
        showToast(`Ticket #${ticket.id.slice(-4)} dispatched to Cursor Agent`, 'warning');
      }

      // Update server
      try {
        const csrfToken = getCsrfToken();
        const response = await fetch(
          `/api/tickets/${boardState.projectId}/${ticketId}/status`,
          {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              'X-CSRF-Token': csrfToken,
            },
            body: JSON.stringify({ status: newStatus }),
          }
        );

        if (!response.ok) {
          throw new Error('Failed to update ticket status');
        }

        if (newStatus === 'HANDLE') {
          showToast('AI agent started processing', 'success');
        }
      } catch (error) {
        console.error('Failed to update ticket:', error);
        showToast('Failed to update ticket', 'error');
        
        // Revert on error
        setBoardState((prev) => {
          if (!prev) return prev;
          return {
            ...prev,
            tickets: prev.tickets.map((t) =>
              t.id === ticketId ? { ...t, status: ticket.status } : t
            ),
          };
        });
      }
    },
    [boardState]
  );

  // Handle ticket click
  const handleTicketClick = useCallback((ticket: Ticket) => {
    setSelectedTicket(ticket);
  }, []);

  // Handle ticket update
  const handleTicketUpdate = useCallback((updatedTicket: Ticket) => {
    setBoardState((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        tickets: prev.tickets.map((t) =>
          t.id === updatedTicket.id ? updatedTicket : t
        ),
      };
    });
    setSelectedTicket(null);
  }, []);

  // Handle new ticket creation
  const handleNewTicket = useCallback((newTicket: Ticket) => {
    setBoardState((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        tickets: [...prev.tickets, newTicket],
      };
    });
    setIsNewTicketOpen(false);
    showToast('Ticket created successfully', 'success');
  }, []);

  if (!boardState) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="ai-spinner" />
      </div>
    );
  }

  return (
    <>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <div className="kanban-container">
          {COLUMNS.map((column) => (
            <Column
              key={column.id}
              id={column.id}
              title={column.title}
              icon={column.icon}
              tickets={boardState.tickets.filter((t) => t.status === column.id)}
              isActive={mobileActiveColumn === column.id}
              onTicketClick={handleTicketClick}
            />
          ))}
        </div>

        <DragOverlay>
          {activeTicket ? (
            <TicketCard
              ticket={activeTicket}
              isDragging
              onClick={() => {}}
            />
          ) : null}
        </DragOverlay>
      </DndContext>

      {/* New Ticket Modal */}
      {isNewTicketOpen && (
        <NewTicketModal
          projectId={boardState.projectId}
          projectName={boardState.projectName}
          branchPresets={boardState.branchPresets || []}
          defaultBranch={boardState.defaultBranch || 'main'}
          members={boardState.members || []}
          onClose={() => setIsNewTicketOpen(false)}
          onSubmit={handleNewTicket}
        />
      )}

      {/* Ticket Detail Modal */}
      {selectedTicket && (
        <TicketDetailModal
          ticket={selectedTicket}
          projectId={boardState.projectId}
          onClose={() => setSelectedTicket(null)}
          onUpdate={handleTicketUpdate}
        />
      )}
    </>
  );
}

// Helper functions
function getCsrfToken(): string {
  const meta = document.querySelector('meta[name="csrf-token"]');
  return meta?.getAttribute('content') || '';
}

function showToast(message: string, type: 'success' | 'error' | 'warning' = 'success') {
  if (typeof window !== 'undefined' && (window as any).showToast) {
    (window as any).showToast(message, type);
  }
}
