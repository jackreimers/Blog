import { getPost } from '$lib/functions/functions.posts';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
	return {
		post: await getPost(fetch, params.slug, 'blog')
	};
}
