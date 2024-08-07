import { defineConfig } from 'astro/config';
import { getPage } from './src/pocket-base';
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";
import purgecss from "astro-purgecss";
import sitemap from "@astrojs/sitemap";
const {expand: {site_details: {url}}} = await getPage();
const SiteUrl = url;

// https://astro.build/config
export default defineConfig({
  output: "static",
  outDir: process.cwd() + '\\build\\' + SiteUrl.slice(8),
  site: SiteUrl,
  build: {
    assets: 'assets'
  },
  image: {
    domains: ["127.0.0.1"]
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