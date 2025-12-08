/**
 * Zod Schemas for Validation
 */

import { z } from 'zod';

/**
 * Invite Code Validation
 */
export const InviteCodeSchema = z
  .string()
  .min(6, 'Invite code must be at least 6 characters')
  .max(30, 'Invite code must be at most 30 characters')
  .transform((val) => val.toUpperCase().trim());

/**
 * User Registration Validation
 */
export const RegisterSchema = z.object({
  inviteCode: InviteCodeSchema,
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be at most 100 characters')
    .transform((val) => val.trim()),
  email: z
    .string()
    .email('Invalid email format')
    .max(255, 'Email must be at most 255 characters')
    .transform((val) => val.toLowerCase().trim()),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(100, 'Password must be at most 100 characters')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Password must contain uppercase, lowercase, and number'
    ),
});

/**
 * User Login Validation
 */
export const LoginSchema = z.object({
  email: z
    .string()
    .email('Invalid email format')
    .transform((val) => val.toLowerCase().trim()),
  password: z.string().min(1, 'Password is required'),
});

/**
 * New Project Validation
 */
export const NewProjectSchema = z.object({
  name: z
    .string()
    .min(2, 'Project name must be at least 2 characters')
    .max(100, 'Project name must be at most 100 characters')
    .transform((val) => val.trim()),
  description: z
    .string()
    .max(2000, 'Description must be at most 2000 characters')
    .optional()
    .nullable()
    .transform((val) => val?.trim() || null),
  githubRepoUrl: z
    .string()
    .url('Invalid URL format')
    .optional()
    .nullable()
    .or(z.literal(''))
    .transform((val) => val || null),
  cursorApiKey: z
    .string()
    .optional()
    .nullable()
    .transform((val) => val?.trim() || null),
  systemPrompt: z
    .string()
    .max(10000, 'System prompt must be at most 10000 characters')
    .optional()
    .nullable()
    .transform((val) => val?.trim() || null),
  monthlyBudgetCents: z.coerce
    .number()
    .int()
    .min(0)
    .max(1000000)
    .optional()
    .default(10000),
});

/**
 * Update Ticket Status Validation
 */
export const UpdateTicketStatusSchema = z.object({
  status: z.enum([
    'BACKLOG',
    'TODO',
    'HANDLE',
    'AI_PROCESSING',
    'TO_REVIEW',
    'IN_PROGRESS',
    'DONE',
    'CANCELLED',
  ]),
});

/**
 * Create Ticket Validation
 */
export const CreateTicketSchema = z.object({
  title: z
    .string()
    .min(1, 'Title is required')
    .max(200, 'Title must be at most 200 characters'),
  description: z
    .string()
    .max(5000, 'Description must be at most 5000 characters')
    .optional()
    .nullable(),
  priority: z.enum(['LOW', 'MEDIUM', 'HIGH', 'URGENT']).default('MEDIUM'),
  status: z
    .enum([
      'BACKLOG',
      'TODO',
      'HANDLE',
      'AI_PROCESSING',
      'TO_REVIEW',
      'IN_PROGRESS',
      'DONE',
      'CANCELLED',
    ])
    .default('BACKLOG'),
});

/**
 * Sanitize user input for AI prompts
 * Prevents prompt injection attacks
 */
export function sanitizePromptInput(input: string): string {
  // Remove potential prompt injection patterns
  let sanitized = input
    // Remove markdown code block delimiters that might confuse the AI
    .replace(/```/g, '')
    // Remove system-level instructions
    .replace(/^\s*(system|assistant|user):\s*/gim, '')
    // Remove common injection patterns
    .replace(/ignore\s+(previous|above|all)\s+instructions?/gi, '')
    .replace(/forget\s+everything/gi, '')
    .replace(/you\s+are\s+now/gi, '')
    .replace(/new\s+instructions?:/gi, '')
    .replace(/override\s+instructions?/gi, '')
    // Limit consecutive whitespace
    .replace(/\s{3,}/g, '  ')
    // Trim
    .trim();

  // Truncate if too long (10KB max for safety)
  if (sanitized.length > 10240) {
    sanitized = sanitized.substring(0, 10240) + '...';
  }

  return sanitized;
}

/**
 * Cursor Webhook Payload Validation
 */
export const CursorWebhookPayloadSchema = z.object({
  agentId: z.string(),
  status: z.enum(['pending', 'running', 'completed', 'failed', 'stopped']),
  result: z
    .object({
      prUrl: z.string().url().optional(),
      summary: z.string().optional(),
      filesChanged: z.array(z.string()).optional(),
    })
    .optional(),
  error: z.string().optional(),
  timestamp: z.string().optional(),
});

// Export types
export type RegisterInput = z.infer<typeof RegisterSchema>;
export type LoginInput = z.infer<typeof LoginSchema>;
export type NewProjectInput = z.infer<typeof NewProjectSchema>;
export type UpdateTicketStatusInput = z.infer<typeof UpdateTicketStatusSchema>;
export type CreateTicketInput = z.infer<typeof CreateTicketSchema>;
export type CursorWebhookPayload = z.infer<typeof CursorWebhookPayloadSchema>;
