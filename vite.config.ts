import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Déployé sur https://delbrique.github.io (dépôt utilisateur) → base "/"
export default defineConfig({
  plugins: [react()],
  base: '/',
})
