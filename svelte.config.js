// import adapter from '@sveltejs/adapter-static';
import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// # static adapter for github
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		// adapter: adapter({
		// 	pages: 'build',
		// 	assets: 'build',
		// 	fallback: '404.html'
		// }),
		// paths: {
		// 	// base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		// 	base: process.env.BASE_PATH || '',
		// }

		adapter: adapter(),
	}
};

export default config;
