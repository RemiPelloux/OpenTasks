# 🎯 Quick Start: New Extension Features

## Right-Click Context Menu

**Your new superpowers are just a right-click away!**

```
📦 OpenTasks Extension (sidebar)
  └── 📁 Your Project
       └── 📋 To Do (3)
            └── 🎫 Fix login bug
                 │
                 └─── RIGHT CLICK HERE! ───┐
                                            │
        ┌───────────────────────────────────┘
        │
        ▼
    ╔═══════════════════════════════════════╗
    ║  📖 Open in Browser                   ║
    ║  ──────────────────────────────────   ║
    ║  ✏️  Edit Ticket                      ║
    ║  ──────────────────────────────────   ║
    ║  📋 Copy Ticket Details               ║
    ║  ✨ Copy & Enhance with Context       ║ ← 🌟 BEST FEATURE!
    ║  ──────────────────────────────────   ║
    ║  🤖 Move to Handle (AI Agent)         ║
    ║  📝 Move to To Do                     ║
    ║  ✅ Move to Done                      ║
    ║  ──────────────────────────────────   ║
    ║  🗑️  Delete Ticket                    ║
    ╚═══════════════════════════════════════╝
```

---

## The "Copy & Enhance" Workflow

**Before:** Copy basic ticket info
```markdown
# Fix login bug
Description: Users can't login
```

**After "Copy & Enhance":**
```markdown
# Fix login bug

**Priority:** High
**Status:** TODO

## Description
Users can't login on mobile devices

## Current File Context
**File:** /project/src/auth/LoginForm.tsx
**Language:** typescript
**Selected Code:**
```typescript
const handleSubmit = async (data) => {
  // This is where the bug is
  await login(data);
};
```

## Workspace
**Path:** /Users/you/MyProject
**Name:** MyProject

---
*Enhanced with context from Cursor IDE*
```

**Result:** AI has FULL context to help you! 🎯

---

## Quick Actions

### Move Ticket to AI Agent
```
1. Right-click ticket
2. Click "Move to Handle (AI Agent)"
3. ✅ Done! AI starts processing
```

### Get Help from Cursor AI
```
1. Select problematic code in your file
2. Right-click ticket → "Copy & Enhance"
3. Open Cursor Chat (Cmd+L)
4. Paste + Ask: "Help me fix this"
5. 🎉 AI sees ticket + your code + file path!
```

### Quick Complete
```
1. Finish working on ticket
2. Right-click → "Move to Done"
3. ✅ Marked complete!
```

---

## Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Open Command Palette | `Cmd+Shift+P` (Mac) / `Ctrl+Shift+P` (Win) |
| Open Cursor Chat | `Cmd+L` (Mac) / `Ctrl+L` (Win) |
| Reload Cursor | `Cmd+R` (Mac) / `Ctrl+R` (Win) |

---

## Pro Tip 💡

**Always select code before using "Copy & Enhance"!**

Example:
1. Find the buggy function
2. Select the entire function
3. Right-click ticket → "Copy & Enhance"
4. Paste in Cursor Chat
5. Ask: "What's wrong with this code?"

The AI sees:
- ✅ The ticket description
- ✅ Your selected code
- ✅ The file it's in
- ✅ Your workspace

= **Perfect context for accurate help!** 🎯

---

## Try It Now!

1. **Reload Cursor**: Press `Cmd+R` (Mac) or `Ctrl+R` (Windows)
2. **Open Sidebar**: Click purple OpenTasks icon
3. **Find Any Ticket**
4. **Right-Click** → See all options!

---

**Enjoy your new superpowers!** 🚀


