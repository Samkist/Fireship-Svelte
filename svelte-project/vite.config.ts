import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		port: 3000,
		strictPort: false,
		cors: false
	},
	preview: {
		port: 4173,
		strictPort: false
	}
});
