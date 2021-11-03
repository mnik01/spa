/* eslint-disable unicorn/prefer-module */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'node:path'
import istanbul from 'rollup-plugin-istanbul'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(({ mode }) => ({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      Core: path.resolve(__dirname, './src/Core'),
      Locales: path.resolve(__dirname, './src/locales'),
      Pages: path.resolve(__dirname, './src/Pages'),
      Types: path.resolve(__dirname, './src/types'),
      Static: path.resolve(__dirname, './static'),
    },
  },
  esbuild: {
    jsxInject: "import React from 'react'",
  },
  plugins: [
    tsconfigPaths(),
    reactRefresh(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        theme_color: '#EDE9FE',
        background_color: '#EDE9FE',
        display: "standalone",
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
    mode === 'test' &&
      istanbul({
        include: ['src/**/*.tsx'],
      }),
  ],
}))
