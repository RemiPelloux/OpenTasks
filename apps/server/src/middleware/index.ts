/**
 * Middleware Configuration
 * Sets up all Express middleware
 */

import express, { type Express } from 'express';
import compression from 'compression';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import RedisStore from 'connect-redis';
import { Redis } from 'ioredis';
import { doubleCsrf } from 'csrf-csrf';
import { config } from '../config/index.js';

export async function configureMiddleware(app: Express): Promise<void> {
  // Security headers - relaxed for IP-based access without HTTPS
  // When accessed via IP (not HTTPS), strict CORS headers break resources
  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          scriptSrc: ["'self'", "'unsafe-inline'"],
          styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
          fontSrc: ["'self'", 'https://fonts.gstatic.com'],
          imgSrc: ["'self'", 'data:', 'https:'],
          connectSrc: ["'self'", 'ws:', 'wss:'],
          // Only upgrade insecure requests when HTTPS is available
          upgradeInsecureRequests: config.isHttps ? [] : null,
        },
      },
      // Disable these headers for HTTP (IP-based) access - they require HTTPS
      crossOriginOpenerPolicy: config.isHttps ? { policy: 'same-origin' } : false,
      crossOriginEmbedderPolicy: config.isHttps,
      crossOriginResourcePolicy: config.isHttps ? { policy: 'same-origin' } : false,
      originAgentCluster: config.isHttps,
    })
  );

  // Compression
  app.use(compression());

  // Logging
  app.use(morgan(config.isProduction ? 'combined' : 'dev'));

  // Body parsing
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Cookie parsing
  app.use(cookieParser(config.session.secret));

  // Redis client for session store
  const redis = new Redis(config.redis.url);

  // Session configuration
  app.use(
    session({
      store: new RedisStore({ client: redis }),
      secret: config.session.secret,
      resave: false,
      saveUninitialized: false,
      name: 'opentasks.sid',
      cookie: {
        httpOnly: true,
        secure: config.isProduction,
        sameSite: 'strict',
        maxAge: config.session.maxAge,
      },
    })
  );

  // CSRF protection
  const { doubleCsrfProtection, generateToken } = doubleCsrf({
    getSecret: () => config.csrf.secret,
    cookieName: 'opentasks.csrf',
    cookieOptions: {
      httpOnly: true,
      secure: config.isProduction,
      sameSite: 'strict',
    },
    getTokenFromRequest: (req) => {
      // Check header first, then body
      return (
        (req.headers['x-csrf-token'] as string) ||
        (req.body as { _csrf?: string })?._csrf
      );
    },
  });

  // Make CSRF token available to all views
  app.use((req, res, next) => {
    res.locals.csrfToken = generateToken(req, res);
    next();
  });

  // Apply CSRF protection to state-changing requests
  app.use((req, res, next) => {
    // Skip CSRF for GET, HEAD, OPTIONS
    if (['GET', 'HEAD', 'OPTIONS'].includes(req.method)) {
      return next();
    }
    // Skip for webhook endpoints (they use their own auth)
    if (req.path.startsWith('/api/webhooks')) {
      return next();
    }
    return doubleCsrfProtection(req, res, next);
  });

  // Make user available to all views
  app.use((req, res, next) => {
    res.locals.user = req.session?.user || null;
    res.locals.isAuthenticated = !!req.session?.user;
    next();
  });
}

