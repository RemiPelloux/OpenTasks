/**
 * API Routes
 * Internal API endpoints for the application
 */

import { Router } from 'express';
import { prisma, decrypt } from '@opentasks/database';
import { requireAuth } from '../middleware/auth.js';
import { notifySlack } from '../services/slack.js';

export const apiRoutes = Router();

// All routes require authentication
apiRoutes.use(requireAuth);

// ============================================
// Ticket Actions
// ============================================

/**
 * Validate a ticket - move to DONE
 * POST /api/tickets/:ticketId/validate
 */
apiRoutes.post('/tickets/:ticketId/validate', async (req, res) => {
  try {
    const { ticketId } = req.params;

    // Find the ticket
    const ticket = await prisma.ticket.findUnique({
      where: { id: ticketId },
    });

    if (!ticket) {
      res.status(404).json({ error: 'Ticket not found' });
      return;
    }

    // Update ticket to DONE
    const updatedTicket = await prisma.ticket.update({
      where: { id: ticketId },
      data: {
        status: 'DONE',
        agentStatus: 'FINISHED',
      },
    });

    // Update any associated agent job to COMPLETED
    await prisma.agentJob.updateMany({
      where: { ticketId },
      data: { status: 'COMPLETED', completedAt: new Date() },
    });

    // Send Slack notification
    notifySlack(ticketId, 'validated').catch((err) => {
      console.error('[Slack] Failed to send validated notification:', err);
    });

    res.json({ 
      message: 'Ticket validated successfully',
      ticket: updatedTicket,
    });
  } catch (error) {
    console.error('Validate ticket error:', error);
    res.status(500).json({ error: 'Failed to validate ticket' });
  }
});

/**
 * Archive a ticket
 * POST /api/tickets/:ticketId/archive
 */
apiRoutes.post('/tickets/:ticketId/archive', async (req, res) => {
  try {
    const { ticketId } = req.params;

    // Find the ticket
    const ticket = await prisma.ticket.findUnique({
      where: { id: ticketId },
    });

    if (!ticket) {
      res.status(404).json({ error: 'Ticket not found' });
      return;
    }

    // Archive the ticket
    const updatedTicket = await prisma.ticket.update({
      where: { id: ticketId },
      data: {
        isArchived: true,
        archivedAt: new Date(),
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

    res.json({ 
      message: 'Ticket archived successfully',
      ticket: updatedTicket,
    });
  } catch (error) {
    console.error('Archive ticket error:', error);
    res.status(500).json({ error: 'Failed to archive ticket' });
  }
});

/**
 * Restore a ticket from archive
 * POST /api/tickets/:ticketId/restore
 */
apiRoutes.post('/tickets/:ticketId/restore', async (req, res) => {
  try {
    const { ticketId } = req.params;

    // Find the ticket
    const ticket = await prisma.ticket.findUnique({
      where: { id: ticketId },
    });

    if (!ticket) {
      res.status(404).json({ error: 'Ticket not found' });
      return;
    }

    // Restore the ticket
    const updatedTicket = await prisma.ticket.update({
      where: { id: ticketId },
      data: {
        isArchived: false,
        archivedAt: null,
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

    res.json({ 
      message: 'Ticket restored successfully',
      ticket: updatedTicket,
    });
  } catch (error) {
    console.error('Restore ticket error:', error);
    res.status(500).json({ error: 'Failed to restore ticket' });
  }
});

/**
 * Get archived tickets for a project (with pagination)
 * GET /api/projects/:projectId/archived?page=1&limit=20
 */
apiRoutes.get('/projects/:projectId/archived', async (req, res) => {
  try {
    const { projectId } = req.params;
    const page = Math.max(1, parseInt(req.query.page as string) || 1);
    const limit = Math.min(100, Math.max(1, parseInt(req.query.limit as string) || 20));
    const skip = (page - 1) * limit;

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

    // Get total count for pagination
    const total = await prisma.ticket.count({
      where: { 
        projectId,
        isArchived: true,
      },
    });

    const archivedTickets = await prisma.ticket.findMany({
      where: { 
        projectId,
        isArchived: true,
      },
      include: {
        assignee: {
          select: { id: true, name: true, email: true, avatarUrl: true },
        },
        createdBy: {
          select: { id: true, name: true },
        },
      },
      orderBy: { archivedAt: 'desc' },
      skip,
      take: limit,
    });

    res.json({
      tickets: archivedTickets,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Get archived tickets error:', error);
    res.status(500).json({ error: 'Failed to get archived tickets' });
  }
});

// ============================================
// Type Definitions for Cursor API Responses
// ============================================

interface CursorModelsResponse {
  models: string[];
}

interface CursorAgentSource {
  repository: string;
  ref: string;
}

interface CursorAgentTarget {
  branchName?: string;
  url?: string;
  prUrl?: string;
  autoCreatePr?: boolean;
}

interface CursorAgentStatusResponse {
  id: string;
  name: string;
  status: string;
  source?: CursorAgentSource;
  target?: CursorAgentTarget;
  summary?: string;
  createdAt: string;
}

interface CursorAgentMessage {
  id: string;
  type: 'user_message' | 'assistant_message';
  text: string;
}

interface CursorAgentConversationResponse {
  id: string;
  messages: CursorAgentMessage[];
}

interface CursorRepository {
  owner: string;
  name: string;
  repository: string;
}

interface CursorRepositoriesResponse {
  repositories: CursorRepository[];
}

// ============================================
// Cursor API Proxy Endpoints
// ============================================

/**
 * Fetch available AI models from Cursor API
 * GET /api/cursor/models
 */
apiRoutes.get('/cursor/models', async (req, res) => {
  try {
    const userId = req.session.user!.id;
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { cursorApiKeyEncrypted: true },
    });

    if (!user?.cursorApiKeyEncrypted) {
      res.status(400).json({ error: 'No API key configured. Please add your Cursor API key in Settings.' });
      return;
    }

    const apiKey = decrypt(user.cursorApiKeyEncrypted);
    
    const response = await fetch('https://api.cursor.com/v0/models', {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${Buffer.from(apiKey + ':').toString('base64')}`,
      },
    });

    if (!response.ok) {
      if (response.status === 401) {
        res.status(401).json({ error: 'Invalid API key' });
        return;
      }
      throw new Error(`Cursor API error: ${response.status}`);
    }

    const data = await response.json() as CursorModelsResponse;
    
    // Add "Auto" option at the beginning
    res.json({
      models: ['auto', ...(data.models || [])],
    });
  } catch (error) {
    console.error('Cursor models error:', error);
    res.status(500).json({ error: 'Failed to fetch models' });
  }
});

/**
 * Get agent status from Cursor API
 * GET /api/cursor/agents/:agentId/status
 */
apiRoutes.get('/cursor/agents/:agentId/status', async (req, res) => {
  try {
    const { agentId } = req.params;
    const userId = req.session.user!.id;

    // Find the ticket with this agent ID to get the project's API key
    const ticket = await prisma.ticket.findFirst({
      where: { agentId },
      include: {
        project: {
          select: { cursorApiKeyEncrypted: true },
        },
      },
    });

    // Try project API key first, then user's API key
    let apiKey: string | null = null;
    
    if (ticket?.project.cursorApiKeyEncrypted) {
      apiKey = decrypt(ticket.project.cursorApiKeyEncrypted);
    } else {
      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { cursorApiKeyEncrypted: true },
      });
      if (user?.cursorApiKeyEncrypted) {
        apiKey = decrypt(user.cursorApiKeyEncrypted);
      }
    }

    if (!apiKey) {
      res.status(400).json({ error: 'No API key available' });
      return;
    }

    const response = await fetch(`https://api.cursor.com/v0/agents/${agentId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${Buffer.from(apiKey + ':').toString('base64')}`,
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        res.status(404).json({ error: 'Agent not found' });
        return;
      }
      throw new Error(`Cursor API error: ${response.status}`);
    }

    const data = await response.json() as CursorAgentStatusResponse;
    
    // Update ticket with latest status and branch info
    if (ticket) {
      await prisma.ticket.update({
        where: { id: ticket.id },
        data: {
          agentStatus: data.status,
          agentBranch: data.target?.branchName || null,
          prLink: data.target?.prUrl || ticket.prLink,
          aiSummary: data.summary || ticket.aiSummary,
        },
      });
    }

    res.json({
      id: data.id,
      name: data.name,
      status: data.status,
      source: data.source,
      target: data.target,
      summary: data.summary,
      createdAt: data.createdAt,
    });
  } catch (error) {
    console.error('Cursor agent status error:', error);
    res.status(500).json({ error: 'Failed to fetch agent status' });
  }
});

/**
 * Stop a running agent
 * POST /api/cursor/agents/:agentId/stop
 */
apiRoutes.post('/cursor/agents/:agentId/stop', async (req, res) => {
  try {
    const { agentId } = req.params;
    const userId = req.session.user!.id;

    // Find the ticket with this agent ID to get the project's API key
    const ticket = await prisma.ticket.findFirst({
      where: { agentId },
      include: {
        project: {
          select: { cursorApiKeyEncrypted: true },
        },
      },
    });

    // Try project API key first, then user's API key
    let apiKey: string | null = null;
    
    if (ticket?.project.cursorApiKeyEncrypted) {
      apiKey = decrypt(ticket.project.cursorApiKeyEncrypted);
    } else {
      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { cursorApiKeyEncrypted: true },
      });
      if (user?.cursorApiKeyEncrypted) {
        apiKey = decrypt(user.cursorApiKeyEncrypted);
      }
    }

    if (!apiKey) {
      res.status(400).json({ error: 'No API key available' });
      return;
    }

    const response = await fetch(`https://api.cursor.com/v0/agents/${agentId}/stop`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${Buffer.from(apiKey + ':').toString('base64')}`,
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        res.status(404).json({ error: 'Agent not found' });
        return;
      }
      if (response.status === 400) {
        res.status(400).json({ error: 'Agent is not running' });
        return;
      }
      throw new Error(`Cursor API error: ${response.status}`);
    }

    const data = await response.json() as { id: string };
    
    // Update ticket status
    if (ticket) {
      await prisma.ticket.update({
        where: { id: ticket.id },
        data: {
          agentStatus: 'CANCELLED',
          status: 'TODO', // Move back to TODO so user can retry
        },
      });
    }

    res.json({ id: data.id, message: 'Agent stopped successfully' });
  } catch (error) {
    console.error('Stop agent error:', error);
    res.status(500).json({ error: 'Failed to stop agent' });
  }
});

/**
 * Send follow-up to Cursor agent
 * POST /api/cursor/agents/:agentId/followup
 */
apiRoutes.post('/cursor/agents/:agentId/followup', async (req, res) => {
  try {
    const { agentId } = req.params;
    const { prompt } = req.body;
    const userId = req.session.user!.id;

    if (!prompt?.text) {
      res.status(400).json({ error: 'Follow-up text is required' });
      return;
    }

    // Find the ticket with this agent ID to get the project's API key
    const ticket = await prisma.ticket.findFirst({
      where: { agentId },
      include: {
        project: {
          select: { cursorApiKeyEncrypted: true },
        },
      },
    });

    // Try project API key first, then user's API key
    let apiKey: string | null = null;
    
    if (ticket?.project.cursorApiKeyEncrypted) {
      apiKey = decrypt(ticket.project.cursorApiKeyEncrypted);
    } else {
      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { cursorApiKeyEncrypted: true },
      });
      if (user?.cursorApiKeyEncrypted) {
        apiKey = decrypt(user.cursorApiKeyEncrypted);
      }
    }

    if (!apiKey) {
      res.status(400).json({ error: 'No API key available' });
      return;
    }

    const response = await fetch(`https://api.cursor.com/v0/agents/${agentId}/followup`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${Buffer.from(apiKey + ':').toString('base64')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      if (response.status === 404) {
        res.status(404).json({ error: 'Agent not found' });
        return;
      }
      const errorText = await response.text();
      throw new Error(`Cursor API error: ${response.status} - ${errorText}`);
    }

    const data: any = await response.json();

    // Update ticket status back to AI_PROCESSING since agent will restart
    if (ticket) {
      await prisma.ticket.update({
        where: { id: ticket.id },
        data: {
          status: 'AI_PROCESSING',
          agentStatus: 'RUNNING',
        },
      });
    }

    res.json({ id: data.id, message: 'Follow-up sent successfully' });
  } catch (error) {
    console.error('Follow-up error:', error);
    res.status(500).json({ error: 'Failed to send follow-up' });
  }
});

/**
 * Get agent conversation from Cursor API
 * GET /api/cursor/agents/:agentId/conversation
 */
apiRoutes.get('/cursor/agents/:agentId/conversation', async (req, res) => {
  try {
    const { agentId } = req.params;
    const userId = req.session.user!.id;

    // Find the ticket with this agent ID to get the project's API key
    const ticket = await prisma.ticket.findFirst({
      where: { agentId },
      include: {
        project: {
          select: { cursorApiKeyEncrypted: true },
        },
      },
    });

    // Try project API key first, then user's API key
    let apiKey: string | null = null;
    
    if (ticket?.project.cursorApiKeyEncrypted) {
      apiKey = decrypt(ticket.project.cursorApiKeyEncrypted);
    } else {
      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { cursorApiKeyEncrypted: true },
      });
      if (user?.cursorApiKeyEncrypted) {
        apiKey = decrypt(user.cursorApiKeyEncrypted);
      }
    }

    if (!apiKey) {
      res.status(400).json({ error: 'No API key available' });
      return;
    }

    const response = await fetch(`https://api.cursor.com/v0/agents/${agentId}/conversation`, {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${Buffer.from(apiKey + ':').toString('base64')}`,
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        res.status(404).json({ error: 'Agent or conversation not found' });
        return;
      }
      throw new Error(`Cursor API error: ${response.status}`);
    }

    const data = await response.json() as CursorAgentConversationResponse;
    
    res.json({
      id: data.id,
      messages: data.messages || [],
    });
  } catch (error) {
    console.error('Cursor agent conversation error:', error);
    res.status(500).json({ error: 'Failed to fetch conversation' });
  }
});

/**
 * Search users by name or email (for autocomplete)
 * Returns up to 10 matching users
 */
apiRoutes.get('/users/search', async (req, res) => {
  try {
    const { q, excludeProject } = req.query;
    
    if (!q || typeof q !== 'string' || q.length < 2) {
      res.json({ users: [] });
      return;
    }

    const searchTerm = q.toLowerCase().trim();

    // Get existing project members to exclude
    let excludeUserIds: string[] = [];
    if (excludeProject && typeof excludeProject === 'string') {
      const members = await prisma.projectMember.findMany({
        where: { projectId: excludeProject },
        select: { userId: true },
      });
      excludeUserIds = members.map((m: { userId: string }) => m.userId);
    }

    // Search users by name or email
    const users = await prisma.user.findMany({
      where: {
        AND: [
          {
            OR: [
              { name: { contains: searchTerm, mode: 'insensitive' } },
              { email: { contains: searchTerm, mode: 'insensitive' } },
            ],
          },
          {
            id: { notIn: excludeUserIds },
          },
        ],
      },
      select: {
        id: true,
        name: true,
        email: true,
        avatarUrl: true,
      },
      take: 10,
      orderBy: { name: 'asc' },
    });

    res.json({ users });
  } catch (error) {
    console.error('User search error:', error);
    res.status(500).json({ error: 'Failed to search users' });
  }
});

/**
 * Fetch GitHub repositories from Cursor API
 * Uses the provided API key to list accessible repositories
 * 
 * Rate limits: 1/user/minute, 30/user/hour
 */
apiRoutes.post('/cursor/repositories', async (req, res) => {
  try {
    const { apiKey } = req.body;

    if (!apiKey || typeof apiKey !== 'string') {
      res.status(400).json({ error: 'API key is required' });
      return;
    }

    // Call Cursor API with Basic Auth
    const response = await fetch('https://api.cursor.com/v0/repositories', {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${Buffer.from(apiKey + ':').toString('base64')}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      if (response.status === 401) {
        res.status(401).json({ error: 'Invalid API key' });
        return;
      }
      if (response.status === 429) {
        res.status(429).json({ 
          error: 'Rate limited. Please wait a minute before trying again.',
          retryAfter: 60
        });
        return;
      }
      throw new Error(`Cursor API error: ${response.status}`);
    }

    const data = await response.json() as CursorRepositoriesResponse;
    
    res.json({
      repositories: data.repositories || [],
      cached: false,
    });
  } catch (error) {
    console.error('Cursor repositories error:', error);
    res.status(500).json({ 
      error: 'Failed to fetch repositories. The request may take time for users with many repos.',
    });
  }
});

