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
  { id: 'DONE', title: 'Done', icon: '✅' },
];

export function KanbanBoard() {
  const [boardState, setBoardState] = useState<BoardState | null>(null);
  const [activeTicket, setActiveTicket] = useState<Ticket | null>(null);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [isNewTicketOpen, setIsNewTicketOpen] = useState(false);
  const [archivedCount, setArchivedCount] = useState(0);
  const [mobileActiveColumn, setMobileActiveColumn] = useState<ColumnId>('BACKLOG');

  // Initialize board state from server-rendered data
  useEffect(() => {
    const stateEl = document.getElementById('board-state');
    if (stateEl?.textContent) {
      try {
        const state = JSON.parse(stateEl.textContent) as BoardState & { archivedCount?: number };
        setBoardState(state);
        setArchivedCount(state.archivedCount || 0);
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

  // Real-time sync: Poll for updates every 2 seconds
  useEffect(() => {
    if (!boardState?.projectId) return;

    const pollInterval = setInterval(async () => {
      // Don't poll if user is actively dragging
      if (activeTicket) return;

      try {
        const response = await fetch(`/project/${boardState.projectId}/board/state`);
        if (!response.ok) return;

        const newState = await response.json() as BoardState;
        
        // Track specific changes for better UX feedback
        const statusChanges: string[] = [];
        
        newState.tickets.forEach((newTicket) => {
          const existingTicket = boardState.tickets.find(t => t.id === newTicket.id);
          if (existingTicket && existingTicket.status !== newTicket.status) {
            statusChanges.push(`#${newTicket.id.slice(-4)} → ${newTicket.status.replace('_', ' ')}`);
          }
        });
        
        const hasChanges = 
          newState.tickets.length !== boardState.tickets.length ||
          statusChanges.length > 0 ||
          newState.tickets.some((newTicket) => {
            const existingTicket = boardState.tickets.find(t => t.id === newTicket.id);
            return !existingTicket || 
              existingTicket.title !== newTicket.title ||
              existingTicket.prLink !== newTicket.prLink ||
              existingTicket.assigneeId !== newTicket.assigneeId;
          });

        if (hasChanges) {
          setBoardState(newState);
          // Only show toast for meaningful status changes
          if (statusChanges.length > 0) {
            showToast(`Ticket updated: ${statusChanges[0]}`, 'success');
          }
        }
      } catch (error) {
        // Silently fail - don't disrupt user experience
        console.debug('Sync poll failed:', error);
      }
    }, 2000); // Poll every 2 seconds for faster updates

    return () => clearInterval(pollInterval);
  }, [boardState?.projectId, boardState?.tickets, activeTicket]);

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

  // Quick archive from Done column
  const handleQuickArchive = useCallback(async (ticket: Ticket) => {
    if (!boardState) return;
    
    try {
      const response = await fetch(`/api/tickets/${ticket.id}/archive`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': getCsrfToken(),
        },
      });

      if (!response.ok) {
        throw new Error('Failed to archive ticket');
      }

      // Remove from board
      setBoardState((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          tickets: prev.tickets.filter((t) => t.id !== ticket.id),
        };
      });
      setArchivedCount((prev) => prev + 1);
      showToast(`"${ticket.title}" archived`, 'success');
    } catch (error) {
      console.error('Failed to archive ticket:', error);
      showToast('Failed to archive ticket', 'error');
    }
  }, [boardState]);

  // Quick delete from board (with confirmation state)
  const [deleteConfirmTicket, setDeleteConfirmTicket] = useState<Ticket | null>(null);
  
  const handleQuickDelete = useCallback((ticket: Ticket) => {
    setDeleteConfirmTicket(ticket);
  }, []);

  const confirmDelete = useCallback(async () => {
    if (!boardState || !deleteConfirmTicket) return;
    
    try {
      const response = await fetch(`/api/tickets/${boardState.projectId}/${deleteConfirmTicket.id}`, {
        method: 'DELETE',
        headers: {
          'X-CSRF-Token': getCsrfToken(),
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete ticket');
      }

      // Remove from board
      setBoardState((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          tickets: prev.tickets.filter((t) => t.id !== deleteConfirmTicket.id),
        };
      });
      showToast(`"${deleteConfirmTicket.title}" deleted`, 'success');
    } catch (error) {
      console.error('Failed to delete ticket:', error);
      showToast('Failed to delete ticket', 'error');
    } finally {
      setDeleteConfirmTicket(null);
    }
  }, [boardState, deleteConfirmTicket]);

  // Handle ticket archived (from detail modal update)
  const handleTicketUpdateWithArchive = useCallback((updatedTicket: Ticket) => {
    if (updatedTicket.isArchived) {
      // Remove from board and increment archive count
      setBoardState((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          tickets: prev.tickets.filter((t) => t.id !== updatedTicket.id),
        };
      });
      setArchivedCount((prev) => prev + 1);
      setSelectedTicket(null);
    } else {
      // Normal update
      handleTicketUpdate(updatedTicket);
    }
  }, [handleTicketUpdate]);

  // Update archive count badge in header (must be before conditional return!)
  useEffect(() => {
    const archiveCountEl = document.getElementById('archive-count');
    if (archiveCountEl) {
      archiveCountEl.textContent = String(archivedCount);
      archiveCountEl.classList.toggle('hidden', archivedCount === 0);
    }
  }, [archivedCount]);

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
              onArchive={column.id === 'DONE' ? handleQuickArchive : undefined}
              onDelete={column.id !== 'HANDLE' && column.id !== 'AI_PROCESSING' ? handleQuickDelete : undefined}
            />
          ))}
        </div>

        {/* Delete Confirmation Modal */}
        {deleteConfirmTicket && (
          <div className="modal-overlay" onClick={() => setDeleteConfirmTicket(null)}>
            <div className="delete-confirm-modal" onClick={(e) => e.stopPropagation()}>
              <h3>Delete Ticket?</h3>
              <p>Are you sure you want to delete "{deleteConfirmTicket.title}"?</p>
              <p className="text-sm text-muted-foreground">This action cannot be undone.</p>
              <div className="delete-confirm-actions">
                <button className="btn btn-secondary" onClick={() => setDeleteConfirmTicket(null)}>
                  Cancel
                </button>
                <button className="btn btn-destructive" onClick={confirmDelete}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}

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
          onUpdate={handleTicketUpdateWithArchive}
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
