import { defineConfig } from 'vitest/config';
import ViteRails from 'vite-plugin-rails';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    include: [resolve(__dirname, 'spec/javascript/**/*.test.ts')],
    alias: {
      '@test': resolve(__dirname, 'spec/javascript/src'),
    },
  },
  build: {
    assetsInlineLimit: 0,
    rolldownOptions: {
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
    tailwindcss(),
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
