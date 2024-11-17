import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/affiliate-marketing-calculator/',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'index.js',
        chunkFileNames: 'index.js',
        assetFileNames: 'index[extname]',
      },
    },
  },
});
// Force rebuild
