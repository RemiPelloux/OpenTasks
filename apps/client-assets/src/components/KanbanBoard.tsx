/**
 * Kanban Board Component
 * Main interactive board with drag-and-drop
 */

import { useState, useEffect, useCallback, useRef } from 'react';
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
import { useWebSocket } from '../hooks/useWebSocket';
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
  const isDraggingRef = useRef(false);

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

  // Track recently modified tickets to avoid duplicate toasts/updates
  const recentlyCreatedRef = useRef<Set<string>>(new Set());
  const recentlyMovedRef = useRef<Set<string>>(new Set());
  const recentlyDeletedRef = useRef<Set<string>>(new Set());
  const recentlyUpdatedRef = useRef<Set<string>>(new Set());

  // WebSocket event handlers
  const handleWsTicketCreated = useCallback((ticket: Partial<Ticket>) => {
    if (isDraggingRef.current) return;
    
    let wasAdded = false;
    setBoardState((prev) => {
      if (!prev) return prev;
      // Check if ticket already exists (created locally)
      if (prev.tickets.some(t => t.id === ticket.id)) return prev;
      wasAdded = true;
      return {
        ...prev,
        tickets: [...prev.tickets, ticket as Ticket],
      };
    });
    
    // Only show toast if this ticket wasn't created by us (added via WebSocket)
    if (wasAdded && !recentlyCreatedRef.current.has(ticket.id!)) {
      showToast(`New ticket: ${ticket.title}`, 'success');
    }
    recentlyCreatedRef.current.delete(ticket.id!);
  }, []);

  const handleWsTicketUpdated = useCallback((ticket: Partial<Ticket>) => {
    if (isDraggingRef.current) return;
    // Skip if we just updated this ticket locally
    if (recentlyUpdatedRef.current.has(ticket.id!)) {
      recentlyUpdatedRef.current.delete(ticket.id!);
      return;
    }
    setBoardState((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        tickets: prev.tickets.map((t) =>
          t.id === ticket.id ? { ...t, ...ticket } : t
        ),
      };
    });
  }, []);

  const handleWsTicketDeleted = useCallback((data: { id: string }) => {
    if (isDraggingRef.current) return;
    // Skip if we just deleted this ticket locally
    if (recentlyDeletedRef.current.has(data.id)) {
      recentlyDeletedRef.current.delete(data.id);
      return;
    }
    setBoardState((prev) => {
      if (!prev) return prev;
      // Check if ticket still exists before showing any feedback
      const exists = prev.tickets.some(t => t.id === data.id);
      if (!exists) return prev;
      return {
        ...prev,
        tickets: prev.tickets.filter((t) => t.id !== data.id),
      };
    });
    showToast('A ticket was deleted', 'warning');
  }, []);

  const handleWsTicketMoved = useCallback((data: { id: string; fromStatus: string; toStatus: string; position: number }) => {
    if (isDraggingRef.current) return;
    // Skip if we just moved this ticket locally (via drag-drop)
    if (recentlyMovedRef.current.has(data.id)) {
      recentlyMovedRef.current.delete(data.id);
      return;
    }
    setBoardState((prev) => {
      if (!prev) return prev;
      // Check if the ticket's status is actually different
      const ticket = prev.tickets.find(t => t.id === data.id);
      if (!ticket || ticket.status === data.toStatus) return prev;
      return {
        ...prev,
        tickets: prev.tickets.map((t) =>
          t.id === data.id ? { ...t, status: data.toStatus as ColumnId, position: data.position } : t
        ),
      };
    });
    showToast(`Ticket moved to ${data.toStatus.replace('_', ' ')}`, 'success');
  }, []);

  const handleWsBoardRefresh = useCallback(async () => {
    if (!boardState?.projectId || isDraggingRef.current) return;
    try {
      const response = await fetch(`/project/${boardState.projectId}/board/state`);
      if (response.ok) {
        const newState = await response.json() as BoardState;
        setBoardState(newState);
      }
    } catch (error) {
      console.error('Failed to refresh board:', error);
    }
  }, [boardState?.projectId]);

  // Connect to WebSocket for real-time updates
  useWebSocket({
    projectId: boardState?.projectId || null,
    onTicketCreated: handleWsTicketCreated,
    onTicketUpdated: handleWsTicketUpdated,
    onTicketDeleted: handleWsTicketDeleted,
    onTicketMoved: handleWsTicketMoved,
    onBoardRefresh: handleWsBoardRefresh,
  });

  // Fallback polling for when WebSocket is disconnected (every 10 seconds)
  useEffect(() => {
    if (!boardState?.projectId) return;

    const pollInterval = setInterval(async () => {
      if (isDraggingRef.current) return;

      try {
        const response = await fetch(`/project/${boardState.projectId}/board/state`);
        if (!response.ok) return;

        const newState = await response.json() as BoardState;
        
        // Only update if there are actual changes
        const hasChanges = 
          newState.tickets.length !== boardState.tickets.length ||
          newState.tickets.some((newTicket) => {
            const existingTicket = boardState.tickets.find(t => t.id === newTicket.id);
            return !existingTicket || 
              existingTicket.status !== newTicket.status ||
              existingTicket.agentStatus !== newTicket.agentStatus ||
              existingTicket.prLink !== newTicket.prLink;
          });

        if (hasChanges) {
          setBoardState(newState);
        }
      } catch (error) {
        console.debug('Fallback sync failed:', error);
      }
    }, 10000); // Fallback poll every 10 seconds

    return () => clearInterval(pollInterval);
  }, [boardState?.projectId, boardState?.tickets]);

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
      isDraggingRef.current = true;
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
      isDraggingRef.current = false;

      if (!over || !boardState) return;

      const ticketId = active.id as string;
      const newStatus = over.id as ColumnId;
      const ticket = boardState.tickets.find((t) => t.id === ticketId);

      if (!ticket || ticket.status === newStatus) return;

      // Mark as recently moved to suppress WebSocket duplicate
      recentlyMovedRef.current.add(ticketId);
      setTimeout(() => recentlyMovedRef.current.delete(ticketId), 5000);

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
    // Mark as recently updated to suppress WebSocket duplicate
    recentlyUpdatedRef.current.add(updatedTicket.id);
    setTimeout(() => recentlyUpdatedRef.current.delete(updatedTicket.id), 5000);

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
    // Mark as recently created to suppress WebSocket toast
    recentlyCreatedRef.current.add(newTicket.id);
    
    setBoardState((prev) => {
      if (!prev) return prev;
      
      // Check if ticket already exists (might be added via WebSocket with partial data)
      const existingIndex = prev.tickets.findIndex(t => t.id === newTicket.id);
      if (existingIndex >= 0) {
        // Merge full ticket data over the partial WebSocket data
        const updatedTickets = [...prev.tickets];
        updatedTickets[existingIndex] = newTicket;
        return {
          ...prev,
          tickets: updatedTickets,
        };
      }
      
      // Add new ticket
      return {
        ...prev,
        tickets: [...prev.tickets, newTicket],
      };
    });
    setIsNewTicketOpen(false);
    showToast('Ticket created successfully', 'success');
    
    // Clean up after a short delay
    setTimeout(() => recentlyCreatedRef.current.delete(newTicket.id), 5000);
  }, []);

  // Quick archive from Done column
  const handleQuickArchive = useCallback(async (ticket: Ticket) => {
    if (!boardState) return;
    
    // Mark as recently updated to suppress WebSocket events
    recentlyUpdatedRef.current.add(ticket.id);
    setTimeout(() => recentlyUpdatedRef.current.delete(ticket.id), 5000);

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
    
    // Mark as recently deleted to suppress WebSocket duplicate
    recentlyDeletedRef.current.add(deleteConfirmTicket.id);
    setTimeout(() => recentlyDeletedRef.current.delete(deleteConfirmTicket.id), 5000);

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
