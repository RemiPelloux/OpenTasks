/**
 * Job Processor
 * Handles ticket jobs and dispatches to Cursor Cloud API
 */

import type { Job } from 'bullmq';
import { prisma, decrypt, sanitizePromptInput } from '@opentasks/database';
import { CursorApiClient } from '../cursor-api/client.js';
import { checkCostGuardrails, recordUsage } from '../services/cost-guardrails.js';
import { notifySlack } from '../services/slack.js';
import { eventPublisher } from '../services/events.js';

interface TicketJobData {
  jobId: string;
  ticketId: string;
  projectId: string;
  prompt: string;
  title: string;
  aiModel?: string;
  targetBranch?: string;
}

export async function processTicketJob(job: Job<TicketJobData>): Promise<void> {
  const { jobId, ticketId, projectId, prompt, title, aiModel, targetBranch } = job.data;

  // Update job status to DISPATCHED
  await prisma.agentJob.update({
    where: { id: jobId },
    data: {
      status: 'DISPATCHED',
      startedAt: new Date(),
    },
  });

  // Update ticket status to AI_PROCESSING
  const ticket = await prisma.ticket.update({
    where: { id: ticketId },
    data: { status: 'AI_PROCESSING' },
  });

  // Publish event for WebSocket broadcast
  await eventPublisher.publish({
    type: 'moved',
    projectId,
    fromStatus: 'HANDLE',
    toStatus: 'AI_PROCESSING',
    ticket: {
      id: ticket.id,
      title: ticket.title,
      status: ticket.status,
      priority: ticket.priority,
      position: ticket.position,
      agentStatus: ticket.agentStatus,
      prLink: ticket.prLink,
    },
  });

  try {
    // Fetch project configuration
    const project = await prisma.project.findUniqueOrThrow({
      where: { id: projectId },
    });

    // Check cost guardrails
    const costCheck = await checkCostGuardrails(projectId);
    if (!costCheck.allowed) {
      throw new Error(`Cost limit exceeded: ${costCheck.reason}`);
    }

    // Decrypt API key
    if (!project.cursorApiKeyEncrypted) {
      throw new Error('Project does not have Cursor API key configured');
    }

    if (!project.githubRepoUrl) {
      throw new Error('Project does not have GitHub repository configured');
    }

    const cursorApiKey = decrypt(project.cursorApiKeyEncrypted);

    // Initialize Cursor API client
    const cursorClient = new CursorApiClient(cursorApiKey);

    // Assemble the prompt with context
    const sanitizedPrompt = sanitizePromptInput(prompt);
    const fullPrompt = assemblePrompt({
      title,
      description: sanitizedPrompt,
      systemPrompt: null, // System prompt was removed from project settings
    });

    // Launch the Cursor Cloud Agent
    console.log(`🚀 Launching Cursor agent for ticket: ${ticketId}`);
    console.log(`   Model: ${aiModel || 'auto'}`);
    console.log(`   Source Branch: ${targetBranch || 'main'}`);
    
    const agentResponse = await cursorClient.launchAgent({
      prompt: {
        text: fullPrompt,
      },
      model: aiModel || undefined, // Let Cursor choose if not specified
      source: {
        repository: project.githubRepoUrl,
        ref: targetBranch || project.defaultBranch || 'main',
      },
      target: {
        autoCreatePr: true,
        branchName: `opentasks/ticket-${ticketId.slice(0, 8)}`,
      },
    });

    console.log(`📡 Agent launched with ID: ${agentResponse.id}`);

    // Update job with cursor agent ID
    await prisma.agentJob.update({
      where: { id: jobId },
      data: {
        status: 'RUNNING',
        cursorAgentId: agentResponse.id,
      },
    });

    // Update ticket with agent ID
    await prisma.ticket.update({
      where: { id: ticketId },
      data: { agentId: agentResponse.id },
    });

    // Send Slack notification for processing started
    notifySlack(ticketId, 'processing').catch((err) => {
      console.error('[Slack] Failed to send processing notification:', err);
    });

    // Poll for completion (with exponential backoff)
    const result = await cursorClient.waitForCompletion(agentResponse.id, {
      maxAttempts: 60, // 30 minutes max (30s intervals with backoff)
      onStatusUpdate: async (status) => {
        console.log(`📊 Agent status: ${status.status}`);
      },
    });

    // Record usage (estimated)
    await recordUsage(projectId, {
      costCents: 50, // Estimated cost per agent run
      tokensUsed: 10000, // Estimated tokens
      model: 'claude-3.5-sonnet',
      operation: 'agent-task',
    });

    if (result.status === 'completed') {
      // Success - update job and ticket
      await prisma.agentJob.update({
        where: { id: jobId },
        data: {
          status: 'COMPLETED',
          completedAt: new Date(),
          prUrl: result.prUrl,
          result: result.summary,
        },
      });

      const completedTicket = await prisma.ticket.update({
        where: { id: ticketId },
        data: {
          status: 'TO_REVIEW',
          prLink: result.prUrl,
          aiSummary: result.summary || 'AI agent completed task',
        },
      });

      // Publish event for WebSocket broadcast
      await eventPublisher.publish({
        type: 'moved',
        projectId,
        fromStatus: 'AI_PROCESSING',
        toStatus: 'TO_REVIEW',
        ticket: {
          id: completedTicket.id,
          title: completedTicket.title,
          status: completedTicket.status,
          priority: completedTicket.priority,
          position: completedTicket.position,
          agentStatus: 'completed',
          prLink: completedTicket.prLink,
          aiSummary: completedTicket.aiSummary,
        },
      });

      console.log(`✅ Agent completed. PR: ${result.prUrl}`);

      // Send Slack notification for completion
      notifySlack(ticketId, 'completed').catch((err) => {
        console.error('[Slack] Failed to send completed notification:', err);
      });
    } else {
      throw new Error(result.error || 'Agent failed with unknown error');
    }
  } catch (error) {
    console.error(`❌ Job processing error:`, error);

    // Update job as failed
    await prisma.agentJob.update({
      where: { id: jobId },
      data: {
        status: 'FAILED',
        completedAt: new Date(),
        errorMessage: error instanceof Error ? error.message : 'Unknown error',
      },
    });

    // Move ticket back to TODO
    const failedTicket = await prisma.ticket.update({
      where: { id: ticketId },
      data: {
        status: 'TODO',
        aiSummary: `AI processing failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
      },
    });

    // Publish event for WebSocket broadcast
    await eventPublisher.publish({
      type: 'moved',
      projectId,
      fromStatus: 'AI_PROCESSING',
      toStatus: 'TODO',
      ticket: {
        id: failedTicket.id,
        title: failedTicket.title,
        status: failedTicket.status,
        priority: failedTicket.priority,
        position: failedTicket.position,
        agentStatus: 'failed',
        prLink: failedTicket.prLink,
        aiSummary: failedTicket.aiSummary,
      },
    });

    // Send Slack notification for error
    notifySlack(ticketId, 'error', {
      errorMessage: error instanceof Error ? error.message : 'Unknown error',
    }).catch((err) => {
      console.error('[Slack] Failed to send error notification:', err);
    });

    throw error;
  }
}

/**
 * Assemble the full prompt for the Cursor agent
 */
function assemblePrompt(params: {
  title: string;
  description: string;
  systemPrompt: string | null;
}): string {
  const parts: string[] = [];

  // Add system prompt context if available
  if (params.systemPrompt) {
    parts.push(`## Project Context\n${params.systemPrompt}\n`);
  }

  // Add task details
  parts.push(`## Task: ${params.title}\n`);
  parts.push(`### Requirements\n${params.description}\n`);

  // Add instructions for the agent
  parts.push(`## Instructions
1. Analyze the requirements carefully
2. Implement the feature/fix following best practices
3. Write clean, maintainable code
4. Add appropriate tests if applicable
5. Create a pull request with a clear description

Please implement this task and create a pull request.`);

  return parts.join('\n');
}

