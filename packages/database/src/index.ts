/**
 * Database Package
 * Exports Prisma client, types, and utilities
 */

import { PrismaClient } from '@prisma/client';

// Singleton Prisma client
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

// Re-export Prisma types
export * from '@prisma/client';

// Re-export schemas
export * from './schemas/index.js';

// Re-export encryption utilities
export { encrypt, decrypt, hashPassword, verifyPassword } from './encryption.js';
