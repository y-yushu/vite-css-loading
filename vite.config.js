import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'docs'
  },
  base: '/vite-css-loading/',
  plugins: [vue()]
  // publicPath: '/vite-loading/'
})
