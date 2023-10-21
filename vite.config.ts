import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'
import Pages from 'vite-plugin-pages'
import AutoImport from 'unplugin-auto-import/vite'
import path from 'path'
import Checker from 'vite-plugin-checker';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [  
  react(),
  Checker({ typescript: true }),
  Pages({
    extensions: ['tsx'],
  }),

  AutoImport({
    imports: [
      'react',
      // 'react-router',
      'react-router-dom',
    ],
    dts: 'src/auto-imports.d.ts',
  }),


  ],
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
        '~/': `${path.resolve(__dirname,'src')}/`,
        '@/': `${path.resolve(__dirname,'src/assets')}/`,
        '@components/':`${path.resolve(__dirname,'src/components')}/` 
      },
    },
})

