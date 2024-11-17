import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Affiliate-Marketing-Calculator/', // Set the base path for the subdirectory
  plugins: [react()],
});
