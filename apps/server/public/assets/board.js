import { j as jsxRuntimeExports, r as reactExports, c as client, R as React } from "./vendor-react-ChslnFbV.js";
import { u as useSortable, C as CSS, a as useDroppable, S as SortableContext, v as verticalListSortingStrategy, b as useSensors, c as useSensor, D as DndContext, d as closestCorners, e as DragOverlay, s as sortableKeyboardCoordinates, K as KeyboardSensor, P as PointerSensor } from "./vendor-dnd-a2WmNMbK.js";
import { l as lookup } from "./vendor-socket-YoIvxLmZ.js";
const priorityConfig = {
  LOW: { class: "priority-low", label: "Low", color: "slate" },
  MEDIUM: { class: "priority-medium", label: "Medium", color: "blue" },
  HIGH: { class: "priority-high", label: "High", color: "amber" },
  URGENT: { class: "priority-urgent", label: "Urgent", color: "red" }
};
function TicketCard({ ticket, isDragging = false, onClick, onArchive, onDelete }) {
  var _a, _b;
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging: isSortableDragging
  } = useSortable({ id: ticket.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };
  const isProcessing = ticket.status === "HANDLE" || ticket.status === "AI_PROCESSING";
  const hasCompleted = ticket.status === "TO_REVIEW" && ticket.prLink;
  const hasError = ((_a = ticket.aiSummary) == null ? void 0 : _a.includes("failed")) || ((_b = ticket.aiSummary) == null ? void 0 : _b.includes("Error"));
  const hasExistingWork = ticket.prLink || ticket.agentBranch || ticket.agentId;
  const wasProcessedBefore = hasExistingWork && (ticket.status === "TODO" || ticket.status === "BACKLOG");
  const getCardClass = () => {
    const classes = ["ticket-card"];
    if (isDragging || isSortableDragging) classes.push("dragging");
    if (hasCompleted) classes.push("success-glow");
    if (ticket.status === "AI_PROCESSING") classes.push("ai-processing");
    if (ticket.status === "HANDLE") classes.push("queued");
    if (hasError) classes.push("has-error");
    if (wasProcessedBefore) classes.push("was-processed");
    return classes.join(" ");
  };
  const truncate = (text, maxLines = 2) => {
    if (!text) return null;
    const lines = text.split("\n").slice(0, maxLines);
    const truncated = lines.join("\n");
    return truncated.length < text.length ? `${truncated.slice(0, 100)}...` : truncated;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: setNodeRef,
      style,
      className: getCardClass(),
      onClick,
      ...attributes,
      ...listeners,
      children: [
        ticket.status === "AI_PROCESSING" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ticket-processing-overlay", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "processing-pulse" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ticket-thinking-indicator", title: "AI is working...", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ThinkingIcon, {}) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ticket-content", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "ticket-title", children: ticket.title }),
          ticket.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "ticket-description", children: truncate(ticket.description, 2) }),
          isProcessing && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ticket-ai-badge", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TerminalIcon, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: ticket.status === "HANDLE" ? "Queued" : "Processing..." }),
            ticket.status === "AI_PROCESSING" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mini-spinner" })
          ] }),
          ticket.aiSummary && !isProcessing && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `ticket-ai-summary ${hasError ? "error" : ""}`, children: [
            hasError ? /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorIcon, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(AIIcon, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: truncate(ticket.aiSummary, 3) })
          ] })
        ] }),
        wasProcessedBefore && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ticket-processed-badge", title: "This ticket was previously processed by AI", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RetryIcon, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Previously processed" }),
          ticket.prLink && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: ticket.prLink,
              target: "_blank",
              rel: "noopener noreferrer",
              onClick: (e) => e.stopPropagation(),
              className: "processed-pr-link",
              children: "View PR"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ticket-footer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ticket-footer-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `ticket-priority-pill ${priorityConfig[ticket.priority].class}`, children: priorityConfig[ticket.priority].label }),
            (ticket.agentBranch || ticket.targetBranch) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: `ticket-branch-badge ${ticket.agentBranch ? "has-agent-branch" : ""}`,
                title: ticket.agentBranch || ticket.targetBranch || "",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(BranchIcon, {}),
                  (ticket.agentBranch || ticket.targetBranch || "").length > 12 ? (ticket.agentBranch || ticket.targetBranch || "").slice(0, 12) + "..." : ticket.agentBranch || ticket.targetBranch
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ticket-footer-right", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ticket-id", children: [
              "#",
              ticket.id.slice(-4)
            ] }),
            ticket.prLink && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: ticket.prLink,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "ticket-pr-icon",
                onClick: (e) => e.stopPropagation(),
                title: "View Pull Request",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(GitHubIcon, {})
              }
            ),
            isProcessing ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ticket-ai-avatar", title: "AI Agent Processing", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RobotIcon, {}) }) : hasExistingWork && !wasProcessedBefore && !ticket.prLink ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ticket-has-work", title: "Has existing work", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CheckBadgeIcon, {}) }) : ticket.assignee ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ticket-assignee", title: ticket.assignee.name, children: ticket.assignee.name.substring(0, 2).toUpperCase() }) : null
          ] })
        ] }),
        !isProcessing && ticket.status === "DONE" && onArchive && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ticket-actions", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            className: "ticket-action-btn archive",
            onClick: (e) => {
              e.stopPropagation();
              onArchive(ticket);
            },
            title: "Archive this ticket",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArchiveIcon, {}),
              "Archive"
            ]
          }
        ) }),
        !isProcessing && onDelete && ticket.status !== "DONE" && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "ticket-delete-btn",
            onClick: (e) => {
              e.stopPropagation();
              onDelete(ticket);
            },
            title: "Delete",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrashIcon, {})
          }
        )
      ]
    }
  );
}
function TrashIcon() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "icon-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 6h18" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" })
  ] });
}
function ArchiveIcon() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "icon-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "2", y: "4", width: "20", height: "5", rx: "2" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M4 9v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M10 13h4" })
  ] });
}
function BranchIcon() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "icon-xs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "6", x2: "6", y1: "3", y2: "15" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "6", r: "3" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "6", cy: "18", r: "3" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18 9a9 9 0 0 1-9 9" })
  ] });
}
function TerminalIcon() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "icon-xs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "4 17 10 11 4 5" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "12", x2: "20", y1: "19", y2: "19" })
  ] });
}
function RobotIcon() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "icon-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "3", y: "11", width: "18", height: "10", rx: "2" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "5", r: "2" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 7v4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "8", x2: "8", y1: "16", y2: "16" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "16", x2: "16", y1: "16", y2: "16" })
  ] });
}
function AIIcon() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "icon-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13A1.5 1.5 0 0 0 6 14.5 1.5 1.5 0 0 0 7.5 16 1.5 1.5 0 0 0 9 14.5 1.5 1.5 0 0 0 7.5 13m9 0a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0-1.5-1.5" }) });
}
function ErrorIcon() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "icon-xs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "12", x2: "12", y1: "8", y2: "12" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "12", x2: "12.01", y1: "16", y2: "16" })
  ] });
}
function RetryIcon() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "icon-xs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M21 3v5h-5" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 16H3v5" })
  ] });
}
function CheckBadgeIcon() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "icon-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "22 4 12 14.01 9 11.01" })
  ] });
}
function GitHubIcon() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", className: "icon-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" }) });
}
function ThinkingIcon() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "thinking-icon", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M7 8h2" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M7 12h10" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M7 16h6" })
  ] });
}
const columnConfig = {
  BACKLOG: {
    variant: "",
    emptyText: "Drop tickets here"
  },
  TODO: {
    variant: "",
    emptyText: "Drop tickets here"
  },
  HANDLE: {
    variant: "column-handle",
    emptyText: "Drop here to start Agent",
    emptySubtext: "AI will process automatically",
    svgIcon: "robot"
  },
  AI_PROCESSING: {
    variant: "column-ai-processing",
    emptyText: "AI is working...",
    emptySubtext: "Tickets appear here while processing",
    svgIcon: "brain"
  },
  TO_REVIEW: {
    variant: "column-to-review",
    emptyText: "Drop tickets here",
    svgIcon: "eye"
  },
  DONE: {
    variant: "column-done",
    emptyText: "Completed tickets",
    svgIcon: "check"
  },
  CANCELLED: {
    variant: "",
    emptyText: "Cancelled tickets"
  }
};
const ColumnIcons = {
  robot: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "column-icon", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "3", y: "11", width: "18", height: "10", rx: "2" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "5", r: "2" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 7v4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "8", x2: "8", y1: "16", y2: "16" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "16", x2: "16", y1: "16", y2: "16" })
  ] }),
  brain: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "column-icon", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" })
  ] }),
  eye: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "column-icon", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "3" })
  ] }),
  check: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "column-icon", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "22 4 12 14.01 9 11.01" })
  ] })
};
function Column({
  id,
  title,
  icon,
  tickets,
  isActive = false,
  onTicketClick,
  onArchive,
  onDelete
}) {
  const { setNodeRef, isOver } = useDroppable({ id });
  const config = columnConfig[id];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `kanban-column ${config.variant} ${isActive ? "active" : ""}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "column-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "column-title", children: [
        config.svgIcon && ColumnIcons[config.svgIcon] ? ColumnIcons[config.svgIcon] : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "column-emoji", role: "img", "aria-label": title, children: icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "column-name", children: title })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "column-count", children: tickets.length })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SortableContext, { items: tickets.map((t) => t.id), strategy: verticalListSortingStrategy, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: setNodeRef,
        className: `column-body ${isOver ? "drop-target" : ""}`,
        children: tickets.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `column-empty ${id === "HANDLE" ? "handle-empty" : ""}`, children: id === "HANDLE" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "empty-chute", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChuteIcon, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "empty-title", children: config.emptyText }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "empty-subtext", children: config.emptySubtext })
        ] }) : id === "AI_PROCESSING" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "empty-ai", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrainPulseIcon, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "empty-title", children: config.emptyText }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "empty-subtext", children: config.emptySubtext })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "empty-icon", children: icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "empty-text", children: config.emptyText })
        ] }) }) : tickets.map((ticket) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          TicketCard,
          {
            ticket,
            onClick: () => onTicketClick(ticket),
            onArchive,
            onDelete
          },
          ticket.id
        ))
      }
    ) })
  ] });
}
function ChuteIcon() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", className: "chute-icon", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 3v18", strokeDasharray: "3 3" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M5 8l7 7 7-7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "4", y: "18", width: "16", height: "3", rx: "1" })
  ] });
}
function BrainPulseIcon() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", className: "brain-pulse-icon", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" })
  ] });
}
const PRIORITIES = [
  { value: "LOW", label: "Low", icon: "↓", color: "text-slate-400" },
  { value: "MEDIUM", label: "Medium", icon: "→", color: "text-blue-400" },
  { value: "HIGH", label: "High", icon: "↑", color: "text-amber-400" },
  { value: "URGENT", label: "Urgent", icon: "⚡", color: "text-red-400" }
];
const MODEL_INFO = {
  "auto": { value: "auto", label: "Auto (Recommended)", description: "Let Cursor choose the best model" },
  "claude-4-sonnet-thinking": { value: "claude-4-sonnet-thinking", label: "Claude 4 Sonnet", description: "Fast & capable" },
  "claude-4-opus-thinking": { value: "claude-4-opus-thinking", label: "Claude 4 Opus", description: "Most powerful" },
  "o3": { value: "o3", label: "O3", description: "OpenAI reasoning model" }
};
const DESCRIPTION_TEMPLATE = `## What needs to be done
Describe the task clearly. What is the expected outcome?

## Acceptance Criteria
- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

## Technical Details
Any specific implementation details, files to modify, or constraints?

## Additional Context
Links, screenshots, or references that might help.`;
function NewTicketModal({
  projectId,
  projectName,
  branchPresets,
  defaultBranch,
  members = [],
  onClose,
  onSubmit
}) {
  const [title, setTitle] = reactExports.useState("");
  const [description, setDescription] = reactExports.useState(DESCRIPTION_TEMPLATE);
  const [priority, setPriority] = reactExports.useState("MEDIUM");
  const [targetBranch, setTargetBranch] = reactExports.useState(defaultBranch);
  const [assigneeId, setAssigneeId] = reactExports.useState("");
  const [labels, setLabels] = reactExports.useState([]);
  const [labelInput, setLabelInput] = reactExports.useState("");
  const [showAdvanced, setShowAdvanced] = reactExports.useState(false);
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const [aiModel, setAiModel] = reactExports.useState("auto");
  const [availableModels, setAvailableModels] = reactExports.useState(["auto"]);
  const [modelsLoading, setModelsLoading] = reactExports.useState(true);
  const titleRef = reactExports.useRef(null);
  const modalRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    var _a;
    (_a = titleRef.current) == null ? void 0 : _a.focus();
  }, []);
  reactExports.useEffect(() => {
    const fetchModels = async () => {
      try {
        const csrfToken = getCsrfToken$3();
        const response = await fetch("/api/cursor/models", {
          headers: { "X-CSRF-Token": csrfToken }
        });
        if (response.ok) {
          const data = await response.json();
          setAvailableModels(data.models || ["auto"]);
        }
      } catch (err) {
        console.error("Failed to fetch models:", err);
      } finally {
        setModelsLoading(false);
      }
    };
    fetchModels();
  }, []);
  reactExports.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
        e.preventDefault();
        handleSubmit(e);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose, title, description, priority, targetBranch]);
  const validateDescription = (desc) => {
    if (!desc || desc.trim().length < 30) return false;
    const templateSignatures = [
      "Describe the task clearly",
      "What is the expected outcome?",
      "Criterion 1",
      "Criterion 2",
      "Criterion 3",
      "Any specific implementation details",
      "files to modify, or constraints?",
      "Links, screenshots, or references"
    ];
    let templateMatches = 0;
    for (const sig of templateSignatures) {
      if (desc.includes(sig)) templateMatches++;
    }
    if (templateMatches >= 5) return false;
    const stripped = desc.replace(/##\s*[A-Za-z ]+\s*/g, "").replace(/-\s*\[\s*\]\s*/g, "").replace(/\s+/g, " ").trim();
    return stripped.length >= 15;
  };
  const handleSubmit = reactExports.useCallback(
    async (e) => {
      var _a;
      e.preventDefault();
      setError("");
      if (!title.trim()) {
        setError("Title is required");
        (_a = titleRef.current) == null ? void 0 : _a.focus();
        return;
      }
      if (!description.trim()) {
        setError("Description is required - the AI needs context to work!");
        return;
      }
      if (!validateDescription(description)) {
        setError("Please fill in the description template with actual task details. The AI needs this information to implement the feature correctly.");
        return;
      }
      setIsSubmitting(true);
      try {
        const csrfToken = getCsrfToken$3();
        const response = await fetch(`/api/tickets/${projectId}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": csrfToken
          },
          body: JSON.stringify({
            title: title.trim(),
            description: description.trim(),
            priority,
            status: "BACKLOG",
            targetBranch,
            assigneeId: assigneeId || void 0,
            labels,
            aiModel: aiModel !== "auto" ? aiModel : void 0
          })
        });
        if (!response.ok) {
          const data = await response.json().catch(() => ({}));
          throw new Error(data.message || "Failed to create ticket");
        }
        const newTicket = await response.json();
        onSubmit(newTicket);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to create ticket");
      } finally {
        setIsSubmitting(false);
      }
    },
    [projectId, title, description, priority, targetBranch, assigneeId, labels, aiModel, onSubmit]
  );
  const handleAddLabel = reactExports.useCallback(() => {
    const label = labelInput.trim().toLowerCase();
    if (label && !labels.includes(label)) {
      setLabels([...labels, label]);
      setLabelInput("");
    }
  }, [labelInput, labels]);
  const handleRemoveLabel = reactExports.useCallback((label) => {
    setLabels(labels.filter((l) => l !== label));
  }, [labels]);
  const handleLabelKeyDown = reactExports.useCallback((e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddLabel();
    }
  }, [handleAddLabel]);
  const descriptionHasContent = validateDescription(description);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "modal-overlay",
      onClick: (e) => {
        if (e.target === e.currentTarget) onClose();
      },
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "new-ticket-title",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: modalRef, className: "ticket-modal", onClick: (e) => e.stopPropagation(), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ticket-modal-header", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ticket-modal-icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 5v14M5 12h14" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: "new-ticket-title", children: "Create Ticket" }),
              projectName && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
                "in ",
                projectName
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground hidden sm:block", children: "⌘ + Enter to submit" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: "ticket-modal-close",
                onClick: onClose,
                "aria-label": "Close modal",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18 6L6 18M6 6l12 12" }) })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "ticket-modal-form", children: [
          error && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ticket-error", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "10" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 8v4M12 16h.01" })
            ] }),
            error
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ticket-field", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "ticket-label", children: [
              "Title ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-400", children: "*" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                ref: titleRef,
                id: "ticket-title",
                name: "title",
                type: "text",
                className: "ticket-title-input",
                placeholder: "Brief summary of the task",
                value: title,
                onChange: (e) => setTitle(e.target.value),
                autoComplete: "off",
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ticket-field", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "ticket-label", children: [
              "Description ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-400", children: "*" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-normal ml-1 text-xs normal-case", children: "— The AI uses this to implement the feature" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                id: "ticket-description",
                name: "description",
                className: `ticket-description-input ${!descriptionHasContent ? "ticket-description-warning" : ""}`,
                value: description,
                onChange: (e) => setDescription(e.target.value),
                rows: 12,
                autoComplete: "off",
                required: true
              }
            ),
            !descriptionHasContent && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "ticket-warning-hint", children: "⚠️ Fill in the template with actual task details" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ticket-meta-grid", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ticket-field", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "ticket-label", children: "Priority" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ticket-priority-selector", children: PRIORITIES.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  className: `ticket-priority-btn ${priority === p.value ? "active" : ""} ${p.color}`,
                  onClick: () => setPriority(p.value),
                  title: p.label,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ticket-priority-icon", children: p.icon }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ticket-priority-label", children: p.label })
                  ]
                },
                p.value
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ticket-field", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "ticket-label", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "inline w-3.5 h-3.5 mr-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2L2 7l10 5 10-5-10-5z" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2 17l10 5 10-5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2 12l10 5 10-5" })
                ] }),
                "AI Model"
              ] }),
              modelsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ticket-model-loading", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ticket-spinner-small" }),
                "Loading models..."
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                "select",
                {
                  className: "ticket-select",
                  value: aiModel,
                  onChange: (e) => setAiModel(e.target.value),
                  children: availableModels.map((model) => {
                    const info = MODEL_INFO[model] || {
                      label: model.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
                      description: ""
                    };
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: model, children: [
                      info.label,
                      info.description ? ` - ${info.description}` : ""
                    ] }, model);
                  })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ticket-field", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "ticket-label", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "inline w-3.5 h-3.5 mr-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "6", x2: "6", y1: "3", y2: "15" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "6", r: "3" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "6", cy: "18", r: "3" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18 9a9 9 0 0 1-9 9" })
                ] }),
                "Target Branch"
              ] }),
              branchPresets.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ticket-branch-presets", children: branchPresets.map((preset) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  className: `ticket-branch-btn ${targetBranch === preset.branch ? "active" : ""}`,
                  onClick: () => setTargetBranch(preset.branch),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: preset.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: preset.branch })
                  ]
                },
                preset.branch
              )) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  className: "ticket-input",
                  placeholder: "main",
                  value: targetBranch,
                  onChange: (e) => setTargetBranch(e.target.value)
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              className: "ticket-advanced-toggle",
              onClick: () => setShowAdvanced(!showAdvanced),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "svg",
                  {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    className: `w-4 h-4 transition-transform ${showAdvanced ? "rotate-90" : ""}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9 18l6-6-6-6" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "More options" })
              ]
            }
          ),
          showAdvanced && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ticket-advanced-section", children: [
            members.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ticket-field", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "ticket-label", children: "Assignee" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ticket-assignee-selector", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    className: `ticket-assignee-btn ${!assigneeId ? "active" : ""}`,
                    onClick: () => setAssigneeId(""),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ticket-assignee-avatar unassigned", children: "?" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Unassigned" })
                    ]
                  }
                ),
                members.map((member) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    className: `ticket-assignee-btn ${assigneeId === member.id ? "active" : ""}`,
                    onClick: () => setAssigneeId(member.id),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ticket-assignee-avatar", children: member.avatarUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: member.avatarUrl, alt: member.name }) : member.name.substring(0, 2).toUpperCase() }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: member.name })
                    ]
                  },
                  member.id
                ))
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ticket-field", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "ticket-label", children: "Labels" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ticket-labels-input", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ticket-labels-list", children: labels.map((label) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ticket-label-tag", children: [
                  label,
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => handleRemoveLabel(label),
                      className: "ticket-label-remove",
                      children: "×"
                    }
                  )
                ] }, label)) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    className: "ticket-label-input",
                    placeholder: "Add label...",
                    value: labelInput,
                    onChange: (e) => setLabelInput(e.target.value),
                    onKeyDown: handleLabelKeyDown,
                    onBlur: handleAddLabel
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "ticket-hint", children: "Press Enter to add a label" })
            ] }),
            branchPresets.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ticket-field", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "ticket-label", children: "Custom Branch" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  className: "ticket-input font-mono",
                  placeholder: "Or enter a custom branch...",
                  value: targetBranch,
                  onChange: (e) => setTargetBranch(e.target.value)
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ticket-modal-actions", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "ticket-btn-secondary",
                onClick: onClose,
                disabled: isSubmitting,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "submit",
                className: "ticket-btn-primary",
                disabled: isSubmitting || !title.trim(),
                children: isSubmitting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ticket-spinner" }),
                  "Creating..."
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "w-4 h-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 5v14M5 12h14" }) }),
                  "Create Ticket"
                ] })
              }
            )
          ] })
        ] })
      ] })
    }
  );
}
function getCsrfToken$3() {
  const meta = document.querySelector('meta[name="csrf-token"]');
  return (meta == null ? void 0 : meta.getAttribute("content")) || "";
}
function getCsrfToken$2() {
  const meta = document.querySelector('meta[name="csrf-token"]');
  return (meta == null ? void 0 : meta.getAttribute("content")) || "";
}
function showToast$2(message, type = "success") {
  if (typeof window !== "undefined" && window.showToast) {
    window.showToast(message, type);
  }
}
const STATUS_COLORS = {
  QUEUED: "text-amber-400",
  RUNNING: "text-blue-400",
  FINISHED: "text-emerald-400",
  ERROR: "text-red-400",
  CANCELLED: "text-slate-400"
};
const STATUS_ICONS = {
  QUEUED: "⏳",
  RUNNING: "🔄",
  FINISHED: "✅",
  ERROR: "❌",
  CANCELLED: "🚫"
};
const STATUS_LABELS = {
  QUEUED: "Queued",
  RUNNING: "Running",
  FINISHED: "Completed",
  ERROR: "Failed",
  CANCELLED: "Cancelled"
};
function AgentStatusPanel({
  agentId,
  ticketId,
  ticketTitle,
  ticketStatus,
  onStatusChange,
  onStop,
  onFollowupSent,
  onValidate
}) {
  var _a, _b, _c, _d, _e;
  const [status, setStatus] = reactExports.useState(null);
  const [messages, setMessages] = reactExports.useState([]);
  const [isLoading, setIsLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
  const [isExpanded, setIsExpanded] = reactExports.useState(true);
  const [isStopping, setIsStopping] = reactExports.useState(false);
  const [isValidating, setIsValidating] = reactExports.useState(false);
  const [followupText, setFollowupText] = reactExports.useState("");
  const [isSendingFollowup, setIsSendingFollowup] = reactExports.useState(false);
  const [confirmAction, setConfirmAction] = reactExports.useState(null);
  const terminalRef = reactExports.useRef(null);
  const pollIntervalRef = reactExports.useRef(null);
  const handleValidate = reactExports.useCallback(async () => {
    if (isValidating) return;
    setIsValidating(true);
    try {
      const csrfToken = getCsrfToken$2();
      const response = await fetch(`/api/tickets/${ticketId}/validate`, {
        method: "POST",
        headers: {
          "X-CSRF-Token": csrfToken,
          "Content-Type": "application/json"
        }
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to validate ticket");
      }
      showToast$2("Ticket validated and marked as Done!", "success");
      if (pollIntervalRef.current) {
        clearInterval(pollIntervalRef.current);
        pollIntervalRef.current = null;
      }
      if (onValidate) {
        onValidate();
      }
    } catch (err) {
      console.error("Validate error:", err);
      const errorMsg = err instanceof Error ? err.message : "Failed to validate ticket";
      setError(errorMsg);
      showToast$2(errorMsg, "error");
    } finally {
      setIsValidating(false);
      setConfirmAction(null);
    }
  }, [ticketId, isValidating, onValidate]);
  const handleStop = reactExports.useCallback(async () => {
    if (isStopping) return;
    setIsStopping(true);
    try {
      const csrfToken = getCsrfToken$2();
      const response = await fetch(`/api/cursor/agents/${agentId}/stop`, {
        method: "POST",
        headers: {
          "X-CSRF-Token": csrfToken,
          "Content-Type": "application/json"
        }
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to stop agent");
      }
      showToast$2("AI agent stopped", "warning");
      setStatus((prev) => prev ? { ...prev, status: "CANCELLED" } : null);
      if (pollIntervalRef.current) {
        clearInterval(pollIntervalRef.current);
        pollIntervalRef.current = null;
      }
      if (onStatusChange) {
        onStatusChange("CANCELLED");
      }
      if (onStop) {
        onStop();
      }
    } catch (err) {
      console.error("Stop agent error:", err);
      const errorMsg = err instanceof Error ? err.message : "Failed to stop agent";
      setError(errorMsg);
      showToast$2(errorMsg, "error");
    } finally {
      setIsStopping(false);
      setConfirmAction(null);
    }
  }, [agentId, isStopping, onStatusChange, onStop]);
  const handleSendFollowup = reactExports.useCallback(async () => {
    if (!followupText.trim() || isSendingFollowup) return;
    setIsSendingFollowup(true);
    try {
      const csrfToken = getCsrfToken$2();
      const response = await fetch(`/api/cursor/agents/${agentId}/followup`, {
        method: "POST",
        headers: {
          "X-CSRF-Token": csrfToken,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          prompt: { text: followupText.trim() }
        })
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to send follow-up");
      }
      setMessages((prev) => [
        ...prev,
        {
          id: `local-${Date.now()}`,
          type: "user_message",
          text: followupText.trim()
        }
      ]);
      setFollowupText("");
      setStatus((prev) => prev ? { ...prev, status: "RUNNING" } : null);
      if (!pollIntervalRef.current) {
        pollIntervalRef.current = setInterval(() => {
          fetchStatus();
          fetchConversation();
        }, 3e3);
      }
      if (onFollowupSent) {
        onFollowupSent();
      }
    } catch (err) {
      console.error("Follow-up error:", err);
      setError(err instanceof Error ? err.message : "Failed to send follow-up");
    } finally {
      setIsSendingFollowup(false);
    }
  }, [agentId, followupText, isSendingFollowup, onFollowupSent]);
  const fetchStatus = reactExports.useCallback(async () => {
    try {
      const csrfToken = getCsrfToken$2();
      const response = await fetch(`/api/cursor/agents/${agentId}/status`, {
        headers: { "X-CSRF-Token": csrfToken }
      });
      if (!response.ok) {
        if (response.status === 404) {
          setError("Agent not found. It may have been deleted.");
          return;
        }
        throw new Error("Failed to fetch status");
      }
      const data = await response.json();
      setStatus(data);
      if (onStatusChange && data.status) {
        onStatusChange(data.status);
      }
      if (data.status === "FINISHED" || data.status === "ERROR" || data.status === "CANCELLED") {
        if (pollIntervalRef.current) {
          clearInterval(pollIntervalRef.current);
          pollIntervalRef.current = null;
        }
      }
    } catch (err) {
      console.error("Status fetch error:", err);
      setError("Failed to fetch agent status");
    }
  }, [agentId, onStatusChange]);
  const fetchConversation = reactExports.useCallback(async () => {
    try {
      const csrfToken = getCsrfToken$2();
      const response = await fetch(`/api/cursor/agents/${agentId}/conversation`, {
        headers: { "X-CSRF-Token": csrfToken }
      });
      if (!response.ok) {
        if (response.status === 404) return;
        throw new Error("Failed to fetch conversation");
      }
      const data = await response.json();
      if (data.messages && data.messages.length > 0) {
        setMessages(data.messages);
      }
      if (terminalRef.current) {
        setTimeout(() => {
          if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
          }
        }, 100);
      }
    } catch (err) {
      console.error("Conversation fetch error:", err);
    }
  }, [agentId]);
  reactExports.useEffect(() => {
    setIsLoading(true);
    setError(null);
    const fetchAll = async () => {
      await Promise.all([fetchStatus(), fetchConversation()]);
      setIsLoading(false);
    };
    fetchAll();
    pollIntervalRef.current = setInterval(() => {
      fetchStatus();
      fetchConversation();
    }, 3e3);
    return () => {
      if (pollIntervalRef.current) {
        clearInterval(pollIntervalRef.current);
      }
    };
  }, [agentId, fetchStatus, fetchConversation]);
  reactExports.useEffect(() => {
    if (terminalRef.current && messages.length > 0) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [messages]);
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "agent-status-panel loading", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "agent-status-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "agent-spinner" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Connecting to Cursor Agent..." })
    ] }) });
  }
  if (error) {
    const canStillValidate = ticketStatus === "TO_REVIEW";
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "agent-status-panel error", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "agent-status-header", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-red-400", children: [
        "❌ ",
        error
      ] }) }),
      canStillValidate && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "agent-review-actions", style: { padding: "1rem" }, children: confirmAction === "validate" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "validate-confirm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Mark as Done? This confirms the work is complete." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "validate-confirm-btns", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "btn btn-secondary btn-sm",
              onClick: () => setConfirmAction(null),
              disabled: isValidating,
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "btn btn-primary btn-sm",
              onClick: handleValidate,
              disabled: isValidating,
              children: isValidating ? "Validating..." : "Confirm"
            }
          )
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "validate-btn",
          onClick: () => setConfirmAction("validate"),
          disabled: isValidating,
          children: isValidating ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "agent-spinner-small" }),
            "Validating..."
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "w-4 h-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20 6L9 17l-5-5" }) }),
            "Validate & Complete"
          ] })
        }
      ) })
    ] });
  }
  const currentStatus = (status == null ? void 0 : status.status) || "QUEUED";
  const canSendFollowup = currentStatus === "FINISHED" || ticketStatus === "TO_REVIEW";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `agent-status-panel ${currentStatus.toLowerCase()}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        className: "agent-status-header",
        onClick: () => setIsExpanded(!isExpanded),
        "aria-expanded": isExpanded,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "agent-status-info", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "agent-status-indicator", children: currentStatus === "RUNNING" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "agent-spinner-small" }) : STATUS_ICONS[currentStatus] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `agent-status-text ${STATUS_COLORS[currentStatus]}`, children: STATUS_LABELS[currentStatus] }),
            ((_a = status == null ? void 0 : status.target) == null ? void 0 : _a.branchName) && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "agent-branch", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "w-3 h-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "6", x2: "6", y1: "3", y2: "15" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "6", r: "3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "6", cy: "18", r: "3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18 9a9 9 0 0 1-9 9" })
              ] }),
              status.target.branchName
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "agent-status-actions", children: [
            (currentStatus === "RUNNING" || currentStatus === "QUEUED") && (confirmAction === "stop" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "agent-confirm-inline", onClick: (e) => e.stopPropagation(), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Stop agent?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  className: "agent-confirm-btn yes",
                  onClick: handleStop,
                  disabled: isStopping,
                  children: isStopping ? "..." : "Yes"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  className: "agent-confirm-btn no",
                  onClick: () => setConfirmAction(null),
                  disabled: isStopping,
                  children: "No"
                }
              )
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                className: "agent-stop-btn",
                onClick: (e) => {
                  e.stopPropagation();
                  setConfirmAction("stop");
                },
                disabled: isStopping,
                title: "Emergency Stop - Stop the AI agent immediately",
                children: [
                  isStopping ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "agent-spinner-small" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", className: "w-3.5 h-3.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "6", y: "6", width: "12", height: "12", rx: "1" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isStopping ? "Stopping..." : "Stop" })
                ]
              }
            )),
            ((_b = status == null ? void 0 : status.target) == null ? void 0 : _b.url) && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: status.target.url,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "agent-link",
                onClick: (e) => e.stopPropagation(),
                children: "View in Cursor ↗"
              }
            ),
            ((_c = status == null ? void 0 : status.target) == null ? void 0 : _c.prUrl) && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: status.target.prUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "agent-link pr",
                onClick: (e) => e.stopPropagation(),
                children: "View PR ↗"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "svg",
              {
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                className: `agent-expand-icon ${isExpanded ? "expanded" : ""}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M6 9l6 6 6-6" })
              }
            )
          ] })
        ]
      }
    ),
    isExpanded && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "agent-status-content", children: [
      (status == null ? void 0 : status.summary) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "agent-summary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Summary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: status.summary })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "agent-terminal", ref: terminalRef, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "agent-terminal-header", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "terminal-dots", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "dot red" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "dot yellow" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "dot green" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "terminal-title", children: "Agent Conversation" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "agent-terminal-body", children: [
          messages.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "terminal-empty", children: [
            currentStatus === "QUEUED" ? "Waiting for agent to start..." : currentStatus === "RUNNING" ? "Agent is processing..." : "No conversation data available.",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "cursor-blink", children: "▋" })
          ] }) : messages.map((msg, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `terminal-message ${msg.type}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "terminal-prompt", children: msg.type === "user_message" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "prompt-user", children: "You :>" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "prompt-agent", children: "Cloud Agent :>" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "terminal-text", children: msg.text })
              ]
            },
            msg.id || index
          )),
          currentStatus === "RUNNING" && messages.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "terminal-cursor", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "prompt-agent", children: "Cloud Agent :>" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "cursor-blink", children: "▋" })
          ] })
        ] })
      ] }),
      canSendFollowup && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "agent-review-actions", children: [
        confirmAction === "validate" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "validate-confirm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Mark as Done? This confirms the work is complete." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "validate-confirm-btns", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: "btn btn-secondary btn-sm",
                onClick: () => setConfirmAction(null),
                disabled: isValidating,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: "btn btn-primary btn-sm",
                onClick: handleValidate,
                disabled: isValidating,
                children: isValidating ? "Validating..." : "Confirm"
              }
            )
          ] })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "validate-btn",
            onClick: () => setConfirmAction("validate"),
            disabled: isValidating,
            children: isValidating ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "agent-spinner-small" }),
              "Validating..."
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "w-4 h-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20 6L9 17l-5-5" }) }),
              "Validate & Complete"
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "agent-followup", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "followup-label", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "📝 Request Changes" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "followup-hint", children: "Send feedback to continue AI work" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "followup-input-container", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                className: "followup-input",
                value: followupText,
                onChange: (e) => setFollowupText(e.target.value),
                placeholder: "Please also add unit tests for the translation changes...",
                rows: 3,
                disabled: isSendingFollowup,
                onKeyDown: (e) => {
                  if (e.key === "Enter" && !e.shiftKey && followupText.trim()) {
                    e.preventDefault();
                    handleSendFollowup();
                  }
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: "followup-btn",
                onClick: handleSendFollowup,
                disabled: !followupText.trim() || isSendingFollowup,
                children: isSendingFollowup ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "agent-spinner-small" }),
                  "Sending..."
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "w-4 h-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M22 2L11 13" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M22 2l-7 20-4-9-9-4 20-7z" })
                  ] }),
                  "Send & Queue"
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "followup-hint-enter", children: "Press Enter to send, Shift+Enter for new line" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "agent-meta", children: [
        ((_d = status == null ? void 0 : status.source) == null ? void 0 : _d.repository) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "agent-meta-item", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "meta-label", children: "Repository:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: `https://${status.source.repository}`,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "meta-link",
              children: status.source.repository.replace("github.com/", "")
            }
          )
        ] }),
        ((_e = status == null ? void 0 : status.source) == null ? void 0 : _e.ref) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "agent-meta-item", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "meta-label", children: "Source Branch:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: status.source.ref })
        ] }),
        (status == null ? void 0 : status.createdAt) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "agent-meta-item", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "meta-label", children: "Started:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: new Date(status.createdAt).toLocaleString() })
        ] })
      ] })
    ] })
  ] });
}
function showToast$1(message, type = "success") {
  if (typeof window !== "undefined" && window.showToast) {
    window.showToast(message, type);
  }
}
const statusLabels = {
  BACKLOG: "Backlog",
  TODO: "To Do",
  HANDLE: "Handle (AI Queue)",
  AI_PROCESSING: "AI Processing",
  TO_REVIEW: "To Review",
  DONE: "Done",
  CANCELLED: "Cancelled"
};
function TicketDetailModal({
  ticket,
  projectId,
  onClose,
  onUpdate
}) {
  const [isEditing, setIsEditing] = reactExports.useState(false);
  const [title, setTitle] = reactExports.useState(ticket.title);
  const [description, setDescription] = reactExports.useState(ticket.description || "");
  const [priority, setPriority] = reactExports.useState(ticket.priority);
  const [status, setStatus] = reactExports.useState(ticket.status);
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const [localAgentStatus, setLocalAgentStatus] = reactExports.useState(null);
  const [confirmAction, setConfirmAction] = reactExports.useState(null);
  const handleAgentStatusChange = reactExports.useCallback((newStatus) => {
    setLocalAgentStatus(newStatus);
    if (newStatus === "FINISHED" && ticket.status === "AI_PROCESSING") {
      onUpdate({ ...ticket, status: "TO_REVIEW" });
    } else if (newStatus === "ERROR" && ticket.status === "AI_PROCESSING") {
      onUpdate({ ...ticket, status: "TODO" });
    }
  }, [ticket, onUpdate]);
  const handleSave = reactExports.useCallback(async () => {
    if (!title.trim()) {
      setError("Title is required");
      return;
    }
    setIsSubmitting(true);
    setError("");
    try {
      const csrfToken = getCsrfToken$1();
      const response = await fetch(`/api/tickets/${projectId}/${ticket.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrfToken
        },
        body: JSON.stringify({
          title: title.trim(),
          description: description.trim(),
          priority,
          status
        })
      });
      if (!response.ok) {
        throw new Error("Failed to update ticket");
      }
      const updatedTicket = await response.json();
      onUpdate(updatedTicket);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update ticket");
    } finally {
      setIsSubmitting(false);
    }
  }, [projectId, ticket.id, title, description, priority, status, onUpdate]);
  const handleDelete = reactExports.useCallback(async () => {
    setIsSubmitting(true);
    try {
      const csrfToken = getCsrfToken$1();
      const response = await fetch(`/api/tickets/${projectId}/${ticket.id}`, {
        method: "DELETE",
        headers: {
          "X-CSRF-Token": csrfToken
        }
      });
      if (!response.ok) {
        throw new Error("Failed to delete ticket");
      }
      showToast$1(`Ticket "${ticket.title}" deleted successfully`, "success");
      onUpdate({ ...ticket, status: "CANCELLED" });
      onClose();
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : "Failed to delete ticket";
      setError(errorMsg);
      showToast$1(errorMsg, "error");
    } finally {
      setIsSubmitting(false);
      setConfirmAction(null);
    }
  }, [projectId, ticket, onUpdate, onClose]);
  const handleArchive = reactExports.useCallback(async () => {
    setIsSubmitting(true);
    try {
      const csrfToken = getCsrfToken$1();
      const response = await fetch(`/api/tickets/${ticket.id}/archive`, {
        method: "POST",
        headers: {
          "X-CSRF-Token": csrfToken
        }
      });
      if (!response.ok) {
        throw new Error("Failed to archive ticket");
      }
      showToast$1(`Ticket "${ticket.title}" archived`, "success");
      onUpdate({ ...ticket, isArchived: true });
      onClose();
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : "Failed to archive ticket";
      setError(errorMsg);
      showToast$1(errorMsg, "error");
    } finally {
      setIsSubmitting(false);
      setConfirmAction(null);
    }
  }, [ticket, onUpdate, onClose]);
  const handleKeyDown = reactExports.useCallback(
    (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );
  const isProcessing = ticket.status === "HANDLE" || ticket.status === "AI_PROCESSING";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "modal-overlay",
      onClick: onClose,
      onKeyDown: handleKeyDown,
      role: "dialog",
      "aria-modal": "true",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "modal-content modal-lg",
          onClick: (e) => e.stopPropagation(),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-header", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                isEditing ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    className: "form-input text-lg font-semibold",
                    value: title,
                    onChange: (e) => setTitle(e.target.value),
                    autoFocus: true
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold", children: ticket.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `status-badge status-${ticket.status.toLowerCase()}`, children: statusLabels[ticket.status] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
                    "#",
                    ticket.id.slice(-4)
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  className: "modal-close",
                  onClick: onClose,
                  "aria-label": "Close modal",
                  children: "×"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-body", children: [
              error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 p-3 text-sm rounded-md bg-destructive/10 text-destructive border border-destructive/20", children: error }),
              ticket.agentId && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                AgentStatusPanel,
                {
                  agentId: ticket.agentId,
                  ticketId: ticket.id,
                  ticketTitle: ticket.title,
                  ticketStatus: ticket.status,
                  onStatusChange: handleAgentStatusChange,
                  onFollowupSent: () => {
                    onUpdate({ ...ticket, status: "AI_PROCESSING" });
                  },
                  onValidate: () => {
                    onUpdate({ ...ticket, status: "DONE" });
                    onClose();
                  }
                }
              ) }),
              isProcessing && !ticket.agentId && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 p-4 rounded-md bg-status-processing/10 border border-status-processing/20", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-status-processing", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ai-spinner" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: ticket.status === "HANDLE" ? "Queued for AI Processing" : "AI is working on this ticket..." })
                ] }),
                ticket.status === "AI_PROCESSING" && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "The Cursor Agent is implementing this task. Do not modify while processing." })
              ] }),
              ticket.prLink && !ticket.agentId && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 p-4 rounded-md bg-status-success/10 border border-status-success/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-status-success", children: "Pull Request Ready" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: ticket.prLink,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "btn btn-primary h-8 px-3 text-sm",
                    children: "View PR →"
                  }
                )
              ] }) }),
              ticket.aiSummary && !ticket.agentId && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 p-4 rounded-md bg-muted", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium mb-2", children: "AI Summary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: ticket.aiSummary })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "form-label", children: "Description" }),
                isEditing ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "textarea",
                  {
                    className: "form-input",
                    value: description,
                    onChange: (e) => setDescription(e.target.value),
                    rows: 6,
                    placeholder: "Add task details, requirements, acceptance criteria..."
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 rounded-md bg-muted min-h-[100px] text-sm whitespace-pre-wrap", children: ticket.description || /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "No description" }) })
              ] }),
              isEditing && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "form-label", children: "Priority" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "select",
                    {
                      className: "form-input",
                      value: priority,
                      onChange: (e) => setPriority(e.target.value),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "LOW", children: "Low" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "MEDIUM", children: "Medium" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "HIGH", children: "High" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "URGENT", children: "Urgent" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "form-label", children: "Status" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "select",
                    {
                      className: "form-input",
                      value: status,
                      onChange: (e) => setStatus(e.target.value),
                      disabled: isProcessing,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "BACKLOG", children: "Backlog" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "TODO", children: "To Do" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "HANDLE", children: "Handle (AI)" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "TO_REVIEW", children: "To Review" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "DONE", children: "Done" })
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 pt-4 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Created:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2", children: new Date(ticket.createdAt).toLocaleDateString() })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Updated:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2", children: new Date(ticket.updatedAt).toLocaleDateString() })
                ] }),
                ticket.assignee && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Assignee:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2", children: ticket.assignee.name })
                ] }),
                ticket.createdBy && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Created by:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2", children: ticket.createdBy.name })
                ] })
              ] }) })
            ] }),
            confirmAction && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "confirm-dialog", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "confirm-dialog-content", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "confirm-dialog-message", children: confirmAction === "delete" ? `Are you sure you want to delete "${ticket.title}"? This action cannot be undone.` : `Archive "${ticket.title}"? It will be moved to the Archive page.` }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "confirm-dialog-actions", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    className: "btn btn-secondary",
                    onClick: () => setConfirmAction(null),
                    disabled: isSubmitting,
                    children: "Cancel"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    className: `btn ${confirmAction === "delete" ? "btn-destructive" : "btn-primary"}`,
                    onClick: confirmAction === "delete" ? handleDelete : handleArchive,
                    disabled: isSubmitting,
                    children: isSubmitting ? "Processing..." : confirmAction === "delete" ? "Delete" : "Archive"
                  }
                )
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "modal-actions", children: isEditing ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: "btn btn-destructive",
                  onClick: () => setConfirmAction("delete"),
                  disabled: isSubmitting || !!confirmAction,
                  title: "Permanently delete this ticket",
                  children: "Delete"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  className: "btn btn-secondary",
                  onClick: () => setConfirmAction("archive"),
                  disabled: isSubmitting || !!confirmAction,
                  title: "Archive this ticket",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "w-4 h-4 mr-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3.26 8.26 8 3l4 4" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "3", y: "10", width: "18", height: "12", rx: "2" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M10 15h4" })
                    ] }),
                    "Archive"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: "btn btn-secondary",
                  onClick: () => {
                    setIsEditing(false);
                    setTitle(ticket.title);
                    setDescription(ticket.description || "");
                    setPriority(ticket.priority);
                    setStatus(ticket.status);
                  },
                  disabled: isSubmitting,
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: "btn btn-primary",
                  onClick: handleSave,
                  disabled: isSubmitting,
                  children: isSubmitting ? "Saving..." : "Save Changes"
                }
              )
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: "btn btn-secondary",
                  onClick: onClose,
                  children: "Close"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: "btn btn-primary",
                  onClick: () => setIsEditing(true),
                  disabled: isProcessing,
                  children: "Edit"
                }
              )
            ] }) })
          ]
        }
      )
    }
  );
}
function getCsrfToken$1() {
  const meta = document.querySelector('meta[name="csrf-token"]');
  return (meta == null ? void 0 : meta.getAttribute("content")) || "";
}
const WS_EVENTS = {
  JOIN_PROJECT: "project:join",
  LEAVE_PROJECT: "project:leave",
  TICKET_CREATED: "ticket:created",
  TICKET_UPDATED: "ticket:updated",
  TICKET_DELETED: "ticket:deleted",
  TICKET_MOVED: "ticket:moved",
  BOARD_REFRESH: "board:refresh"
};
function useWebSocket({
  projectId,
  onTicketCreated,
  onTicketUpdated,
  onTicketDeleted,
  onTicketMoved,
  onBoardRefresh
}) {
  const socketRef = reactExports.useRef(null);
  const isConnectedRef = reactExports.useRef(false);
  const callbacksRef = reactExports.useRef({
    onTicketCreated,
    onTicketUpdated,
    onTicketDeleted,
    onTicketMoved,
    onBoardRefresh
  });
  reactExports.useEffect(() => {
    callbacksRef.current = {
      onTicketCreated,
      onTicketUpdated,
      onTicketDeleted,
      onTicketMoved,
      onBoardRefresh
    };
  }, [onTicketCreated, onTicketUpdated, onTicketDeleted, onTicketMoved, onBoardRefresh]);
  reactExports.useEffect(() => {
    if (!projectId) return;
    const socket = lookup({
      transports: ["websocket", "polling"],
      reconnectionAttempts: 5,
      reconnectionDelay: 1e3
    });
    socketRef.current = socket;
    socket.on("connect", () => {
      console.log("[WebSocket] Connected");
      isConnectedRef.current = true;
      socket.emit(WS_EVENTS.JOIN_PROJECT, projectId);
    });
    socket.on("disconnect", (reason) => {
      console.log("[WebSocket] Disconnected:", reason);
      isConnectedRef.current = false;
    });
    socket.on("connect_error", (error) => {
      console.error("[WebSocket] Connection error:", error);
    });
    socket.on(WS_EVENTS.TICKET_CREATED, (ticket) => {
      var _a, _b;
      console.log("[WebSocket] Ticket created:", ticket.id);
      (_b = (_a = callbacksRef.current).onTicketCreated) == null ? void 0 : _b.call(_a, ticket);
    });
    socket.on(WS_EVENTS.TICKET_UPDATED, (ticket) => {
      var _a, _b;
      console.log("[WebSocket] Ticket updated:", ticket.id);
      (_b = (_a = callbacksRef.current).onTicketUpdated) == null ? void 0 : _b.call(_a, ticket);
    });
    socket.on(WS_EVENTS.TICKET_DELETED, (data) => {
      var _a, _b;
      console.log("[WebSocket] Ticket deleted:", data.id);
      (_b = (_a = callbacksRef.current).onTicketDeleted) == null ? void 0 : _b.call(_a, data);
    });
    socket.on(WS_EVENTS.TICKET_MOVED, (data) => {
      var _a, _b;
      console.log("[WebSocket] Ticket moved:", data.id, data.fromStatus, "->", data.toStatus);
      (_b = (_a = callbacksRef.current).onTicketMoved) == null ? void 0 : _b.call(_a, data);
    });
    socket.on(WS_EVENTS.BOARD_REFRESH, () => {
      var _a, _b;
      console.log("[WebSocket] Board refresh requested");
      (_b = (_a = callbacksRef.current).onBoardRefresh) == null ? void 0 : _b.call(_a);
    });
    return () => {
      if (socket.connected) {
        socket.emit(WS_EVENTS.LEAVE_PROJECT, projectId);
      }
      socket.disconnect();
      socketRef.current = null;
      isConnectedRef.current = false;
    };
  }, [projectId]);
  const isConnected = reactExports.useCallback(() => {
    return isConnectedRef.current;
  }, []);
  return { isConnected };
}
const COLUMNS = [
  { id: "BACKLOG", title: "Backlog", icon: "📋" },
  { id: "TODO", title: "To Do", icon: "📝" },
  { id: "HANDLE", title: "Handle", icon: "🤖" },
  { id: "AI_PROCESSING", title: "AI Processing", icon: "⚡" },
  { id: "TO_REVIEW", title: "To Review", icon: "👀" },
  { id: "DONE", title: "Done", icon: "✅" }
];
function KanbanBoard() {
  const [boardState, setBoardState] = reactExports.useState(null);
  const [activeTicket, setActiveTicket] = reactExports.useState(null);
  const [selectedTicket, setSelectedTicket] = reactExports.useState(null);
  const [isNewTicketOpen, setIsNewTicketOpen] = reactExports.useState(false);
  const [archivedCount, setArchivedCount] = reactExports.useState(0);
  const [mobileActiveColumn, setMobileActiveColumn] = reactExports.useState("BACKLOG");
  const isDraggingRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    const stateEl = document.getElementById("board-state");
    if (stateEl == null ? void 0 : stateEl.textContent) {
      try {
        const state = JSON.parse(stateEl.textContent);
        setBoardState(state);
        setArchivedCount(state.archivedCount || 0);
      } catch (e) {
        console.error("Failed to parse board state:", e);
      }
    }
    const newTicketBtn = document.getElementById("new-ticket-btn");
    if (newTicketBtn) {
      newTicketBtn.addEventListener("click", () => setIsNewTicketOpen(true));
    }
    document.querySelectorAll(".tab-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const column = e.target.dataset.column;
        if (column) {
          setMobileActiveColumn(column);
          document.querySelectorAll(".tab-btn").forEach((b) => {
            b.classList.remove("bg-muted");
            b.classList.add("hover:bg-muted");
          });
          e.target.classList.add("bg-muted");
          e.target.classList.remove("hover:bg-muted");
        }
      });
    });
    return () => {
      if (newTicketBtn) {
        newTicketBtn.removeEventListener("click", () => setIsNewTicketOpen(true));
      }
    };
  }, []);
  const recentlyCreatedRef = reactExports.useRef(/* @__PURE__ */ new Set());
  const recentlyMovedRef = reactExports.useRef(/* @__PURE__ */ new Set());
  const recentlyDeletedRef = reactExports.useRef(/* @__PURE__ */ new Set());
  const recentlyUpdatedRef = reactExports.useRef(/* @__PURE__ */ new Set());
  const handleWsTicketCreated = reactExports.useCallback((ticket) => {
    if (isDraggingRef.current) return;
    let wasAdded = false;
    setBoardState((prev) => {
      if (!prev) return prev;
      if (prev.tickets.some((t) => t.id === ticket.id)) return prev;
      wasAdded = true;
      return {
        ...prev,
        tickets: [...prev.tickets, ticket]
      };
    });
    if (wasAdded && !recentlyCreatedRef.current.has(ticket.id)) {
      showToast(`New ticket: ${ticket.title}`, "success");
    }
    recentlyCreatedRef.current.delete(ticket.id);
  }, []);
  const handleWsTicketUpdated = reactExports.useCallback((ticket) => {
    if (isDraggingRef.current) return;
    if (recentlyUpdatedRef.current.has(ticket.id)) {
      recentlyUpdatedRef.current.delete(ticket.id);
      return;
    }
    setBoardState((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        tickets: prev.tickets.map(
          (t) => t.id === ticket.id ? { ...t, ...ticket } : t
        )
      };
    });
  }, []);
  const handleWsTicketDeleted = reactExports.useCallback((data) => {
    if (isDraggingRef.current) return;
    if (recentlyDeletedRef.current.has(data.id)) {
      recentlyDeletedRef.current.delete(data.id);
      return;
    }
    setBoardState((prev) => {
      if (!prev) return prev;
      const exists = prev.tickets.some((t) => t.id === data.id);
      if (!exists) return prev;
      return {
        ...prev,
        tickets: prev.tickets.filter((t) => t.id !== data.id)
      };
    });
    showToast("A ticket was deleted", "warning");
  }, []);
  const handleWsTicketMoved = reactExports.useCallback((data) => {
    if (isDraggingRef.current) return;
    if (recentlyMovedRef.current.has(data.id)) {
      recentlyMovedRef.current.delete(data.id);
      return;
    }
    setBoardState((prev) => {
      if (!prev) return prev;
      const ticket = prev.tickets.find((t) => t.id === data.id);
      if (!ticket || ticket.status === data.toStatus) return prev;
      return {
        ...prev,
        tickets: prev.tickets.map(
          (t) => t.id === data.id ? { ...t, status: data.toStatus, position: data.position } : t
        )
      };
    });
    showToast(`Ticket moved to ${data.toStatus.replace("_", " ")}`, "success");
  }, []);
  const handleWsBoardRefresh = reactExports.useCallback(async () => {
    if (!(boardState == null ? void 0 : boardState.projectId) || isDraggingRef.current) return;
    try {
      const response = await fetch(`/project/${boardState.projectId}/board/state`);
      if (response.ok) {
        const newState = await response.json();
        setBoardState(newState);
      }
    } catch (error) {
      console.error("Failed to refresh board:", error);
    }
  }, [boardState == null ? void 0 : boardState.projectId]);
  useWebSocket({
    projectId: (boardState == null ? void 0 : boardState.projectId) || null,
    onTicketCreated: handleWsTicketCreated,
    onTicketUpdated: handleWsTicketUpdated,
    onTicketDeleted: handleWsTicketDeleted,
    onTicketMoved: handleWsTicketMoved,
    onBoardRefresh: handleWsBoardRefresh
  });
  reactExports.useEffect(() => {
    if (!(boardState == null ? void 0 : boardState.projectId)) return;
    const pollInterval = setInterval(async () => {
      if (isDraggingRef.current) return;
      try {
        const response = await fetch(`/project/${boardState.projectId}/board/state`);
        if (!response.ok) return;
        const newState = await response.json();
        const hasChanges = newState.tickets.length !== boardState.tickets.length || newState.tickets.some((newTicket) => {
          const existingTicket = boardState.tickets.find((t) => t.id === newTicket.id);
          return !existingTicket || existingTicket.status !== newTicket.status || existingTicket.agentStatus !== newTicket.agentStatus || existingTicket.prLink !== newTicket.prLink;
        });
        if (hasChanges) {
          setBoardState(newState);
        }
      } catch (error) {
        console.debug("Fallback sync failed:", error);
      }
    }, 1e4);
    return () => clearInterval(pollInterval);
  }, [boardState == null ? void 0 : boardState.projectId, boardState == null ? void 0 : boardState.tickets]);
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 8 }
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );
  const handleDragStart = reactExports.useCallback(
    (event) => {
      isDraggingRef.current = true;
      const ticketId = event.active.id;
      const ticket = boardState == null ? void 0 : boardState.tickets.find((t) => t.id === ticketId);
      if (ticket) {
        setActiveTicket(ticket);
      }
    },
    [boardState]
  );
  const handleDragOver = reactExports.useCallback((_event) => {
  }, []);
  const handleDragEnd = reactExports.useCallback(
    async (event) => {
      const { active, over } = event;
      setActiveTicket(null);
      isDraggingRef.current = false;
      if (!over || !boardState) return;
      const ticketId = active.id;
      const newStatus = over.id;
      const ticket = boardState.tickets.find((t) => t.id === ticketId);
      if (!ticket || ticket.status === newStatus) return;
      recentlyMovedRef.current.add(ticketId);
      setTimeout(() => recentlyMovedRef.current.delete(ticketId), 5e3);
      setBoardState((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          tickets: prev.tickets.map(
            (t) => t.id === ticketId ? { ...t, status: newStatus } : t
          )
        };
      });
      if (newStatus === "HANDLE") {
        showToast(`Ticket #${ticket.id.slice(-4)} dispatched to Cursor Agent`, "warning");
      }
      try {
        const csrfToken = getCsrfToken();
        const response = await fetch(
          `/api/tickets/${boardState.projectId}/${ticketId}/status`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              "X-CSRF-Token": csrfToken
            },
            body: JSON.stringify({ status: newStatus })
          }
        );
        if (!response.ok) {
          throw new Error("Failed to update ticket status");
        }
        if (newStatus === "HANDLE") {
          showToast("AI agent started processing", "success");
        }
      } catch (error) {
        console.error("Failed to update ticket:", error);
        showToast("Failed to update ticket", "error");
        setBoardState((prev) => {
          if (!prev) return prev;
          return {
            ...prev,
            tickets: prev.tickets.map(
              (t) => t.id === ticketId ? { ...t, status: ticket.status } : t
            )
          };
        });
      }
    },
    [boardState]
  );
  const handleTicketClick = reactExports.useCallback((ticket) => {
    setSelectedTicket(ticket);
  }, []);
  const handleTicketUpdate = reactExports.useCallback((updatedTicket) => {
    recentlyUpdatedRef.current.add(updatedTicket.id);
    setTimeout(() => recentlyUpdatedRef.current.delete(updatedTicket.id), 5e3);
    setBoardState((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        tickets: prev.tickets.map(
          (t) => t.id === updatedTicket.id ? updatedTicket : t
        )
      };
    });
    setSelectedTicket(null);
  }, []);
  const handleNewTicket = reactExports.useCallback((newTicket) => {
    recentlyCreatedRef.current.add(newTicket.id);
    setBoardState((prev) => {
      if (!prev) return prev;
      const existingIndex = prev.tickets.findIndex((t) => t.id === newTicket.id);
      if (existingIndex >= 0) {
        const updatedTickets = [...prev.tickets];
        updatedTickets[existingIndex] = newTicket;
        return {
          ...prev,
          tickets: updatedTickets
        };
      }
      return {
        ...prev,
        tickets: [...prev.tickets, newTicket]
      };
    });
    setIsNewTicketOpen(false);
    showToast("Ticket created successfully", "success");
    setTimeout(() => recentlyCreatedRef.current.delete(newTicket.id), 5e3);
  }, []);
  const handleQuickArchive = reactExports.useCallback(async (ticket) => {
    if (!boardState) return;
    recentlyUpdatedRef.current.add(ticket.id);
    setTimeout(() => recentlyUpdatedRef.current.delete(ticket.id), 5e3);
    try {
      const response = await fetch(`/api/tickets/${ticket.id}/archive`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": getCsrfToken()
        }
      });
      if (!response.ok) {
        throw new Error("Failed to archive ticket");
      }
      setBoardState((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          tickets: prev.tickets.filter((t) => t.id !== ticket.id)
        };
      });
      setArchivedCount((prev) => prev + 1);
      showToast(`"${ticket.title}" archived`, "success");
    } catch (error) {
      console.error("Failed to archive ticket:", error);
      showToast("Failed to archive ticket", "error");
    }
  }, [boardState]);
  const [deleteConfirmTicket, setDeleteConfirmTicket] = reactExports.useState(null);
  const handleQuickDelete = reactExports.useCallback((ticket) => {
    setDeleteConfirmTicket(ticket);
  }, []);
  const confirmDelete = reactExports.useCallback(async () => {
    if (!boardState || !deleteConfirmTicket) return;
    recentlyDeletedRef.current.add(deleteConfirmTicket.id);
    setTimeout(() => recentlyDeletedRef.current.delete(deleteConfirmTicket.id), 5e3);
    try {
      const response = await fetch(`/api/tickets/${boardState.projectId}/${deleteConfirmTicket.id}`, {
        method: "DELETE",
        headers: {
          "X-CSRF-Token": getCsrfToken()
        }
      });
      if (!response.ok) {
        throw new Error("Failed to delete ticket");
      }
      setBoardState((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          tickets: prev.tickets.filter((t) => t.id !== deleteConfirmTicket.id)
        };
      });
      showToast(`"${deleteConfirmTicket.title}" deleted`, "success");
    } catch (error) {
      console.error("Failed to delete ticket:", error);
      showToast("Failed to delete ticket", "error");
    } finally {
      setDeleteConfirmTicket(null);
    }
  }, [boardState, deleteConfirmTicket]);
  const handleTicketUpdateWithArchive = reactExports.useCallback((updatedTicket) => {
    if (updatedTicket.isArchived) {
      setBoardState((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          tickets: prev.tickets.filter((t) => t.id !== updatedTicket.id)
        };
      });
      setArchivedCount((prev) => prev + 1);
      setSelectedTicket(null);
    } else {
      handleTicketUpdate(updatedTicket);
    }
  }, [handleTicketUpdate]);
  reactExports.useEffect(() => {
    const archiveCountEl = document.getElementById("archive-count");
    if (archiveCountEl) {
      archiveCountEl.textContent = String(archivedCount);
      archiveCountEl.classList.toggle("hidden", archivedCount === 0);
    }
  }, [archivedCount]);
  if (!boardState) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ai-spinner" }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      DndContext,
      {
        sensors,
        collisionDetection: closestCorners,
        onDragStart: handleDragStart,
        onDragOver: handleDragOver,
        onDragEnd: handleDragEnd,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "kanban-container", children: COLUMNS.map((column) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Column,
            {
              id: column.id,
              title: column.title,
              icon: column.icon,
              tickets: boardState.tickets.filter((t) => t.status === column.id),
              isActive: mobileActiveColumn === column.id,
              onTicketClick: handleTicketClick,
              onArchive: column.id === "DONE" ? handleQuickArchive : void 0,
              onDelete: column.id !== "HANDLE" && column.id !== "AI_PROCESSING" ? handleQuickDelete : void 0
            },
            column.id
          )) }),
          deleteConfirmTicket && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "modal-overlay", onClick: () => setDeleteConfirmTicket(null), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "delete-confirm-modal", onClick: (e) => e.stopPropagation(), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Delete Ticket?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              'Are you sure you want to delete "',
              deleteConfirmTicket.title,
              '"?'
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "This action cannot be undone." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "delete-confirm-actions", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-secondary", onClick: () => setDeleteConfirmTicket(null), children: "Cancel" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-destructive", onClick: confirmDelete, children: "Delete" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DragOverlay, { children: activeTicket ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            TicketCard,
            {
              ticket: activeTicket,
              isDragging: true,
              onClick: () => {
              }
            }
          ) : null })
        ]
      }
    ),
    isNewTicketOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
      NewTicketModal,
      {
        projectId: boardState.projectId,
        projectName: boardState.projectName,
        branchPresets: boardState.branchPresets || [],
        defaultBranch: boardState.defaultBranch || "main",
        members: boardState.members || [],
        onClose: () => setIsNewTicketOpen(false),
        onSubmit: handleNewTicket
      }
    ),
    selectedTicket && /* @__PURE__ */ jsxRuntimeExports.jsx(
      TicketDetailModal,
      {
        ticket: selectedTicket,
        projectId: boardState.projectId,
        onClose: () => setSelectedTicket(null),
        onUpdate: handleTicketUpdateWithArchive
      }
    )
  ] });
}
function getCsrfToken() {
  const meta = document.querySelector('meta[name="csrf-token"]');
  return (meta == null ? void 0 : meta.getAttribute("content")) || "";
}
function showToast(message, type = "success") {
  if (typeof window !== "undefined" && window.showToast) {
    window.showToast(message, type);
  }
}
function mountKanbanBoard() {
  const container = document.getElementById("kanban-board");
  if (!container) {
    console.warn("Kanban board container not found");
    return;
  }
  const root = client.createRoot(container);
  root.render(
    /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(KanbanBoard, {}) })
  );
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountKanbanBoard);
} else {
  mountKanbanBoard();
}
