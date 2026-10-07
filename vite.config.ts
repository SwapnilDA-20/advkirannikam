import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { seo } from './seo.plugin.ts';

export default defineConfig({
  plugins: [react(), tailwindcss(), seo()],
  server: {
    // Polling avoids exhausting the OS file-watch limit (EMFILE) on this machine.
    watch: { usePolling: true, interval: 300, ignored: ['**/photos/**', '**/pics/**', '**/scripts/**'] },
  },
  build: {
    target: 'es2022',
    cssCodeSplit: true,
    assetsInlineLimit: 2048,
  },
});
