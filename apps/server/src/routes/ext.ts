/**
 * Extension API Routes
 * Token-based API for Cursor extension and other integrations
 */

import { Router } from 'express';
import { prisma } from '@opentasks/database';
import { requireApiToken, requireAuth, generateApiToken, hashToken } from '../middleware/index.js';
import type { ApiUser } from '../middleware/apiToken.js';

export const extRoutes = Router();

// ============================================
// Token Management (Web UI only, session auth)
// ============================================

/**
 * Create a new API token
 * POST /api/ext/tokens
 * Requires session authentication (web UI only)
 */
extRoutes.post('/tokens', requireAuth, async (req, res) => {
  try {
    const userId = req.session?.user?.id;
    if (!userId) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }

    const { name, expiresInDays } = req.body;

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      res.status(400).json({ error: 'Token name is required' });
      return;
    }

    // Generate token
    const token = generateApiToken();
    const tokenHash = hashToken(token);
    const last4 = token.slice(-4);

    // Calculate expiration
    let expiresAt: Date | null = null;
    if (expiresInDays && typeof expiresInDays === 'number' && expiresInDays > 0) {
      expiresAt = new Date();
      expiresAt.setDate(expiresAt.getDate() + expiresInDays);
    }

    // Store token
    const apiToken = await prisma.apiToken.create({
      data: {
        name: name.trim(),
        tokenHash,
        last4,
        expiresAt,
        userId,
      },
    });

    // Return token ONCE (never show again)
    res.json({
      id: apiToken.id,
      name: apiToken.name,
      token, // Only returned on creation
      last4: apiToken.last4,
      expiresAt: apiToken.expiresAt,
      createdAt: apiToken.createdAt,
    });
  } catch (error) {
    console.error('Failed to create API token:', error);
    res.status(500).json({ error: 'Failed to create token' });
  }
});

/**
 * List user's API tokens
 * GET /api/ext/tokens
 * Requires session authentication (web UI only)
 */
extRoutes.get('/tokens', requireAuth, async (req, res) => {
  try {
    const userId = req.session?.user?.id;
    if (!userId) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }

    const tokens = await prisma.apiToken.findMany({
      where: { userId },
      select: {
        id: true,
        name: true,
        last4: true,
        expiresAt: true,
        revokedAt: true,
        lastUsedAt: true,
        createdAt: true,
      },
      orderBy: { createdAt: 'desc' },
    });

    res.json({ tokens });
  } catch (error) {
    console.error('Failed to list API tokens:', error);
    res.status(500).json({ error: 'Failed to list tokens' });
  }
});

/**
 * Revoke an API token
 * DELETE /api/ext/tokens/:tokenId
 * Requires session authentication (web UI only)
 */
extRoutes.delete('/tokens/:tokenId', requireAuth, async (req, res) => {
  try {
    const userId = req.session?.user?.id;
    const { tokenId } = req.params;

    if (!userId) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }

    // Verify token belongs to user
    const token = await prisma.apiToken.findUnique({
      where: { id: tokenId },
    });

    if (!token || token.userId !== userId) {
      res.status(404).json({ error: 'Token not found' });
      return;
    }

    // Revoke token
    await prisma.apiToken.update({
      where: { id: tokenId },
      data: { revokedAt: new Date() },
    });

    res.json({ success: true });
  } catch (error) {
    console.error('Failed to revoke API token:', error);
    res.status(500).json({ error: 'Failed to revoke token' });
  }
});

// ============================================
// Extension API (Token auth required)
// ============================================

/**
 * Get current user info
 * GET /api/ext/me
 */
extRoutes.get('/me', requireApiToken, (req, res) => {
  res.json({
    user: req.apiUser,
  });
});

/**
 * List user's projects
 * GET /api/ext/projects
 */
extRoutes.get('/projects', requireApiToken, async (req, res) => {
  try {
    const userId = req.apiUser!.id;

    const memberships = await prisma.projectMember.findMany({
      where: { userId },
      include: {
        project: {
          select: {
            id: true,
            name: true,
            slug: true,
            description: true,
            defaultBranch: true,
            isArchived: true,
            updatedAt: true,
          },
        },
      },
      orderBy: {
        project: {
          updatedAt: 'desc',
        },
      },
    });

    const projects = memberships
      .filter((m) => !m.project.isArchived)
      .map((m) => ({
        id: m.project.id,
        name: m.project.name,
        slug: m.project.slug,
        description: m.project.description,
        defaultBranch: m.project.defaultBranch,
        role: m.role,
        updatedAt: m.project.updatedAt,
      }));

    res.json({ projects });
  } catch (error) {
    console.error('Failed to list projects:', error);
    res.status(500).json({ error: 'Failed to list projects' });
  }
});

/**
 * List tickets for a project
 * GET /api/ext/projects/:projectId/tickets
 * Query params: status (optional, comma-separated)
 */
extRoutes.get('/projects/:projectId/tickets', requireApiToken, async (req, res) => {
  try {
    const userId = req.apiUser!.id;
    const { projectId } = req.params;
    const { status } = req.query;

    if (!projectId) {
      res.status(400).json({ error: 'Project ID is required' });
      return;
    }

    // Verify project access
    const membership = await prisma.projectMember.findUnique({
      where: {
        projectId_userId: {
          projectId,
          userId,
        },
      },
    });

    if (!membership) {
      res.status(403).json({ error: 'Access denied' });
      return;
    }

    // Build query
    const where: any = {
      projectId,
      isArchived: false,
    };

    if (status && typeof status === 'string') {
      const statuses = status.split(',').map((s) => s.trim().toUpperCase());
      where.status = { in: statuses };
    }

    const tickets = await prisma.ticket.findMany({
      where,
      select: {
        id: true,
        title: true,
        description: true,
        status: true,
        priority: true,
        position: true,
        targetBranch: true,
        aiSummary: true,
        prLink: true,
        agentStatus: true,
        agentBranch: true,
        assigneeId: true,
        assignee: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        createdBy: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        createdAt: true,
        updatedAt: true,
      },
      orderBy: [{ position: 'asc' }, { createdAt: 'desc' }],
    });

    res.json({ tickets });
  } catch (error) {
    console.error('Failed to list tickets:', error);
    res.status(500).json({ error: 'Failed to list tickets' });
  }
});

/**
 * Create a new ticket
 * POST /api/ext/projects/:projectId/tickets
 */
extRoutes.post('/projects/:projectId/tickets', requireApiToken, async (req, res) => {
  try {
    const userId = req.apiUser!.id;
    const { projectId } = req.params;
    const { title, description, status, targetBranch, priority } = req.body;

    if (!projectId) {
      res.status(400).json({ error: 'Project ID is required' });
      return;
    }

    // Verify project access
    const membership = await prisma.projectMember.findUnique({
      where: {
        projectId_userId: {
          projectId,
          userId,
        },
      },
    });

    if (!membership) {
      res.status(403).json({ error: 'Access denied' });
      return;
    }

    // Validate required fields
    if (!title || typeof title !== 'string' || title.trim().length === 0) {
      res.status(400).json({ error: 'Title is required' });
      return;
    }

    // Validate status if provided
    const validStatuses = ['BACKLOG', 'TODO', 'HANDLE', 'IN_PROGRESS', 'TO_REVIEW', 'DONE'];
    const ticketStatus = status && validStatuses.includes(status.toUpperCase()) 
      ? status.toUpperCase() 
      : 'BACKLOG';

    // Validate priority if provided
    const validPriorities = ['LOW', 'MEDIUM', 'HIGH', 'URGENT'];
    const ticketPriority = priority && validPriorities.includes(priority.toUpperCase())
      ? priority.toUpperCase()
      : 'MEDIUM';

    // Get next position for the column
    const maxPosition = await prisma.ticket.findFirst({
      where: {
        projectId,
        status: ticketStatus,
        isArchived: false,
      },
      select: { position: true },
      orderBy: { position: 'desc' },
    });

    const position = (maxPosition?.position || 0) + 1;

    // Create ticket
    const ticket = await prisma.ticket.create({
      data: {
        title: title.trim(),
        description: description?.trim() || null,
        status: ticketStatus,
        priority: ticketPriority,
        position,
        targetBranch: targetBranch?.trim() || null,
        projectId,
        createdById: userId,
      },
      include: {
        assignee: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        createdBy: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    // Broadcast to WebSocket
    const { wsService, toTicketBroadcast } = await import('../services/websocket.js');
    wsService.ticketCreated(projectId, toTicketBroadcast(ticket));

    res.status(201).json({ ticket });
  } catch (error) {
    console.error('Failed to create ticket:', error);
    res.status(500).json({ error: 'Failed to create ticket' });
  }
});

/**
 * Update ticket status (move between columns)
 * PATCH /api/ext/projects/:projectId/tickets/:ticketId/status
 */
extRoutes.patch('/projects/:projectId/tickets/:ticketId/status', requireApiToken, async (req, res) => {
  try {
    const userId = req.apiUser!.id;
    const { projectId, ticketId } = req.params;
    const { status } = req.body;

    if (!projectId || !ticketId) {
      res.status(400).json({ error: 'Project ID and Ticket ID are required' });
      return;
    }

    // Verify project access
    const membership = await prisma.projectMember.findUnique({
      where: {
        projectId_userId: {
          projectId,
          userId,
        },
      },
    });

    if (!membership) {
      res.status(403).json({ error: 'Access denied' });
      return;
    }

    // Validate status
    const validStatuses = ['BACKLOG', 'TODO', 'HANDLE', 'IN_PROGRESS', 'TO_REVIEW', 'DONE', 'CANCELLED'];
    if (!status || !validStatuses.includes(status.toUpperCase())) {
      res.status(400).json({ 
        error: 'Invalid status',
        validStatuses,
      });
      return;
    }

    const newStatus = status.toUpperCase();

    // Get ticket
    const ticket = await prisma.ticket.findUnique({
      where: { id: ticketId },
    });

    if (!ticket || ticket.projectId !== projectId) {
      res.status(404).json({ error: 'Ticket not found' });
      return;
    }

    if (ticket.status === newStatus) {
      res.json({ ticket }); // No change needed
      return;
    }

    const oldStatus = ticket.status;

    // Get next position for the new column
    const maxPosition = await prisma.ticket.findFirst({
      where: {
        projectId,
        status: newStatus,
        isArchived: false,
      },
      select: { position: true },
      orderBy: { position: 'desc' },
    });

    const position = (maxPosition?.position || 0) + 1;

    // Update ticket
    const updatedTicket = await prisma.ticket.update({
      where: { id: ticketId },
      data: {
        status: newStatus,
        position,
      },
      include: {
        assignee: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        createdBy: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    // Broadcast to WebSocket
    const { wsService } = await import('../services/websocket.js');
    wsService.ticketMoved(projectId, ticketId, oldStatus, newStatus, position);

    // If moved to HANDLE, trigger AI processing
    if (newStatus === 'HANDLE') {
      // Add to BullMQ queue for cloud-bridge processing
      try {
        const { addTicketJob } = await import('../lib/queue.js');
        const { default: { randomUUID } } = await import('crypto');
        
        const project = await prisma.project.findUnique({
          where: { id: projectId },
          select: {
            name: true,
            cursorApiKeyEncrypted: true,
            githubRepoUrl: true,
          },
        });

        if (project && updatedTicket) {
          const jobId = randomUUID();
          const prompt = `${updatedTicket.title}\n\n${updatedTicket.description || ''}`;
          
          await addTicketJob({
            jobId,
            ticketId,
            projectId,
            prompt,
            title: updatedTicket.title,
            aiModel: updatedTicket.aiModel || undefined,
            targetBranch: updatedTicket.targetBranch || undefined,
          });
        }
      } catch (err) {
        console.error('Failed to queue ticket for AI processing:', err);
      }
    }

    res.json({ ticket: updatedTicket });
  } catch (error) {
    console.error('Failed to update ticket status:', error);
    res.status(500).json({ error: 'Failed to update ticket status' });
  }
});


