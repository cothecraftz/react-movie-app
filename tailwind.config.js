/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			container: {
				center: true,
			},
			screens: {
				'2xl': { min: '1280px' },
				xl: { max: '1023px' },
				lg: { max: '960px' },
				md: { max: '767px' },
				sm: { max: '600px' },
				xs: { max: '420px' },
			},
			colors: {
				bg: '#05152e',
				orange: '#f89e00',
				pink: '#da2f68',
				light: '#fefefe',
				footer: '#030c1b',
			},
		},
	},
	plugins: [],
};
