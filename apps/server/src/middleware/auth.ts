/**
 * Authentication Middleware
 * Guards for protected routes
 */

import type { Request, Response, NextFunction } from 'express';
import { prisma } from '@opentasks/database';

/**
 * Session user type
 */
export interface SessionUser {
  id: string;
  email: string;
  name: string;
  role: 'SUPER_ADMIN' | 'ADMIN' | 'MEMBER';
}

// Extend Express session
declare module 'express-session' {
  interface SessionData {
    user?: SessionUser;
  }
}

/**
 * Require authentication
 * Redirects to login if not authenticated
 */
export function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (!req.session?.user) {
    // Store intended destination for redirect after login
    // BUT exclude API endpoints (they should return JSON, not redirect)
    const url = req.originalUrl;
    const isApiEndpoint = url.includes('/api/') || url.endsWith('/state') || url.includes('/state?');
    
    if (!isApiEndpoint) {
      req.session.returnTo = url;
    }
    
    res.redirect('/login');
    return;
  }
  next();
}

/**
 * Require admin role (ADMIN or SUPER_ADMIN)
 */
export function requireAdmin(req: Request, res: Response, next: NextFunction): void {
  if (!req.session?.user) {
    res.redirect('/login');
    return;
  }
  if (!['ADMIN', 'SUPER_ADMIN'].includes(req.session.user.role)) {
    res.status(403).render('error', {
      title: 'Access Denied',
      message: 'You do not have permission to access this page.',
    });
    return;
  }
  next();
}

/**
 * Require super admin role
 */
export function requireSuperAdmin(req: Request, res: Response, next: NextFunction): void {
  if (!req.session?.user) {
    res.redirect('/login');
    return;
  }
  if (req.session.user.role !== 'SUPER_ADMIN') {
    res.status(403).render('error', {
      title: 'Access Denied',
      message: 'You do not have permission to access this page.',
    });
    return;
  }
  next();
}

/**
 * Require project membership
 * Must be used after requireAuth and with :projectId param
 */
export async function requireProjectAccess(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const projectId = req.params.projectId || req.params.id;
  const userId = req.session?.user?.id;

  if (!projectId || !userId) {
    res.status(403).render('error', {
      title: 'Access Denied',
      message: 'Invalid project or user.',
    });
    return;
  }

  try {
    const membership = await prisma.projectMember.findUnique({
      where: {
        projectId_userId: {
          projectId,
          userId,
        },
      },
    });

    if (!membership) {
      res.status(403).render('error', {
        title: 'Access Denied',
        message: 'You are not a member of this project.',
      });
      return;
    }

    // Attach project role to request for later use
    res.locals.projectRole = membership.role;
    next();
  } catch (error) {
    console.error('Project access check error:', error);
    res.status(500).render('error', {
      title: 'Error',
      message: 'Failed to verify project access.',
    });
  }
}

/**
 * Guest only (redirect if authenticated)
 */
export function guestOnly(req: Request, res: Response, next: NextFunction): void {
  if (req.session?.user) {
    res.redirect('/dashboard');
    return;
  }
  next();
}

