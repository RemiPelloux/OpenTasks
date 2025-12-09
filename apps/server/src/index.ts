/**
 * OpenTasks Server Entry Point
 * Express MPA with server-side rendering
 */

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer, type Server } from 'http';
import { configureMiddleware } from './middleware/index.js';
import { configureRoutes } from './routes/index.js';
import { config } from './config/index.js';
import { cacheService } from './services/cache.js';
import { wsService } from './services/websocket.js';
import { prisma } from '@opentasks/database';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let httpServer: Server;

async function bootstrap(): Promise<void> {
  const app = express();

  // View engine setup
  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, '../views'));

  // Trust proxy for rate limiting behind reverse proxy
  app.set('trust proxy', 1);

  // Static files with caching headers
  app.use('/static', express.static(path.join(__dirname, '../public'), {
    maxAge: config.isProduction ? '1d' : 0,
    etag: true,
  }));

  // Initialize cache service
  await cacheService.connect();

  // Configure middleware
  await configureMiddleware(app);

  // Configure routes
  configureRoutes(app);

  // Error handling
  app.use(
    (
      err: Error,
      _req: express.Request,
      res: express.Response,
      _next: express.NextFunction
    ): void => {
      console.error('Unhandled error:', err);
      res.status(500).render('error', {
        title: 'Error',
        message: config.isProduction ? 'Something went wrong' : err.message,
      });
    }
  );

  // Create HTTP server
  httpServer = createServer(app);

  // Initialize WebSocket server
  wsService.initialize(httpServer);

  // Start server
  httpServer.listen(config.port, config.host, () => {
    const localUrl = `http://localhost:${config.port}`;
    const networkUrl = config.host === '0.0.0.0' 
      ? `http://<your-ip>:${config.port}` 
      : `http://${config.host}:${config.port}`;
    
    console.log(`
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   🚀 OpenTasks Server Running                             ║
║                                                           ║
║   → Local:   ${localUrl.padEnd(35)}║
║   → Network: ${networkUrl.padEnd(35)}║
║   → Mode:    ${(config.isProduction ? 'Production' : 'Development').padEnd(35)}║
║   → Health:  ${(localUrl + '/health').padEnd(35)}║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
    `);
  });
}

/**
 * Graceful shutdown handler
 */
async function gracefulShutdown(signal: string): Promise<void> {
  console.log(`\n[Shutdown] Received ${signal}, starting graceful shutdown...`);

  // Stop accepting new connections
  if (httpServer) {
    httpServer.close(() => {
      console.log('[Shutdown] HTTP server closed');
    });
  }

  // Close WebSocket connections
  await wsService.close();
  console.log('[Shutdown] WebSocket server closed');

  // Close cache connection
  await cacheService.disconnect();
  console.log('[Shutdown] Cache disconnected');

  // Close database connection
  await prisma.$disconnect();
  console.log('[Shutdown] Database disconnected');

  console.log('[Shutdown] Graceful shutdown complete');
  process.exit(0);
}

// Register shutdown handlers
process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('[Fatal] Uncaught exception:', error);
  gracefulShutdown('uncaughtException');
});

process.on('unhandledRejection', (reason) => {
  console.error('[Fatal] Unhandled rejection:', reason);
});

bootstrap().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});

