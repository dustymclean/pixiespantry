import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  // This forces all assets to load relative to the index.html location
  base: './', 
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // Direct alias to the src folder
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // Ensures the output is clean and standardized
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  }
});