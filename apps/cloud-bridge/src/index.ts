/**
 * Cloud Bridge Worker Entry Point
 * Consumes jobs from Redis queue and dispatches to Cursor Cloud API
 */

import { Worker } from 'bullmq';
import { Redis } from 'ioredis';
import { processTicketJob } from './queue/processor.js';
import { config } from './config.js';

async function bootstrap(): Promise<void> {
  console.log(`
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   🌉 OpenTasks Cloud Bridge Starting                      ║
║                                                           ║
║   → Redis:  ${config.redis.url.substring(0, 30)}...                    ║
║   → Mode:   ${config.isProduction ? 'Production' : 'Development'}                              ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
  `);

  // Create Redis connection
  const connection = new Redis(config.redis.url, {
    maxRetriesPerRequest: null,
  });

  // Create worker
  const worker = new Worker(
    'cursor-agent-tasks',
    async (job) => {
      console.log(`\n📥 Processing job: ${job.id}`);
      console.log(`   Ticket: ${job.data.ticketId}`);
      console.log(`   Title: ${job.data.title}`);

      try {
        await processTicketJob(job);
        console.log(`✅ Job ${job.id} completed successfully`);
      } catch (error) {
        console.error(`❌ Job ${job.id} failed:`, error);
        throw error;
      }
    },
    {
      connection,
      concurrency: 5,
      limiter: {
        max: 10,
        duration: 60000, // 10 jobs per minute max
      },
    }
  );

  // Event handlers
  worker.on('completed', (job) => {
    console.log(`Job ${job.id} has completed`);
  });

  worker.on('failed', (job, err) => {
    console.error(`Job ${job?.id} has failed with ${err.message}`);
  });

  worker.on('error', (err) => {
    console.error('Worker error:', err);
  });

  // Graceful shutdown
  const shutdown = async (): Promise<void> => {
    console.log('\n🛑 Shutting down worker...');
    await worker.close();
    await connection.quit();
    console.log('Worker shut down gracefully');
    process.exit(0);
  };

  process.on('SIGINT', shutdown);
  process.on('SIGTERM', shutdown);

  console.log('🚀 Worker is running and waiting for jobs...\n');
}

bootstrap().catch((err) => {
  console.error('Failed to start worker:', err);
  process.exit(1);
});

