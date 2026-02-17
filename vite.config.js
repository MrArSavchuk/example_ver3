import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    port: 3000,
  },
  resolve: {
    alias: {
      '@': '/src',
      'swiper/react': '/src/shared/lib/swiper/react.jsx',
      'swiper/modules': '/src/shared/lib/swiper/modules.js',
      'swiper/css/navigation': '/src/shared/lib/swiper/navigation.css',
      'swiper/css/pagination': '/src/shared/lib/swiper/pagination.css',
      'swiper/css': '/src/shared/lib/swiper/swiper.css',
    },
  },
})
