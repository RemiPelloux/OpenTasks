/**
 * Dashboard Routes
 * Project listing and creation
 */

import { Router } from 'express';
import { prisma, NewProjectSchema, encrypt } from '@opentasks/database';
import { requireAuth } from '../middleware/auth.js';
import slugify from 'slugify';

export const dashboardRoutes = Router();

// All routes require authentication
dashboardRoutes.use(requireAuth);

/**
 * Dashboard Page (Project List)
 */
dashboardRoutes.get('/', async (req, res) => {
  try {
    const userId = req.session.user!.id;

    // Get user's projects with stats
    const memberships = await prisma.projectMember.findMany({
      where: { userId },
      include: {
        project: {
          include: {
            _count: {
              select: {
                tickets: true,
                members: true,
              },
            },
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    const projects = memberships.map((m) => ({
      id: m.project.id,
      name: m.project.name,
      description: m.project.description,
      slug: m.project.slug,
      githubRepoUrl: m.project.githubRepoUrl,
      isArchived: m.project.isArchived,
      role: m.role,
      ticketCount: m.project._count.tickets,
      memberCount: m.project._count.members,
    }));

    res.render('dashboard/index', {
      title: 'Dashboard - OpenTasks',
      currentPath: '/dashboard',
      projects,
    });
  } catch (error) {
    console.error('Dashboard error:', error);
    res.status(500).render('error', {
      title: 'Error',
      message: 'Failed to load dashboard.',
    });
  }
});

/**
 * New Project Page (GET)
 */
dashboardRoutes.get('/new-project', (req, res) => {
  res.render('dashboard/new-project', {
    title: 'New Project - OpenTasks',
    currentPath: '/dashboard/new-project',
    error: req.query.error,
  });
});

/**
 * Create Project Handler (POST)
 */
dashboardRoutes.post('/new-project', async (req, res) => {
  try {
    const userId = req.session.user!.id;

    // Validate input
    const parseResult = NewProjectSchema.safeParse(req.body);
    if (!parseResult.success) {
      const errors = parseResult.error.flatten().fieldErrors;
      const errorMsg = Object.values(errors).flat()[0] || 'Invalid input';
      res.render('dashboard/new-project', {
        title: 'New Project - OpenTasks',
        currentPath: '/dashboard/new-project',
        error: errorMsg,
      });
      return;
    }

    const { name, description, githubRepoUrl, cursorApiKey } = parseResult.data;

    // Generate slug
    let slug = slugify(name, { lower: true, strict: true });
    
    // Check for slug uniqueness and add suffix if needed
    let slugExists = await prisma.project.findUnique({ where: { slug } });
    let suffix = 1;
    while (slugExists) {
      slug = `${slugify(name, { lower: true, strict: true })}-${suffix}`;
      slugExists = await prisma.project.findUnique({ where: { slug } });
      suffix++;
    }

    // Encrypt API key
    const cursorApiKeyEncrypted = encrypt(cursorApiKey);

    // Create project with owner membership
    const project = await prisma.project.create({
      data: {
        name: name.trim(),
        description: description?.trim() || null,
        slug,
        githubRepoUrl,
        cursorApiKeyEncrypted,
        members: {
          create: {
            userId,
            role: 'OWNER',
          },
        },
      },
    });

    res.redirect(`/project/${project.id}/board`);
  } catch (error) {
    console.error('Create project error:', error);
    res.render('dashboard/new-project', {
      title: 'New Project - OpenTasks',
      currentPath: '/dashboard/new-project',
      error: 'Failed to create project. Please try again.',
    });
  }
});
