#!/bin/bash
# ============================================================
# OpenTasks Deployment Script
# Usage: ./scripts/deploy.sh [--build] [--migrate]
# ============================================================

set -e

# Configuration
SERVER_USER="sysadm"
SERVER_HOST="82.97.8.94"
SERVER_PATH="/home/sysadm/opentasks"
COMPOSE_FILE="docker-compose.server.yml"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Parse arguments
BUILD=false
MIGRATE=false
for arg in "$@"; do
    case $arg in
        --build) BUILD=true ;;
        --migrate) MIGRATE=true ;;
        --help)
            echo "Usage: ./scripts/deploy.sh [--build] [--migrate]"
            echo "  --build    Rebuild Docker images"
            echo "  --migrate  Run database migrations"
            exit 0
            ;;
    esac
done

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}   OpenTasks Deployment${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

# Step 1: Check for uncommitted changes
echo -e "\n${YELLOW}[1/6] Checking local changes...${NC}"
if [[ -n $(git status --porcelain) ]]; then
    echo -e "${RED}⚠ You have uncommitted changes!${NC}"
    git status --short
    read -p "Continue anyway? (y/N) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
else
    echo -e "${GREEN}✓ Working directory clean${NC}"
fi

# Step 2: Sync files to server
echo -e "\n${YELLOW}[2/6] Syncing files to server...${NC}"
rsync -avz --delete \
    --exclude 'node_modules' \
    --exclude '.git' \
    --exclude 'dist' \
    --exclude '.env' \
    --exclude '.env.local' \
    --exclude '*.log' \
    --exclude '.next' \
    --exclude '.turbo' \
    --exclude 'coverage' \
    ./ ${SERVER_USER}@${SERVER_HOST}:${SERVER_PATH}/

echo -e "${GREEN}✓ Files synced${NC}"

# Step 3: Build if requested
if [ "$BUILD" = true ]; then
    echo -e "\n${YELLOW}[3/6] Building Docker images on server...${NC}"
    ssh ${SERVER_USER}@${SERVER_HOST} "cd ${SERVER_PATH} && docker compose -f ${COMPOSE_FILE} build --no-cache"
    echo -e "${GREEN}✓ Build complete${NC}"
else
    echo -e "\n${YELLOW}[3/6] Skipping build (use --build to rebuild)${NC}"
fi

# Step 4: Run migrations if requested
if [ "$MIGRATE" = true ]; then
    echo -e "\n${YELLOW}[4/6] Running database migrations...${NC}"
    ssh ${SERVER_USER}@${SERVER_HOST} "cd ${SERVER_PATH} && docker compose -f ${COMPOSE_FILE} exec -T server npx prisma migrate deploy"
    echo -e "${GREEN}✓ Migrations complete${NC}"
else
    echo -e "\n${YELLOW}[4/6] Skipping migrations (use --migrate to run)${NC}"
fi

# Step 5: Restart services
echo -e "\n${YELLOW}[5/6] Restarting services...${NC}"
ssh ${SERVER_USER}@${SERVER_HOST} "cd ${SERVER_PATH} && docker compose -f ${COMPOSE_FILE} up -d"
echo -e "${GREEN}✓ Services restarted${NC}"

# Step 6: Health check
echo -e "\n${YELLOW}[6/6] Running health check...${NC}"
sleep 5
HEALTH=$(ssh ${SERVER_USER}@${SERVER_HOST} "curl -s https://opentasks.fr/health || curl -s http://localhost:3005/health")
if echo "$HEALTH" | grep -q "ok\|healthy"; then
    echo -e "${GREEN}✓ Application is healthy${NC}"
else
    echo -e "${RED}⚠ Health check failed: $HEALTH${NC}"
fi

echo -e "\n${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}✅ Deployment complete!${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "🌐 URL: https://opentasks.fr"
echo ""
