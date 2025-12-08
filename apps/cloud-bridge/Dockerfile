FROM node:20-alpine AS base

# Install pnpm
RUN corepack enable && corepack prepare pnpm@8.15.0 --activate

WORKDIR /app

# Copy workspace files
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml* ./
COPY packages/database/package.json ./packages/database/
COPY apps/cloud-bridge/package.json ./apps/cloud-bridge/

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY packages/database/ ./packages/database/
COPY apps/cloud-bridge/ ./apps/cloud-bridge/
COPY tsconfig.base.json ./

# Generate Prisma client
RUN pnpm --filter @opentasks/database run generate

# Build packages
RUN pnpm --filter @opentasks/database run build
RUN pnpm --filter @opentasks/cloud-bridge run build

# Production image
FROM node:20-alpine AS production

RUN corepack enable && corepack prepare pnpm@8.15.0 --activate

WORKDIR /app

# Copy built files and dependencies
COPY --from=base /app/package.json /app/pnpm-workspace.yaml ./
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/packages/database/dist ./packages/database/dist
COPY --from=base /app/packages/database/package.json ./packages/database/
COPY --from=base /app/packages/database/node_modules ./packages/database/node_modules
COPY --from=base /app/apps/cloud-bridge/dist ./apps/cloud-bridge/dist
COPY --from=base /app/apps/cloud-bridge/package.json ./apps/cloud-bridge/
COPY --from=base /app/apps/cloud-bridge/node_modules ./apps/cloud-bridge/node_modules

ENV NODE_ENV=production

WORKDIR /app/apps/cloud-bridge
CMD ["node", "dist/index.js"]

