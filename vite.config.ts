import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://github.com/jackalope-code/example-portfolio-2025.git",
  build: {
    outDir: 'build',
  }
})
