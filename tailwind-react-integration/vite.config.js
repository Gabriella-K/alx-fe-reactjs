import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
<<<<<<< HEAD
=======
import tailwindcss from '@tailwindcss/vite' 
>>>>>>> 374d3f5 (Added tailwind-react-integration project with Tailwind setup)

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
