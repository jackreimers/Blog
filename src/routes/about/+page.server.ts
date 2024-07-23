/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
	const aboutResponse = await fetch(`/data/about/about.md`);
	const aboutData = await aboutResponse.text();

	return {
		about: aboutData
	};
}
