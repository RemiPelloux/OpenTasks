import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../server/public/assets',
    emptyOutDir: true,
    // Minification optimizations
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: process.env.NODE_ENV === 'production',
        drop_debugger: true,
      },
    },
    // Chunk size warning threshold
    chunkSizeWarningLimit: 500,
    lib: {
      entry: resolve(__dirname, 'src/main.tsx'),
      name: 'OpenTasksBoard',
      fileName: 'board',
      formats: ['es'],
    },
    rollupOptions: {
      external: [],
      output: {
        entryFileNames: 'board.js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') {
            return 'board.css';
          }
          return assetInfo.name || 'asset';
        },
        // Code splitting for vendor chunks
        manualChunks: (id) => {
          // Vendor chunks for better caching
          if (id.includes('node_modules')) {
            if (id.includes('@dnd-kit')) {
              return 'vendor-dnd';
            }
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            if (id.includes('socket.io-client')) {
              return 'vendor-socket';
            }
            if (id.includes('date-fns')) {
              return 'vendor-date';
            }
            return 'vendor';
          }
        },
      },
    },
    cssCodeSplit: false,
    // Enable source maps for debugging (disabled in production)
    sourcemap: process.env.NODE_ENV !== 'production',
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', '@dnd-kit/core', '@dnd-kit/sortable', 'socket.io-client'],
  },
});
