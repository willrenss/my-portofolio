import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc'
import Pages from 'vite-plugin-pages'
import AutoImport from 'unplugin-auto-import/vite'
import path from 'path'
import Checker from 'vite-plugin-checker';
// https://vitejs.dev/config/
export default({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  return defineConfig({
  base: process.env.VITE_PATH,
  mode: process.env.NODE_ENV,
  build: {
    outDir: path.resolve(__dirname, process.env.VITE_OUTPUT_DIR || './dist'),
    emptyOutDir: false,
  },
  optimizeDeps: {
      include: ['@emotion/react', '@emotion/styled'],
  },
  plugins: [  
  react({     
    tsDecorators: true,
    jsxImportSource: "@emotion/react",
  }),
  Checker({ typescript: true }),
  Pages({
    extensions: ['tsx'],
  }),

  AutoImport({
    imports: [
      'react',      
      'react-router-dom',
    ],
    dts: 'src/auto-imports.d.ts',
  }),
  ],
  resolve: {
      alias: {
        '~/': `${path.resolve(__dirname,'src')}/`,
        '@/': `${path.resolve(__dirname,'src/assets')}/`,
        '@components/':`${path.resolve(__dirname,'src/components')}/` 
      },
    },
  })
}
