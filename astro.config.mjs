import { defineConfig } from 'astro/config'
import compress from 'astro-compress'
import compressor from 'astro-compressor'
import robotsTxt from 'astro-robots-txt'
import sitemap from '@astrojs/sitemap'
import purgecss from 'astro-purgecss'

export default defineConfig({
	integrations: [
		compress(),
		compressor(),
		purgecss({
			fontFace: true,
			keyframes: true,
			content: ['./public/**/*', './src/**/*.{astro,js,jsx,ts,tsx}'],
			rejected: true,
			variables: true
		}),
		robotsTxt(),
		sitemap()
	],
	site: 'https://m1d1.black'
})
