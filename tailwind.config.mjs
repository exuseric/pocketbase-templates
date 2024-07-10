/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			padding: '1rem'
		},
		fontFamily: {
			sans: [ 'ui-sans-serif', 'system-ui','sans-serif'],
			serif: ['serif']
		},
		extend: {
			colors: {
				primary: {
					lighter: 'var(--primary-lighter)',
					light: 'var(--primary-light)',
					main: 'var(--primary)',
					dark: 'var(--primary-dark)',
					darker: 'var(--primary-darker)'
				},
				secondary: {
					main: 'var(--secondary)'
				},
				tertiary: {
					main: 'var(--tertiary)'
				}
			}
		},
	},
	plugins: [],
}
