/**
 * Project Routes
 * Project board and settings pages
 */

import { Router } from 'express';
import { prisma } from '@opentasks/database';
import { requireAuth, requireProjectAccess } from '../middleware/auth.js';

export const projectRoutes = Router();

// All routes require authentication
projectRoutes.use(requireAuth);

/**
 * Project Board Page (Kanban)
 */
projectRoutes.get('/:id/board', async (req, res) => {
  try {
    const { id } = req.params;

    // Check project access
    const membership = await prisma.projectMember.findFirst({
      where: {
        projectId: id,
        userId: req.session.user!.id,
      },
    });

    if (!membership) {
      res.status(403).render('error', {
        title: 'Access Denied',
        message: 'You do not have access to this project.',
      });
      return;
    }

    // Get project with tickets
    const project = await prisma.project.findUnique({
      where: { id },
      include: {
        tickets: {
          include: {
            assignee: {
              select: { id: true, name: true, email: true, avatarUrl: true },
            },
            createdBy: {
              select: { id: true, name: true },
            },
          },
          orderBy: [{ status: 'asc' }, { position: 'asc' }],
        },
        members: {
          include: {
            user: {
              select: { id: true, name: true, email: true, avatarUrl: true },
            },
          },
        },
      },
    });

    if (!project) {
      res.status(404).render('error', {
        title: 'Project Not Found',
        message: 'The project you are looking for does not exist.',
      });
      return;
    }

    // Parse branch presets
    let branchPresets: Array<{ name: string; branch: string }> = [];
    try {
      branchPresets = project.branchPresets ? JSON.parse(project.branchPresets) : [];
    } catch {
      // Ignore parse errors
    }

    // Prepare board state for React hydration
    const boardState = JSON.stringify({
      projectId: project.id,
      projectName: project.name,
      tickets: project.tickets,
      members: project.members.map((m) => m.user),
      branchPresets,
      defaultBranch: project.defaultBranch || 'main',
    });

    res.render('project/board', {
      title: `${project.name} - Board`,
      currentPath: `/project/${id}/board`,
      project: {
        id: project.id,
        name: project.name,
        description: project.description,
        githubRepoUrl: project.githubRepoUrl,
      },
      boardState,
    });
  } catch (error) {
    console.error('Project board error:', error);
    res.status(500).render('error', {
      title: 'Error',
      message: 'Failed to load project board.',
    });
  }
});

/**
 * Project Settings Page
 */
projectRoutes.get('/:id/settings', async (req, res) => {
  try {
    const { id } = req.params;

    // Check project access (admin or owner only)
    const membership = await prisma.projectMember.findFirst({
      where: {
        projectId: id,
        userId: req.session.user!.id,
        role: { in: ['OWNER', 'ADMIN'] },
      },
    });

    if (!membership) {
      res.status(403).render('error', {
        title: 'Access Denied',
        message: 'You do not have permission to access project settings.',
      });
      return;
    }

    // Get project with members
    const project = await prisma.project.findUnique({
      where: { id },
      include: {
        members: {
          include: {
            user: {
              select: { id: true, name: true, email: true, avatarUrl: true },
            },
          },
        },
        _count: {
          select: { tickets: true },
        },
      },
    });

    if (!project) {
      res.status(404).render('error', {
        title: 'Project Not Found',
        message: 'The project you are looking for does not exist.',
      });
      return;
    }

    res.render('project/settings', {
      title: `${project.name} - Settings`,
      currentPath: `/project/${id}/settings`,
      project: {
        ...project,
        hasApiKey: !!project.cursorApiKeyEncrypted,
      },
      membership,
    });
  } catch (error) {
    console.error('Project settings error:', error);
    res.status(500).render('error', {
      title: 'Error',
      message: 'Failed to load project settings.',
    });
  }
});

/**
 * Update Project Settings
 */
projectRoutes.post('/:id/settings', async (req, res) => {
  try {
    const { id } = req.params;

    // Check project access (admin or owner only)
    const membership = await prisma.projectMember.findFirst({
      where: {
        projectId: id,
        userId: req.session.user!.id,
        role: { in: ['OWNER', 'ADMIN'] },
      },
    });

    if (!membership) {
      res.redirect(`/project/${id}/settings?error=Access denied`);
      return;
    }

    const { name, description, githubRepoUrl, defaultBranch, branchPresetsText } = req.body;

    // Handle API key update (only if provided)
    let cursorApiKeyEncrypted: string | undefined;

    if (req.body.cursorApiKey) {
      const { encrypt } = await import('@opentasks/database');
      cursorApiKeyEncrypted = encrypt(req.body.cursorApiKey);
    }

    // Parse branch presets from text format (name=branch per line)
    let branchPresets: string | null = null;
    if (branchPresetsText) {
      try {
        const presets = branchPresetsText
          .split('\n')
          .map((line: string) => line.trim())
          .filter((line: string) => line && line.includes('='))
          .map((line: string) => {
            const [name, branch] = line.split('=').map((s: string) => s.trim());
            return { name, branch };
          });
        branchPresets = JSON.stringify(presets);
      } catch {
        // Ignore parse errors
      }
    }

    await prisma.project.update({
      where: { id },
      data: {
        name: name?.trim() || undefined,
        description: description?.trim() || null,
        githubRepoUrl: githubRepoUrl?.trim() || null,
        defaultBranch: defaultBranch?.trim() || 'main',
        branchPresets,
        ...(cursorApiKeyEncrypted && { cursorApiKeyEncrypted }),
      },
    });

    res.redirect(`/project/${id}/settings?success=Settings updated`);
  } catch (error) {
    console.error('Update project settings error:', error);
    res.redirect(`/project/${req.params.id}/settings?error=Failed to update settings`);
  }
});

/**
 * Delete Project
 */
projectRoutes.post('/:id/delete', async (req, res) => {
  try {
    const { id } = req.params;

    // Check project access (owner only)
    const membership = await prisma.projectMember.findFirst({
      where: {
        projectId: id,
        userId: req.session.user!.id,
        role: 'OWNER',
      },
    });

    if (!membership) {
      res.redirect(`/project/${id}/settings?error=Only the project owner can delete`);
      return;
    }

    await prisma.project.delete({
      where: { id },
    });

    res.redirect('/dashboard?success=Project deleted');
  } catch (error) {
    console.error('Delete project error:', error);
    res.redirect(`/project/${req.params.id}/settings?error=Failed to delete project`);
  }
});
