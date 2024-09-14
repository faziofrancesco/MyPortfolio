import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Cartella di output per la build
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
