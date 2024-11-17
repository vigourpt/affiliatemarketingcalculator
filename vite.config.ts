import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/affiliate-marketing-calculator/', // Set this to the subdirectory path
  plugins: [react()],
});
