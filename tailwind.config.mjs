/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#000000',
				secondary: '#666666',
				accent: '#2D2A26',
				'accent-hover': '#000000',
				background: '#EDE8E1',
				'neutral-light': '#F5F2ED',
				'neutral-dark': '#333333',
				beige: '#D4CFC7',
				cream: '#F9F7F4',
			},
			fontFamily: {
				sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
				serif: ['Playfair Display', 'Georgia', 'serif'],
			},
			fontSize: {
				'hero': ['5rem', { lineHeight: '1.1' }],
				'display': ['3.5rem', { lineHeight: '1.15' }],
				'h2': ['2.5rem', { lineHeight: '1.2' }],
				'h3': ['2rem', { lineHeight: '1.3' }],
				'h4': ['1.5rem', { lineHeight: '1.5' }],
			},
			spacing: {
				'mobile-gutter': '6vw',
				'desktop-gutter': '4vw',
			},
			maxWidth: {
				'container': '1500px',
			},
			gridTemplateColumns: {
				'mobile': 'repeat(8, 1fr)',
				'desktop': 'repeat(24, 1fr)',
			},
			gap: {
				'grid': '11px',
			},
			borderRadius: {
				'none': '0px',
			},
			animation: {
				'marquee': 'marquee 20s linear infinite',
			},
			keyframes: {
				marquee: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-50%)' },
				},
			},
		},
	},
	plugins: [],
}
