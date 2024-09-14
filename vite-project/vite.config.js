import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'dist', // Assicurati che corrisponda al percorso di build atteso
    rollupOptions: {
      output: {
        // Configurazioni addizionali di output, se necessario
      }
    }
  },
})
