import { defineConfig } from 'vite';
import ViteRails from 'vite-plugin-rails';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
  plugins: [
    ViteRails({
      fullReload: {
        additionalPaths: ['config/routes.rb', 'app/views/**/*'],
      },
    }),
    vue(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'app/javascript/src'),
    },
  },
  server: {
    hmr: {
      host: 'vite.templatus-vue.test',
      clientPort: 443,
    },
  },
});
