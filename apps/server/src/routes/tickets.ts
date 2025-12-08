/**
 * Ticket API Routes
 * CRUD operations for tickets with AI integration
 */

import { Router } from 'express';
import { prisma, sanitizePromptInput } from '@opentasks/database';
import { requireAuth, requireProjectAccess } from '../middleware/auth.js';
import { z } from 'zod';

export const ticketRoutes = Router();

// All routes require authentication
ticketRoutes.use(requireAuth);

// Validation schemas
const CreateTicketSchema = z.object({
  title: z.string().min(1).max(200),
  description: z.string().max(5000).optional(),
  priority: z.enum(['LOW', 'MEDIUM', 'HIGH', 'URGENT']).default('MEDIUM'),
  status: z.enum(['BACKLOG', 'TODO', 'HANDLE', 'AI_PROCESSING', 'TO_REVIEW', 'IN_PROGRESS', 'DONE', 'CANCELLED']).default('BACKLOG'),
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
      where: { projectId },
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

    const { title, description, priority, status } = parseResult.data;

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
      data.description = data.description ? sanitizePromptInput(data.description) : null;
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
            systemPrompt: true,
          },
        },
      },
    });

    if (!ticket) return;

    // Create job in database
    await prisma.agentJob.create({
      data: {
        ticketId,
        prompt: buildAIPrompt(ticket),
        status: 'QUEUED',
      },
    });

    // TODO: Add to BullMQ queue for cloud-bridge worker
    console.log(`[AI Queue] Ticket ${ticketId} queued for AI processing`);
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
  project: {
    systemPrompt: string | null;
    githubRepoUrl: string | null;
  };
}): string {
  let prompt = '';

  // Add system prompt if available
  if (ticket.project.systemPrompt) {
    prompt += `System Context:\n${ticket.project.systemPrompt}\n\n`;
  }

  prompt += `Task: ${ticket.title}\n`;

  if (ticket.description) {
    prompt += `\nDescription:\n${ticket.description}\n`;
  }

  if (ticket.project.githubRepoUrl) {
    prompt += `\nRepository: ${ticket.project.githubRepoUrl}\n`;
  }

  prompt += `\nInstructions: Implement this task, write necessary tests, and create a pull request.`;

  return prompt;
}
