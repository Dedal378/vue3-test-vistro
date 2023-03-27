import vue from '@vitejs/plugin-vue'

import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

import Unocss from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from 'unocss'

export default defineConfig({
  plugins: [
    vue({ reactivityTransform: true }),
    Unocss({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
          collections: {
            custom: {
              play:
                `<svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 20V0L17 10L0 20Z" fill="currentColor"/>
                </svg>`,
              stop:
                `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20" height="20" fill="currentColor"/>
                </svg>`,
              pause:
                `<svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="7" width="3" height="20" fill="currentColor"/>
                  <rect width="3" height="20" fill="currentColor"/>
                </svg>`,
              add:
                `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8.5" width="3" height="20" fill="currentColor"/>
                  <rect y="11.5" width="3" height="20" transform="rotate(-90 0 11.5)" fill="currentColor"/>
                </svg>`
            },
          },
          extraProperties: {
            display: 'inline-block',
            'vertical-align': 'middle',
          },
        })
      ],
    })
  ],
  define: { 'process.env': {}},
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
  },
  server: { port: 3000 },
  // change name to your repo name " base: '/REPO/' "
  base: '/vue3-test-vistro/',
})
