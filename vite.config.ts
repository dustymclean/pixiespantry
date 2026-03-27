import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  // Relative base ensures assets load correctly on GitHub Pages
  base: './', 
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    // Keeps the dev environment stable
    hmr: true,
    port: 3000,
    host: '0.0.0.0',
  },
});