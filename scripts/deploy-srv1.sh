#!/bin/bash
# ============================================
# OpenTasks Deployment Script for srv1
# Server: 82.97.8.94
# 
# Usage: ./scripts/deploy-srv1.sh [domain]
# Example: ./scripts/deploy-srv1.sh tasks.checkit.eu
# ============================================

set -e

DOMAIN=${1:-"opentasks.example.com"}
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

log_info() { echo -e "${GREEN}[INFO]${NC} $1"; }
log_warn() { echo -e "${YELLOW}[WARN]${NC} $1"; }
log_error() { echo -e "${RED}[ERROR]${NC} $1"; }
log_step() { echo -e "${BLUE}[STEP]${NC} $1"; }

echo ""
echo "============================================"
echo "  OpenTasks Deployment for srv1"
echo "  Domain: $DOMAIN"
echo "============================================"
echo ""

# Check if running on the server
if [ ! -f /etc/debian_version ]; then
    log_error "This script must be run on the srv1 server"
    exit 1
fi

# Step 1: Check/Create environment file
log_step "Step 1: Checking environment configuration..."

if [ ! -f "$PROJECT_ROOT/.env" ]; then
    log_warn ".env file not found. Creating from template..."
    
    # Generate secrets
    DB_PASSWORD=$(openssl rand -base64 24 | tr -dc 'a-zA-Z0-9' | head -c 32)
    SESSION_SECRET=$(openssl rand -hex 64)
    ENCRYPTION_KEY=$(openssl rand -hex 32)
    CSRF_SECRET=$(openssl rand -hex 32)
    
    cat > "$PROJECT_ROOT/.env" << EOF
# OpenTasks Production Environment
# Generated on $(date)

CLIENT_URL=https://$DOMAIN
DB_PASSWORD=$DB_PASSWORD
SESSION_SECRET=$SESSION_SECRET
ENCRYPTION_KEY=$ENCRYPTION_KEY
CSRF_SECRET=$CSRF_SECRET

# Optional: Slack notifications
# SLACK_WEBHOOK_URL=https://hooks.slack.com/services/xxx/xxx/xxx
EOF
    
    log_info "Environment file created with generated secrets"
    log_warn "IMPORTANT: Back up your .env file securely!"
else
    log_info "Environment file exists ✓"
fi

# Step 2: Build Docker images
log_step "Step 2: Building Docker images..."
cd "$PROJECT_ROOT"
docker compose -f docker-compose.server.yml build

# Step 3: Stop existing containers if running
log_step "Step 3: Stopping existing OpenTasks containers..."
docker compose -f docker-compose.server.yml down --remove-orphans 2>/dev/null || true

# Step 4: Start database and redis first
log_step "Step 4: Starting database and Redis..."
docker compose -f docker-compose.server.yml up -d opentasks-postgres opentasks-redis

log_info "Waiting for services to be ready..."
sleep 10

# Step 5: Run database migrations
log_step "Step 5: Running database migrations..."
docker compose -f docker-compose.server.yml run --rm server \
    sh -c "cd /app/packages/database && npx prisma migrate deploy"

# Step 6: Seed initial data (admin user)
log_step "Step 6: Seeding initial data..."
docker compose -f docker-compose.server.yml run --rm server \
    sh -c "cd /app/packages/database && npx prisma db seed" 2>/dev/null || \
    log_warn "Seeding skipped (may already be done)"

# Step 7: Start application services
log_step "Step 7: Starting OpenTasks services..."
docker compose -f docker-compose.server.yml up -d

# Step 8: Configure Nginx
log_step "Step 8: Configuring Nginx..."

NGINX_CONF="/etc/nginx/sites-available/$DOMAIN"
NGINX_ENABLED="/etc/nginx/sites-enabled/$DOMAIN"

if [ ! -f "$NGINX_CONF" ]; then
    # Create nginx config
    sudo tee "$NGINX_CONF" > /dev/null << 'NGINX_EOF'
server {
    listen 80;
    listen [::]:80;
    server_name DOMAIN_PLACEHOLDER;

    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    client_max_body_size 10M;

    location /health {
        proxy_pass http://127.0.0.1:3005;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    location /socket.io/ {
        proxy_pass http://127.0.0.1:3005;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_read_timeout 86400;
    }

    location /static/ {
        proxy_pass http://127.0.0.1:3005;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        expires 1d;
        add_header Cache-Control "public, immutable";
    }

    location / {
        proxy_pass http://127.0.0.1:3005;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_read_timeout 300s;
    }
}
NGINX_EOF

    # Replace placeholder with actual domain
    sudo sed -i "s/DOMAIN_PLACEHOLDER/$DOMAIN/g" "$NGINX_CONF"
    log_info "Nginx config created"
else
    log_info "Nginx config already exists ✓"
fi

# Enable site if not already
if [ ! -L "$NGINX_ENABLED" ]; then
    sudo ln -s "$NGINX_CONF" "$NGINX_ENABLED"
    log_info "Nginx site enabled"
fi

# Test and reload nginx
log_info "Testing nginx configuration..."
if sudo nginx -t; then
    sudo systemctl reload nginx
    log_info "Nginx reloaded ✓"
else
    log_error "Nginx configuration test failed!"
    exit 1
fi

# Step 9: Verify deployment
log_step "Step 9: Verifying deployment..."

sleep 5

if curl -s http://127.0.0.1:3005/health/live | grep -q "alive"; then
    log_info "Health check passed ✓"
else
    log_warn "Health check failed - service may still be starting"
fi

# Summary
echo ""
echo "============================================"
echo "  Deployment Complete! 🎉"
echo "============================================"
echo ""
log_info "OpenTasks is now running at: http://$DOMAIN"
echo ""
log_info "Next steps:"
echo "  1. Point DNS for $DOMAIN to 82.97.8.94"
echo "  2. Enable SSL: sudo certbot --nginx -d $DOMAIN"
echo "  3. Access: https://$DOMAIN"
echo "  4. Login with: admin@opentasks.local / Admin123!"
echo ""
log_info "Useful commands:"
echo "  View logs:    docker compose -f docker-compose.server.yml logs -f"
echo "  Restart:      docker compose -f docker-compose.server.yml restart"
echo "  Stop:         docker compose -f docker-compose.server.yml down"
echo ""

