import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react'],
          'react-dom': ['react-dom'],
        },
      },
    },
  },
  resolve: {
      alias: {
        '~/': `${path.resolve('src')}/`,
        '@/': `${path.resolve('src/assets')}/`,
      },
    },
})
