import { defineConfig } from 'astro/config';
import { getSiteDetails } from './src/pb';
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";
import purgecss from "astro-purgecss";
import sitemap from "@astrojs/sitemap";
const {
  SiteUrl
} = await getSiteDetails();


// https://astro.build/config
export default defineConfig({
  output: "static",
  outDir: process.cwd() + '\\build\\' + SiteUrl.slice(8),
  site: SiteUrl,
  build: {
    assets: 'assets'
  },
  compressHTML: false,
  integrations: [icon(), tailwind(), purgecss({
    fontFace: true,
    keyframes: true,
    safelist: ['random', 'yep', 'button', /^nav-/],
    blocklist: ['usedClass', /^nav-/],
    content: [process.cwd() + '\\src\\**\\*.{astro}'],
    extractors: [{
      // Example using a taiwindcss compatible class extractor
      extractor: content => content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [],
      extensions: ["astro", "html"]
    }]
  }), sitemap({
    changefreq: 'monthly',
    priority: 0.7,
    lastmod: new Date(),
  })]
});