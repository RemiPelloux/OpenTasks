# OpenTasks

> **AI-Powered Development Task Manager** — Delegate coding tasks to Cursor Cloud Agent

OpenTasks is a Kanban-style project management tool that integrates with the [Cursor Cloud Agent API](https://docs.cursor.com/context/cloud-agents) to automate development tasks. Create tickets, assign them to AI, and receive pull requests automatically.

![OpenTasks Screenshot](docs/screenshot.png)

---

## 🎯 How It Works

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   BACKLOG   │ ──▶ │   HANDLE    │ ──▶ │   REVIEW    │ ──▶ │    DONE     │
│             │     │  (AI Zone)  │     │   (Human)   │     │             │
│ Create task │     │ AI working  │     │ Review PR   │     │ Merged! 🎉  │
└─────────────┘     └─────────────┘     └─────────────┘     └─────────────┘
```

### Workflow

1. **Create Ticket** — Write a detailed task with acceptance criteria
2. **Drag to Handle** — Move the ticket to the AI processing column
3. **AI Executes** — Cursor Cloud Agent clones the repo, implements the feature, and creates a PR
4. **Human Reviews** — Review the AI-generated code and merge
5. **Done!** — Task completed, move to Done column

---

## ✨ Features

- 🎫 **Kanban Board** — Drag-and-drop task management
- 🤖 **AI Integration** — Cursor Cloud Agent API for automated coding
- 🔀 **Multi-Branch Support** — Configure different branches for backend/frontend
- 👥 **Team Collaboration** — Invite members with role-based access
- 🔐 **Secure** — Encrypted API keys, session management, CSRF protection
- 📱 **Responsive** — Works on desktop and mobile

---

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- [pnpm](https://pnpm.io/) 8+
- [Docker](https://www.docker.com/) & Docker Compose
- [Cursor API Key](https://cursor.com/settings)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/opentasks.git
cd opentasks

# Copy environment file
cp .env.example .env

# Edit .env with your settings
nano .env

# One-command setup (install deps + setup database)
pnpm setup

# Start everything (services + dev servers)
pnpm start:all
```

That's it! The app will be running at `http://localhost:3000`

#### Manual Setup (Alternative)

```bash
# Install dependencies
pnpm install

# Start the database services
docker compose up -d postgres redis

# Push database schema
pnpm db:push

# Seed initial data (creates admin user & invite codes)
pnpm db:seed

# Start all dev servers
pnpm dev
```

### Default Credentials

After seeding, you can login with:
- **Email:** `admin@opentasks.local`
- **Password:** `Admin123!`

Or register with one of the invite codes:
- `OPENTASKS-ALPHA-001`
- `OPENTASKS-ALPHA-002`
- `OPENTASKS-ALPHA-003`

---

## 📋 Creating Effective Tickets

The AI agent needs clear, detailed instructions to implement features correctly. Use this template:

```markdown
## What needs to be done
Add a dark mode toggle to the settings page that persists user preference.

## Acceptance Criteria
- [ ] Toggle switch in settings UI
- [ ] Saves preference to localStorage
- [ ] Applies theme on page load
- [ ] Smooth transition animation

## Technical Details
- Modify: `src/components/Settings.tsx`
- Add: `src/hooks/useTheme.ts`
- Use Tailwind's dark mode classes

## Additional Context
See Figma design: [link]
Follow existing button styling patterns
```

### Tips for Better AI Results

1. **Be Specific** — "Add button" vs "Add a primary blue button with rounded corners in the header"
2. **Include Files** — Tell the AI which files to modify
3. **Define Scope** — One feature per ticket, avoid large refactors
4. **Add Context** — Link to designs, similar implementations, or documentation

---

## 🔀 Multi-Branch Workflows

OpenTasks supports projects with multiple branches (e.g., separate backend and frontend).

### Configuration

When creating a project, configure branch presets:

```
Default Branch: main
Branch Presets:
  Backend=master
  Frontend=frontend-dev
```

### Using Branches

When creating a ticket, select the target branch:

- **Backend** tasks → `master` branch
- **Frontend** tasks → `frontend-dev` branch

The AI agent will create PRs against the specified branch.

---

## 🏗️ Architecture

```
OpenTasks/
├── apps/
│   ├── server/          # Express MPA server (EJS + API)
│   ├── client-assets/   # React Kanban board (Vite)
│   └── cloud-bridge/    # BullMQ worker for Cursor API
├── packages/
│   └── database/        # Prisma schema + utilities
└── docker-compose.yml   # PostgreSQL + Redis
```

### Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | EJS Templates + React Islands |
| Styling | Tailwind CSS + Shadcn/ui |
| Backend | Express.js + TypeScript |
| Database | PostgreSQL + Prisma ORM |
| Queue | Redis + BullMQ |
| AI Integration | Cursor Cloud Agent API |

---

## 🔐 Security

- **Authentication** — Session-based with HttpOnly cookies
- **Authorization** — Role-based (Super Admin, Admin, Member)
- **Encryption** — AES-256 for API keys at rest
- **CSRF Protection** — Token validation on all mutations
- **Invite System** — Closed registration with invite codes

---

## 🛠️ Development

### Quick Commands

| Command | Description |
|---------|-------------|
| `pnpm setup` | First-time setup: install deps, generate Prisma, push DB, seed data |
| `pnpm start:all` | Start everything (Docker services + all dev servers) |
| `pnpm start:services` | Start only PostgreSQL + Redis in Docker |
| `pnpm stop:services` | Stop Docker services |
| `pnpm dev` | Start all dev servers (assumes services running) |
| `pnpm build` | Build all packages for production |

### Database Commands

```bash
# Push schema changes to database
pnpm db:push

# Generate Prisma client after schema changes
pnpm db:generate

# Seed database with initial data
pnpm db:seed
```

### Individual App Commands

```bash
# Server only
pnpm --filter @opentasks/server run dev

# Client assets (watch mode)
pnpm --filter @opentasks/client-assets run dev

# Cloud bridge worker
pnpm --filter @opentasks/cloud-bridge run dev
```

### Environment Variables

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL connection string |
| `REDIS_URL` | Redis connection string |
| `SESSION_SECRET` | Secret for session cookies |
| `ENCRYPTION_KEY` | 32-byte hex key for AES-256 |
| `CURSOR_API_KEY` | Your Cursor Cloud Agent API key |
| `CURSOR_WEBHOOK_SECRET` | Secret for webhook verification |

---

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

<p align="center">
  Built with ❤️ for developers who want to code less and ship more.
</p>

