/**
 * User Settings Routes
 * Manage user preferences and saved API keys
 */

import { Router } from 'express';
import { prisma, encrypt, decrypt } from '@opentasks/database';
import { requireAuth } from '../middleware/auth.js';

export const settingsRoutes = Router();

// All routes require authentication
settingsRoutes.use(requireAuth);

/**
 * Settings Page
 */
settingsRoutes.get('/', async (req, res) => {
  try {
    const userId = req.session.user!.id;

    // Get user with saved API key
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        cursorApiKeyEncrypted: true,
      },
    });

    res.render('settings/index', {
      title: 'Settings - OpenTasks',
      currentPath: '/settings',
      hasApiKey: !!user?.cursorApiKeyEncrypted,
    });
  } catch (error) {
    console.error('Settings error:', error);
    res.status(500).render('error', {
      title: 'Error',
      message: 'Failed to load settings.',
    });
  }
});

/**
 * Save Cursor API Key
 */
settingsRoutes.post('/api-key', async (req, res) => {
  try {
    const userId = req.session.user!.id;
    const { cursorApiKey } = req.body;

    if (!cursorApiKey || typeof cursorApiKey !== 'string') {
      res.redirect('/settings?error=API key is required');
      return;
    }

    // Validate API key by making a test request
    try {
      const testResponse = await fetch('https://api.cursor.com/v0/repositories', {
        method: 'GET',
        headers: {
          'Authorization': `Basic ${Buffer.from(cursorApiKey.trim() + ':').toString('base64')}`,
        },
      });

      if (!testResponse.ok && testResponse.status !== 429) {
        // 429 = rate limited, but key is valid
        res.redirect('/settings?error=Invalid API key');
        return;
      }
    } catch (err) {
      console.error('API key test error:', err);
      // If network error, still allow saving - user can test later
    }

    // Encrypt and save
    const encrypted = encrypt(cursorApiKey.trim());

    await prisma.user.update({
      where: { id: userId },
      data: { cursorApiKeyEncrypted: encrypted },
    });

    res.redirect('/settings?success=API key saved successfully');
  } catch (error) {
    console.error('Save API key error:', error);
    res.redirect('/settings?error=Failed to save API key');
  }
});

/**
 * Delete Cursor API Key
 */
settingsRoutes.post('/api-key/delete', async (req, res) => {
  try {
    const userId = req.session.user!.id;

    await prisma.user.update({
      where: { id: userId },
      data: { cursorApiKeyEncrypted: null },
    });

    res.redirect('/settings?success=API key removed');
  } catch (error) {
    console.error('Delete API key error:', error);
    res.redirect('/settings?error=Failed to remove API key');
  }
});

/**
 * Get saved API key for use in forms (returns decrypted key)
 */
settingsRoutes.get('/api-key', async (req, res) => {
  try {
    const userId = req.session.user!.id;

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { cursorApiKeyEncrypted: true },
    });

    if (!user?.cursorApiKeyEncrypted) {
      res.json({ hasKey: false });
      return;
    }

    // Decrypt and return (masked for security)
    const decrypted = decrypt(user.cursorApiKeyEncrypted);
    res.json({
      hasKey: true,
      key: decrypted, // Full key for API calls
      maskedKey: decrypted.substring(0, 8) + '...' + decrypted.substring(decrypted.length - 4),
    });
  } catch (error) {
    console.error('Get API key error:', error);
    res.status(500).json({ error: 'Failed to retrieve API key' });
  }
});

