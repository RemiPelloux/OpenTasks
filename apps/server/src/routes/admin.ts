/**
 * Admin Routes
 * User and Invite Code Management
 */

import { Router } from 'express';
import crypto from 'crypto';
import { prisma } from '@opentasks/database';
import { requireAuth, requireAdmin } from '../middleware/auth.js';

export const adminRoutes = Router();

// Apply auth and admin check to all admin routes
adminRoutes.use(requireAuth);
adminRoutes.use(requireAdmin);

// Admin Dashboard
adminRoutes.get('/', async (req, res) => {
  try {
    // Get stats
    const [userCount, projectCount, ticketCount, activeInviteCount] = await Promise.all([
      prisma.user.count(),
      prisma.project.count(),
      prisma.ticket.count(),
      prisma.inviteCode.count({ where: { isActive: true } }),
    ]);

    // Get recent users
    const recentUsers = await prisma.user.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
      include: {
        inviteCodeUsed: {
          select: { code: true },
        },
      },
    });

    res.render('admin/index', {
      title: 'Admin Dashboard - OpenTasks',
      currentPath: '/admin',
      stats: {
        users: userCount,
        projects: projectCount,
        tickets: ticketCount,
        invites: activeInviteCount,
      },
      recentUsers,
    });
  } catch (error) {
    console.error('Admin dashboard error:', error);
    res.status(500).render('error', {
      title: 'Error',
      message: 'Failed to load admin dashboard',
    });
  }
});

// Users List
adminRoutes.get('/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        inviteCodeUsed: {
          select: { code: true },
        },
        _count: {
          select: {
            projects: true,
            createdTickets: true,
          },
        },
      },
    });

    res.render('admin/users', {
      title: 'Users - Admin - OpenTasks',
      currentPath: '/admin/users',
      users,
    });
  } catch (error) {
    console.error('Users list error:', error);
    res.status(500).render('error', {
      title: 'Error',
      message: 'Failed to load users',
    });
  }
});

// Update User Role
adminRoutes.post('/users/:id/role', async (req, res) => {
  try {
    const { id } = req.params;
    const { role } = req.body;

    // Prevent changing own role
    if (id === req.session.user?.id) {
      res.redirect('/admin/users?error=Cannot change your own role');
      return;
    }

    // Validate role
    if (!['SUPER_ADMIN', 'ADMIN', 'MEMBER'].includes(role)) {
      res.redirect('/admin/users?error=Invalid role');
      return;
    }

    await prisma.user.update({
      where: { id },
      data: { role },
    });

    res.redirect('/admin/users?success=User role updated');
  } catch (error) {
    console.error('Update user role error:', error);
    res.redirect('/admin/users?error=Failed to update role');
  }
});

// Toggle User Active Status
adminRoutes.post('/users/:id/toggle-active', async (req, res) => {
  try {
    const { id } = req.params;

    // Prevent deactivating own account
    if (id === req.session.user?.id) {
      res.redirect('/admin/users?error=Cannot deactivate your own account');
      return;
    }

    const user = await prisma.user.findUnique({ where: { id } });
    if (!user) {
      res.redirect('/admin/users?error=User not found');
      return;
    }

    await prisma.user.update({
      where: { id },
      data: { isActive: !user.isActive },
    });

    res.redirect(`/admin/users?success=User ${user.isActive ? 'deactivated' : 'activated'}`);
  } catch (error) {
    console.error('Toggle user active error:', error);
    res.redirect('/admin/users?error=Failed to update user');
  }
});

// Invite Codes List
adminRoutes.get('/invites', async (req, res) => {
  try {
    const inviteCodes = await prisma.inviteCode.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        createdBy: {
          select: { name: true, email: true },
        },
        usedBy: {
          select: { name: true, email: true },
        },
      },
    });

    res.render('admin/invites', {
      title: 'Invite Codes - Admin - OpenTasks',
      currentPath: '/admin/invites',
      inviteCodes,
    });
  } catch (error) {
    console.error('Invite codes list error:', error);
    res.status(500).render('error', {
      title: 'Error',
      message: 'Failed to load invite codes',
    });
  }
});

// Create Invite Code
adminRoutes.post('/invites', async (req, res) => {
  try {
    const { description, type, maxUses, expiresIn } = req.body;

    // Generate unique code
    const code = generateInviteCode();

    // Calculate expiration
    let expiresAt: Date | null = null;
    if (expiresIn && expiresIn !== 'never') {
      const days = parseInt(expiresIn, 10);
      if (!isNaN(days)) {
        expiresAt = new Date(Date.now() + days * 24 * 60 * 60 * 1000);
      }
    }

    await prisma.inviteCode.create({
      data: {
        code,
        description: description || null,
        type: type || 'SINGLE_USE',
        maxUses: type === 'UNLIMITED' ? 0 : parseInt(maxUses, 10) || 1,
        expiresAt,
        createdById: req.session.user!.id,
      },
    });

    res.redirect('/admin/invites?success=Invite code created: ' + code);
  } catch (error) {
    console.error('Create invite code error:', error);
    res.redirect('/admin/invites?error=Failed to create invite code');
  }
});

// Toggle Invite Code Active Status
adminRoutes.post('/invites/:id/toggle-active', async (req, res) => {
  try {
    const { id } = req.params;

    const inviteCode = await prisma.inviteCode.findUnique({ where: { id } });
    if (!inviteCode) {
      res.redirect('/admin/invites?error=Invite code not found');
      return;
    }

    await prisma.inviteCode.update({
      where: { id },
      data: { isActive: !inviteCode.isActive },
    });

    res.redirect(`/admin/invites?success=Invite code ${inviteCode.isActive ? 'deactivated' : 'activated'}`);
  } catch (error) {
    console.error('Toggle invite code error:', error);
    res.redirect('/admin/invites?error=Failed to update invite code');
  }
});

// Delete Invite Code
adminRoutes.post('/invites/:id/delete', async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.inviteCode.delete({ where: { id } });

    res.redirect('/admin/invites?success=Invite code deleted');
  } catch (error) {
    console.error('Delete invite code error:', error);
    res.redirect('/admin/invites?error=Failed to delete invite code');
  }
});

/**
 * Generate a unique invite code
 */
function generateInviteCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // Removed confusing chars (0, O, I, 1)
  const segments = 3;
  const segmentLength = 4;
  
  const parts: string[] = [];
  for (let i = 0; i < segments; i++) {
    let segment = '';
    for (let j = 0; j < segmentLength; j++) {
      segment += chars.charAt(crypto.randomInt(chars.length));
    }
    parts.push(segment);
  }
  
  return parts.join('-');
}

