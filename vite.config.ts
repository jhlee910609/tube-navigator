import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        popup: 'index.html',
        content: 'src/content.ts',
        inject: 'src/inject.ts'
      },
      output: {
        entryFileNames: 'src/[name].js',
        chunkFileNames: 'src/[name].[hash].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }
});
