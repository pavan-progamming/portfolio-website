import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/recute-port/' : '/',
  // If your repository name is different, change '/recute-port/' to '/your-repo-name/'
  // If deploying to username.github.io (user site), use '/' instead
})
