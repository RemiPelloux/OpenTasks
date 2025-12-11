/**
 * Webhook Routes
 * Handle callbacks from Cursor Cloud Agent
 */

import { Router } from 'express';
import crypto from 'crypto';
import { prisma, CursorWebhookPayloadSchema } from '@opentasks/database';

export const webhookRoutes = Router();

/**
 * Verify webhook signature
 */
function verifyWebhookSignature(
  payload: string,
  signature: string | undefined,
  secret: string
): boolean {
  if (!signature) return false;

  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');

  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  );
}

/**
 * Cursor Cloud Agent webhook endpoint
 * Receives status updates when agent tasks complete
 */
webhookRoutes.post('/cursor', async (req, res) => {
  try {
    const signature = req.headers['x-cursor-signature'] as string | undefined;
    const rawBody = JSON.stringify(req.body);

    // Parse and validate payload
    const result = CursorWebhookPayloadSchema.safeParse(req.body);

    if (!result.success) {
      console.error('Invalid webhook payload:', result.error);
      res.status(400).json({ error: 'Invalid payload' });
      return;
    }

    const payload = result.data;

    // Find the agent job by cursor agent ID
    const agentJob = await prisma.agentJob.findFirst({
      where: { cursorAgentId: payload.agentId },
      include: {
        ticket: {
          include: {
            project: true,
          },
        },
      },
    });

    if (!agentJob) {
      console.warn(`No agent job found for cursor agent: ${payload.agentId}`);
      res.status(404).json({ error: 'Agent job not found' });
      return;
    }

    // Verify signature if webhook secret is configured
    // Note: In production, each project should have its own webhook secret
    const webhookSecret = process.env.CURSOR_WEBHOOK_SECRET;
    if (webhookSecret && !verifyWebhookSignature(rawBody, signature, webhookSecret)) {
      console.error('Invalid webhook signature');
      res.status(401).json({ error: 'Invalid signature' });
      return;
    }

    // Map Cursor status to our status
    const statusMap: Record<string, 'RUNNING' | 'COMPLETED' | 'FAILED' | 'CANCELLED'> = {
      pending: 'RUNNING',
      running: 'RUNNING',
      completed: 'COMPLETED',
      failed: 'FAILED',
      stopped: 'CANCELLED',
    };

    const newJobStatus = statusMap[payload.status] || 'RUNNING';

    // Update agent job
    await prisma.agentJob.update({
      where: { id: agentJob.id },
      data: {
        status: newJobStatus,
        prUrl: payload.result?.prUrl,
        result: payload.result?.summary,
        errorMessage: payload.error,
        completedAt: ['COMPLETED', 'FAILED', 'CANCELLED'].includes(newJobStatus)
          ? new Date()
          : undefined,
      },
    });

    // Update ticket status based on job result
    if (payload.status === 'completed' && payload.result?.prUrl) {
      await prisma.ticket.update({
        where: { id: agentJob.ticketId },
        data: {
          status: 'TO_REVIEW',
          prLink: payload.result.prUrl,
          aiSummary: payload.result.summary,
        },
      });

      console.log(`Ticket ${agentJob.ticketId} moved to TO_REVIEW with PR: ${payload.result.prUrl}`);
    } else if (payload.status === 'failed') {
      await prisma.ticket.update({
        where: { id: agentJob.ticketId },
        data: {
          status: 'TODO', // Move back to TODO on failure
          aiSummary: `AI processing failed: ${payload.error || 'Unknown error'}`,
        },
      });

      console.log(`Ticket ${agentJob.ticketId} moved back to TODO due to failure`);
    }

    res.json({ success: true });
  } catch (error) {
    console.error('Webhook processing error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

/**
 * Health check endpoint
 */
webhookRoutes.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});



