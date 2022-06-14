import { defineConfig } from 'vite';
import { splitVendorChunkPlugin } from 'vite';
import RubyPlugin from 'vite-plugin-ruby';
import FullReload from 'vite-plugin-full-reload';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  plugins: [
    splitVendorChunkPlugin(),
    RubyPlugin(),
    FullReload(['config/routes.rb', 'app/views/**/*']),
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./app/javascript/src', import.meta.url)),
    },
  },
  server: {
    hmr: {
      host: 'vite.templatus-vue.test',
      clientPort: 443,
    },
  },
});
