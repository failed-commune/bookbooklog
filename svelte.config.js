import { mdsvex } from 'mdsvex'
import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'
import mdsvexConfig from './mdsvex.config.js'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx', '.md'],
	preprocess: [preprocess(), mdsvex(mdsvexConfig)],
	kit: {
		adapter: adapter({
			fallback: '200.html'
		})
	}
}

export default config
