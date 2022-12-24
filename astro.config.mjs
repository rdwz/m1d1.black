// import { astroImageTools } from 'astro-imagetools'
import { defineConfig } from 'astro/config'
import compress from 'astro-compress'
import compressor from 'astro-compressor'
import robotsTxt from 'astro-robots-txt'
import sitemap from '@astrojs/sitemap'
// import purgecss from 'astro-purgecss'

export default defineConfig({
	integrations: [
		// astroImageTools,
		compress(),
		compressor(),
		// purgecss(),
		robotsTxt(),
		sitemap()
	],
	site: 'https://m1d1.black'
})
