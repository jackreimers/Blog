/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			transitionProperty: {
				spacing: 'margin, padding'
			},
			screens: {
				mhover: { raw: '(hover: hover)' }
			}
		}
	},
	plugins: []
};
