import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5011, // 5011 port for frontend, forced for easier selenium testing
  },
  plugins: [react()],
  base: '/Portfolio-React/',
})
