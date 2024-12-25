import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/ForgeScience/',
	build: {
		chunkSizeWarningLimit: 2000
	},
	plugins: [ react() ]
});
