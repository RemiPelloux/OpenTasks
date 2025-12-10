# ============================================
# OpenTasks Cloud Bridge - Production Dockerfile
# Background worker for AI agent processing
# ============================================

# Stage 1: Build
FROM node:20-alpine AS builder

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy workspace files
COPY pnpm-workspace.yaml package.json pnpm-lock.yaml ./
COPY tsconfig.base.json ./

# Copy packages
COPY packages/database/package.json packages/database/
COPY apps/cloud-bridge/package.json apps/cloud-bridge/

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY packages/database/ packages/database/
COPY apps/cloud-bridge/ apps/cloud-bridge/

# Generate Prisma client
RUN pnpm --filter @opentasks/database run build

# Build cloud-bridge
RUN pnpm --filter @opentasks/cloud-bridge run build

# Prune dev dependencies and regenerate Prisma client
RUN pnpm prune --prod && pnpm --filter @opentasks/database exec prisma generate

# Stage 2: Production
FROM node:20-alpine AS production

# Install only runtime dependencies (including OpenSSL for Prisma)
RUN apk add --no-cache dumb-init openssl openssl-dev

# Create non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S opentasks -u 1001 -G nodejs

WORKDIR /app

# Copy built files and dependencies
COPY --from=builder --chown=opentasks:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=opentasks:nodejs /app/packages ./packages
COPY --from=builder --chown=opentasks:nodejs /app/apps/cloud-bridge/node_modules ./apps/cloud-bridge/node_modules
COPY --from=builder --chown=opentasks:nodejs /app/apps/cloud-bridge/dist ./apps/cloud-bridge/dist
COPY --from=builder --chown=opentasks:nodejs /app/apps/cloud-bridge/package.json ./apps/cloud-bridge/

# Set environment
ENV NODE_ENV=production

# Switch to non-root user
USER opentasks

# Start worker with dumb-init for proper signal handling
WORKDIR /app/apps/cloud-bridge
CMD ["dumb-init", "node", "dist/index.js"]
