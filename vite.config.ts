import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vitest/config';
import adapterNode from '@sveltejs/adapter-node';
import adapterStatic from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';

const isGitHubPagesBuild = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			adapter: isGitHubPagesBuild ? adapterStatic({ fallback: '404.html' }) : adapterNode(),
			paths: {
				base: (process.env.BASE_PATH ?? '') as '' | `/${string}`
			}
		})
	],
	test: {
		expect: { requireAssertions: true },
		projects: [
			{
				extends: './vite.config.ts',
				test: {
					name: 'server',
					environment: 'node',
					include: ['src/**/*.{test,spec}.{js,ts}'],
					exclude: ['src/**/*.svelte.{test,spec}.{js,ts}']
				}
			}
		]
	}
});
