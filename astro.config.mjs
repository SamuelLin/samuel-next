// @ts-check
import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import partytown from '@astrojs/partytown'

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    mdx(),
    sitemap(),
    partytown({ config: { forward: ['dataLayer.push', 'gtag'] } }),
  ],
  site: 'https://samuelhsnu.com'
})
