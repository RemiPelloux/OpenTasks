/**
 * Health Check Routes
 * Provides endpoints for monitoring application health
 */

import { Router } from 'express';
import { prisma } from '@opentasks/database';
import { cacheService } from '../services/cache.js';

export const healthRoutes = Router();

interface HealthStatus {
  status: 'healthy' | 'degraded' | 'unhealthy';
  version: string;
  uptime: number;
  timestamp: string;
  services: {
    database: {
      status: 'connected' | 'error';
      latencyMs: number;
    };
    redis: {
      status: 'connected' | 'error';
      latencyMs: number;
    };
  };
}

/**
 * GET /health
 * Returns comprehensive health status
 */
healthRoutes.get('/', async (_req, res) => {
  // Check database
  let dbStatus: 'connected' | 'error' = 'error';
  let dbLatency = -1;
  try {
    const dbStart = Date.now();
    await prisma.$queryRaw`SELECT 1`;
    dbLatency = Date.now() - dbStart;
    dbStatus = 'connected';
  } catch (error) {
    console.error('[Health] Database check failed:', error);
  }

  // Check Redis
  const redisHealth = await cacheService.healthCheck();

  // Determine overall status
  let overallStatus: HealthStatus['status'] = 'healthy';
  if (dbStatus === 'error' || !redisHealth.connected) {
    overallStatus = dbStatus === 'error' ? 'unhealthy' : 'degraded';
  }

  const health: HealthStatus = {
    status: overallStatus,
    version: process.env.npm_package_version || '1.0.0',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    services: {
      database: {
        status: dbStatus,
        latencyMs: dbLatency,
      },
      redis: {
        status: redisHealth.connected ? 'connected' : 'error',
        latencyMs: redisHealth.latencyMs,
      },
    },
  };

  // Set appropriate HTTP status
  const httpStatus = overallStatus === 'unhealthy' ? 503 : 200;
  
  res.status(httpStatus).json(health);
});

/**
 * GET /health/live
 * Kubernetes liveness probe - returns 200 if process is running
 */
healthRoutes.get('/live', (_req, res) => {
  res.status(200).json({ status: 'alive' });
});

/**
 * GET /health/ready
 * Kubernetes readiness probe - returns 200 if ready to accept traffic
 */
healthRoutes.get('/ready', async (_req, res) => {
  try {
    // Check database connectivity
    await prisma.$queryRaw`SELECT 1`;
    res.status(200).json({ status: 'ready' });
  } catch (error) {
    res.status(503).json({ status: 'not ready', error: 'Database unavailable' });
  }
});

