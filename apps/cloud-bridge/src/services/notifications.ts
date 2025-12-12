/**
 * Unified Notification Service
 * Supports Slack and Discord notifications for ticket events
 */

import { prisma, decrypt } from '@opentasks/database';

// Notification event types
export type NotificationEventType = 
  | 'queued'      // Ticket queued for AI processing
  | 'processing'  // AI started working
  | 'completed'   // AI completed (PR ready)
  | 'error'       // AI failed
  | 'validated';  // Ticket validated/moved to done

// Event labels for display
const EVENT_LABELS: Record<NotificationEventType, string> = {
  queued: '📋 Queued for AI',
  processing: '⚡ AI Processing Started',
  completed: '✅ PR Ready for Review',
  error: '❌ AI Processing Failed',
  validated: '🎉 Ticket Completed',
};

// Event colors
const EVENT_COLORS: Record<NotificationEventType, { slack: string; discord: number }> = {
  queued: { slack: '#3b82f6', discord: 0x3b82f6 },      // Blue
  processing: { slack: '#f59e0b', discord: 0xf59e0b },  // Amber
  completed: { slack: '#22c55e', discord: 0x22c55e },   // Green
  error: { slack: '#ef4444', discord: 0xef4444 },       // Red
  validated: { slack: '#8b5cf6', discord: 0x8b5cf6 },   // Purple
};

interface NotificationPayload {
  ticketId: string;
  ticketTitle: string;
  projectName: string;
  projectId: string;
  event: NotificationEventType;
  description?: string;
  prLink?: string;
  targetBranch?: string;
  aiSummary?: string;
  errorMessage?: string;
}

/**
 * Check if an event is enabled for notifications
 */
function isEventEnabled(
  project: { slackEvents?: string | null },
  event: NotificationEventType
): boolean {
  if (!project.slackEvents) return false;
  
  try {
    const enabledEvents: string[] = JSON.parse(project.slackEvents);
    return enabledEvents.includes(event);
  } catch {
    return false;
  }
}

/**
 * Build Slack message payload
 */
function buildSlackMessage(payload: NotificationPayload): Record<string, unknown> {
  const baseUrl = process.env.APP_BASE_URL || 'https://opentasks.fr';
  const ticketUrl = `${baseUrl}/project/${payload.projectId}/board`;
  const label = EVENT_LABELS[payload.event];
  const color = EVENT_COLORS[payload.event].slack;

  let textContent = payload.description
    ? payload.description.length > 150
      ? payload.description.substring(0, 150) + '...'
      : payload.description
    : '';

  // Add error message or AI summary
  if (payload.event === 'error' && payload.errorMessage) {
    textContent = `⚠️ Error: ${payload.errorMessage}`;
  } else if (payload.aiSummary) {
    textContent = payload.aiSummary.length > 200 
      ? payload.aiSummary.substring(0, 200) + '...'
      : payload.aiSummary;
  }

  const fields: Array<{ title: string; value: string; short: boolean }> = [
    { title: 'Project', value: payload.projectName, short: true },
    { title: 'Status', value: label, short: true },
  ];

  if (payload.targetBranch) {
    fields.push({ title: 'Branch', value: `\`${payload.targetBranch}\``, short: true });
  }

  const actions: Array<{ type: string; text: string; url: string }> = [
    { type: 'button', text: '🔗 View Board', url: ticketUrl },
  ];

  if (payload.prLink) {
    actions.push({ type: 'button', text: '📝 View PR', url: payload.prLink });
  }

  return {
    text: `OpenTasks: ${label}`,
    attachments: [
      {
        color,
        title: payload.ticketTitle,
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
 * Build Discord message payload (using embeds)
 */
function buildDiscordMessage(payload: NotificationPayload): Record<string, unknown> {
  const baseUrl = process.env.APP_BASE_URL || 'https://opentasks.fr';
  const ticketUrl = `${baseUrl}/project/${payload.projectId}/board`;
  const label = EVENT_LABELS[payload.event];
  const color = EVENT_COLORS[payload.event].discord;

  let description = payload.description
    ? payload.description.length > 200
      ? payload.description.substring(0, 200) + '...'
      : payload.description
    : '';

  // Add error message or AI summary
  if (payload.event === 'error' && payload.errorMessage) {
    description = `⚠️ **Error:** ${payload.errorMessage}`;
  } else if (payload.aiSummary) {
    description = payload.aiSummary.length > 300 
      ? payload.aiSummary.substring(0, 300) + '...'
      : payload.aiSummary;
  }

  const fields: Array<{ name: string; value: string; inline: boolean }> = [
    { name: '📁 Project', value: payload.projectName, inline: true },
    { name: '📊 Status', value: label, inline: true },
  ];

  if (payload.targetBranch) {
    fields.push({ name: '🌿 Branch', value: `\`${payload.targetBranch}\``, inline: true });
  }

  // Add links as a field
  let links = `[🔗 View Board](${ticketUrl})`;
  if (payload.prLink) {
    links += ` • [📝 View PR](${payload.prLink})`;
  }
  fields.push({ name: '🔗 Links', value: links, inline: false });

  return {
    username: 'OpenTasks AI',
    avatar_url: 'https://opentasks.fr/favicon.ico',
    embeds: [
      {
        title: payload.ticketTitle,
        url: ticketUrl,
        description,
        color,
        fields,
        footer: {
          text: 'OpenTasks AI Agent',
        },
        timestamp: new Date().toISOString(),
      },
    ],
  };
}

/**
 * Send notification to Slack
 */
async function sendSlackNotification(
  webhookUrl: string,
  payload: Record<string, unknown>
): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
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
 * Send notification to Discord
 */
async function sendDiscordNotification(
  webhookUrl: string,
  payload: Record<string, unknown>
): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const text = await response.text();
      return { success: false, error: `Discord API error: ${response.status} - ${text}` };
    }

    return { success: true };
  } catch (error) {
    console.error('[Discord] Notification error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Send notification to configured channels (main entry point)
 */
export async function sendNotification(
  ticketId: string,
  event: NotificationEventType,
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
            notificationChannel: true,
            slackWebhookEncrypted: true,
            discordWebhookEncrypted: true,
            slackEvents: true,
          },
        },
      },
    });

    if (!ticket || !ticket.project) {
      console.warn(`[Notification] Ticket ${ticketId} not found`);
      return;
    }

    // Check if event is enabled
    if (!isEventEnabled(ticket.project, event)) {
      console.log(`[Notification] Event '${event}' not enabled for project ${ticket.project.name}`);
      return;
    }

    const channel = ticket.project.notificationChannel || 'slack';
    const payload: NotificationPayload = {
      ticketId: ticket.id,
      ticketTitle: ticket.title,
      projectName: ticket.project.name,
      projectId: ticket.project.id,
      event,
      description: ticket.description || undefined,
      prLink: ticket.prLink || undefined,
      targetBranch: ticket.targetBranch || undefined,
      aiSummary: ticket.aiSummary || undefined,
      errorMessage: extraInfo?.errorMessage,
    };

    // Send to Slack if configured
    if ((channel === 'slack' || channel === 'both') && ticket.project.slackWebhookEncrypted) {
      try {
        const webhookUrl = decrypt(ticket.project.slackWebhookEncrypted);
        const slackPayload = buildSlackMessage(payload);
        const result = await sendSlackNotification(webhookUrl, slackPayload);
        
        if (result.success) {
          console.log(`[Slack] Notification sent for ticket ${ticketId}: ${event}`);
        } else {
          console.error(`[Slack] Failed: ${result.error}`);
        }
      } catch (error) {
        console.error('[Slack] Error:', error);
      }
    }

    // Send to Discord if configured
    if ((channel === 'discord' || channel === 'both') && ticket.project.discordWebhookEncrypted) {
      try {
        const webhookUrl = decrypt(ticket.project.discordWebhookEncrypted);
        const discordPayload = buildDiscordMessage(payload);
        const result = await sendDiscordNotification(webhookUrl, discordPayload);
        
        if (result.success) {
          console.log(`[Discord] Notification sent for ticket ${ticketId}: ${event}`);
        } else {
          console.error(`[Discord] Failed: ${result.error}`);
        }
      } catch (error) {
        console.error('[Discord] Error:', error);
      }
    }
  } catch (error) {
    console.error('[Notification] Error sending notification:', error);
  }
}

// Export for backward compatibility
export { sendNotification as notifySlack };

