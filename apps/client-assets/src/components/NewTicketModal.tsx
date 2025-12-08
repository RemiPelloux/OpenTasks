/**
 * New Ticket Modal Component
 * Jira-like ticket creation with required description template
 */

import { useState, useCallback, useRef, useEffect } from 'react';
import type { Ticket, Priority, ColumnId, BranchPreset, User } from '../types';

interface NewTicketModalProps {
  projectId: string;
  projectName?: string;
  branchPresets: BranchPreset[];
  defaultBranch: string;
  members?: User[];
  onClose: () => void;
  onSubmit: (ticket: Ticket) => void;
}

const PRIORITIES: { value: Priority; label: string; icon: string; color: string }[] = [
  { value: 'LOW', label: 'Low', icon: '↓', color: 'text-slate-400' },
  { value: 'MEDIUM', label: 'Medium', icon: '→', color: 'text-blue-400' },
  { value: 'HIGH', label: 'High', icon: '↑', color: 'text-amber-400' },
  { value: 'URGENT', label: 'Urgent', icon: '⚡', color: 'text-red-400' },
];

interface ModelInfo {
  value: string;
  label: string;
  description: string;
}

const MODEL_INFO: Record<string, ModelInfo> = {
  'auto': { value: 'auto', label: 'Auto (Recommended)', description: 'Let Cursor choose the best model' },
  'claude-4-sonnet-thinking': { value: 'claude-4-sonnet-thinking', label: 'Claude 4 Sonnet', description: 'Fast & capable' },
  'claude-4-opus-thinking': { value: 'claude-4-opus-thinking', label: 'Claude 4 Opus', description: 'Most powerful' },
  'o3': { value: 'o3', label: 'O3', description: 'OpenAI reasoning model' },
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

export function NewTicketModal({
  projectId,
  projectName,
  branchPresets,
  defaultBranch,
  members = [],
  onClose,
  onSubmit,
}: NewTicketModalProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState(DESCRIPTION_TEMPLATE);
  const [priority, setPriority] = useState<Priority>('MEDIUM');
  const [targetBranch, setTargetBranch] = useState(defaultBranch);
  const [assigneeId, setAssigneeId] = useState<string>('');
  const [labels, setLabels] = useState<string[]>([]);
  const [labelInput, setLabelInput] = useState('');
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  
  // AI Model selection
  const [aiModel, setAiModel] = useState<string>('auto');
  const [availableModels, setAvailableModels] = useState<string[]>(['auto']);
  const [modelsLoading, setModelsLoading] = useState(true);
  
  const titleRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Focus title on mount
  useEffect(() => {
    titleRef.current?.focus();
  }, []);

  // Fetch available models
  useEffect(() => {
    const fetchModels = async () => {
      try {
        const csrfToken = getCsrfToken();
        const response = await fetch('/api/cursor/models', {
          headers: { 'X-CSRF-Token': csrfToken },
        });
        
        if (response.ok) {
          const data = await response.json();
          setAvailableModels(data.models || ['auto']);
        }
      } catch (err) {
        console.error('Failed to fetch models:', err);
      } finally {
        setModelsLoading(false);
      }
    };

    fetchModels();
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
        e.preventDefault();
        handleSubmit(e as unknown as React.FormEvent);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose, title, description, priority, targetBranch]);

  const validateDescription = (desc: string): boolean => {
    // Check if description has meaningful content beyond the template
    const stripped = desc
      .replace(/##\s*What needs to be done\s*/gi, '')
      .replace(/##\s*Acceptance Criteria\s*/gi, '')
      .replace(/##\s*Technical Details\s*/gi, '')
      .replace(/##\s*Additional Context\s*/gi, '')
      .replace(/Describe the task clearly.*\?/gi, '')
      .replace(/Any specific implementation.*\?/gi, '')
      .replace(/Links, screenshots.*help\./gi, '')
      .replace(/-\s*\[\s*\]\s*Criterion \d+/gi, '')
      .replace(/\s+/g, ' ')
      .trim();
    
    return stripped.length >= 20;
  };

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setError('');

      if (!title.trim()) {
        setError('Title is required');
        titleRef.current?.focus();
        return;
      }

      if (!description.trim()) {
        setError('Description is required - the AI needs context to work!');
        return;
      }

      if (!validateDescription(description)) {
        setError('Please fill in the description template with actual task details. The AI needs this information to implement the feature correctly.');
        return;
      }

      setIsSubmitting(true);

      try {
        const csrfToken = getCsrfToken();
        const response = await fetch(`/api/tickets/${projectId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': csrfToken,
          },
          body: JSON.stringify({
            title: title.trim(),
            description: description.trim(),
            priority,
            status: 'BACKLOG' as ColumnId,
            targetBranch,
            assigneeId: assigneeId || undefined,
            labels,
            aiModel: aiModel !== 'auto' ? aiModel : undefined,
          }),
        });

        if (!response.ok) {
          const data = await response.json().catch(() => ({}));
          throw new Error(data.message || 'Failed to create ticket');
        }

        const newTicket = await response.json();
        onSubmit(newTicket);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to create ticket');
      } finally {
        setIsSubmitting(false);
      }
    },
    [projectId, title, description, priority, targetBranch, assigneeId, labels, onSubmit]
  );

  const handleAddLabel = useCallback(() => {
    const label = labelInput.trim().toLowerCase();
    if (label && !labels.includes(label)) {
      setLabels([...labels, label]);
      setLabelInput('');
    }
  }, [labelInput, labels]);

  const handleRemoveLabel = useCallback((label: string) => {
    setLabels(labels.filter(l => l !== label));
  }, [labels]);

  const handleLabelKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddLabel();
    }
  }, [handleAddLabel]);

  const descriptionHasContent = validateDescription(description);

  return (
    <div
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="new-ticket-title"
    >
      <div ref={modalRef} className="ticket-modal" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="ticket-modal-header">
          <div className="flex items-center gap-3">
            <div className="ticket-modal-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </div>
            <div>
              <h2 id="new-ticket-title">Create Ticket</h2>
              {projectName && (
                <p className="text-xs text-muted-foreground mt-0.5">
                  in {projectName}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground hidden sm:block">
              ⌘ + Enter to submit
            </span>
            <button
              className="ticket-modal-close"
              onClick={onClose}
              aria-label="Close modal"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="ticket-modal-form">
          {error && (
            <div className="ticket-error">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4M12 16h.01" />
              </svg>
              {error}
            </div>
          )}

          {/* Title */}
          <div className="ticket-field">
            <label className="ticket-label">
              Title <span className="text-red-400">*</span>
            </label>
            <input
              ref={titleRef}
              type="text"
              className="ticket-title-input"
              placeholder="Brief summary of the task"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          {/* Description - Required! */}
          <div className="ticket-field">
            <label className="ticket-label">
              Description <span className="text-red-400">*</span>
              <span className="text-muted-foreground font-normal ml-1 text-xs normal-case">
                — The AI uses this to implement the feature
              </span>
            </label>
            <textarea
              className={`ticket-description-input ${!descriptionHasContent ? 'ticket-description-warning' : ''}`}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={12}
              required
            />
            {!descriptionHasContent && (
              <p className="ticket-warning-hint">
                ⚠️ Fill in the template with actual task details
              </p>
            )}
          </div>

          {/* Metadata Grid */}
          <div className="ticket-meta-grid">
            {/* Priority */}
            <div className="ticket-field">
              <label className="ticket-label">Priority</label>
              <div className="ticket-priority-selector">
                {PRIORITIES.map((p) => (
                  <button
                    key={p.value}
                    type="button"
                    className={`ticket-priority-btn ${priority === p.value ? 'active' : ''} ${p.color}`}
                    onClick={() => setPriority(p.value)}
                    title={p.label}
                  >
                    <span className="ticket-priority-icon">{p.icon}</span>
                    <span className="ticket-priority-label">{p.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* AI Model Selection */}
            <div className="ticket-field">
              <label className="ticket-label">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="inline w-3.5 h-3.5 mr-1">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
                AI Model
              </label>
              {modelsLoading ? (
                <div className="ticket-model-loading">
                  <span className="ticket-spinner-small" />
                  Loading models...
                </div>
              ) : (
                <select
                  className="ticket-select"
                  value={aiModel}
                  onChange={(e) => setAiModel(e.target.value)}
                >
                  {availableModels.map((model) => {
                    const info = MODEL_INFO[model] || { 
                      value: model, 
                      label: model.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
                      description: ''
                    };
                    return (
                      <option key={model} value={model}>
                        {info.label}{info.description ? ` - ${info.description}` : ''}
                      </option>
                    );
                  })}
                </select>
              )}
            </div>

            {/* Branch Selection */}
            <div className="ticket-field">
              <label className="ticket-label">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="inline w-3.5 h-3.5 mr-1">
                  <line x1="6" x2="6" y1="3" y2="15" />
                  <circle cx="18" cy="6" r="3" />
                  <circle cx="6" cy="18" r="3" />
                  <path d="M18 9a9 9 0 0 1-9 9" />
                </svg>
                Target Branch
              </label>
              {branchPresets.length > 0 ? (
                <div className="ticket-branch-presets">
                  {branchPresets.map((preset) => (
                    <button
                      key={preset.branch}
                      type="button"
                      className={`ticket-branch-btn ${targetBranch === preset.branch ? 'active' : ''}`}
                      onClick={() => setTargetBranch(preset.branch)}
                    >
                      <span className="font-medium">{preset.name}</span>
                      <code>{preset.branch}</code>
                    </button>
                  ))}
                </div>
              ) : (
                <input
                  type="text"
                  className="ticket-input"
                  placeholder="main"
                  value={targetBranch}
                  onChange={(e) => setTargetBranch(e.target.value)}
                />
              )}
            </div>
          </div>

          {/* Advanced Options Toggle */}
          <button
            type="button"
            className="ticket-advanced-toggle"
            onClick={() => setShowAdvanced(!showAdvanced)}
          >
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              className={`w-4 h-4 transition-transform ${showAdvanced ? 'rotate-90' : ''}`}
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
            <span>More options</span>
          </button>

          {/* Advanced Options */}
          {showAdvanced && (
            <div className="ticket-advanced-section">
              {/* Assignee */}
              {members.length > 0 && (
                <div className="ticket-field">
                  <label className="ticket-label">Assignee</label>
                  <div className="ticket-assignee-selector">
                    <button
                      type="button"
                      className={`ticket-assignee-btn ${!assigneeId ? 'active' : ''}`}
                      onClick={() => setAssigneeId('')}
                    >
                      <div className="ticket-assignee-avatar unassigned">?</div>
                      <span>Unassigned</span>
                    </button>
                    {members.map((member) => (
                      <button
                        key={member.id}
                        type="button"
                        className={`ticket-assignee-btn ${assigneeId === member.id ? 'active' : ''}`}
                        onClick={() => setAssigneeId(member.id)}
                      >
                        <div className="ticket-assignee-avatar">
                          {member.avatarUrl ? (
                            <img src={member.avatarUrl} alt={member.name} />
                          ) : (
                            member.name.substring(0, 2).toUpperCase()
                          )}
                        </div>
                        <span>{member.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Labels */}
              <div className="ticket-field">
                <label className="ticket-label">Labels</label>
                <div className="ticket-labels-input">
                  <div className="ticket-labels-list">
                    {labels.map((label) => (
                      <span key={label} className="ticket-label-tag">
                        {label}
                        <button
                          type="button"
                          onClick={() => handleRemoveLabel(label)}
                          className="ticket-label-remove"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                  <input
                    type="text"
                    className="ticket-label-input"
                    placeholder="Add label..."
                    value={labelInput}
                    onChange={(e) => setLabelInput(e.target.value)}
                    onKeyDown={handleLabelKeyDown}
                    onBlur={handleAddLabel}
                  />
                </div>
                <p className="ticket-hint">Press Enter to add a label</p>
              </div>

              {/* Custom Branch (if presets exist) */}
              {branchPresets.length > 0 && (
                <div className="ticket-field">
                  <label className="ticket-label">Custom Branch</label>
                  <input
                    type="text"
                    className="ticket-input font-mono"
                    placeholder="Or enter a custom branch..."
                    value={targetBranch}
                    onChange={(e) => setTargetBranch(e.target.value)}
                  />
                </div>
              )}
            </div>
          )}

          {/* Actions */}
          <div className="ticket-modal-actions">
            <button
              type="button"
              className="ticket-btn-secondary"
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="ticket-btn-primary"
              disabled={isSubmitting || !title.trim() || !descriptionHasContent}
            >
              {isSubmitting ? (
                <>
                  <div className="ticket-spinner" />
                  Creating...
                </>
              ) : (
                <>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                  Create Ticket
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function getCsrfToken(): string {
  const meta = document.querySelector('meta[name="csrf-token"]');
  return meta?.getAttribute('content') || '';
}
