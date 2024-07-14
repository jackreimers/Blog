/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	const tagsResponse = await fetch(`/data/tags.json`);
	const tags = await tagsResponse.json();

	//TODO: Order by most used tags
	return {
		tags: tags
	};
}
