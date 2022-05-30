import { defineConfig } from 'vite';
import RubyPlugin from 'vite-plugin-ruby';
import FullReload from 'vite-plugin-full-reload';
import vue from '@vitejs/plugin-vue';
import { brotliCompressSync } from 'zlib';
import gzipPlugin from 'rollup-plugin-gzip';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  plugins: [
    RubyPlugin(),
    FullReload(['config/routes.rb', 'app/views/**/*']),
    vue(),
    // Create gzip copies of relevant assets
    gzipPlugin(),
    // Create brotli copies of relevant assets
    gzipPlugin({
      customCompression: (content) => brotliCompressSync(Buffer.from(content)),
      fileName: '.br',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./app/javascript/src', import.meta.url)),
    },
  },
  server: {
    hmr: {
      host: 'vite.templatus.test',
      clientPort: 443,
    },
  },
});
