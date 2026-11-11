import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Forward /api calls to the local Flask server during development
    proxy: {
      '/api': 'http://127.0.0.1:5000',
    },
  },
})
