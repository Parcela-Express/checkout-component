import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  build: {
    manifest: true,
    minify: true,
    lib: {
      entry: resolve(__dirname, 'src/index.jsx'),
      name: '@parcelaexpress/checkout-react-component',
      formats: ['es', 'umd'],
      fileName: (format) => `checkout-react-component.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React'
        }
      }
    }
  }
});
