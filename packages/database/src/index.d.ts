/**
 * Database Package
 * Exports Prisma client, types, and utilities
 */
import { PrismaClient } from '@prisma/client';
export declare const prisma: PrismaClient<import("@prisma/client").Prisma.PrismaClientOptions, never, import("@prisma/client/runtime/library").DefaultArgs>;
export * from '@prisma/client';
export * from './schemas/index.js';
export { encrypt, decrypt, hashPassword, verifyPassword } from './encryption.js';
//# sourceMappingURL=index.d.ts.map