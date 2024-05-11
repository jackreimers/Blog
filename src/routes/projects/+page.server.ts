export const prerender = false;

/** @type {import('./$types').PageServerLoad} */
export async function load({ url, fetch }) {
	const newest = JSON.parse(url.searchParams.get('newest') || 'true');

	return {
		filters: {
			newest: newest
		}
	};
}
