/**
 * Authentication Routes
 * Login, Register, Logout
 */

import { Router } from 'express';
import { prisma, RegisterSchema, LoginSchema, verifyPassword, hashPassword } from '@opentasks/database';
import { guestOnly } from '../middleware/auth.js';
import type { SessionUser } from '../middleware/auth.js';

export const authRoutes = Router();

/**
 * Login Page (GET)
 */
authRoutes.get('/login', guestOnly, (req, res) => {
  res.render('auth/login', {
    title: 'Sign In - OpenTasks',
    error: req.query.error,
  });
});

/**
 * Login Handler (POST)
 */
authRoutes.post('/login', guestOnly, async (req, res) => {
  try {
    const parseResult = LoginSchema.safeParse(req.body);
    if (!parseResult.success) {
      res.render('auth/login', {
        title: 'Sign In - OpenTasks',
        error: 'Invalid email or password format',
      });
      return;
    }

    const { email, password } = parseResult.data;

    // Find user
    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (!user) {
      res.render('auth/login', {
        title: 'Sign In - OpenTasks',
        error: 'Invalid email or password',
      });
      return;
    }

    // Check if user is active
    if (!user.isActive) {
      res.render('auth/login', {
        title: 'Sign In - OpenTasks',
        error: 'Your account has been deactivated. Contact an administrator.',
      });
      return;
    }

    // Verify password
    const isValid = await verifyPassword(password, user.passwordHash);
    if (!isValid) {
      res.render('auth/login', {
        title: 'Sign In - OpenTasks',
        error: 'Invalid email or password',
      });
      return;
    }

    // Update last login
    await prisma.user.update({
      where: { id: user.id },
      data: { lastLoginAt: new Date() },
    });

    // Create session
    const sessionUser: SessionUser = {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role as 'SUPER_ADMIN' | 'ADMIN' | 'MEMBER',
    };

    req.session.user = sessionUser;

    // Redirect to intended destination or dashboard
    const returnTo = req.session.returnTo || '/dashboard';
    delete req.session.returnTo;
    res.redirect(returnTo);
  } catch (error) {
    console.error('Login error:', error);
    res.render('auth/login', {
      title: 'Sign In - OpenTasks',
      error: 'An error occurred. Please try again.',
    });
  }
});

/**
 * Register Page (GET)
 */
authRoutes.get('/register', guestOnly, (req, res) => {
  res.render('auth/register', {
    title: 'Create Account - OpenTasks',
    error: req.query.error,
  });
});

/**
 * Register Handler (POST)
 */
authRoutes.post('/register', guestOnly, async (req, res) => {
  try {
    const parseResult = RegisterSchema.safeParse(req.body);
    if (!parseResult.success) {
      const errors = parseResult.error.flatten().fieldErrors;
      const errorMsg = Object.values(errors).flat()[0] || 'Invalid input';
      res.render('auth/register', {
        title: 'Create Account - OpenTasks',
        error: errorMsg,
      });
      return;
    }

    const { inviteCode, name, email, password } = parseResult.data;

    // Validate invite code
    const invite = await prisma.inviteCode.findUnique({
      where: { code: inviteCode.toUpperCase().trim() },
    });

    if (!invite) {
      res.render('auth/register', {
        title: 'Create Account - OpenTasks',
        error: 'Invalid invite code',
      });
      return;
    }

    if (!invite.isActive) {
      res.render('auth/register', {
        title: 'Create Account - OpenTasks',
        error: 'This invite code has been deactivated',
      });
      return;
    }

    // Check expiration
    if (invite.expiresAt && invite.expiresAt < new Date()) {
      res.render('auth/register', {
        title: 'Create Account - OpenTasks',
        error: 'This invite code has expired',
      });
      return;
    }

    // Check usage limits (for non-unlimited codes)
    if (invite.type !== 'UNLIMITED' && invite.currentUses >= invite.maxUses) {
      res.render('auth/register', {
        title: 'Create Account - OpenTasks',
        error: 'This invite code has reached its usage limit',
      });
      return;
    }

    // Check if email already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (existingUser) {
      res.render('auth/register', {
        title: 'Create Account - OpenTasks',
        error: 'An account with this email already exists',
      });
      return;
    }

    // Hash password
    const passwordHash = await hashPassword(password);

    // Create user and update invite code usage
    const user = await prisma.$transaction(async (tx) => {
      // Create user
      const newUser = await tx.user.create({
        data: {
          email: email.toLowerCase(),
          passwordHash,
          name: name.trim(),
          role: 'MEMBER',
          inviteCodeId: invite.type === 'SINGLE_USE' ? invite.id : null,
        },
      });

      // Update invite code usage
      if (invite.type !== 'UNLIMITED') {
        await tx.inviteCode.update({
          where: { id: invite.id },
          data: {
            currentUses: { increment: 1 },
            // Deactivate single-use codes
            ...(invite.type === 'SINGLE_USE' && { isActive: false }),
          },
        });
      }

      return newUser;
    });

    // Create session
    const sessionUser: SessionUser = {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role as 'SUPER_ADMIN' | 'ADMIN' | 'MEMBER',
    };

    req.session.user = sessionUser;
    res.redirect('/onboarding');
  } catch (error) {
    console.error('Registration error:', error);
    res.render('auth/register', {
      title: 'Create Account - OpenTasks',
      error: 'An error occurred. Please try again.',
    });
  }
});

/**
 * Logout Handler
 */
authRoutes.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Logout error:', err);
    }
    res.redirect('/');
  });
});

/**
 * Logout (GET - for direct link access)
 */
authRoutes.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Logout error:', err);
    }
    res.redirect('/');
  });
});
