/**
 * WebSocket Service
 * Real-time updates via Socket.IO
 * Supports cluster mode via Redis adapter
 */

import { Server as HttpServer } from 'http';
import { Server, Socket } from 'socket.io';
import { createAdapter } from '@socket.io/redis-adapter';
import { Redis } from 'ioredis';
import { config } from '../config/index.js';

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

// Redis channel for cross-process events from cloud-bridge
const TICKET_EVENTS_CHANNEL = 'opentasks:ticket:events';

// Ticket data for broadcasts - includes all fields needed for display
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

class WebSocketService {
  private io: Server | null = null;
  private pubClient: Redis | null = null;
  private subClient: Redis | null = null;
  private eventSubClient: Redis | null = null;

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

    // Set up Redis adapter for cluster mode support
    try {
      this.pubClient = new Redis(config.redis.url);
      this.subClient = this.pubClient.duplicate();
      
      this.io.adapter(createAdapter(this.pubClient, this.subClient));
      console.log('[WebSocket] Redis adapter configured for cluster mode');

      // Subscribe to cloud-bridge events
      this.eventSubClient = new Redis(config.redis.url);
      this.eventSubClient.subscribe(TICKET_EVENTS_CHANNEL);
      this.eventSubClient.on('message', (channel, message) => {
        if (channel === TICKET_EVENTS_CHANNEL) {
          this.handleCloudBridgeEvent(message);
        }
      });
      console.log('[WebSocket] Subscribed to cloud-bridge events');
    } catch (error) {
      console.warn('[WebSocket] Redis adapter not available, running in single-instance mode:', error);
    }

    this.io.on(WS_EVENTS.CONNECTION, (socket) => {
      this.handleConnection(socket);
    });

    console.log('[WebSocket] Server initialized');
  }

  /**
   * Handle events from cloud-bridge worker
   */
  private handleCloudBridgeEvent(message: string): void {
    try {
      const event = JSON.parse(message);
      const { type, projectId, ticket, fromStatus, toStatus } = event;

      console.log(`[WebSocket] Received cloud-bridge event: ${type} for project ${projectId}`);

      switch (type) {
        case 'created':
          this.ticketCreated(projectId, ticket);
          break;
        case 'updated':
          this.ticketUpdated(projectId, ticket);
          break;
        case 'deleted':
          this.ticketDeleted(projectId, ticket.id);
          break;
        case 'moved':
          // For moved events, use ticketMoved if we have the status info
          if (fromStatus && toStatus) {
            this.ticketMoved(projectId, ticket.id, fromStatus, toStatus, ticket.position);
          } else {
            // Fallback to ticketUpdated
            this.ticketUpdated(projectId, ticket);
          }
          break;
      }
    } catch (error) {
      console.error('[WebSocket] Failed to parse cloud-bridge event:', error);
    }
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
  async close(): Promise<void> {
    // Close Redis clients
    if (this.pubClient) {
      await this.pubClient.quit();
      this.pubClient = null;
    }
    if (this.subClient) {
      await this.subClient.quit();
      this.subClient = null;
    }
    if (this.eventSubClient) {
      await this.eventSubClient.quit();
      this.eventSubClient = null;
    }

    // Close Socket.IO server
    return new Promise((resolve) => {
      if (this.io) {
        this.io.close(() => {
          console.log('[WebSocket] Server closed');
          this.io = null;
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
  description?: string | null;
  status: string;
  priority: string;
  position?: number;
  targetBranch?: string | null;
  assigneeId?: string | null;
  agentStatus?: string | null;
  prLink?: string | null;
  aiSummary?: string | null;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

// Helper function to convert Prisma ticket to broadcast format
export function toTicketBroadcast(ticket: TicketInput): TicketBroadcast {
  return {
    id: ticket.id,
    title: ticket.title,
    description: ticket.description,
    status: ticket.status,
    priority: ticket.priority,
    position: ticket.position ?? 0,
    targetBranch: ticket.targetBranch,
    assigneeId: ticket.assigneeId,
    agentStatus: ticket.agentStatus,
    prLink: ticket.prLink,
    aiSummary: ticket.aiSummary,
    createdAt: ticket.createdAt instanceof Date ? ticket.createdAt.toISOString() : ticket.createdAt,
    updatedAt: ticket.updatedAt instanceof Date ? ticket.updatedAt.toISOString() : ticket.updatedAt,
  };
}

