# 🔍 Server Investigation Report

**Server:** srv1 (82.97.8.94)  
**Date:** December 2025  
**User:** sysadm  

---

## 📊 Server Specifications

| Resource | Value | Status |
|----------|-------|--------|
| **OS** | Debian 6.1.0-35 (Linux) | ✅ Good |
| **RAM** | 125 GB (10 GB used) | ✅ Excellent |
| **Disk** | 725 GB (72 GB used, 616 GB free) | ✅ Excellent |
| **Docker** | 28.1.1 | ✅ Good |
| **Docker Compose** | v2.35.1 | ✅ Good |

---

## 🐳 Existing Docker Containers

| Container | Ports | Status | Owner |
|-----------|-------|--------|-------|
| `rust_wrapper_service` | **3000** | Unhealthy | Customer |
| `chat_engine_service` | **3001** | Healthy | Customer |
| `leadsit-wasp-app` | 3002 (localhost) | Running | Customer |
| `Web-Check-Checkit` | **3003, 3004** | Running | Customer |
| `n8n` | **5679** | Running | Internal |
| `wikijs` | **30111** | Running | Internal |
| `backend-leadsit-backend-1` | **35001** | Healthy | Customer |
| `redis_service` | **6379** | Healthy | Shared |
| `leadsit-redis` | 6380 (localhost) | Healthy | Customer |
| `wiki_db` | 5432 (internal) | Running | Internal |
| `db-leadsit` | 5433 (localhost) | Running | Customer |

---

## 🔌 Port Allocation

### Currently Used Ports

```
PUBLIC PORTS:
├── 22     → SSH
├── 80     → Nginx (HTTP)
├── 443    → Nginx (HTTPS)
├── 1337   → Node.js process
├── 3000   → rust_wrapper_service ⚠️ CONFLICTS with our default
├── 3001   → chat_engine_service
├── 3003   → Web-Check
├── 3004   → Web-Check
├── 5679   → n8n
├── 6379   → redis_service ⚠️ CONFLICTS with our default
├── 8080   → Nginx
├── 30111  → wikijs
└── 35001  → leadsit-backend

LOCALHOST ONLY:
├── 3002   → leadsit-wasp-app
├── 5432   → PostgreSQL (host)
├── 5433   → db-leadsit
└── 6380   → leadsit-redis
```

### Recommended Ports for OpenTasks

| Service | Port | Reason |
|---------|------|--------|
| **OpenTasks Server** | `3005` | Next available in 3000 range |
| **OpenTasks PostgreSQL** | `5434` | Next available after 5433 |
| **OpenTasks Redis** | `6381` | Next available after 6380 |

---

## 🌐 Nginx Configuration

- **Type:** System-level nginx (not containerized)
- **Sites directory:** `/etc/nginx/sites-enabled/`
- **SSL:** No Let's Encrypt found (may use cloudflare or manual)

### Existing Sites

| Domain | Backend |
|--------|---------|
| `wiki.checkit.eu` | localhost:30111 |
| `webcheck.checkit.eu` | Web-Check container |
| `leadsit.eu` | Leadsit backend |
| `api.leadsit.eu` | API backend |
| `apdp_chat` | Chat service |
| `chatbot_apdp_mc` | Chatbot |
| `jetestemonsite.apdp.mc` | Test site |

---

## 📁 Directory Structure

```
/home/sysadm/
├── leadsit-backend/     # Customer project
├── Leadsit/             # Customer project
├── FrontLeadsIt/        # Customer project
├── wasp-app-source/     # Customer project
├── wasp-build/          # Customer build
├── nginx/               # Custom nginx configs
└── [OpenTasks]/         # 👈 CREATE HERE
```

---

## ⚠️ Critical Constraints

### DO NOT MODIFY

1. **Port 6379** - Shared Redis (used by multiple apps)
2. **Port 5432** - System PostgreSQL
3. **Ports 3000-3004** - Customer applications
4. **Existing nginx sites** - Customer domains

### SAFE TO USE

1. ✅ Create new Docker network (isolated)
2. ✅ Use ports 3005+, 5434+, 6381+
3. ✅ Add new nginx site config
4. ✅ Create new directory in /home/sysadm/

---

## 📋 Deployment Plan

### Phase 1: Preparation

```bash
# 1. Create project directory
mkdir -p /home/sysadm/opentasks
cd /home/sysadm/opentasks

# 2. Clone repository (or upload files)
git clone <repo-url> .

# 3. Create environment file
cp env.production.example .env
nano .env
```

### Phase 2: Docker Configuration

**Modified ports in docker-compose:**

```yaml
services:
  server:
    ports:
      - "127.0.0.1:3005:3000"  # Internal only, nginx proxies
  
  postgres:
    ports:
      - "127.0.0.1:5434:5432"  # Localhost only
  
  redis:
    ports:
      - "127.0.0.1:6381:6379"  # Localhost only
```

### Phase 3: Nginx Configuration

Create `/etc/nginx/sites-available/opentasks.yourdomain.com`:

```nginx
server {
    listen 80;
    server_name opentasks.yourdomain.com;

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
        client_max_body_size 10M;
    }
}
```

### Phase 4: SSL (if needed)

```bash
# Option 1: Let's Encrypt
sudo certbot --nginx -d opentasks.yourdomain.com

# Option 2: Cloudflare proxy (if already using)
# Just enable proxy in Cloudflare DNS
```

### Phase 5: Deploy

```bash
cd /home/sysadm/opentasks

# Start containers
docker compose -f docker-compose.server.yml up -d

# Run migrations
docker compose -f docker-compose.server.yml exec server \
    npx prisma migrate deploy

# Enable nginx site
sudo ln -s /etc/nginx/sites-available/opentasks.yourdomain.com \
           /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

---

## 🔒 Security Recommendations

1. **Network Isolation**
   - Use dedicated Docker network for OpenTasks
   - Don't expose database/redis ports publicly

2. **Secrets Management**
   - Generate unique secrets for this deployment
   - Don't reuse existing Redis/PostgreSQL

3. **Firewall**
   - Only expose via nginx (no direct port access)
   - Keep database ports on localhost only

---

## 📝 Files to Create

| File | Purpose |
|------|---------|
| `/home/sysadm/opentasks/` | Project directory |
| `/home/sysadm/opentasks/.env` | Environment variables |
| `/home/sysadm/opentasks/docker-compose.server.yml` | Custom compose for this server |
| `/etc/nginx/sites-available/opentasks.*` | Nginx config |

---

## ✅ Pre-Deployment Checklist

- [ ] Choose domain name for OpenTasks
- [ ] Generate production secrets
- [ ] Decide on SSL strategy (Let's Encrypt or Cloudflare)
- [ ] Create project directory
- [ ] Clone/upload code
- [ ] Create docker-compose.server.yml with correct ports
- [ ] Create nginx site configuration
- [ ] Test nginx config (`nginx -t`)
- [ ] Start containers
- [ ] Run database migrations
- [ ] Create admin user
- [ ] Verify health endpoint

---

## 📞 Next Steps

1. **Choose a domain** (e.g., `tasks.yourdomain.com`)
2. **Decide on SSL** (Let's Encrypt recommended if not using Cloudflare)
3. **Generate secrets** using the commands in env.production.example
4. **Run the deployment** following Phase 1-5 above

---

*Report generated from live server investigation*

