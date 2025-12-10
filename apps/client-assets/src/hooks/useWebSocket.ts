/**
 * WebSocket Hook for Real-time Updates
 */

import { useEffect, useRef, useCallback } from 'react';
import { io, Socket } from 'socket.io-client';

// Event types (must match server)
export const WS_EVENTS = {
  JOIN_PROJECT: 'project:join',
  LEAVE_PROJECT: 'project:leave',
  TICKET_CREATED: 'ticket:created',
  TICKET_UPDATED: 'ticket:updated',
  TICKET_DELETED: 'ticket:deleted',
  TICKET_MOVED: 'ticket:moved',
  BOARD_REFRESH: 'board:refresh',
} as const;

interface TicketBroadcast {
  id: string;
  title: string;
  description?: string | null;
  status: string;
  priority: string;
  position: number;
  targetBranch?: string | null;
  assigneeId?: string | null;
  agentStatus?: string | null;
  prLink?: string | null;
  aiSummary?: string | null;
  createdAt?: string;
  updatedAt?: string;
}

interface TicketMovedData {
  id: string;
  fromStatus: string;
  toStatus: string;
  position: number;
}

interface UseWebSocketOptions {
  projectId: string | null;
  onTicketCreated?: (ticket: TicketBroadcast) => void;
  onTicketUpdated?: (ticket: TicketBroadcast) => void;
  onTicketDeleted?: (data: { id: string }) => void;
  onTicketMoved?: (data: TicketMovedData) => void;
  onBoardRefresh?: () => void;
}

export function useWebSocket({
  projectId,
  onTicketCreated,
  onTicketUpdated,
  onTicketDeleted,
  onTicketMoved,
  onBoardRefresh,
}: UseWebSocketOptions) {
  const socketRef = useRef<Socket | null>(null);
  const isConnectedRef = useRef(false);
  
  // Store callbacks in refs to avoid reconnection when they change
  const callbacksRef = useRef({
    onTicketCreated,
    onTicketUpdated,
    onTicketDeleted,
    onTicketMoved,
    onBoardRefresh,
  });

  // Update refs when callbacks change (without triggering reconnect)
  useEffect(() => {
    callbacksRef.current = {
      onTicketCreated,
      onTicketUpdated,
      onTicketDeleted,
      onTicketMoved,
      onBoardRefresh,
    };
  }, [onTicketCreated, onTicketUpdated, onTicketDeleted, onTicketMoved, onBoardRefresh]);

  // Connect to WebSocket - only reconnects when projectId changes
  useEffect(() => {
    if (!projectId) return;

    // Create socket connection
    const socket = io({
      transports: ['websocket', 'polling'],
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
    });

    socketRef.current = socket;

    socket.on('connect', () => {
      console.log('[WebSocket] Connected');
      isConnectedRef.current = true;
      // Join project room
      socket.emit(WS_EVENTS.JOIN_PROJECT, projectId);
    });

    socket.on('disconnect', (reason) => {
      console.log('[WebSocket] Disconnected:', reason);
      isConnectedRef.current = false;
    });

    socket.on('connect_error', (error) => {
      console.error('[WebSocket] Connection error:', error);
    });

    // Event listeners - use refs to always call latest callbacks
    socket.on(WS_EVENTS.TICKET_CREATED, (ticket: TicketBroadcast) => {
      console.log('[WebSocket] Ticket created:', ticket.id);
      callbacksRef.current.onTicketCreated?.(ticket);
    });

    socket.on(WS_EVENTS.TICKET_UPDATED, (ticket: TicketBroadcast) => {
      console.log('[WebSocket] Ticket updated:', ticket.id);
      callbacksRef.current.onTicketUpdated?.(ticket);
    });

    socket.on(WS_EVENTS.TICKET_DELETED, (data: { id: string }) => {
      console.log('[WebSocket] Ticket deleted:', data.id);
      callbacksRef.current.onTicketDeleted?.(data);
    });

    socket.on(WS_EVENTS.TICKET_MOVED, (data: TicketMovedData) => {
      console.log('[WebSocket] Ticket moved:', data.id, data.fromStatus, '->', data.toStatus);
      callbacksRef.current.onTicketMoved?.(data);
    });

    socket.on(WS_EVENTS.BOARD_REFRESH, () => {
      console.log('[WebSocket] Board refresh requested');
      callbacksRef.current.onBoardRefresh?.();
    });

    return () => {
      if (socket.connected) {
        socket.emit(WS_EVENTS.LEAVE_PROJECT, projectId);
      }
      socket.disconnect();
      socketRef.current = null;
      isConnectedRef.current = false;
    };
  }, [projectId]); // Only reconnect when projectId changes

  // Check if connected
  const isConnected = useCallback(() => {
    return isConnectedRef.current;
  }, []);

  return { isConnected };
}

