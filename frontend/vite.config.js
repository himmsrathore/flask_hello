import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Forward /api calls to the local Flask server during development
    proxy: {
      // Override with API_URL if port 5000 is busy, e.g. API_URL=http://127.0.0.1:5001
      '/api': process.env.API_URL || 'http://127.0.0.1:5000',
    },
  },
})
