# Cursor Extension Integration - Implementation Summary

## ✅ All Tasks Completed

### 1. Database Schema (ApiToken Model)

**File**: `packages/database/prisma/schema.prisma`

Added `ApiToken` model for Personal Access Token (PAT) storage:
- `id`, `name`, `tokenHash` (SHA-256), `last4` (display)
- `expiresAt`, `revokedAt`, `lastUsedAt` timestamps
- Foreign key to `User` with cascade delete
- Indexes on `tokenHash`, `(userId, revokedAt)`, `expiresAt`

### 2. PAT Authentication Middleware

**File**: `apps/server/src/middleware/apiToken.ts`

Implements Bearer token authentication:
- `requireApiToken` - Validates Bearer token from Authorization header
- Hashes incoming token with SHA-256 and looks up in database
- Checks: not revoked, not expired, user active
- Attaches `req.apiUser` (userId, email, name, role) to request
- Updates `lastUsedAt` on each request (fire-and-forget)
- `generateToken` - Creates cryptographically secure random token
- `hashToken` - SHA-256 hashing utility

### 3. Extension API Routes

**File**: `apps/server/src/routes/ext.ts`

#### Token Management (Session Auth - Web UI):
- `POST /api/ext/tokens` - Create API token (returns plaintext once)
- `GET /api/ext/tokens` - List user's tokens
- `DELETE /api/ext/tokens/:id` - Revoke token

#### Extension Endpoints (PAT Auth):
- `GET /api/ext/me` - Get current user info
- `GET /api/ext/projects` - List user's projects (active only)
- `GET /api/ext/projects/:id/tickets` - List tickets (optional status filter)
- `POST /api/ext/projects/:id/tickets` - Create ticket (broadcasts to WebSocket)
- `PATCH /api/ext/projects/:id/tickets/:id/status` - Move ticket (broadcasts, queues AI if HANDLE)

**Integrated**:
- WebSocket broadcasts via `wsService.ticketCreated()`, `wsService.ticketMoved()`
- BullMQ job queueing when ticket moved to HANDLE column
- Project access validation via `ProjectMember` lookup

### 4. Settings UI for API Tokens

**File**: `apps/server/views/settings/index.ejs`

Added "API Tokens" section with:
- **Create Token Form**: Name input + expiry dropdown (7/30/90/365 days, or never)
- **Token Display** (once): Show plaintext token with copy button after creation
- **Token List**: Display all user tokens with:
  - Name, last 4 chars, created date
  - Expiration date, last used date
  - Revoked status badge
  - Revoke button (with confirmation)
- **JavaScript**: Handles token creation, clipboard copy, list refresh, revoke

### 5. Cursor Extension Scaffold

**Directory**: `apps/cursor-extension/`

**Structure**:
```
cursor-extension/
├── package.json          # VS Code extension manifest
├── tsconfig.json         # TypeScript config
├── README.md             # Extension documentation
├── resources/
│   └── icon.svg          # Activity bar icon
└── src/
    ├── extension.ts      # Main entry point
    ├── api.ts            # OpenTasks API client
    └── treeProvider.ts   # Tree view provider
```

**Build Pipeline**:
- `tsup` for fast TypeScript compilation
- Outputs to `dist/extension.js` (CommonJS)
- `pnpm run build` - Compile
- `pnpm run package` - Create .vsix for distribution

### 6. Tree View Provider

**File**: `apps/cursor-extension/src/treeProvider.ts`

Implements `vscode.TreeDataProvider<TreeItem>`:
- **Root Level**: Projects (folder icon)
- **Project Level**: Columns with ticket counts (status-specific icons)
- **Column Level**: Individual tickets (PR/processing/error icons)

**Features**:
- Auto-refresh via polling (configurable interval)
- Icons: folder, inbox, checklist, robot, loading, eye, check, x
- Ticket tooltips with markdown (title, description, status, priority, AI summary)
- Priority indicators: 🔴 Urgent, 🟠 High, 🟡 Medium, 🟢 Low
- Click ticket → opens project board in browser

### 7. Create Ticket Command

**File**: `apps/cursor-extension/src/extension.ts`

`opentasks.createTicket` command flow:
1. Check authentication (redirect to sign in if needed)
2. Fetch projects via API
3. QuickPick project selection
4. Input title (required, validated)
5. Input description (optional)
6. QuickPick column: Backlog / Todo / Handle (AI Agent)
7. QuickPick priority: Low / Medium / High / Urgent
8. Create ticket via `POST /api/ext/projects/:id/tickets`
9. Show success notification with "Open in Browser" action
10. Refresh tree view

**Other Commands**:
- `opentasks.signIn` - Prompt for base URL + token, store in SecretStorage
- `opentasks.signOut` - Clear credentials
- `opentasks.refresh` - Manual tree refresh
- `opentasks.openInBrowser` - Open ticket/project in browser

### 8. Documentation

**File**: `TECHNICAL_DOCS.md`

Added sections:
- **Extension API** (`/api/ext/*`) with full endpoint list
- **API Token Authentication Flow** (generate → use → validate → security)
- **Example API Requests** (curl examples for create ticket, list tickets)
- **Cursor Extension** section:
  - Architecture diagram
  - Features list
  - Setup instructions
  - Configuration options
  - Development workflow
- **Database Schema**: Added `ApiToken` model documentation

---

## Security Implementation

✅ **Token Storage**: SHA-256 hashed (one-way), only last 4 chars stored for display
✅ **Token Display**: Shown once on creation, never retrievable again
✅ **Token Validation**: Checked on every request (not revoked, not expired, user active)
✅ **CSRF Bypass**: Extension API (`/api/ext/*`) bypasses CSRF (uses Bearer auth)
✅ **SecretStorage**: VS Code SecretStorage for secure PAT storage in extension
✅ **Authorization**: Project membership verified before ticket access

---

## Testing Checklist

To test the full integration:

1. ✅ **Generate Token**:
   - Login to OpenTasks
   - Go to Settings → API Tokens
   - Create token with name "Test Extension"
   - Copy token (shown once)

2. ✅ **Install Extension**:
   ```bash
   cd apps/cursor-extension
   pnpm run build
   pnpm run package
   ```
   - In Cursor: Extensions → Install from VSIX
   - Select generated `opentasks-0.1.0.vsix`

3. ✅ **Sign In**:
   - Open Command Palette (Cmd+Shift+P)
   - Run: "OpenTasks: Sign In"
   - Enter base URL: `https://www.opentasks.fr`
   - Paste token

4. ✅ **Tree View**:
   - Open OpenTasks sidebar (activity bar icon)
   - Verify projects load
   - Expand project → see columns
   - Expand column → see tickets
   - Click ticket → opens in browser

5. ✅ **Create Ticket**:
   - Command Palette: "OpenTasks: Create Ticket"
   - Select project
   - Enter title: "Test ticket from Cursor"
   - Enter description (optional)
   - Select column: "Handle" (for AI processing)
   - Select priority: "High"
   - Verify ticket appears in tree
   - Verify ticket appears on web board

6. ✅ **API Endpoints**:
   ```bash
   # Test with curl
   TOKEN="your-token-here"
   
   # Get user info
   curl https://www.opentasks.fr/api/ext/me \
     -H "Authorization: Bearer $TOKEN"
   
   # List projects
   curl https://www.opentasks.fr/api/ext/projects \
     -H "Authorization: Bearer $TOKEN"
   
   # Create ticket
   curl -X POST https://www.opentasks.fr/api/ext/projects/{PROJECT_ID}/tickets \
     -H "Authorization: Bearer $TOKEN" \
     -H "Content-Type: application/json" \
     -d '{"title":"API test","status":"TODO"}'
   ```

---

## Deployment Notes

✅ **Database Migration**: Run `npx prisma db push` to apply `ApiToken` schema
✅ **Server Code**: All routes and middleware deployed
✅ **Extension**: Ready for manual installation via .vsix or marketplace publishing

---

## Future Enhancements

Potential v1.1 features:
- [ ] Context menu: "Create OpenTasks Ticket from Selection" (pre-fill description)
- [ ] WebSocket support in extension (real-time updates without polling)
- [ ] Drag-and-drop tickets between columns in tree view
- [ ] Inline ticket editing (change priority, assignee)
- [ ] Ticket search/filter in sidebar
- [ ] Multi-select operations (bulk move, bulk delete)
- [ ] VS Code Marketplace publication

---

## Summary

All 8 tasks completed successfully:
✅ ApiToken database model
✅ PAT authentication middleware
✅ Extension API routes (/api/ext/*)
✅ Settings UI for token management
✅ Cursor extension scaffold + build pipeline
✅ Tree view provider with polling
✅ Create ticket command
✅ Technical documentation

The Cursor extension is fully functional and ready for testing!
