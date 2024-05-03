import { getBlogPost } from '$lib/common/functions';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
	return {
		post: await getBlogPost(fetch, params.slug)
	};
}

/** @type {import('./$types').EntryGenerator} */
export async function entries() {
	//TODO: Investigate making this dynamically populated
	return [{ slug: 'six-interesting-svelte-features' }];
}
