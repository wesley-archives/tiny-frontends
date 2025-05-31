/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,css,scss,sass,postcss}",
		"./src/styles/**/*.{css, scss, sass, postcss}",
	],
	darkMode: 'selector',
	theme: {
		extend: {
			colors: {
				light: {
					background: {
						1: '#f6f6f6',
						2: '#e6e6e6',
						3: '#d6d6d6',
					},
					text: {
						1: '#161616',
						2: '#262626',
						3: '#363636',
					},
					border: {
						1: '#464646',
						2: '#565656',
						3: '#666666',
					},
				},
				dark: {
					background: {
						1: '#161616',
						2: '#262626',
						3: '#363636',
					},
					text: {
						1: '#f6f6f6',
						2: '#e6e6e6',
						3: '#d6d6d6',
					},
					border: {
						1: '#c6c6c6',
						2: '#b6b6b6',
						3: '#a6a6a6',
					},
				},
			},
		},
	},
	plugins: [],
}
