import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
					@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400&display=swap');	
					@import "$lib/styles/variables.scss";
					@import "$lib/styles/mixins.scss";
				`
			}
		}
	}
});
