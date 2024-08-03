import { crx } from '@crxjs/vite-plugin'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'

import manifest from './src/manifest'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    strictPort: true,
    hmr: { protocol: 'ws', host: 'localhost', port: 3000 },
  },
  build: {
    emptyOutDir: true,
    outDir: 'dist',
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/chunk-[hash].js',
      },
    },
  },
  plugins: [react(), crx({ manifest })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
