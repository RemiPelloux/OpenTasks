FROM node:20-alpine AS base

# Install pnpm
RUN corepack enable && corepack prepare pnpm@8.15.0 --activate

WORKDIR /app

# Copy workspace files
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml* ./
COPY packages/database/package.json ./packages/database/
COPY apps/server/package.json ./apps/server/

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY packages/database/ ./packages/database/
COPY apps/server/ ./apps/server/
COPY tsconfig.base.json ./

# Generate Prisma client
RUN pnpm --filter @opentasks/database run generate

# Build packages
RUN pnpm --filter @opentasks/database run build
RUN pnpm --filter @opentasks/server run build

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
COPY --from=base /app/apps/server/dist ./apps/server/dist
COPY --from=base /app/apps/server/views ./apps/server/views
COPY --from=base /app/apps/server/public ./apps/server/public
COPY --from=base /app/apps/server/package.json ./apps/server/
COPY --from=base /app/apps/server/node_modules ./apps/server/node_modules

ENV NODE_ENV=production
EXPOSE 3000

WORKDIR /app/apps/server
CMD ["node", "dist/index.js"]

