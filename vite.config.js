import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        volkov: ["Volkov", "sans-serif"]
      },
    },
  },
  plugins: [react()],
  base: '/web/'
})
