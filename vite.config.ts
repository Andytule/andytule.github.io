import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// For GitHub Pages deployment at andytule.github.io (root domain, no sub-path needed)
export default defineConfig({
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        // Split vendor chunks for better caching
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
});
