# OpenTasks - Technical Documentation

> **Version:** 1.1.0  
> **Last Updated:** December 2025  
> **Architecture:** Modern MPA with React Islands

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Directory Structure](#directory-structure)
4. [Technology Stack](#technology-stack)
5. [Database Schema](#database-schema)
6. [Authentication & Security](#authentication--security)
7. [API Reference](#api-reference)
8. [Frontend Components](#frontend-components)
9. [Cursor Cloud Agent Integration](#cursor-cloud-agent-integration)
10. [Development Workflow](#development-workflow)
11. [Deployment](#deployment)

---

## Project Overview

OpenTasks is an AI-powered task management system that integrates with the **Cursor Cloud Agent API** to automate code implementation. Users create tickets describing features or bugs, and the AI agent implements them automatically, creating pull requests.

### Key Features
- 🎫 Kanban board with drag-and-drop
- 🤖 AI-powered ticket implementation via Cursor Cloud Agent
- 👥 Team collaboration with role-based access
- 🔀 Multi-branch support (backend/frontend split)
- 📊 Live agent status with terminal-like conversation view
- 🔐 Invite-code registration system

---

## Architecture

### Pattern: Modern MPA with React Islands

```
┌─────────────────────────────────────────────────────────────┐
│                        Browser                               │
├─────────────────────────────────────────────────────────────┤
│  Server-Rendered Pages (EJS)    │   React Islands (Vite)    │
│  ┌─────────────────────────┐    │   ┌───────────────────┐   │
│  │ Landing Page            │    │   │ Kanban Board      │   │
│  │ Login/Register          │    │   │ - Drag & Drop     │   │
│  │ Dashboard               │    │   │ - Ticket Modals   │   │
│  │ Project Settings        │    │   │ - Agent Status    │   │
│  │ Admin Panel             │    │   │ - Real-time Poll  │   │
│  └─────────────────────────┘    │   └───────────────────┘   │
├─────────────────────────────────────────────────────────────┤
│                    Express Server (Node.js)                  │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │
│  │ EJS Views   │  │ API Routes  │  │ Static Assets       │  │
│  │ /views/*    │  │ /api/*      │  │ /public/assets/*    │  │
│  └─────────────┘  └─────────────┘  └─────────────────────┘  │
├─────────────────────────────────────────────────────────────┤
│  PostgreSQL (Prisma ORM)    │    Redis (Sessions + Queue)   │
└─────────────────────────────────────────────────────────────┘
```

### Data Flow

```
User Action → Express Route → Prisma Query → PostgreSQL
                  ↓
           EJS Template (Server Pages)
                  OR
           JSON Response → React Component (Kanban)
                  
AI Workflow:
Ticket → HANDLE column → BullMQ Queue → Cloud Bridge Worker
                                              ↓
                                    Cursor Cloud Agent API
                                              ↓
                                    Webhook → Update Ticket
```

---

## Directory Structure

```
OpenTasks/
├── apps/
│   ├── server/                    # Express.js MPA Server
│   │   ├── src/
│   │   │   ├── index.ts          # Entry point, Express setup
│   │   │   ├── config/
│   │   │   │   └── index.ts      # Environment configuration
│   │   │   ├── middleware/
│   │   │   │   ├── index.ts      # Helmet, CORS, sessions
│   │   │   │   └── auth.ts       # requireAuth, requireAdmin, etc.
│   │   │   └── routes/
│   │   │       ├── index.ts      # Landing page
│   │   │       ├── auth.ts       # Login, register, logout
│   │   │       ├── dashboard.ts  # Project list, create project
│   │   │       ├── projects.ts   # Board, settings, members
│   │   │       ├── tickets.ts    # CRUD, status updates
│   │   │       ├── api.ts        # Cursor API proxy endpoints
│   │   │       ├── admin.ts      # User/invite management
│   │   │       ├── settings.ts   # User settings, API keys
│   │   │       ├── webhooks.ts   # Cursor webhook receiver
│   │   │       └── docs.ts       # Documentation page
│   │   ├── views/                 # EJS Templates
│   │   │   ├── layout.ejs        # Main layout wrapper
│   │   │   ├── landing.ejs       # Home page
│   │   │   ├── error.ejs         # Error page
│   │   │   ├── auth/
│   │   │   │   ├── login.ejs
│   │   │   │   └── register.ejs
│   │   │   ├── dashboard/
│   │   │   │   ├── index.ejs     # Project list
│   │   │   │   └── new-project.ejs
│   │   │   ├── project/
│   │   │   │   ├── board.ejs     # Kanban (mounts React)
│   │   │   │   └── settings.ejs  # Project config
│   │   │   ├── admin/
│   │   │   │   ├── index.ejs     # Admin dashboard
│   │   │   │   ├── users.ejs     # User management
│   │   │   │   └── invites.ejs   # Invite code management
│   │   │   ├── settings/
│   │   │   │   └── index.ejs     # User settings
│   │   │   ├── docs/
│   │   │   │   └── index.ejs     # Documentation
│   │   │   └── partials/
│   │   │       ├── navbar.ejs    # Navigation header
│   │   │       ├── logo.ejs      # SVG logo
│   │   │       ├── icons.ejs     # Lucide icons
│   │   │       └── ui/           # Shadcn-like EJS partials
│   │   │           ├── button.ejs
│   │   │           ├── card.ejs
│   │   │           ├── input.ejs
│   │   │           └── ...
│   │   ├── public/
│   │   │   ├── styles/
│   │   │   │   ├── globals.css   # Tailwind + CSS variables
│   │   │   │   └── output.css    # Compiled Tailwind
│   │   │   └── assets/           # Vite build output
│   │   │       ├── board.js      # React Kanban bundle
│   │   │       └── board.css     # Kanban styles
│   │   ├── tailwind.config.js
│   │   ├── postcss.config.js
│   │   ├── tsconfig.json
│   │   ├── Dockerfile
│   │   └── package.json
│   │
│   ├── client-assets/             # React Kanban Island
│   │   ├── src/
│   │   │   ├── main.tsx          # React mount point
│   │   │   ├── types.ts          # TypeScript interfaces
│   │   │   ├── components/
│   │   │   │   ├── KanbanBoard.tsx      # Main board container
│   │   │   │   ├── Column.tsx           # Kanban column
│   │   │   │   ├── TicketCard.tsx       # Ticket card
│   │   │   │   ├── NewTicketModal.tsx   # Create ticket form
│   │   │   │   ├── TicketDetailModal.tsx # View/edit ticket
│   │   │   │   └── AgentStatusPanel.tsx  # AI status + conversation
│   │   │   └── styles/
│   │   │       └── board.css     # Component styles
│   │   ├── vite.config.ts        # Outputs to server/public/assets
│   │   ├── tsconfig.json
│   │   └── package.json
│   │
│   └── cloud-bridge/              # BullMQ Worker (AI Job Processor)
│       ├── src/
│       │   ├── index.ts          # Worker entry point
│       │   ├── config.ts         # Worker configuration
│       │   ├── queue/
│       │   │   └── processor.ts  # Job processing logic
│       │   ├── cursor-api/
│       │   │   └── client.ts     # Cursor API client
│       │   └── services/
│       │       └── cost-guardrails.ts
│       ├── tsconfig.json
│       ├── Dockerfile
│       └── package.json
│
├── packages/
│   └── database/                  # Shared Database Package
│       ├── prisma/
│       │   └── schema.prisma     # Database schema
│       ├── src/
│       │   ├── index.ts          # Prisma client export
│       │   ├── encryption.ts     # AES-256 encrypt/decrypt
│       │   ├── schemas/
│       │   │   └── index.ts      # Zod validation schemas
│       │   └── seed.ts           # Database seeding
│       ├── tsconfig.json
│       └── package.json
│
├── docker-compose.yml             # PostgreSQL + Redis + Apps
├── .env                           # Environment variables
├── pnpm-workspace.yaml           # Monorepo workspace config
├── package.json                   # Root scripts
├── tsconfig.base.json            # Shared TS config
├── README.md                      # User documentation
└── TECHNICAL_DOCS.md             # This file
```

---

## Technology Stack

### Backend
| Technology | Purpose | Location |
|------------|---------|----------|
| **Node.js 20+** | Runtime | All apps |
| **Express.js** | Web framework | `apps/server` |
| **EJS** | Server-side templating | `apps/server/views` |
| **Prisma** | ORM | `packages/database` |
| **PostgreSQL** | Primary database | Docker |
| **Redis** | Sessions + job queue | Docker |
| **BullMQ** | Background job processing | `apps/cloud-bridge` |

### Frontend
| Technology | Purpose | Location |
|------------|---------|----------|
| **Tailwind CSS** | Styling | `apps/server/public/styles` |
| **React 18** | Kanban board UI | `apps/client-assets` |
| **Vite** | React bundler | `apps/client-assets` |
| **@dnd-kit** | Drag and drop | `apps/client-assets` |

### Infrastructure
| Technology | Purpose |
|------------|---------|
| **Docker Compose** | Container orchestration |
| **pnpm** | Package manager |
| **TypeScript** | Type safety |

---

## Database Schema

### Core Models

```prisma
// User & Authentication
model User {
  id                    String    @id @default(cuid())
  email                 String    @unique
  passwordHash          String
  name                  String
  role                  UserRole  @default(MEMBER)  // SUPER_ADMIN, ADMIN, MEMBER
  cursorApiKeyEncrypted String?   // Encrypted Cursor API key
  projects              ProjectMember[]
  // ... relations
}

model InviteCode {
  id          String     @id @default(cuid())
  code        String     @unique
  type        InviteType @default(SINGLE_USE)  // SINGLE_USE, MULTI_USE, UNLIMITED
  maxUses     Int        @default(1)
  currentUses Int        @default(0)
  isActive    Boolean    @default(true)
  // ... relations
}

model ApiToken {
  id         String    @id @default(cuid())
  name       String    // User-defined name (e.g., "Cursor Extension")
  tokenHash  String    @unique  // SHA-256 hash of token
  last4      String    // Last 4 chars for display
  expiresAt  DateTime?
  revokedAt  DateTime?
  lastUsedAt DateTime?
  userId     String
  // ... relations
}

// Projects
model Project {
  id                    String   @id @default(cuid())
  name                  String
  slug                  String   @unique
  cursorApiKeyEncrypted String?  // Project-level API key
  githubRepoUrl         String?
  defaultBranch         String?  @default("main")
  branchPresets         String?  // JSON: [{"name": "Backend", "branch": "master"}]
  members               ProjectMember[]
  tickets               Ticket[]
}

model ProjectMember {
  projectId String
  userId    String
  role      ProjectRole  // OWNER, ADMIN, MEMBER
  // ... unique constraint on [projectId, userId]
}

// Tickets
model Ticket {
  id           String       @id @default(cuid())
  title        String
  description  String?
  status       TicketStatus @default(BACKLOG)
  priority     Priority     @default(MEDIUM)
  targetBranch String?      // Which branch AI should work on
  
  // AI fields
  agentId      String?      // Cursor Agent ID (bc_xxx)
  agentStatus  String?      // QUEUED, RUNNING, FINISHED, ERROR
  agentBranch  String?      // Branch created by agent
  aiModel      String?      // Model used (claude-4-sonnet, etc.)
  aiSummary    String?      // Summary from AI
  prLink       String?      // Pull request URL
  
  projectId    String
  assigneeId   String?
  createdById  String
  jobs         AgentJob[]
}

// Agent Jobs (for tracking)
model AgentJob {
  id            String         @id @default(cuid())
  cursorAgentId String?
  status        AgentJobStatus @default(QUEUED)
  prompt        String
  result        String?
  prUrl         String?
  errorMessage  String?
  ticketId      String
}
```

### Status Enums

```typescript
enum TicketStatus {
  BACKLOG        // Not started
  TODO           // Ready to work on
  HANDLE         // Queue for AI processing
  AI_PROCESSING  // AI is working
  TO_REVIEW      // PR ready for review
  IN_PROGRESS    // Human working on it
  DONE           // Completed
  CANCELLED      // Cancelled
}

enum UserRole {
  SUPER_ADMIN    // Full system access
  ADMIN          // Can manage invites
  MEMBER         // Standard user
}

enum ProjectRole {
  OWNER          // Full project control
  ADMIN          // Can manage members
  MEMBER         // Can create/edit tickets
}
```

---

## Authentication & Security

### Session Management
- **Store:** Redis via `connect-redis`
- **Cookie:** `opentasks.sid`, HttpOnly, Secure (prod), SameSite=Strict
- **Duration:** 24 hours

### CSRF Protection
- **Library:** `csrf-csrf` (double-submit cookie)
- **Token:** Available in views via `csrfToken`
- **Header:** `X-CSRF-Token` for API calls

### Password Hashing
- **Algorithm:** bcrypt (12 rounds)
- **Location:** `packages/database/src/encryption.ts`

### API Key Encryption
- **Algorithm:** AES-256-GCM
- **Key:** `ENCRYPTION_KEY` environment variable
- **Stored:** Base64 encoded IV + encrypted data

### Middleware Chain

```typescript
// apps/server/src/middleware/auth.ts

requireAuth          // Must be logged in
requireAdmin         // Must be ADMIN or SUPER_ADMIN
requireSuperAdmin    // Must be SUPER_ADMIN
requireProjectAccess // Must be project member
guestOnly            // Must NOT be logged in (login/register pages)
```

---

## API Reference

### Authentication Routes (`/auth/*`)

| Method | Path | Description |
|--------|------|-------------|
| POST | `/auth/register` | Register with invite code |
| POST | `/auth/login` | Login with email/password |
| GET | `/auth/logout` | End session |

### Dashboard Routes (`/dashboard/*`)

| Method | Path | Description |
|--------|------|-------------|
| GET | `/dashboard` | List user's projects |
| GET | `/dashboard/new-project` | New project form |
| POST | `/dashboard/new-project` | Create project |

### Project Routes (`/project/:id/*`)

| Method | Path | Description |
|--------|------|-------------|
| GET | `/project/:id/board` | Kanban board page |
| GET | `/project/:id/board/state` | Board state JSON (polling) |
| GET | `/project/:id/settings` | Project settings page |
| POST | `/project/:id/settings` | Update project |
| GET | `/project/:id/members` | List members |
| POST | `/project/:id/members/invite` | Invite user |
| POST | `/project/:id/members/:userId/role` | Change role |
| POST | `/project/:id/members/:userId/remove` | Remove member |

### Ticket API (`/api/tickets/*`)

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/tickets/:projectId` | List tickets |
| POST | `/api/tickets/:projectId` | Create ticket |
| PUT | `/api/tickets/:projectId/:ticketId` | Update ticket |
| PATCH | `/api/tickets/:projectId/:ticketId/status` | Update status only |
| DELETE | `/api/tickets/:projectId/:ticketId` | Delete ticket |

### Cursor API Proxy (`/api/cursor/*`)

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/cursor/models` | List available AI models |
| POST | `/api/cursor/repositories` | List GitHub repos |
| GET | `/api/cursor/agents/:agentId/status` | Get agent status |
| GET | `/api/cursor/agents/:agentId/conversation` | Get conversation |
| POST | `/api/cursor/agents/:agentId/stop` | **Emergency stop** |

### Webhooks (`/api/webhooks/*`)

| Method | Path | Description |
|--------|------|-------------|
| POST | `/api/webhooks/cursor` | Cursor status updates |
| GET | `/api/webhooks/health` | Health check |

### Extension API (`/api/ext/*`)

**Authentication:** Bearer token (Personal Access Token) in `Authorization` header.

#### Token Management (Web UI, Session Auth)

| Method | Path | Description |
|--------|------|-------------|
| POST | `/api/ext/tokens` | Create a new API token |
| GET | `/api/ext/tokens` | List user's API tokens |
| DELETE | `/api/ext/tokens/:tokenId` | Revoke an API token |

#### Extension Endpoints (PAT Auth)

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/ext/me` | Get current user info |
| GET | `/api/ext/projects` | List user's projects |
| GET | `/api/ext/projects/:projectId/tickets` | List tickets (optionally filter by status) |
| POST | `/api/ext/projects/:projectId/tickets` | Create a new ticket |
| PATCH | `/api/ext/projects/:projectId/tickets/:ticketId/status` | Update ticket status |

#### API Token Authentication Flow

1. **Generate Token (Web UI):**
   - User navigates to Settings → API Tokens
   - Creates token with name and optional expiry
   - Token is shown **once** (SHA-256 hashed before storage)

2. **Use Token (Extension/API):**
   ```http
   Authorization: Bearer <token>
   ```

3. **Token Validation:**
   - Hash incoming token with SHA-256
   - Look up `tokenHash` in `api_tokens` table
   - Check: not revoked, not expired, user active
   - Attach `req.apiUser` (userId, email, name, role)

4. **Token Security:**
   - Tokens stored as SHA-256 hash (one-way)
   - Last 4 characters saved for display
   - `lastUsedAt` updated on each request
   - Can be revoked by user anytime

#### Example API Requests

**Create Ticket:**
```bash
curl -X POST https://www.opentasks.fr/api/ext/projects/{projectId}/tickets \
  -H "Authorization: Bearer <your-token>" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Fix login bug",
    "description": "Users cant login with email",
    "status": "TODO",
    "priority": "HIGH",
    "targetBranch": "main"
  }'
```

**List Tickets:**
```bash
curl https://www.opentasks.fr/api/ext/projects/{projectId}/tickets?status=TODO,AI_PROCESSING \
  -H "Authorization: Bearer <your-token>"
```

---

## Cursor Extension

The official Cursor IDE extension allows developers to manage OpenTasks tickets without leaving their editor.

### Architecture

```
Cursor/VS Code
├── Extension (TypeScript)
│   ├── API Client (fetch with Bearer token)
│   ├── TreeDataProvider (Projects → Columns → Tickets)
│   ├── Commands (Sign In, Create Ticket, Refresh)
│   └── SecretStorage (PAT storage)
└── OpenTasks Server
    └── Extension API (/api/ext/*)
```

### Features

- **Authentication:** Secure PAT storage in VS Code SecretStorage
- **Tree View:** Browse projects/columns/tickets in sidebar
- **Create Tickets:** Quick create from command palette
- **Auto-refresh:** Configurable polling (default: 10s)
- **Click to Open:** Opens ticket in browser

### Setup

1. Install extension from `.vsix` or marketplace
2. Generate API token in OpenTasks Settings
3. Run command: `OpenTasks: Sign In`
4. Paste token when prompted

### Configuration

```json
{
  "opentasks.baseUrl": "https://www.opentasks.fr",
  "opentasks.refreshInterval": 10
}
```

### Development

```bash
cd apps/cursor-extension
pnpm install
pnpm run build    # Compile TypeScript
pnpm run package  # Create .vsix
```

**Local Installation:**
- Build extension
- In Cursor: Extensions → "..." → Install from VSIX
- Select generated `.vsix` file

---

## Frontend Components

### React Kanban Island

The Kanban board is a React "island" that mounts into a server-rendered EJS page.

#### Mount Point (`board.ejs`)
```html
<div id="kanban-root" data-state="<%= JSON.stringify(boardState) %>"></div>
<script type="module" src="/assets/board.js"></script>
```

#### Component Hierarchy
```
KanbanBoard (main container)
├── Column[] (BACKLOG, TODO, HANDLE, etc.)
│   └── TicketCard[] (draggable tickets)
├── NewTicketModal (create ticket dialog)
│   ├── Title input
│   ├── Description textarea (with template)
│   ├── Priority selector (buttons)
│   ├── AI Model selector (dropdown)
│   ├── Branch selector (preset buttons)
│   └── Advanced options (assignee, labels)
├── TicketDetailModal (view/edit ticket)
│   ├── AgentStatusPanel (if agentId exists)
│   ├── Description view/edit
│   ├── Status selector
│   └── Actions (save, delete)
└── Toast notifications
```

### UI Design System

#### Color Palette
- **Primary:** Purple (`hsl(263 70% 50%)`) - Brand color for CTAs and accents
- **Status Processing:** Purple (`hsl(263 70% 60%)`) - AI processing states
- **Status Review:** Blue (`hsl(217 91% 60%)`) - Review states
- **Status Success:** Green (`hsl(142 71% 45%)`) - Completed states
- **Status Error:** Red (`hsl(0 84% 60%)`) - Error states

#### Card Design Principles
- **Visual Hierarchy:** Title is bold (0.9375rem, font-weight-600, white), description is smaller and gray
- **Truncation:** Descriptions/summaries limited to 2-3 lines with "..." overflow
- **Footer Row:** Dedicated footer with priority pill badges (left) and assignee/AI avatar (right)
- **Priority Badges:** Pill-shaped with colored backgrounds (Low=gray, Medium=blue, High=amber, Urgent=red)
- **Hover Effects:** Subtle lift (`translateY(-1px)`) and shadow increase on hover

#### Column Design
- **Backgrounds:** Columns have slightly lighter backgrounds (`hsl(240 10% 8%)`) than the page
- **Rounded Corners:** 12px border-radius for containment
- **Top Accent:** 3px colored top border indicating column type
- **Flex Layout:** Columns grow to fill available space (min-width: 280px, max-width: 400px)

#### AI Processing Visualization
- **Pulsing Border:** Cards in AI_PROCESSING have animated pulsing purple border
- **Processing Slide:** Horizontal gradient animation at top of card
- **AI Badge:** Compact inline badge with terminal icon and spinner
- **Handle Column:** Special "chute" design with drop animation hint

#### Button Styling
- **New Ticket Button:** Purple gradient with shadow, hover lift effect
- **Archive/Action Buttons:** Subtle with hover states

#### AgentStatusPanel Features
- **Live polling** every 3 seconds
- **Terminal-like view** of AI conversation
- **Status indicators:** Queued, Running, Finished, Error, Cancelled
- **Emergency Stop button** (visible when Running/Queued)
- **Links:** View in Cursor, View PR, Branch name

### Drag and Drop
- **Library:** `@dnd-kit/core`, `@dnd-kit/sortable`
- **Sensors:** Pointer, Keyboard (accessibility)
- **Collision:** Closest center detection

### Real-time Updates
- **Method:** WebSocket (Socket.IO) with HTTP polling fallback
- **Events:** `ticket:created`, `ticket:updated`, `ticket:deleted`, `ticket:moved`
- **Fallback Polling:** Every 10 seconds when WebSocket disconnected
- **Behavior:** Pauses during drag or modal open

---

## Cursor Cloud Agent Integration

### Authentication
```typescript
// Basic Auth with API key
const auth = Buffer.from(apiKey + ':').toString('base64');
headers: { 'Authorization': `Basic ${auth}` }
```

### Available Endpoints (Cursor API)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/v0/repositories` | List accessible GitHub repos |
| GET | `/v0/models` | List available AI models |
| POST | `/v0/agents` | Create new agent |
| GET | `/v0/agents/:id` | Get agent status |
| GET | `/v0/agents/:id/conversation` | Get conversation |
| POST | `/v0/agents/:id/stop` | Stop running agent |

### Agent Status Flow
```
QUEUED → RUNNING → FINISHED
                 ↘ ERROR
         ↓ (stop)
      CANCELLED
```

### Webhook Integration
When creating an agent, provide a webhook URL:
```json
{
  "webhook": {
    "url": "https://your-domain.com/api/webhooks/cursor"
  }
}
```

The webhook receives status updates automatically.

---

## Development Workflow

### Initial Setup

```bash
# 1. Clone and install
git clone <repo>
cd OpenTasks
pnpm install

# 2. Setup environment
cp .env.example .env
# Edit .env with your values

# 3. Start database
docker compose up -d postgres redis

# 4. Initialize database
pnpm db:push
pnpm db:seed

# 5. Build client assets
pnpm --filter @opentasks/client-assets build

# 6. Start dev server
pnpm --filter @opentasks/server dev
```

### Available Scripts

```bash
# Root level
pnpm db:generate    # Generate Prisma client
pnpm db:push        # Push schema to database
pnpm db:seed        # Seed initial data

# Server
pnpm --filter @opentasks/server dev      # Start with hot reload
pnpm --filter @opentasks/server build    # Build for production

# Client assets
pnpm --filter @opentasks/client-assets dev    # Watch mode
pnpm --filter @opentasks/client-assets build  # Production build
```

### Default Credentials
After seeding:
- **Email:** `admin@opentasks.local`
- **Password:** `Admin123!`
- **Invite Codes:** `OPENTASKS-ALPHA-001`, `002`, `003`

### Adding New Features

1. **New EJS Page:**
   - Create view in `apps/server/views/`
   - Add route in `apps/server/src/routes/`
   - Register route in `apps/server/src/index.ts`

2. **New React Component:**
   - Add to `apps/client-assets/src/components/`
   - Import in parent component
   - Run `pnpm --filter @opentasks/client-assets build`

3. **New API Endpoint:**
   - Add to appropriate route file
   - Add Zod schema if needed in `packages/database/src/schemas/`

4. **Database Change:**
   - Modify `packages/database/prisma/schema.prisma`
   - Run `pnpm db:push` (dev) or create migration (prod)
   - Update types in `apps/client-assets/src/types.ts`

---

## Deployment

### Docker Compose (Recommended)

```bash
# Build and start all services
docker compose up -d --build

# View logs
docker compose logs -f server

# Stop
docker compose down
```

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `DATABASE_URL` | Yes | PostgreSQL connection string |
| `REDIS_URL` | Yes | Redis connection string |
| `SESSION_SECRET` | Yes | Random string for sessions |
| `ENCRYPTION_KEY` | Yes | 32-byte hex for AES-256 |
| `CSRF_SECRET` | Yes | Random string for CSRF |
| `CURSOR_WEBHOOK_SECRET` | No | For webhook verification |
| `HOST` | No | Server bind address (default: 0.0.0.0) |
| `PORT` | No | Server port (default: 3000) |

### Generate Secrets

```bash
# Session secret
openssl rand -base64 32

# Encryption key (32 bytes = 64 hex chars)
openssl rand -hex 32
```

### Network Access

To access from other devices on your network:
1. `HOST=0.0.0.0` in `.env` or `docker-compose.yml`
2. Find your IP: `ifconfig | grep "inet "`
3. Access via `http://<your-ip>:3000`

---

## Troubleshooting

### Common Issues

**CSS not loading (ERR_SSL_PROTOCOL_ERROR)**
- Cause: Security headers blocking HTTP
- Fix: Helmet is configured to relax headers in development

**"Module not found" errors**
- Run `pnpm db:generate` to regenerate Prisma client
- Check exports in `packages/database/src/index.ts`

**Session not persisting**
- Check Redis is running: `docker compose ps`
- Verify `REDIS_URL` in `.env`

**Kanban not rendering**
- Check browser console for errors
- Verify `board.js` built: `ls apps/server/public/assets/`
- Rebuild: `pnpm --filter @opentasks/client-assets build`

### Useful Commands

```bash
# Check database
docker compose exec postgres psql -U opentasks -d opentasks

# Check Redis
docker compose exec redis redis-cli ping

# View all containers
docker compose ps

# Restart single service
docker compose restart server
```

---

## Contributing

1. Follow existing code patterns
2. Keep functions under 25 lines when possible
3. Add Zod validation for all inputs
4. Test before committing
5. Update this documentation for significant changes

---

*Generated for OpenTasks v1.0.0*

