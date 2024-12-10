/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			transitionDuration: {

				'5000': '5000ms', // 2 seconds
			  },
			keyframes: {
				fill: {
				  '0%': { backgroundPosition: '100% 0' },
				  '100%': { backgroundPosition: '0 100%' },
				},
			  },
			  animation: {
				fill: 'fill 0.5s ease forwards',
			  },
			  colors: {
				'primary' :'#ff6600', //Orange
				'secondary' : '#222222', //Dark gray black
				'background': '#ffffff', //White
				'textPrimary': '#000000', //Black
				'textSecondary' :  '#606060' //Light gray
			},
		},
	},
	plugins: [],
}
