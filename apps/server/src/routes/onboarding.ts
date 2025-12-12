/**
 * Onboarding Routes
 * Guides new users through initial setup
 */

import { Router } from 'express';
import { prisma, encrypt } from '@opentasks/database';
import { requireAuth } from '../middleware/auth.js';
import slugify from 'slugify';

export const onboardingRoutes = Router();

// All routes require authentication
onboardingRoutes.use(requireAuth);

/**
 * Onboarding Page
 * GET /onboarding
 */
onboardingRoutes.get('/', async (req, res) => {
  try {
    const userId = req.session.user!.id;

    // Check if user has already completed onboarding
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { onboardingCompleted: true, onboardingSkipped: true },
    });

    if (user?.onboardingCompleted || user?.onboardingSkipped) {
      res.redirect('/dashboard');
      return;
    }

    res.render('onboarding/index', {
      title: 'Welcome to OpenTasks - Get Started',
      currentPath: '/onboarding',
    });
  } catch (error) {
    console.error('Onboarding page error:', error);
    res.status(500).render('error', {
      title: 'Error',
      message: 'Failed to load onboarding.',
    });
  }
});

/**
 * Complete Onboarding
 * POST /onboarding/complete
 */
onboardingRoutes.post('/complete', async (req, res) => {
  try {
    const userId = req.session.user!.id;
    const {
      cursorApiKey,
      saveKeyGlobally,
      projectName,
      projectDescription,
      githubRepoUrl,
      defaultBranch,
      slackWebhook,
      discordWebhook,
    } = req.body;

    // Validate required fields
    if (!cursorApiKey || !projectName) {
      res.status(400).render('onboarding/index', {
        title: 'Welcome to OpenTasks',
        currentPath: '/onboarding',
        error: 'Cursor API Key and Project Name are required',
      });
      return;
    }

    // Start transaction
    const result = await prisma.$transaction(async (tx) => {
      // Update user with API key if saving globally
      let userUpdate: any = {
        onboardingCompleted: true,
        onboardingStep: 5,
      };

      if (saveKeyGlobally === 'on' || saveKeyGlobally === 'true') {
        userUpdate.cursorApiKeyEncrypted = encrypt(cursorApiKey);
      }

      await tx.user.update({
        where: { id: userId },
        data: userUpdate,
      });

      // Generate project slug
      let slug = slugify(projectName, { lower: true, strict: true });

      // Check for slug uniqueness
      let slugExists = await tx.project.findUnique({ where: { slug } });
      let suffix = 1;
      while (slugExists) {
        slug = `${slugify(projectName, { lower: true, strict: true })}-${suffix}`;
        slugExists = await tx.project.findUnique({ where: { slug } });
        suffix++;
      }

      // Encrypt API key and webhooks
      const cursorApiKeyEncrypted = encrypt(cursorApiKey);
      const slackWebhookEncrypted = slackWebhook ? encrypt(slackWebhook) : null;
      const discordWebhookEncrypted = discordWebhook ? encrypt(discordWebhook) : null;

      // Determine notification channel
      let notificationChannel: string | null = null;
      if (slackWebhook && discordWebhook) {
        notificationChannel = 'both';
      } else if (slackWebhook) {
        notificationChannel = 'slack';
      } else if (discordWebhook) {
        notificationChannel = 'discord';
      }

      // Create project with owner membership
      const project = await tx.project.create({
        data: {
          name: projectName.trim(),
          description: projectDescription?.trim() || null,
          slug,
          githubRepoUrl: githubRepoUrl?.trim() || null,
          cursorApiKeyEncrypted,
          defaultBranch: defaultBranch?.trim() || 'main',
          notificationChannel,
          slackWebhookEncrypted,
          discordWebhookEncrypted,
          slackEvents: JSON.stringify(['queued', 'processing', 'completed', 'error']),
          members: {
            create: {
              userId,
              role: 'OWNER',
            },
          },
        },
      });

      return project;
    });

    // Redirect to the new project's board
    res.redirect(`/project/${result.id}/board`);
  } catch (error) {
    console.error('Complete onboarding error:', error);
    res.status(500).render('onboarding/index', {
      title: 'Welcome to OpenTasks',
      currentPath: '/onboarding',
      error: 'Failed to complete onboarding. Please try again.',
    });
  }
});

/**
 * Skip Onboarding
 * POST /onboarding/skip
 */
onboardingRoutes.post('/skip', async (req, res) => {
  try {
    const userId = req.session.user!.id;

    await prisma.user.update({
      where: { id: userId },
      data: {
        onboardingSkipped: true,
      },
    });

    res.redirect('/dashboard');
  } catch (error) {
    console.error('Skip onboarding error:', error);
    res.redirect('/dashboard');
  }
});
