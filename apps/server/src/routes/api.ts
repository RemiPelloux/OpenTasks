/**
 * API Routes
 * Internal API endpoints for the application
 */

import { Router } from 'express';
import { prisma, decrypt } from '@opentasks/database';
import { requireAuth } from '../middleware/auth.js';

export const apiRoutes = Router();

// All routes require authentication
apiRoutes.use(requireAuth);

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

    const data = await response.json();
    
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

    const data = await response.json();
    
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

    const data = await response.json();
    
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
      excludeUserIds = members.map(m => m.userId);
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

    const data = await response.json();
    
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

