import { getBlogPost } from '$lib/common/functions';

//TODO: Investigate if this can be prerendered
export const prerender = false;

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
	return {
		post: await getBlogPost(fetch, params.slug)
	};
}
