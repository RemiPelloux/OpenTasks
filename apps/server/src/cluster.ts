/**
 * Node.js Cluster Mode for Multi-Core Utilization
 * Forks worker processes based on available CPU cores
 * 
 * Usage: node dist/cluster.js
 */

import cluster from 'cluster';
import os from 'os';

const numCPUs = os.cpus().length;
const MAX_WORKERS = parseInt(process.env.MAX_WORKERS || '4', 10);
const WORKER_COUNT = Math.min(numCPUs, MAX_WORKERS);

if (cluster.isPrimary) {
  console.log(`
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   🚀 OpenTasks Cluster Mode                               ║
║                                                           ║
║   → Primary PID: ${process.pid.toString().padEnd(38)}║
║   → CPU Cores:   ${numCPUs.toString().padEnd(38)}║
║   → Workers:     ${WORKER_COUNT.toString().padEnd(38)}║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
  `);

  // Fork workers
  for (let i = 0; i < WORKER_COUNT; i++) {
    const worker = cluster.fork();
    console.log(`[Cluster] Worker ${worker.process.pid} started`);
  }

  // Handle worker exit
  cluster.on('exit', (worker, code, signal) => {
    console.log(`[Cluster] Worker ${worker.process.pid} died (${signal || code}). Restarting...`);
    
    // Restart worker after a brief delay
    setTimeout(() => {
      const newWorker = cluster.fork();
      console.log(`[Cluster] New worker ${newWorker.process.pid} started`);
    }, 1000);
  });

  // Handle worker messages
  cluster.on('message', (worker, message) => {
    if (message.type === 'health') {
      console.log(`[Cluster] Worker ${worker.process.pid} health: ${JSON.stringify(message.data)}`);
    }
  });

  // Graceful shutdown
  process.on('SIGTERM', async () => {
    console.log('[Cluster] Received SIGTERM, shutting down workers...');
    
    for (const id in cluster.workers) {
      const worker = cluster.workers[id];
      if (worker) {
        worker.send('shutdown');
        worker.disconnect();
      }
    }

    // Wait for workers to exit
    setTimeout(() => {
      console.log('[Cluster] Force exiting...');
      process.exit(0);
    }, 10000);
  });

  process.on('SIGINT', () => {
    console.log('[Cluster] Received SIGINT, shutting down...');
    process.emit('SIGTERM', 'SIGTERM');
  });

} else {
  // Worker process - start the server
  import('./index.js').catch((err) => {
    console.error('[Worker] Failed to start:', err);
    process.exit(1);
  });

  // Listen for shutdown signal from primary
  process.on('message', (message) => {
    if (message === 'shutdown') {
      console.log(`[Worker ${process.pid}] Shutting down...`);
      process.exit(0);
    }
  });

  // Report health periodically
  setInterval(() => {
    const memUsage = process.memoryUsage();
    process.send?.({
      type: 'health',
      data: {
        pid: process.pid,
        heapUsed: Math.round(memUsage.heapUsed / 1024 / 1024),
        rss: Math.round(memUsage.rss / 1024 / 1024),
        uptime: process.uptime(),
      },
    });
  }, 30000); // Every 30 seconds
}





