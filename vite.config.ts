import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import path from 'path';
import url from 'url';

// const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    // alias: {
    //   '@': path.resolve(__dirname, 'src'),
    // },
    alias: [{ find: '@', replacement: '/src' }],
  },
});
