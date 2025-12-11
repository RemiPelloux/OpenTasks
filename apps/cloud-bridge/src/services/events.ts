/**
 * Event Publisher
 * Publishes ticket events to Redis for WebSocket broadcasting
 */

import { Redis } from 'ioredis';
import { config } from '../config.js';

// Event channel name
export const TICKET_EVENTS_CHANNEL = 'opentasks:ticket:events';

// Event types
export interface TicketEvent {
  type: 'created' | 'updated' | 'deleted' | 'moved';
  projectId: string;
  fromStatus?: string;
  toStatus?: string;
  ticket: {
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
  };
}

class EventPublisher {
  private redis: Redis | null = null;

  async connect(): Promise<void> {
    if (this.redis) return;

    this.redis = new Redis(config.redis.url, {
      maxRetriesPerRequest: 3,
    });

    this.redis.on('error', (error) => {
      console.error('[EventPublisher] Redis error:', error.message);
    });

    console.log('[EventPublisher] Connected to Redis');
  }

  async publish(event: TicketEvent): Promise<void> {
    if (!this.redis) {
      console.warn('[EventPublisher] Not connected, skipping event');
      return;
    }

    try {
      await this.redis.publish(TICKET_EVENTS_CHANNEL, JSON.stringify(event));
    } catch (error) {
      console.error('[EventPublisher] Failed to publish event:', error);
    }
  }

  async disconnect(): Promise<void> {
    if (this.redis) {
      await this.redis.quit();
      this.redis = null;
    }
  }
}

export const eventPublisher = new EventPublisher();



