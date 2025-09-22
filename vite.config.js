import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // base define o caminho "raiz" dos assets no build
  // quando publica em https://<usuario>.github.io/news-rocha/
  // precisa ser '/news-rocha/'
  // se usar domínio próprio depois, pode voltar pra '/'
  base: process.env.GITHUB_ACTIONS ? '/news-rocha/' : '/',
})
