import { defineConfig } from 'vite';
import reactVitePlugin from '@vitejs/plugin-react';
import { macaronVitePlugin } from '@macaron-css/vite';

export default defineConfig({
  plugins: [macaronVitePlugin(), reactVitePlugin()],
});
