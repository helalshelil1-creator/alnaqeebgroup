import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync, writeFileSync, existsSync } from 'node:fs'

/**
 * Single source of truth for the public site address.
 * Change it for a new host/domain at build time:  SITE_ORIGIN=https://example.com npm run build
 * It feeds index.html (canonical, hreflang, Open Graph, JSON-LD), sitemap.xml,
 * robots.txt and the in-app links, so they always change together.
 */
const SITE_ORIGIN = (process.env.SITE_ORIGIN || 'https://Alnaqeeb-group.vercel.app').replace(/\/+$/, '')

/** EDITION=personal builds a personal/demo copy: forms take no real requests and no WhatsApp contact is shown. Default: commercial. */
const EDITION = process.env.EDITION === 'personal' ? 'personal' : 'commercial'

function siteOrigin(): Plugin {
  let outDir = 'dist'
  return {
    name: 'site-origin',
    configResolved(c) { outDir = c.build.outDir },
    transformIndexHtml: (html) => html.replace(/__SITE_ORIGIN__/g, SITE_ORIGIN),
    closeBundle() {
      for (const f of ['sitemap.xml', 'robots.txt']) {
        const tmpl = `seo/${f}.tmpl`
        if (existsSync(tmpl)) writeFileSync(`${outDir}/${f}`, readFileSync(tmpl, 'utf8').replace(/__SITE_ORIGIN__/g, SITE_ORIGIN))
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), siteOrigin()],
  define: { __SITE_ORIGIN__: JSON.stringify(SITE_ORIGIN), __EDITION__: JSON.stringify(EDITION) },
  build: {
    modulePreload: false,
    outDir: 'dist',
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          motion: ['framer-motion'],
        },
      },
    },
  },
})
