import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/p112/',
  plugins: [react()],
  build: {
    outDir: "docs"
  }
})
