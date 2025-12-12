/**
 * BullMQ Queue Client
 * Sends jobs to the cloud-bridge worker
 */

import { Queue } from 'bullmq';
import { Redis } from 'ioredis';
import { config } from '../config/index.js';

// Create Redis connection
const connection = new Redis(config.redis.url, {
  maxRetriesPerRequest: null,
});

// Create queue
export const cursorAgentQueue = new Queue('cursor-agent-tasks', {
  connection,
  defaultJobOptions: {
    attempts: 3,
    backoff: {
      type: 'exponential',
      delay: 5000,
    },
    removeOnComplete: 100,
    removeOnFail: 500,
  },
});

export interface TicketJobData {
  jobId: string;
  ticketId: string;
  projectId: string;
  prompt: string;
  title: string;
  aiModel?: string;
  targetBranch?: string;
}

/**
 * Add a ticket job to the queue
 */
export async function addTicketJob(data: TicketJobData): Promise<void> {
  await cursorAgentQueue.add(`ticket-${data.ticketId}`, data, {
    jobId: data.jobId,
  });
  console.log(`[Queue] Added job ${data.jobId} to cursor-agent-tasks queue`);
}

/**
 * Close queue connection (for graceful shutdown)
 */
export async function closeQueue(): Promise<void> {
  await cursorAgentQueue.close();
  await connection.quit();
}






