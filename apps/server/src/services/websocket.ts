/**
 * WebSocket Service
 * Real-time updates via Socket.IO
 */

import { Server as HttpServer } from 'http';
import { Server, Socket } from 'socket.io';

// Event types
export const WS_EVENTS = {
  // Client -> Server
  JOIN_PROJECT: 'project:join',
  LEAVE_PROJECT: 'project:leave',
  
  // Server -> Client
  TICKET_CREATED: 'ticket:created',
  TICKET_UPDATED: 'ticket:updated',
  TICKET_DELETED: 'ticket:deleted',
  TICKET_MOVED: 'ticket:moved',
  BOARD_REFRESH: 'board:refresh',
  
  // Connection
  CONNECTION: 'connection',
  DISCONNECT: 'disconnect',
  ERROR: 'error',
} as const;

// Minimal ticket data for broadcasts
interface TicketBroadcast {
  id: string;
  title: string;
  status: string;
  priority: string;
  position: number;
  assigneeId?: string | null;
  agentStatus?: string | null;
  prLink?: string | null;
}

class WebSocketService {
  private io: Server | null = null;

  /**
   * Initialize Socket.IO server
   */
  initialize(httpServer: HttpServer): void {
    this.io = new Server(httpServer, {
      cors: {
        origin: process.env.NODE_ENV === 'production' 
          ? false 
          : ['http://localhost:3000', 'http://127.0.0.1:3000'],
        credentials: true,
      },
      // Performance optimizations
      pingTimeout: 60000,
      pingInterval: 25000,
      transports: ['websocket', 'polling'],
    });

    this.io.on(WS_EVENTS.CONNECTION, (socket) => {
      this.handleConnection(socket);
    });

    console.log('[WebSocket] Server initialized');
  }

  /**
   * Handle new socket connection
   */
  private handleConnection(socket: Socket): void {
    console.log(`[WebSocket] Client connected: ${socket.id}`);

    // Join project room
    socket.on(WS_EVENTS.JOIN_PROJECT, (projectId: string) => {
      const room = this.getProjectRoom(projectId);
      socket.join(room);
      console.log(`[WebSocket] Client ${socket.id} joined project ${projectId}`);
    });

    // Leave project room
    socket.on(WS_EVENTS.LEAVE_PROJECT, (projectId: string) => {
      const room = this.getProjectRoom(projectId);
      socket.leave(room);
      console.log(`[WebSocket] Client ${socket.id} left project ${projectId}`);
    });

    // Handle disconnection
    socket.on(WS_EVENTS.DISCONNECT, (reason) => {
      console.log(`[WebSocket] Client disconnected: ${socket.id}, reason: ${reason}`);
    });

    // Handle errors
    socket.on(WS_EVENTS.ERROR, (error) => {
      console.error(`[WebSocket] Error from ${socket.id}:`, error);
    });
  }

  /**
   * Get room name for a project
   */
  private getProjectRoom(projectId: string): string {
    return `project:${projectId}`;
  }

  /**
   * Broadcast ticket created event
   */
  ticketCreated(projectId: string, ticket: TicketBroadcast): void {
    if (!this.io) return;
    this.io.to(this.getProjectRoom(projectId)).emit(WS_EVENTS.TICKET_CREATED, ticket);
  }

  /**
   * Broadcast ticket updated event
   */
  ticketUpdated(projectId: string, ticket: TicketBroadcast): void {
    if (!this.io) return;
    this.io.to(this.getProjectRoom(projectId)).emit(WS_EVENTS.TICKET_UPDATED, ticket);
  }

  /**
   * Broadcast ticket deleted event
   */
  ticketDeleted(projectId: string, ticketId: string): void {
    if (!this.io) return;
    this.io.to(this.getProjectRoom(projectId)).emit(WS_EVENTS.TICKET_DELETED, { id: ticketId });
  }

  /**
   * Broadcast ticket moved event (status change)
   */
  ticketMoved(projectId: string, ticketId: string, fromStatus: string, toStatus: string, position: number): void {
    if (!this.io) return;
    this.io.to(this.getProjectRoom(projectId)).emit(WS_EVENTS.TICKET_MOVED, {
      id: ticketId,
      fromStatus,
      toStatus,
      position,
    });
  }

  /**
   * Request full board refresh (fallback)
   */
  boardRefresh(projectId: string): void {
    if (!this.io) return;
    this.io.to(this.getProjectRoom(projectId)).emit(WS_EVENTS.BOARD_REFRESH);
  }

  /**
   * Get connected client count for a project
   */
  async getProjectClientCount(projectId: string): Promise<number> {
    if (!this.io) return 0;
    const room = this.getProjectRoom(projectId);
    const sockets = await this.io.in(room).fetchSockets();
    return sockets.length;
  }

  /**
   * Close WebSocket server
   */
  close(): Promise<void> {
    return new Promise((resolve) => {
      if (this.io) {
        this.io.close(() => {
          console.log('[WebSocket] Server closed');
          resolve();
        });
      } else {
        resolve();
      }
    });
  }

  /**
   * Check if initialized
   */
  isInitialized(): boolean {
    return this.io !== null;
  }
}

// Singleton instance
export const wsService = new WebSocketService();

// Input type for ticket conversion
interface TicketInput {
  id: string;
  title: string;
  status: string;
  priority: string;
  position?: number;
  assigneeId?: string | null;
  agentStatus?: string | null;
  prLink?: string | null;
}

// Helper function to convert Prisma ticket to broadcast format
export function toTicketBroadcast(ticket: TicketInput): TicketBroadcast {
  return {
    id: ticket.id,
    title: ticket.title,
    status: ticket.status,
    priority: ticket.priority,
    position: ticket.position ?? 0,
    assigneeId: ticket.assigneeId,
    agentStatus: ticket.agentStatus,
    prLink: ticket.prLink,
  };
}

