/**
 * Documentation Routes
 * Onboarding and help documentation
 */

import { Router } from 'express';

export const docsRoutes = Router();

/**
 * GET /docs - Documentation and onboarding
 */
docsRoutes.get('/', (req, res) => {
  res.render('docs/index', {
    title: 'Getting Started - OpenTasks',
    user: req.session?.user || null,
    csrfToken: req.csrfToken?.() || '',
    currentPath: '/docs',
  });
});

