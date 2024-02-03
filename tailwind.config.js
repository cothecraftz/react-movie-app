/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			container: {
				center: true,
				padding: '1rem',
			},
			screens: {
				'2xl': { min: '1279px' },
				xl: { max: '1279px' },
				lg: { max: '1023px' },
				md: { max: '767px' },
				sm: { max: '767px' },
			},
			colors: {
				bg: '#05152e',
				orange: '#f89e00',
				pink: '#da2f68',
				light: '#fefefe',
			},
		},
	},
	plugins: [],
};
