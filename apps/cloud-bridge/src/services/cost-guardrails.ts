/**
 * Cost Guardrails Service
 * Tracks API usage and enforces budget limits
 */

import { prisma } from '@opentasks/database';
import { config } from '../config.js';

interface CostCheckResult {
  allowed: boolean;
  reason?: string;
  currentUsageCents: number;
  budgetCents: number;
  remainingCents: number;
}

/**
 * Check if a project can proceed with API usage
 */
export async function checkCostGuardrails(projectId: string): Promise<CostCheckResult> {
  // Check project exists
  const project = await prisma.project.findUnique({
    where: { id: projectId },
    select: { id: true },
  });

  if (!project) {
    return {
      allowed: false,
      reason: 'Project not found',
      currentUsageCents: 0,
      budgetCents: 0,
      remainingCents: 0,
    };
  }

  // Use global config for budget limit
  const budgetCents = config.costGuardrails.maxProjectCostCents;

  // Calculate current month usage
  const startOfMonth = new Date();
  startOfMonth.setDate(1);
  startOfMonth.setHours(0, 0, 0, 0);

  const usage = await prisma.usageRecord.aggregate({
    where: {
      projectId,
      recordedAt: { gte: startOfMonth },
    },
    _sum: { costCents: true },
  });

  const currentUsageCents = usage._sum.costCents || 0;
  const remainingCents = budgetCents - currentUsageCents;

  if (currentUsageCents >= budgetCents) {
    return {
      allowed: false,
      reason: `Monthly budget of $${(budgetCents / 100).toFixed(2)} exceeded. Current usage: $${(currentUsageCents / 100).toFixed(2)}`,
      currentUsageCents,
      budgetCents,
      remainingCents: 0,
    };
  }

  // Warn if close to limit (90%)
  if (currentUsageCents >= budgetCents * 0.9) {
    console.warn(
      `⚠️ Project ${projectId} is at ${((currentUsageCents / budgetCents) * 100).toFixed(1)}% of monthly budget`
    );
  }

  return {
    allowed: true,
    currentUsageCents,
    budgetCents,
    remainingCents,
  };
}

/**
 * Record API usage
 */
export async function recordUsage(
  projectId: string,
  data: {
    costCents: number;
    tokensUsed: number;
    model: string;
    operation: string;
    metadata?: Record<string, unknown>;
  }
): Promise<void> {
  await prisma.usageRecord.create({
    data: {
      projectId,
      costCents: data.costCents,
      tokensUsed: data.tokensUsed,
      model: data.model,
      operation: data.operation,
      metadata: data.metadata ? JSON.stringify(data.metadata) : null,
    },
  });

  console.log(
    `💰 Recorded usage: $${(data.costCents / 100).toFixed(2)} for project ${projectId}`
  );
}

/**
 * Get usage summary for a project
 */
export async function getUsageSummary(projectId: string): Promise<{
  currentMonthCents: number;
  previousMonthCents: number;
  totalTokens: number;
  operationBreakdown: Record<string, number>;
}> {
  const now = new Date();
  
  // Current month start
  const currentMonthStart = new Date(now.getFullYear(), now.getMonth(), 1);
  
  // Previous month start/end
  const previousMonthStart = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  const previousMonthEnd = new Date(now.getFullYear(), now.getMonth(), 0);

  // Current month usage
  const currentUsage = await prisma.usageRecord.aggregate({
    where: {
      projectId,
      recordedAt: { gte: currentMonthStart },
    },
    _sum: {
      costCents: true,
      tokensUsed: true,
    },
  });

  // Previous month usage
  const previousUsage = await prisma.usageRecord.aggregate({
    where: {
      projectId,
      recordedAt: {
        gte: previousMonthStart,
        lte: previousMonthEnd,
      },
    },
    _sum: { costCents: true },
  });

  // Operation breakdown for current month
  const operations = await prisma.usageRecord.groupBy({
    by: ['operation'],
    where: {
      projectId,
      recordedAt: { gte: currentMonthStart },
    },
    _sum: { costCents: true },
  });

  const operationBreakdown: Record<string, number> = {};
  for (const op of operations) {
    operationBreakdown[op.operation] = op._sum.costCents || 0;
  }

  return {
    currentMonthCents: currentUsage._sum.costCents || 0,
    previousMonthCents: previousUsage._sum.costCents || 0,
    totalTokens: currentUsage._sum.tokensUsed || 0,
    operationBreakdown,
  };
}
