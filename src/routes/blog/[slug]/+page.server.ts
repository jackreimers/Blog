import { getBlogPost } from '$lib/common/functions';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
	return {
		post: await getBlogPost(fetch, params.slug)
	};
}
