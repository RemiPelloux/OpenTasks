/**
 * Rate Limiting Middleware
 * Protects API endpoints from abuse
 */

import rateLimit from 'express-rate-limit';
import type { Request, Response, NextFunction } from 'express';
import { config } from '../config/index.js';

// Rate limit configurations
const RATE_LIMITS = {
  // Authentication endpoints - strict limit
  auth: {
    windowMs: 60 * 1000, // 1 minute
    max: 5, // 5 requests per minute
    message: 'Too many authentication attempts, please try again later.',
  },
  // API endpoints - moderate limit
  api: {
    windowMs: 60 * 1000, // 1 minute
    max: 100, // 100 requests per minute
    message: 'Too many API requests, please try again later.',
  },
  // Board state polling - to prevent abuse during polling
  boardState: {
    windowMs: 60 * 1000, // 1 minute
    max: 30, // 30 requests per minute
    message: 'Too many board state requests, please try again later.',
  },
  // Cursor API proxy - to prevent API abuse
  cursorApi: {
    windowMs: 60 * 1000, // 1 minute
    max: 20, // 20 requests per minute
    message: 'Too many Cursor API requests, please try again later.',
  },
  // Ticket creation - prevent spam
  ticketCreate: {
    windowMs: 60 * 1000, // 1 minute
    max: 10, // 10 tickets per minute
    message: 'Too many ticket creation requests, please slow down.',
  },
} as const;

/**
 * Create a rate limiter with given config
 */
function createLimiter(limitConfig: typeof RATE_LIMITS[keyof typeof RATE_LIMITS]) {
  return rateLimit({
    windowMs: limitConfig.windowMs,
    max: limitConfig.max,
    message: { error: limitConfig.message },
    standardHeaders: true, // Return rate limit info in headers
    legacyHeaders: false,
    keyGenerator: (req: Request) => {
      // Use user ID if authenticated, otherwise IP
      return req.session?.user?.id || req.ip || 'unknown';
    },
    skip: () => !config.isProduction, // Skip in development
    handler: (_req: Request, res: Response) => {
      res.status(429).json({ error: limitConfig.message });
    },
  });
}

// Export pre-configured limiters
export const authLimiter = createLimiter(RATE_LIMITS.auth);
export const apiLimiter = createLimiter(RATE_LIMITS.api);
export const boardStateLimiter = createLimiter(RATE_LIMITS.boardState);
export const cursorApiLimiter = createLimiter(RATE_LIMITS.cursorApi);
export const ticketCreateLimiter = createLimiter(RATE_LIMITS.ticketCreate);

/**
 * Composite middleware that applies different limits based on route
 */
export function dynamicRateLimiter(req: Request, res: Response, next: NextFunction): void {
  // Skip in development
  if (!config.isProduction) {
    return next();
  }

  const path = req.path.toLowerCase();

  // Apply specific limiters based on path
  if (path.includes('/auth') || path.includes('/login') || path.includes('/register')) {
    return authLimiter(req, res, next);
  }

  if (path.includes('/cursor')) {
    return cursorApiLimiter(req, res, next);
  }

  if (path.includes('/board/state')) {
    return boardStateLimiter(req, res, next);
  }

  if (path.includes('/tickets') && req.method === 'POST') {
    return ticketCreateLimiter(req, res, next);
  }

  // Default API limiter
  if (path.startsWith('/api')) {
    return apiLimiter(req, res, next);
  }

  next();
}

/**
 * Global rate limiter for all requests
 */
export const globalLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 200, // 200 requests per minute per IP
  message: { error: 'Too many requests, please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
  skip: () => !config.isProduction,
});

