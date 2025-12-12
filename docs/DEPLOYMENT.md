# 🚀 OpenTasks Production Deployment Guide

This guide explains how to deploy OpenTasks to a production server.

## 📋 Prerequisites

- **Server**: Linux VPS with at least 2GB RAM, 2 CPU cores
- **Docker**: Version 20.10+ with Docker Compose
- **Domain**: A domain name pointing to your server's IP
- **Ports**: 80 and 443 open for HTTP/HTTPS

### Recommended Providers
- DigitalOcean Droplet ($12/month - 2GB RAM)
- Hetzner Cloud CX21 ($5/month - 2GB RAM)
- AWS Lightsail ($10/month - 2GB RAM)
- Linode Nanode ($12/month - 2GB RAM)

---

## 🔧 Quick Start

### 1. Connect to your server

```bash
ssh root@your-server-ip
```

### 2. Install Docker

```bash
# Ubuntu/Debian
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER
newgrp docker

# Verify
docker --version
docker compose version
```

### 3. Clone the repository

```bash
git clone https://github.com/your-username/opentasks.git
cd opentasks
```

### 4. Configure environment

```bash
# Copy example environment file
cp env.production.example .env

# Generate secure secrets
echo "DB_PASSWORD=$(openssl rand -base64 32)" >> .env
echo "SESSION_SECRET=$(openssl rand -hex 64)" >> .env
echo "ENCRYPTION_KEY=$(openssl rand -hex 32)" >> .env
echo "CSRF_SECRET=$(openssl rand -hex 32)" >> .env

# Edit and verify
nano .env
```

### 5. Set up SSL certificates

**Option A: Let's Encrypt (Recommended)**
```bash
# Install certbot
apt install certbot

# Get certificates
certbot certonly --standalone -d yourdomain.com

# Copy to nginx folder
mkdir -p nginx/ssl
cp /etc/letsencrypt/live/yourdomain.com/fullchain.pem nginx/ssl/
cp /etc/letsencrypt/live/yourdomain.com/privkey.pem nginx/ssl/
```

**Option B: Self-signed (Testing only)**
```bash
mkdir -p nginx/ssl
openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout nginx/ssl/privkey.pem \
    -out nginx/ssl/fullchain.pem \
    -subj "/CN=yourdomain.com"
```

### 6. Deploy

```bash
chmod +x scripts/deploy.sh
./scripts/deploy.sh
```

Or manually:

```bash
# Build and start
docker compose -f docker-compose.prod.yml up -d

# Run migrations
docker compose -f docker-compose.prod.yml exec server \
    npx prisma migrate deploy

# Check status
docker compose -f docker-compose.prod.yml ps
```

---

## 🔐 Security Checklist

- [ ] Strong, unique passwords for all secrets
- [ ] SSL/TLS certificates installed
- [ ] Firewall configured (only 80/443 open)
- [ ] Regular security updates scheduled
- [ ] Backups configured for database
- [ ] Encryption key backed up securely

---

## 📊 Monitoring

### Health Check
```bash
curl https://yourdomain.com/health
```

### View Logs
```bash
# All services
docker compose -f docker-compose.prod.yml logs -f

# Specific service
docker compose -f docker-compose.prod.yml logs -f server
docker compose -f docker-compose.prod.yml logs -f cloud-bridge
```

### Check Resources
```bash
docker stats
```

---

## 🤖 GitHub Actions (CI/CD)

OpenTasks includes automated CI/CD pipelines using GitHub Actions.

### Workflows

| Workflow | Trigger | Description |
|----------|---------|-------------|
| `ci.yml` | Pull Requests | Build, lint, and test code |
| `deploy.yml` | Push to `main` | Auto-deploy to production |

### Setup GitHub Secrets

Go to **Settings → Secrets and variables → Actions** and add:

| Secret | Description | Example |
|--------|-------------|---------|
| `SSH_PRIVATE_KEY` | SSH private key for server access | Contents of `~/.ssh/id_rsa` |
| `SERVER_HOST` | Server IP address | `82.97.8.94` |
| `SERVER_USER` | SSH username | `sysadm` |
| `SERVER_PATH` | Deployment directory | `/home/sysadm/opentasks` |

### Generate SSH Key (if needed)

```bash
# On your local machine
ssh-keygen -t ed25519 -C "github-actions-deploy"

# Copy public key to server
ssh-copy-id -i ~/.ssh/id_ed25519.pub sysadm@your-server-ip

# Copy private key content to GitHub secret
cat ~/.ssh/id_ed25519
```

### Manual Deployment

You can also trigger deployment manually:
1. Go to **Actions** tab
2. Select **Deploy to Production**
3. Click **Run workflow**

### Workflow Features

- ✅ Automatic deployment on push to `main`
- ✅ Build validation before deploy
- ✅ Type checking and linting
- ✅ Docker build caching
- ✅ Health check after deployment
- ✅ Manual trigger option

---

## 🔄 Updates

### Update to latest version

```bash
# Pull latest code
git pull origin main

# Rebuild and restart
docker compose -f docker-compose.prod.yml build --no-cache
docker compose -f docker-compose.prod.yml up -d

# Run migrations if needed
docker compose -f docker-compose.prod.yml exec server \
    npx prisma migrate deploy
```

### Zero-downtime update

```bash
# Scale up new instances
docker compose -f docker-compose.prod.yml up -d --scale server=2 --no-deps server

# Wait for health
sleep 30

# Scale down old instances
docker compose -f docker-compose.prod.yml up -d --scale server=1 --no-deps server
```

---

## 💾 Backups

### Database Backup

```bash
# Create backup
docker compose -f docker-compose.prod.yml exec postgres \
    pg_dump -U opentasks opentasks > backup_$(date +%Y%m%d).sql

# Restore backup
docker compose -f docker-compose.prod.yml exec -T postgres \
    psql -U opentasks opentasks < backup_20240101.sql
```

### Automated Backups (cron)

```bash
# Add to crontab
crontab -e

# Daily backup at 3am
0 3 * * * cd /path/to/opentasks && docker compose -f docker-compose.prod.yml exec -T postgres pg_dump -U opentasks opentasks > /backups/opentasks_$(date +\%Y\%m\%d).sql
```

---

## 🐛 Troubleshooting

### Container won't start

```bash
# Check logs
docker compose -f docker-compose.prod.yml logs server

# Check container status
docker compose -f docker-compose.prod.yml ps

# Restart services
docker compose -f docker-compose.prod.yml restart
```

### Database connection issues

```bash
# Check if postgres is running
docker compose -f docker-compose.prod.yml ps postgres

# Test connection
docker compose -f docker-compose.prod.yml exec postgres \
    psql -U opentasks -c "SELECT 1"
```

### SSL issues

```bash
# Check certificate
openssl s_client -connect yourdomain.com:443 -servername yourdomain.com

# Renew Let's Encrypt
certbot renew
cp /etc/letsencrypt/live/yourdomain.com/* nginx/ssl/
docker compose -f docker-compose.prod.yml restart nginx
```

### Memory issues

```bash
# Check memory
free -h
docker stats --no-stream

# Increase swap if needed
fallocate -l 2G /swapfile
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
```

---

## 📈 Scaling

### Horizontal Scaling

```yaml
# In docker-compose.prod.yml, increase replicas:
services:
  server:
    deploy:
      replicas: 4
```

### Vertical Scaling

Upgrade your server specs. Recommended for 1000+ users:
- 4GB+ RAM
- 4+ CPU cores
- SSD storage

---

## 🔗 Useful Commands

| Command | Description |
|---------|-------------|
| `docker compose -f docker-compose.prod.yml up -d` | Start all services |
| `docker compose -f docker-compose.prod.yml down` | Stop all services |
| `docker compose -f docker-compose.prod.yml restart` | Restart all services |
| `docker compose -f docker-compose.prod.yml logs -f` | View live logs |
| `docker compose -f docker-compose.prod.yml ps` | Check status |
| `docker compose -f docker-compose.prod.yml exec server sh` | Shell into server |

---

## 📞 Support

If you encounter issues:
1. Check the logs first
2. Review this troubleshooting guide
3. Open an issue on GitHub with:
   - Error message
   - Docker logs
   - Environment (OS, Docker version)

