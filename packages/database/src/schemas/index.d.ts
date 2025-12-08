/**
 * Zod Schemas for Validation
 */
import { z } from 'zod';
/**
 * Invite Code Validation
 */
export declare const InviteCodeSchema: z.ZodEffects<z.ZodString, string, string>;
/**
 * User Registration Validation
 */
export declare const RegisterSchema: z.ZodObject<{
    inviteCode: z.ZodEffects<z.ZodString, string, string>;
    name: z.ZodEffects<z.ZodString, string, string>;
    email: z.ZodEffects<z.ZodString, string, string>;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    inviteCode: string;
    email: string;
    password: string;
}, {
    name: string;
    inviteCode: string;
    email: string;
    password: string;
}>;
/**
 * User Login Validation
 */
export declare const LoginSchema: z.ZodObject<{
    email: z.ZodEffects<z.ZodString, string, string>;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
/**
 * New Project Validation
 */
export declare const NewProjectSchema: z.ZodObject<{
    name: z.ZodEffects<z.ZodString, string, string>;
    description: z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodString>>, string | null, string | null | undefined>;
    githubRepoUrl: z.ZodString;
    cursorApiKey: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    description: string | null;
    githubRepoUrl: string;
    cursorApiKey: string;
}, {
    name: string;
    githubRepoUrl: string;
    cursorApiKey: string;
    description?: string | null | undefined;
}>;
/**
 * Update Ticket Status Validation
 */
export declare const UpdateTicketStatusSchema: z.ZodObject<{
    status: z.ZodEnum<["BACKLOG", "TODO", "HANDLE", "AI_PROCESSING", "TO_REVIEW", "IN_PROGRESS", "DONE", "CANCELLED"]>;
}, "strip", z.ZodTypeAny, {
    status: "BACKLOG" | "TODO" | "HANDLE" | "AI_PROCESSING" | "TO_REVIEW" | "IN_PROGRESS" | "DONE" | "CANCELLED";
}, {
    status: "BACKLOG" | "TODO" | "HANDLE" | "AI_PROCESSING" | "TO_REVIEW" | "IN_PROGRESS" | "DONE" | "CANCELLED";
}>;
/**
 * Create Ticket Validation
 */
export declare const CreateTicketSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    priority: z.ZodDefault<z.ZodEnum<["LOW", "MEDIUM", "HIGH", "URGENT"]>>;
    status: z.ZodDefault<z.ZodEnum<["BACKLOG", "TODO", "HANDLE", "AI_PROCESSING", "TO_REVIEW", "IN_PROGRESS", "DONE", "CANCELLED"]>>;
}, "strip", z.ZodTypeAny, {
    status: "BACKLOG" | "TODO" | "HANDLE" | "AI_PROCESSING" | "TO_REVIEW" | "IN_PROGRESS" | "DONE" | "CANCELLED";
    title: string;
    priority: "LOW" | "MEDIUM" | "HIGH" | "URGENT";
    description?: string | null | undefined;
}, {
    title: string;
    status?: "BACKLOG" | "TODO" | "HANDLE" | "AI_PROCESSING" | "TO_REVIEW" | "IN_PROGRESS" | "DONE" | "CANCELLED" | undefined;
    description?: string | null | undefined;
    priority?: "LOW" | "MEDIUM" | "HIGH" | "URGENT" | undefined;
}>;
/**
 * Sanitize user input for AI prompts
 * Prevents prompt injection attacks
 */
export declare function sanitizePromptInput(input: string): string;
/**
 * Cursor Webhook Payload Validation
 */
export declare const CursorWebhookPayloadSchema: z.ZodObject<{
    agentId: z.ZodString;
    status: z.ZodEnum<["pending", "running", "completed", "failed", "stopped"]>;
    result: z.ZodOptional<z.ZodObject<{
        prUrl: z.ZodOptional<z.ZodString>;
        summary: z.ZodOptional<z.ZodString>;
        filesChanged: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        prUrl?: string | undefined;
        summary?: string | undefined;
        filesChanged?: string[] | undefined;
    }, {
        prUrl?: string | undefined;
        summary?: string | undefined;
        filesChanged?: string[] | undefined;
    }>>;
    error: z.ZodOptional<z.ZodString>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status: "pending" | "running" | "completed" | "failed" | "stopped";
    agentId: string;
    error?: string | undefined;
    result?: {
        prUrl?: string | undefined;
        summary?: string | undefined;
        filesChanged?: string[] | undefined;
    } | undefined;
    timestamp?: string | undefined;
}, {
    status: "pending" | "running" | "completed" | "failed" | "stopped";
    agentId: string;
    error?: string | undefined;
    result?: {
        prUrl?: string | undefined;
        summary?: string | undefined;
        filesChanged?: string[] | undefined;
    } | undefined;
    timestamp?: string | undefined;
}>;
export type RegisterInput = z.infer<typeof RegisterSchema>;
export type LoginInput = z.infer<typeof LoginSchema>;
export type NewProjectInput = z.infer<typeof NewProjectSchema>;
export type UpdateTicketStatusInput = z.infer<typeof UpdateTicketStatusSchema>;
export type CreateTicketInput = z.infer<typeof CreateTicketSchema>;
export type CursorWebhookPayload = z.infer<typeof CursorWebhookPayloadSchema>;
//# sourceMappingURL=index.d.ts.map