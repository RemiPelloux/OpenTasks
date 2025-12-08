/**
 * Client Assets Entry Point
 * Hydrates the Kanban board React component
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { KanbanBoard } from './components/KanbanBoard';
import './styles/board.css';

// Mount the Kanban board when DOM is ready
function mountKanbanBoard() {
  const container = document.getElementById('kanban-board');
  
  if (!container) {
    console.warn('Kanban board container not found');
    return;
  }

  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <KanbanBoard />
    </React.StrictMode>
  );
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountKanbanBoard);
} else {
  mountKanbanBoard();
}
