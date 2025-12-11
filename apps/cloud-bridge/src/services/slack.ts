/**
 * Slack Notification Service for Cloud Bridge Worker
 * Sends notifications to Slack webhooks for AI processing events
 */

import { prisma, decrypt } from '@opentasks/database';

// Slack event types
export type SlackEventType = 
  | 'queued'      // Ticket queued for AI processing
  | 'processing'  // AI started working
  | 'completed'   // AI completed (PR ready)
  | 'error'       // AI failed
  | 'validated';  // Ticket validated/moved to done

// Event labels for display
const EVENT_LABELS: Record<SlackEventType, string> = {
  queued: '📋 Queued for AI',
  processing: '⚡ AI Processing Started',
  completed: '✅ PR Ready for Review',
  error: '❌ AI Processing Failed',
  validated: '🎉 Ticket Completed',
};

// Event colors for Slack attachments
const EVENT_COLORS: Record<SlackEventType, string> = {
  queued: '#3b82f6',      // Blue
  processing: '#f59e0b',  // Amber
  completed: '#22c55e',   // Green
  error: '#ef4444',       // Red
  validated: '#8b5cf6',   // Purple
};

interface TicketInfo {
  id: string;
  title: string;
  description?: string | null;
  prLink?: string | null;
  targetBranch?: string | null;
  aiSummary?: string | null;
}

interface ProjectInfo {
  id: string;
  name: string;
  slackWebhookEncrypted?: string | null;
  slackEvents?: string | null;
}

/**
 * Check if a project has Slack notifications enabled for a specific event
 */
function isSlackEventEnabled(project: ProjectInfo, event: SlackEventType): boolean {
  if (!project.slackWebhookEncrypted || !project.slackEvents) {
    return false;
  }

  try {
    const enabledEvents: string[] = JSON.parse(project.slackEvents);
    return enabledEvents.includes(event);
  } catch {
    return false;
  }
}

/**
 * Build Slack message payload for a ticket event
 */
function buildSlackMessage(
  ticket: TicketInfo,
  project: ProjectInfo,
  event: SlackEventType,
  extraInfo?: { errorMessage?: string }
): Record<string, unknown> {
  const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';
  const ticketUrl = `${baseUrl}/project/${project.id}/board`;
  const label = EVENT_LABELS[event];
  const color = EVENT_COLORS[event];

  // Build text content
  let textContent = ticket.description
    ? ticket.description.length > 150
      ? ticket.description.substring(0, 150) + '...'
      : ticket.description
    : 'No description';

  // Add error message if present
  if (event === 'error' && extraInfo?.errorMessage) {
    textContent = `Error: ${extraInfo.errorMessage}`;
  }

  // Build fields
  const fields: Array<{ title: string; value: string; short: boolean }> = [
    {
      title: 'Project',
      value: project.name,
      short: true,
    },
    {
      title: 'Status',
      value: label,
      short: true,
    },
  ];

  if (ticket.targetBranch) {
    fields.push({
      title: 'Branch',
      value: `\`${ticket.targetBranch}\``,
      short: true,
    });
  }

  // Build actions
  const actions: Array<{ type: string; text: string; url: string }> = [
    {
      type: 'button',
      text: 'View Board',
      url: ticketUrl,
    },
  ];

  if (ticket.prLink) {
    actions.push({
      type: 'button',
      text: 'View Pull Request',
      url: ticket.prLink,
    });
  }

  // Build message
  return {
    text: `OpenTasks: ${label}`,
    attachments: [
      {
        color,
        title: ticket.title,
        title_link: ticketUrl,
        text: textContent,
        fields,
        actions,
        footer: 'OpenTasks AI',
        ts: Math.floor(Date.now() / 1000),
      },
    ],
  };
}

/**
 * Send a notification to Slack
 */
async function sendSlackNotification(
  webhookUrl: string,
  payload: Record<string, unknown>
): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const text = await response.text();
      return { success: false, error: `Slack API error: ${response.status} - ${text}` };
    }

    return { success: true };
  } catch (error) {
    console.error('[Slack] Notification error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Notify Slack about a ticket event (main entry point)
 */
export async function notifySlack(
  ticketId: string,
  event: SlackEventType,
  extraInfo?: { errorMessage?: string }
): Promise<void> {
  try {
    // Fetch ticket with project
    const ticket = await prisma.ticket.findUnique({
      where: { id: ticketId },
      include: {
        project: {
          select: {
            id: true,
            name: true,
            slackWebhookEncrypted: true,
            slackEvents: true,
          },
        },
      },
    });

    if (!ticket || !ticket.project) {
      console.warn(`[Slack] Ticket ${ticketId} not found`);
      return;
    }

    // Check if event is enabled
    if (!isSlackEventEnabled(ticket.project, event)) {
      console.log(`[Slack] Event '${event}' not enabled for project ${ticket.project.name}`);
      return;
    }

    // Decrypt webhook URL
    const webhookUrl = decrypt(ticket.project.slackWebhookEncrypted!);

    // Build and send message
    const payload = buildSlackMessage(ticket, ticket.project, event, extraInfo);

    const result = await sendSlackNotification(webhookUrl, payload);

    if (result.success) {
      console.log(`[Slack] Notification sent for ticket ${ticketId}: ${event}`);
    } else {
      console.error(`[Slack] Failed to send notification: ${result.error}`);
    }
  } catch (error) {
    console.error('[Slack] Error sending notification:', error);
  }
}



