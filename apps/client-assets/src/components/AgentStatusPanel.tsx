/**
 * Agent Status Panel Component
 * Terminal-like view showing AI agent status and conversation
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import type { AgentStatusResponse, AgentMessage, AgentStatus } from '../types';

interface AgentStatusPanelProps {
  agentId: string;
  ticketTitle: string;
  onStatusChange?: (status: AgentStatus) => void;
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

export function AgentStatusPanel({ agentId, ticketTitle, onStatusChange }: AgentStatusPanelProps) {
  const [status, setStatus] = useState<AgentStatusResponse | null>(null);
  const [messages, setMessages] = useState<AgentMessage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(true);
  const terminalRef = useRef<HTMLDivElement>(null);
  const pollIntervalRef = useRef<NodeJS.Timeout | null>(null);

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
      setMessages(data.messages || []);
      
      // Scroll to bottom on new messages
      if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
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
    return (
      <div className="agent-status-panel error">
        <div className="agent-status-header">
          <span className="text-red-400">❌ {error}</span>
        </div>
      </div>
    );
  }

  const currentStatus = status?.status || 'QUEUED';

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
                </div>
              ) : (
                messages.map((msg, index) => (
                  <div 
                    key={msg.id || index} 
                    className={`terminal-message ${msg.type}`}
                  >
                    <span className="terminal-prompt">
                      {msg.type === 'user_message' ? '$ ' : '→ '}
                    </span>
                    <span className="terminal-text">{msg.text}</span>
                  </div>
                ))
              )}
              {currentStatus === 'RUNNING' && (
                <div className="terminal-cursor">
                  <span className="cursor-blink">▋</span>
                </div>
              )}
            </div>
          </div>

          {/* Metadata */}
          <div className="agent-meta">
            {status?.source?.repository && (
              <div className="agent-meta-item">
                <span className="meta-label">Repository:</span>
                <a 
                  href={status.source.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="meta-link"
                >
                  {status.source.repository.replace('https://github.com/', '')}
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

