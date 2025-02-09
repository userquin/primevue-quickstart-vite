import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages({
      extensions: ['vue', 'md'],
    })
  ],
  ssgOptions: {
    script: 'async',
    format: 'cjs',
    formatting: 'minify',
  },
})
