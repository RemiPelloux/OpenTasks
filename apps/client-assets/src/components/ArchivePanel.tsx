/**
 * Archive Panel Component
 * Shows archived tickets with ability to restore or delete them
 */

import { useState, useEffect, useCallback } from 'react';
import type { Ticket, Priority } from '../types';

interface ArchivePanelProps {
  projectId: string;
  onRestore: (ticket: Ticket) => void;
  onClose: () => void;
}

// Toast helper
function showToast(message: string, type: 'success' | 'error' | 'warning' = 'success') {
  if (typeof window !== 'undefined' && (window as any).showToast) {
    (window as any).showToast(message, type);
  }
}

// CSRF helper
function getCsrfToken(): string {
  if (typeof window !== 'undefined' && (window as any).getCsrfToken) {
    return (window as any).getCsrfToken();
  }
  return '';
}

const priorityColors: Record<Priority, string> = {
  LOW: 'text-muted-foreground',
  MEDIUM: 'text-blue-400',
  HIGH: 'text-amber-400',
  URGENT: 'text-red-400',
};

export function ArchivePanel({ projectId, onRestore, onClose }: ArchivePanelProps) {
  const [archivedTickets, setArchivedTickets] = useState<Ticket[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [actionInProgress, setActionInProgress] = useState<string | null>(null);

  // Fetch archived tickets
  useEffect(() => {
    const fetchArchived = async () => {
      try {
        const response = await fetch(`/api/projects/${projectId}/archived`);
        if (!response.ok) {
          throw new Error('Failed to load archived tickets');
        }
        const data = await response.json();
        setArchivedTickets(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load archived tickets');
      } finally {
        setIsLoading(false);
      }
    };

    fetchArchived();
  }, [projectId]);

  const handleRestore = useCallback(async (ticket: Ticket) => {
    setActionInProgress(ticket.id);
    
    try {
      const csrfToken = getCsrfToken();
      const response = await fetch(`/api/tickets/${ticket.id}/restore`, {
        method: 'POST',
        headers: {
          'X-CSRF-Token': csrfToken,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to restore ticket');
      }

      showToast(`Ticket "${ticket.title}" restored`, 'success');
      setArchivedTickets(prev => prev.filter(t => t.id !== ticket.id));
      onRestore({ ...ticket, isArchived: false });
    } catch (err) {
      showToast(err instanceof Error ? err.message : 'Failed to restore ticket', 'error');
    } finally {
      setActionInProgress(null);
    }
  }, [onRestore]);

  const handleDelete = useCallback(async (ticket: Ticket) => {
    if (!confirm(`Permanently delete "${ticket.title}"? This cannot be undone.`)) {
      return;
    }

    setActionInProgress(ticket.id);
    
    try {
      const csrfToken = getCsrfToken();
      const response = await fetch(`/api/tickets/${projectId}/${ticket.id}`, {
        method: 'DELETE',
        headers: {
          'X-CSRF-Token': csrfToken,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete ticket');
      }

      showToast(`Ticket "${ticket.title}" deleted permanently`, 'success');
      setArchivedTickets(prev => prev.filter(t => t.id !== ticket.id));
    } catch (err) {
      showToast(err instanceof Error ? err.message : 'Failed to delete ticket', 'error');
    } finally {
      setActionInProgress(null);
    }
  }, [projectId]);

  return (
    <div className="archive-panel">
      <div className="archive-header">
        <div className="archive-header-content">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
            <path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" />
            <path d="M3.26 8.26 8 3l4 4" />
            <rect x="3" y="10" width="18" height="12" rx="2" />
            <path d="M10 15h4" />
          </svg>
          <h2>Archive</h2>
          <span className="archive-count">{archivedTickets.length}</span>
        </div>
        <button className="archive-close-btn" onClick={onClose} title="Close archive">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>

      <div className="archive-content">
        {isLoading ? (
          <div className="archive-loading">
            <svg className="w-6 h-6 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
              <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            <span>Loading archived tickets...</span>
          </div>
        ) : error ? (
          <div className="archive-error">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
              <circle cx="12" cy="12" r="10" />
              <path d="m15 9-6 6" />
              <path d="m9 9 6 6" />
            </svg>
            <span>{error}</span>
          </div>
        ) : archivedTickets.length === 0 ? (
          <div className="archive-empty">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-12 h-12 opacity-50">
              <path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" />
              <rect x="3" y="10" width="18" height="12" rx="2" />
              <path d="M10 15h4" />
            </svg>
            <p>No archived tickets</p>
            <span className="text-sm text-muted-foreground">
              Archived tickets will appear here
            </span>
          </div>
        ) : (
          <div className="archive-list">
            {archivedTickets.map(ticket => (
              <div key={ticket.id} className="archive-item">
                <div className="archive-item-content">
                  <div className="archive-item-header">
                    <span className={`archive-item-priority ${priorityColors[ticket.priority]}`}>
                      {ticket.priority}
                    </span>
                    <span className="archive-item-status">
                      {ticket.status}
                    </span>
                    {ticket.archivedAt && (
                      <span className="archive-item-date">
                        Archived {new Date(ticket.archivedAt).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                  <h3 className="archive-item-title">{ticket.title}</h3>
                  {ticket.description && (
                    <p className="archive-item-description">
                      {ticket.description.length > 100 
                        ? ticket.description.substring(0, 100) + '...' 
                        : ticket.description}
                    </p>
                  )}
                  {ticket.prLink && (
                    <a 
                      href={ticket.prLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="archive-item-pr"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                        <circle cx="18" cy="18" r="3" />
                        <circle cx="6" cy="6" r="3" />
                        <path d="M13 6h3a2 2 0 0 1 2 2v7" />
                        <path d="M6 9v12" />
                      </svg>
                      View PR
                    </a>
                  )}
                </div>
                <div className="archive-item-actions">
                  <button
                    className="archive-restore-btn"
                    onClick={() => handleRestore(ticket)}
                    disabled={actionInProgress === ticket.id}
                    title="Restore to board"
                  >
                    {actionInProgress === ticket.id ? (
                      <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                        <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                        <path d="M3 3v5h5" />
                      </svg>
                    )}
                    <span>Restore</span>
                  </button>
                  <button
                    className="archive-delete-btn"
                    onClick={() => handleDelete(ticket)}
                    disabled={actionInProgress === ticket.id}
                    title="Delete permanently"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                      <path d="M3 6h18" />
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                      <line x1="10" x2="10" y1="11" y2="17" />
                      <line x1="14" x2="14" y1="11" y2="17" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

