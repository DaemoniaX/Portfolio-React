import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  return {
    server: {
      port: 5011, // pour faire des tests selenium
    },
    plugins: [react()],

    base: mode === 'production' ? '/Portfolio-React/' : '/', // Pour GitHub Pages
  }
})