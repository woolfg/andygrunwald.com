import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
	site: 'https://andygrunwald.com',
	trailingSlash: 'always',
	integrations: [
		tailwind(),
		sitemap(),
		mdx(),
		image(),
	],
});