/**
 * Route Configuration
 * Central routing setup for the MPA
 */

import type { Express } from 'express';
import { authRoutes } from './auth.js';
import { dashboardRoutes } from './dashboard.js';
import { projectRoutes } from './projects.js';
import { ticketRoutes } from './tickets.js';
import { webhookRoutes } from './webhooks.js';
import { adminRoutes } from './admin.js';
import { apiRoutes } from './api.js';
import { settingsRoutes } from './settings.js';

export function configureRoutes(app: Express): void {
  // Landing page
  app.get('/', (req, res) => {
    if (req.session?.user) {
      res.redirect('/dashboard');
      return;
    }
    res.render('landing', {
      title: 'OpenTasks - AI-Powered Project Management',
    });
  });

  // Auth routes
  app.use('/', authRoutes);

  // Dashboard routes (protected)
  app.use('/dashboard', dashboardRoutes);

  // Project routes (protected)
  app.use('/project', projectRoutes);

  // Admin routes (protected + admin only)
  app.use('/admin', adminRoutes);

  // User settings routes (protected)
  app.use('/settings', settingsRoutes);

  // Internal API routes (protected)
  app.use('/api', apiRoutes);

  // Ticket API routes (protected)
  app.use('/api/tickets', ticketRoutes);

  // Webhook routes (external)
  app.use('/api/webhooks', webhookRoutes);

  // 404 handler
  app.use((_req, res) => {
    res.status(404).render('error', {
      title: 'Page Not Found',
      message: 'The page you are looking for does not exist.',
    });
  });
}

