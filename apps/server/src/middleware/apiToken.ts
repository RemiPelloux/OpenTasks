/**
 * API Token Authentication Middleware
 * For Cursor extension and other API integrations
 */

import type { Request, Response, NextFunction } from 'express';
import { createHash, randomBytes } from 'crypto';
import { prisma } from '@opentasks/database';

/**
 * API user type (similar to SessionUser but for token auth)
 */
export interface ApiUser {
  id: string;
  email: string;
  name: string;
  role: 'SUPER_ADMIN' | 'ADMIN' | 'MEMBER';
}

// Extend Express request to include apiUser
declare global {
  namespace Express {
    interface Request {
      apiUser?: ApiUser;
    }
  }
}

/**
 * Hash a token using SHA-256
 */
export function hashToken(token: string): string {
  return createHash('sha256').update(token).digest('hex');
}

/**
 * Generate a cryptographically secure random token
 */
export function generateToken(): string {
  // Generate 32 bytes (256 bits) and encode as base64url
  return randomBytes(32).toString('base64url');
}

/**
 * Require API token authentication
 * Checks Bearer token in Authorization header
 */
export async function requireApiToken(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    // Extract token from Authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).json({
        error: 'Unauthorized',
        message: 'Missing or invalid Authorization header. Expected: Bearer <token>',
      });
      return;
    }

    const token = authHeader.substring(7); // Remove 'Bearer ' prefix
    if (!token) {
      res.status(401).json({
        error: 'Unauthorized',
        message: 'Token is empty',
      });
      return;
    }

    // Hash the token
    const tokenHash = hashToken(token);

    // Look up token in database
    const apiToken = await prisma.apiToken.findUnique({
      where: { tokenHash },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            name: true,
            role: true,
            isActive: true,
          },
        },
      },
    });

    if (!apiToken) {
      res.status(401).json({
        error: 'Unauthorized',
        message: 'Invalid token',
      });
      return;
    }

    // Check if token is revoked
    if (apiToken.revokedAt) {
      res.status(401).json({
        error: 'Unauthorized',
        message: 'Token has been revoked',
      });
      return;
    }

    // Check if token is expired
    if (apiToken.expiresAt && apiToken.expiresAt < new Date()) {
      res.status(401).json({
        error: 'Unauthorized',
        message: 'Token has expired',
      });
      return;
    }

    // Check if user is active
    if (!apiToken.user.isActive) {
      res.status(401).json({
        error: 'Unauthorized',
        message: 'User account is deactivated',
      });
      return;
    }

    // Update last used timestamp (async, don't await)
    prisma.apiToken
      .update({
        where: { id: apiToken.id },
        data: { lastUsedAt: new Date() },
      })
      .catch((err) => {
        console.error('Failed to update token lastUsedAt:', err);
      });

    // Attach API user to request
    req.apiUser = {
      id: apiToken.user.id,
      email: apiToken.user.email,
      name: apiToken.user.name,
      role: apiToken.user.role as 'SUPER_ADMIN' | 'ADMIN' | 'MEMBER',
    };

    next();
  } catch (error) {
    console.error('API token auth error:', error);
    res.status(500).json({
      error: 'Internal Server Error',
      message: 'Failed to authenticate token',
    });
  }
}

/**
 * Optional API token authentication
 * Attaches apiUser if valid token provided, but doesn't require it
 */
export async function optionalApiToken(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    next();
    return;
  }

  // Use requireApiToken but swallow auth errors
  try {
    await requireApiToken(req, res, next);
  } catch (error) {
    next();
  }
}

