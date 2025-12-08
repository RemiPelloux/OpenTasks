/**
 * Agent Status Panel Component
 * Terminal-like view showing AI agent status and conversation
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import type { AgentStatusResponse, AgentMessage, AgentStatus } from '../types';

interface AgentStatusPanelProps {
  agentId: string;
  ticketId: string;
  ticketTitle: string;
  ticketStatus?: string;
  onStatusChange?: (status: AgentStatus) => void;
  onStop?: () => void;
  onFollowupSent?: () => void;
  onValidate?: () => void;
}

const STATUS_COLORS: Record<AgentStatus, string> = {
  QUEUED: 'text-amber-400',
  RUNNING: 'text-blue-400',
  FINISHED: 'text-emerald-400',
  ERROR: 'text-red-400',
  CANCELLED: 'text-slate-400',
};

const STATUS_ICONS: Record<AgentStatus, string> = {
  QUEUED: '⏳',
  RUNNING: '🔄',
  FINISHED: '✅',
  ERROR: '❌',
  CANCELLED: '🚫',
};

const STATUS_LABELS: Record<AgentStatus, string> = {
  QUEUED: 'Queued',
  RUNNING: 'Running',
  FINISHED: 'Completed',
  ERROR: 'Failed',
  CANCELLED: 'Cancelled',
};

export function AgentStatusPanel({ 
  agentId, 
  ticketId,
  ticketTitle, 
  ticketStatus,
  onStatusChange, 
  onStop,
  onFollowupSent,
  onValidate
}: AgentStatusPanelProps) {
  const [status, setStatus] = useState<AgentStatusResponse | null>(null);
  const [messages, setMessages] = useState<AgentMessage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(true);
  const [isStopping, setIsStopping] = useState(false);
  const [isValidating, setIsValidating] = useState(false);
  const [followupText, setFollowupText] = useState('');
  const [isSendingFollowup, setIsSendingFollowup] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const pollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Validate handler - mark ticket as Done
  const handleValidate = useCallback(async () => {
    if (isValidating) return;
    
    const confirmed = window.confirm('Mark this ticket as Done? This confirms the AI work is complete and accepted.');
    if (!confirmed) return;

    setIsValidating(true);
    try {
      const csrfToken = getCsrfToken();
      const response = await fetch(`/api/tickets/${ticketId}/validate`, {
        method: 'POST',
        headers: { 
          'X-CSRF-Token': csrfToken,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to validate ticket');
      }

      // Stop polling
      if (pollIntervalRef.current) {
        clearInterval(pollIntervalRef.current);
        pollIntervalRef.current = null;
      }

      // Notify parent
      if (onValidate) {
        onValidate();
      }
    } catch (err) {
      console.error('Validate error:', err);
      setError(err instanceof Error ? err.message : 'Failed to validate ticket');
    } finally {
      setIsValidating(false);
    }
  }, [ticketId, isValidating, onValidate]);

  // Emergency stop handler
  const handleStop = useCallback(async () => {
    if (isStopping) return;
    
    const confirmed = window.confirm('Are you sure you want to stop the AI agent? This cannot be undone.');
    if (!confirmed) return;

    setIsStopping(true);
    try {
      const csrfToken = getCsrfToken();
      const response = await fetch(`/api/cursor/agents/${agentId}/stop`, {
        method: 'POST',
        headers: { 
          'X-CSRF-Token': csrfToken,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to stop agent');
      }

      // Update local status
      setStatus(prev => prev ? { ...prev, status: 'CANCELLED' } : null);
      
      // Stop polling
      if (pollIntervalRef.current) {
        clearInterval(pollIntervalRef.current);
        pollIntervalRef.current = null;
      }

      // Notify parent
      if (onStatusChange) {
        onStatusChange('CANCELLED');
      }
      if (onStop) {
        onStop();
      }
    } catch (err) {
      console.error('Stop agent error:', err);
      setError(err instanceof Error ? err.message : 'Failed to stop agent');
    } finally {
      setIsStopping(false);
    }
  }, [agentId, isStopping, onStatusChange, onStop]);

  // Follow-up handler
  const handleSendFollowup = useCallback(async () => {
    if (!followupText.trim() || isSendingFollowup) return;

    setIsSendingFollowup(true);
    try {
      const csrfToken = getCsrfToken();
      const response = await fetch(`/api/cursor/agents/${agentId}/followup`, {
        method: 'POST',
        headers: { 
          'X-CSRF-Token': csrfToken,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          prompt: { text: followupText.trim() }
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to send follow-up');
      }

      // Clear input and add message locally
      setMessages(prev => [
        ...prev,
        {
          id: `local-${Date.now()}`,
          type: 'user_message',
          text: followupText.trim(),
        }
      ]);
      setFollowupText('');

      // Update status to running since agent will restart
      setStatus(prev => prev ? { ...prev, status: 'RUNNING' } : null);
      
      // Restart polling
      if (!pollIntervalRef.current) {
        pollIntervalRef.current = setInterval(() => {
          fetchStatus();
          fetchConversation();
        }, 3000);
      }

      if (onFollowupSent) {
        onFollowupSent();
      }
    } catch (err) {
      console.error('Follow-up error:', err);
      setError(err instanceof Error ? err.message : 'Failed to send follow-up');
    } finally {
      setIsSendingFollowup(false);
    }
  }, [agentId, followupText, isSendingFollowup, onFollowupSent]);

  const fetchStatus = useCallback(async () => {
    try {
      const csrfToken = getCsrfToken();
      const response = await fetch(`/api/cursor/agents/${agentId}/status`, {
        headers: { 'X-CSRF-Token': csrfToken },
      });

      if (!response.ok) {
        if (response.status === 404) {
          setError('Agent not found. It may have been deleted.');
          return;
        }
        throw new Error('Failed to fetch status');
      }

      const data: AgentStatusResponse = await response.json();
      setStatus(data);
      
      // Notify parent of status change
      if (onStatusChange && data.status) {
        onStatusChange(data.status);
      }

      // Stop polling if finished or error
      if (data.status === 'FINISHED' || data.status === 'ERROR' || data.status === 'CANCELLED') {
        if (pollIntervalRef.current) {
          clearInterval(pollIntervalRef.current);
          pollIntervalRef.current = null;
        }
      }
    } catch (err) {
      console.error('Status fetch error:', err);
      setError('Failed to fetch agent status');
    }
  }, [agentId, onStatusChange]);

  const fetchConversation = useCallback(async () => {
    try {
      const csrfToken = getCsrfToken();
      const response = await fetch(`/api/cursor/agents/${agentId}/conversation`, {
        headers: { 'X-CSRF-Token': csrfToken },
      });

      if (!response.ok) {
        if (response.status === 404) return; // Conversation may not exist yet
        throw new Error('Failed to fetch conversation');
      }

      const data = await response.json();
      if (data.messages && data.messages.length > 0) {
        setMessages(data.messages);
      }
      
      // Scroll to bottom on new messages
      if (terminalRef.current) {
        setTimeout(() => {
          if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
          }
        }, 100);
      }
    } catch (err) {
      console.error('Conversation fetch error:', err);
    }
  }, [agentId]);

  // Initial fetch and polling setup
  useEffect(() => {
    setIsLoading(true);
    setError(null);

    const fetchAll = async () => {
      await Promise.all([fetchStatus(), fetchConversation()]);
      setIsLoading(false);
    };

    fetchAll();

    // Poll every 3 seconds for live updates
    pollIntervalRef.current = setInterval(() => {
      fetchStatus();
      fetchConversation();
    }, 3000);

    return () => {
      if (pollIntervalRef.current) {
        clearInterval(pollIntervalRef.current);
      }
    };
  }, [agentId, fetchStatus, fetchConversation]);

  // Auto-scroll terminal
  useEffect(() => {
    if (terminalRef.current && messages.length > 0) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [messages]);

  if (isLoading) {
    return (
      <div className="agent-status-panel loading">
        <div className="agent-status-header">
          <div className="agent-spinner" />
          <span>Connecting to Cursor Agent...</span>
        </div>
      </div>
    );
  }

  if (error) {
    const canStillValidate = ticketStatus === 'TO_REVIEW';
    return (
      <div className="agent-status-panel error">
        <div className="agent-status-header">
          <span className="text-red-400">❌ {error}</span>
        </div>
        {/* Still allow validation even if agent is not found */}
        {canStillValidate && (
          <div className="agent-review-actions" style={{ padding: '1rem' }}>
            <button
              className="validate-btn"
              onClick={handleValidate}
              disabled={isValidating}
            >
              {isValidating ? (
                <>
                  <span className="agent-spinner-small" />
                  Validating...
                </>
              ) : (
                <>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Validate & Complete
                </>
              )}
            </button>
          </div>
        )}
      </div>
    );
  }

  const currentStatus = status?.status || 'QUEUED';
  const canSendFollowup = currentStatus === 'FINISHED' || ticketStatus === 'TO_REVIEW';

  return (
    <div className={`agent-status-panel ${currentStatus.toLowerCase()}`}>
      {/* Header */}
      <button 
        className="agent-status-header"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
      >
        <div className="agent-status-info">
          <span className="agent-status-indicator">
            {currentStatus === 'RUNNING' ? (
              <span className="agent-spinner-small" />
            ) : (
              STATUS_ICONS[currentStatus]
            )}
          </span>
          <span className={`agent-status-text ${STATUS_COLORS[currentStatus]}`}>
            {STATUS_LABELS[currentStatus]}
          </span>
          {status?.target?.branchName && (
            <span className="agent-branch">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3">
                <line x1="6" x2="6" y1="3" y2="15" />
                <circle cx="18" cy="6" r="3" />
                <circle cx="6" cy="18" r="3" />
                <path d="M18 9a9 9 0 0 1-9 9" />
              </svg>
              {status.target.branchName}
            </span>
          )}
        </div>
        <div className="agent-status-actions">
          {/* Emergency Stop Button */}
          {(currentStatus === 'RUNNING' || currentStatus === 'QUEUED') && (
            <button
              className="agent-stop-btn"
              onClick={(e) => {
                e.stopPropagation();
                handleStop();
              }}
              disabled={isStopping}
              title="Emergency Stop - Stop the AI agent immediately"
            >
              {isStopping ? (
                <span className="agent-spinner-small" />
              ) : (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                  <rect x="6" y="6" width="12" height="12" rx="1" />
                </svg>
              )}
              <span>{isStopping ? 'Stopping...' : 'Stop'}</span>
            </button>
          )}
          {status?.target?.url && (
            <a 
              href={status.target.url}
              target="_blank"
              rel="noopener noreferrer"
              className="agent-link"
              onClick={(e) => e.stopPropagation()}
            >
              View in Cursor ↗
            </a>
          )}
          {status?.target?.prUrl && (
            <a 
              href={status.target.prUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="agent-link pr"
              onClick={(e) => e.stopPropagation()}
            >
              View PR ↗
            </a>
          )}
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            className={`agent-expand-icon ${isExpanded ? 'expanded' : ''}`}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </button>

      {/* Expandable Content */}
      {isExpanded && (
        <div className="agent-status-content">
          {/* Summary */}
          {status?.summary && (
            <div className="agent-summary">
              <h4>Summary</h4>
              <p>{status.summary}</p>
            </div>
          )}

          {/* Terminal-like conversation view */}
          <div className="agent-terminal" ref={terminalRef}>
            <div className="agent-terminal-header">
              <div className="terminal-dots">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <span className="terminal-title">Agent Conversation</span>
            </div>
            <div className="agent-terminal-body">
              {messages.length === 0 ? (
                <div className="terminal-empty">
                  {currentStatus === 'QUEUED' 
                    ? 'Waiting for agent to start...'
                    : currentStatus === 'RUNNING'
                    ? 'Agent is processing...'
                    : 'No conversation data available.'}
                  <span className="cursor-blink">▋</span>
                </div>
              ) : (
                messages.map((msg, index) => (
                  <div 
                    key={msg.id || index} 
                    className={`terminal-message ${msg.type}`}
                  >
                    <span className="terminal-prompt">
                      {msg.type === 'user_message' ? (
                        <span className="prompt-user">You :&gt;</span>
                      ) : (
                        <span className="prompt-agent">Cloud Agent :&gt;</span>
                      )}
                    </span>
                    <pre className="terminal-text">{msg.text}</pre>
                  </div>
                ))
              )}
              {currentStatus === 'RUNNING' && messages.length > 0 && (
                <div className="terminal-cursor">
                  <span className="prompt-agent">Cloud Agent :&gt;</span>
                  <span className="cursor-blink">▋</span>
                </div>
              )}
            </div>
          </div>

          {/* Review Actions (visible when finished or in review) */}
          {canSendFollowup && (
            <div className="agent-review-actions">
              {/* Validate Button */}
              <button
                className="validate-btn"
                onClick={handleValidate}
                disabled={isValidating}
              >
                {isValidating ? (
                  <>
                    <span className="agent-spinner-small" />
                    Validating...
                  </>
                ) : (
                  <>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Validate & Complete
                  </>
                )}
              </button>

              {/* Follow-up Section */}
              <div className="agent-followup">
                <div className="followup-label">
                  <span>📝 Request Changes</span>
                  <span className="followup-hint">Send feedback to continue AI work</span>
                </div>
                <div className="followup-input-container">
                  <textarea
                    className="followup-input"
                    value={followupText}
                    onChange={(e) => setFollowupText(e.target.value)}
                    placeholder="Please also add unit tests for the translation changes..."
                    rows={3}
                    disabled={isSendingFollowup}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey && followupText.trim()) {
                        e.preventDefault();
                        handleSendFollowup();
                      }
                    }}
                  />
                  <button
                    className="followup-btn"
                    onClick={handleSendFollowup}
                    disabled={!followupText.trim() || isSendingFollowup}
                  >
                    {isSendingFollowup ? (
                      <>
                        <span className="agent-spinner-small" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                          <path d="M22 2L11 13" />
                          <path d="M22 2l-7 20-4-9-9-4 20-7z" />
                        </svg>
                        Send & Queue
                      </>
                    )}
                  </button>
                </div>
                <p className="followup-hint-enter">Press Enter to send, Shift+Enter for new line</p>
              </div>
            </div>
          )}

          {/* Metadata */}
          <div className="agent-meta">
            {status?.source?.repository && (
              <div className="agent-meta-item">
                <span className="meta-label">Repository:</span>
                <a 
                  href={`https://${status.source.repository}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="meta-link"
                >
                  {status.source.repository.replace('github.com/', '')}
                </a>
              </div>
            )}
            {status?.source?.ref && (
              <div className="agent-meta-item">
                <span className="meta-label">Source Branch:</span>
                <code>{status.source.ref}</code>
              </div>
            )}
            {status?.createdAt && (
              <div className="agent-meta-item">
                <span className="meta-label">Started:</span>
                <span>{new Date(status.createdAt).toLocaleString()}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function getCsrfToken(): string {
  const meta = document.querySelector('meta[name="csrf-token"]');
  return meta?.getAttribute('content') || '';
}
