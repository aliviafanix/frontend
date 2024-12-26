import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/frontend/',  // Предполагаем, что репозиторий называется frontend
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
}) 