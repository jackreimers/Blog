/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	const aboutResponse = await fetch(`/content/about/about.md`);

	return {
		about: await aboutResponse.text()
	};
}
