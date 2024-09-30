/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			screens: {
				mhover: { raw: '(hover: hover)' }
			}
		}
	},
	plugins: []
};
