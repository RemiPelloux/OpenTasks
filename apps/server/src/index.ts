/**
 * OpenTasks Server Entry Point
 * Express MPA with server-side rendering
 */

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { configureMiddleware } from './middleware/index.js';
import { configureRoutes } from './routes/index.js';
import { config } from './config/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function bootstrap(): Promise<void> {
  const app = express();

  // View engine setup
  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, '../views'));

  // Static files
  app.use('/static', express.static(path.join(__dirname, '../public')));

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

  // Start server
  app.listen(config.port, config.host, () => {
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
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
    `);
  });
}

bootstrap().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});

