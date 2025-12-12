# 🚀 OpenTasks Extension - New Features

## ✨ What's New

Your Cursor extension just got **SUPERCHARGED** with powerful new features! Now you can do almost everything without leaving your code editor.

---

## 🎯 New Features

### 1. **Right-Click Context Menu** 🖱️

Right-click on any ticket in the sidebar to access quick actions:

#### Move Actions
- **Move to Handle (AI Agent)** - Queue ticket for AI processing
- **Move to To Do** - Put ticket back in your todo list  
- **Move to Done** - Mark ticket as complete

#### Copy Actions
- **Copy Ticket Details** - Copy title, description, AI summary to clipboard
- **Copy & Enhance with Context** 🌟 - Copies ticket **PLUS**:
  - Current file path you're working on
  - Selected code (if any)
  - Workspace information
  - Perfect for pasting into AI chat!

#### Edit Actions
- **Edit Ticket** - Update title, description, priority
- **Delete Ticket** - Remove ticket (with confirmation)

---

### 2. **Copy & Enhance** - The Smart Feature 🧠

This is your **secret weapon**! When you right-click a ticket and choose "Copy & Enhance with Context":

**What it captures:**
```markdown
# Ticket Title

**Priority:** High
**Status:** TODO
**ID:** abc123

## Description
[Your ticket description]

## Current File Context
**File:** /path/to/your/file.ts
**Language:** typescript
**Selected Code:**
```typescript
// Your selected code here
```

## Workspace
**Path:** /Users/you/project
**Name:** My Project

---
*Enhanced ticket details with context from Cursor IDE*
```

**Perfect for:**
- Pasting into Cursor Chat for AI help
- Sharing with team members
- Creating detailed bug reports
- Code reviews

---

### 3. **Create New Project** 📁

Click the "New Folder" icon in the sidebar title bar to create a new project.

*Note: Full project creation coming soon - currently redirects to web UI*

---

### 4. **Quick Move Actions** ⚡

The fastest way to manage tickets:

1. **Move to Handle** - Right-click → "Move to Handle"
   - Ticket instantly queued for AI processing
   - No need to open browser!

2. **Move to Done** - Right-click → "Move to Done"
   - Mark completed without leaving Cursor

3. **Move to To Do** - Right-click → "Move to To Do"
   - Move back to your todo list

---

## 🎨 How to Use

### Context Menu (Right-Click)

1. Open OpenTasks sidebar (purple icon)
2. Expand a project → expand a column
3. **Right-click any ticket**
4. Choose your action!

### Copy & Enhance Workflow

**Best Practice:**
```
1. Open the file you're working on
2. Select relevant code (optional)
3. Right-click ticket → "Copy & Enhance with Context"
4. Paste in Cursor Chat
5. Ask AI: "Help me implement this ticket"
```

The AI will have:
- ✅ Ticket requirements
- ✅ Your current file
- ✅ Selected code
- ✅ Workspace context

**Result:** Much better AI responses! 🎯

---

## 📋 Complete Feature List

### Main Commands (Cmd+Shift+P)
- `OpenTasks: Sign In` - Connect to OpenTasks
- `OpenTasks: Sign Out` - Disconnect
- `OpenTasks: Create Ticket` - Create new ticket
- `OpenTasks: Create New Project` - Create new project
- `OpenTasks: Refresh` - Reload projects/tickets

### Context Menu Actions (Right-Click on Ticket)
- **Move Actions:**
  - Move to Handle (AI Agent)
  - Move to To Do
  - Move to Done

- **Copy Actions:**
  - Copy Ticket Details
  - Copy & Enhance with Context 🌟

- **Edit Actions:**
  - Edit Ticket
  - Open in Browser
  - Delete Ticket

---

## 🔥 Pro Tips

### Tip 1: Enhance Everything
Always use "Copy & Enhance" instead of regular copy - it adds valuable context!

### Tip 2: Quick AI Workflow
1. Create ticket with requirements
2. Right-click → Move to Handle
3. Wait for AI to process
4. Review PR directly from sidebar (click ticket)

### Tip 3: Context is King
Before copying a ticket, select the code you're struggling with - it'll be included in the enhanced copy!

### Tip 4: Keyboard Shortcuts
- `Cmd+Shift+P` → Type "OpenTasks" → See all commands
- Right-click tickets for quick actions
- Click tickets to open in browser

---

## 🎬 Example Workflows

### Workflow 1: Bug Fix with AI Help
```
1. Right-click ticket → "Copy & Enhance with Context"
2. Open Cursor Chat
3. Paste + Ask: "What's causing this bug?"
4. AI sees: ticket description + your code + file path
5. Get precise answer!
```

### Workflow 2: Quick Task Management
```
1. Create ticket (Cmd+Shift+P → "Create Ticket")
2. Right-click → "Move to Handle"
3. AI processes automatically
4. Check back later → ticket moved to "To Review"
5. Right-click → "Move to Done"
```

### Workflow 3: Team Collaboration
```
1. Right-click ticket → "Copy & Enhance"
2. Paste in Slack/Discord
3. Team sees full context (file, code, workspace)
4. Better discussions!
```

---

## 📊 What's Coming Next

### Planned Features:
- 🔄 Drag & Drop tickets between columns
- 🤖 Local Cursor Agent (use Cursor's AI instead of cloud)
- ✏️ Full inline editing (no browser needed)
- 🔍 Search tickets from command palette
- 🏷️ Add labels/tags to tickets
- 📎 Attach files to tickets

---

## 🐛 Known Limitations

- **Project Creation**: Currently opens web UI (full support coming soon)
- **Ticket Editing**: Some fields redirect to web UI for now
- **Ticket Deletion**: Opens confirmation in web UI

These will be fully integrated in the next version!

---

## 🎉 Summary

Your extension now has:
- ✅ 8 new commands
- ✅ Right-click context menu
- ✅ Smart "Copy & Enhance" feature
- ✅ Quick move actions
- ✅ No need to open browser for most tasks!

**Try it now:**
1. Reload Cursor (Cmd+R / Ctrl+R)
2. Open OpenTasks sidebar
3. Right-click any ticket
4. See all the new options! 🚀

---

**Enjoy your supercharged OpenTasks extension!** 💪


