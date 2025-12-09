/**
 * Ticket API Routes
 * CRUD operations for tickets with AI integration
 */

import { Router } from 'express';
import { prisma, sanitizePromptInput } from '@opentasks/database';
import { requireAuth } from '../middleware/auth.js';
import { z } from 'zod';
import { addTicketJob } from '../lib/queue.js';
import { notifySlack } from '../services/slack.js';
import { wsService, toTicketBroadcast } from '../services/websocket.js';
import { cacheService } from '../services/cache.js';

export const ticketRoutes = Router();

// All routes require authentication
ticketRoutes.use(requireAuth);

// Validation schemas
const CreateTicketSchema = z.object({
  title: z.string().min(1).max(200),
  description: z.string().max(5000).optional(),
  priority: z.enum(['LOW', 'MEDIUM', 'HIGH', 'URGENT']).default('MEDIUM'),
  status: z.enum(['BACKLOG', 'TODO', 'HANDLE', 'AI_PROCESSING', 'TO_REVIEW', 'IN_PROGRESS', 'DONE', 'CANCELLED']).default('BACKLOG'),
  targetBranch: z.string().max(100).optional(),
  aiModel: z.string().max(100).optional(),
  assigneeId: z.string().optional(),
  labels: z.array(z.string()).optional(),
});

const UpdateTicketSchema = z.object({
  title: z.string().min(1).max(200).optional(),
  description: z.string().max(5000).optional(),
  priority: z.enum(['LOW', 'MEDIUM', 'HIGH', 'URGENT']).optional(),
  status: z.enum(['BACKLOG', 'TODO', 'HANDLE', 'AI_PROCESSING', 'TO_REVIEW', 'IN_PROGRESS', 'DONE', 'CANCELLED']).optional(),
  assigneeId: z.string().nullable().optional(),
});

const UpdateStatusSchema = z.object({
  status: z.enum(['BACKLOG', 'TODO', 'HANDLE', 'AI_PROCESSING', 'TO_REVIEW', 'IN_PROGRESS', 'DONE', 'CANCELLED']),
});

/**
 * Get all tickets for a project
 */
ticketRoutes.get('/:projectId', async (req, res) => {
  try {
    const { projectId } = req.params;

    // Check project access
    const membership = await prisma.projectMember.findFirst({
      where: {
        projectId,
        userId: req.session.user!.id,
      },
    });

    if (!membership) {
      res.status(403).json({ error: 'Access denied' });
      return;
    }

    const tickets = await prisma.ticket.findMany({
      where: { 
        projectId,
        isArchived: false, // Exclude archived tickets from Kanban board
      },
      include: {
        assignee: {
          select: { id: true, name: true, email: true, avatarUrl: true },
        },
        createdBy: {
          select: { id: true, name: true },
        },
      },
      orderBy: [{ status: 'asc' }, { position: 'asc' }],
    });

    res.json(tickets);
  } catch (error) {
    console.error('Get tickets error:', error);
    res.status(500).json({ error: 'Failed to fetch tickets' });
  }
});

/**
 * Create a new ticket
 */
ticketRoutes.post('/:projectId', async (req, res) => {
  try {
    const { projectId } = req.params;

    // Check project access
    const membership = await prisma.projectMember.findFirst({
      where: {
        projectId,
        userId: req.session.user!.id,
      },
    });

    if (!membership) {
      res.status(403).json({ error: 'Access denied' });
      return;
    }

    // Validate input
    const parseResult = CreateTicketSchema.safeParse(req.body);
    if (!parseResult.success) {
      res.status(400).json({ error: 'Invalid input', details: parseResult.error.flatten() });
      return;
    }

    const { title, description, priority, status, targetBranch, aiModel, assigneeId } = parseResult.data;

    // Sanitize description for AI safety
    const sanitizedDescription = description ? sanitizePromptInput(description) : null;

    // Get max position for this status
    const maxPosition = await prisma.ticket.aggregate({
      where: { projectId, status },
      _max: { position: true },
    });

    const ticket = await prisma.ticket.create({
      data: {
        title,
        description: sanitizedDescription,
        priority,
        status,
        position: (maxPosition._max.position ?? 0) + 1,
        projectId,
        createdById: req.session.user!.id,
        targetBranch,
        aiModel,
        assigneeId: assigneeId || null,
      },
      include: {
        assignee: {
          select: { id: true, name: true, email: true, avatarUrl: true },
        },
        createdBy: {
          select: { id: true, name: true },
        },
      },
    });

    // If status is HANDLE, queue for AI processing
    if (status === 'HANDLE') {
      await queueForAIProcessing(ticket.id, projectId);
    }

    // Emit WebSocket event for real-time updates
    wsService.ticketCreated(projectId, toTicketBroadcast(ticket));
    
    // Invalidate board cache
    await cacheService.invalidateBoardState(projectId);

    res.status(201).json(ticket);
  } catch (error) {
    console.error('Create ticket error:', error);
    res.status(500).json({ error: 'Failed to create ticket' });
  }
});

/**
 * Update a ticket
 */
ticketRoutes.put('/:projectId/:ticketId', async (req, res) => {
  try {
    const { projectId, ticketId } = req.params;

    // Check project access
    const membership = await prisma.projectMember.findFirst({
      where: {
        projectId,
        userId: req.session.user!.id,
      },
    });

    if (!membership) {
      res.status(403).json({ error: 'Access denied' });
      return;
    }

    // Validate input
    const parseResult = UpdateTicketSchema.safeParse(req.body);
    if (!parseResult.success) {
      res.status(400).json({ error: 'Invalid input', details: parseResult.error.flatten() });
      return;
    }

    const data = parseResult.data;
    
    // Sanitize description if provided
    if (data.description !== undefined) {
      data.description = data.description ? sanitizePromptInput(data.description) : undefined;
    }

    const ticket = await prisma.ticket.update({
      where: { id: ticketId },
      data,
      include: {
        assignee: {
          select: { id: true, name: true, email: true, avatarUrl: true },
        },
        createdBy: {
          select: { id: true, name: true },
        },
      },
    });

    // If status changed to HANDLE, queue for AI processing
    if (data.status === 'HANDLE') {
      await queueForAIProcessing(ticketId, projectId);
    }

    // Emit WebSocket event for real-time updates
    wsService.ticketUpdated(projectId, toTicketBroadcast(ticket));
    
    // Invalidate board cache
    await cacheService.invalidateBoardState(projectId);

    res.json(ticket);
  } catch (error) {
    console.error('Update ticket error:', error);
    res.status(500).json({ error: 'Failed to update ticket' });
  }
});

/**
 * Update ticket status (PATCH for drag-and-drop)
 */
ticketRoutes.patch('/:projectId/:ticketId/status', async (req, res) => {
  try {
    const { projectId, ticketId } = req.params;

    // Check project access
    const membership = await prisma.projectMember.findFirst({
      where: {
        projectId,
        userId: req.session.user!.id,
      },
    });

    if (!membership) {
      res.status(403).json({ error: 'Access denied' });
      return;
    }

    // Validate input
    const parseResult = UpdateStatusSchema.safeParse(req.body);
    if (!parseResult.success) {
      res.status(400).json({ error: 'Invalid status' });
      return;
    }

    const { status } = parseResult.data;

    // Get current ticket to check if status actually changed
    const currentTicket = await prisma.ticket.findUnique({
      where: { id: ticketId },
    });

    if (!currentTicket) {
      res.status(404).json({ error: 'Ticket not found' });
      return;
    }

    // Don't allow changing status of AI_PROCESSING tickets
    if (currentTicket.status === 'AI_PROCESSING' && status !== 'AI_PROCESSING') {
      res.status(400).json({ error: 'Cannot change status of ticket being processed by AI' });
      return;
    }

    const ticket = await prisma.ticket.update({
      where: { id: ticketId },
      data: { status },
      include: {
        assignee: {
          select: { id: true, name: true, email: true, avatarUrl: true },
        },
        createdBy: {
          select: { id: true, name: true },
        },
      },
    });

    // If status changed to HANDLE, queue for AI processing
    if (status === 'HANDLE' && currentTicket.status !== 'HANDLE') {
      await queueForAIProcessing(ticketId, projectId);
    }

    // Emit WebSocket event for real-time updates
    wsService.ticketMoved(projectId, ticketId, currentTicket.status, status, ticket.position);
    
    // Invalidate board cache
    await cacheService.invalidateBoardState(projectId);

    res.json(ticket);
  } catch (error) {
    console.error('Update ticket status error:', error);
    res.status(500).json({ error: 'Failed to update ticket status' });
  }
});

/**
 * Delete a ticket
 */
ticketRoutes.delete('/:projectId/:ticketId', async (req, res) => {
  try {
    const { projectId, ticketId } = req.params;

    // Check project access (only admins/owners can delete)
    const membership = await prisma.projectMember.findFirst({
      where: {
        projectId,
        userId: req.session.user!.id,
        role: { in: ['OWNER', 'ADMIN'] },
      },
    });

    if (!membership) {
      res.status(403).json({ error: 'Access denied - admin or owner required' });
      return;
    }

    await prisma.ticket.delete({
      where: { id: ticketId },
    });

    // Emit WebSocket event for real-time updates
    wsService.ticketDeleted(projectId, ticketId);
    
    // Invalidate board cache
    await cacheService.invalidateBoardState(projectId);

    res.json({ success: true });
  } catch (error) {
    console.error('Delete ticket error:', error);
    res.status(500).json({ error: 'Failed to delete ticket' });
  }
});

/**
 * Queue ticket for AI processing via BullMQ
 */
async function queueForAIProcessing(ticketId: string, projectId: string): Promise<void> {
  try {
    // Create agent job record
    const ticket = await prisma.ticket.findUnique({
      where: { id: ticketId },
      include: {
        project: {
          select: {
            cursorApiKeyEncrypted: true,
            githubRepoUrl: true,
            defaultBranch: true,
          },
        },
      },
    });

    if (!ticket) return;

    const prompt = buildAIPrompt(ticket);

    // Create job in database
    const job = await prisma.agentJob.create({
      data: {
        ticketId,
        prompt,
        status: 'QUEUED',
      },
    });

    // Add to BullMQ queue for cloud-bridge worker
    await addTicketJob({
      jobId: job.id,
      ticketId,
      projectId,
      prompt,
      title: ticket.title,
      aiModel: ticket.aiModel || undefined,
      targetBranch: ticket.targetBranch || ticket.project.defaultBranch || 'main',
    });

    console.log(`[AI Queue] Ticket ${ticketId} queued for AI processing (job: ${job.id})`);

    // Send Slack notification
    notifySlack(ticketId, 'queued').catch((err) => {
      console.error('[Slack] Failed to send queued notification:', err);
    });
  } catch (error) {
    console.error('Failed to queue AI job:', error);
  }
}

/**
 * Build AI prompt from ticket
 */
function buildAIPrompt(ticket: {
  title: string;
  description: string | null;
  targetBranch: string | null;
  aiModel: string | null;
  project: {
    githubRepoUrl: string | null;
    defaultBranch: string | null;
  };
}): string {
  let prompt = '';

  prompt += `Task: ${ticket.title}\n`;

  if (ticket.description) {
    prompt += `\nDescription:\n${ticket.description}\n`;
  }

  if (ticket.project.githubRepoUrl) {
    prompt += `\nRepository: ${ticket.project.githubRepoUrl}\n`;
  }

  const branch = ticket.targetBranch || ticket.project.defaultBranch || 'main';
  prompt += `\nTarget Branch: ${branch}\n`;

  prompt += `\nInstructions: Implement this task, write necessary tests, and create a pull request.`;

  return prompt;
}
