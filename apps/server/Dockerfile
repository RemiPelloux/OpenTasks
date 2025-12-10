# ============================================
# OpenTasks Server - Production Dockerfile
# Multi-stage build for optimized image size
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
COPY apps/server/package.json apps/server/
COPY apps/client-assets/package.json apps/client-assets/

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY packages/database/ packages/database/
COPY apps/server/ apps/server/
COPY apps/client-assets/ apps/client-assets/

# Generate Prisma client
RUN pnpm --filter @opentasks/database run build

# Build client assets
RUN pnpm --filter @opentasks/client-assets run build

# Build server
RUN pnpm --filter @opentasks/server run build

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
COPY --from=builder --chown=opentasks:nodejs /app/apps/server/node_modules ./apps/server/node_modules
COPY --from=builder --chown=opentasks:nodejs /app/apps/server/dist ./apps/server/dist
COPY --from=builder --chown=opentasks:nodejs /app/apps/server/views ./apps/server/views
COPY --from=builder --chown=opentasks:nodejs /app/apps/server/public ./apps/server/public
COPY --from=builder --chown=opentasks:nodejs /app/apps/server/package.json ./apps/server/

# Set environment
ENV NODE_ENV=production
ENV PORT=3000

# Switch to non-root user
USER opentasks

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/health/live || exit 1

# Start server with dumb-init for proper signal handling
WORKDIR /app/apps/server
CMD ["dumb-init", "node", "dist/index.js"]
