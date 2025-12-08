/**
 * API Routes
 * Internal API endpoints for the application
 */

import { Router } from 'express';
import { requireAuth } from '../middleware/auth.js';

export const apiRoutes = Router();

// All routes require authentication
apiRoutes.use(requireAuth);

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

