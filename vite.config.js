import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { VitePWA } from 'vite-plugin-pwa'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    VitePWA({
    includeAssets: ['/assets/icon.png'],
    registerType: 'autoUpdate',
    devOptions: {
      enabled: true
    },
    manifest: {
      name: 'Layl',
      short_name: 'Layl',
      description: ' 🌙 Calculator for tahajjud, qiyam, and worship & sleep in an Islamic night!',
      theme_color: '#ffffff',
      icons: [
        {
          src: '/assets/icon.png',
          sizes: '512x512',
          type: 'image/png'
        },
      ]
    }
  })
]
})