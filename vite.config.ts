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
    minify: 'terser',
    terserOptions: {
      parse: {
        html5_comments: false,
      },
      mangle: {
        reserved: ['$', '_', 'console', 'alert', 'debugger'],
      },
      format: { comments: false },
      compress: {
        drop_console: true,
        keep_fargs: false,
        reduce_vars: true,
        toplevel: true,
        passes: 3,
      },
    },
    emptyOutDir: true,
    outDir: 'dist',
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/chunk-[hash].js',
        compact: true,
      },
      input: { camera: 'camera.html' },
    },
  },
  plugins: [react(), crx({ manifest })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
