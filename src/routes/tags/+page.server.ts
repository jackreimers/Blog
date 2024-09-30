import { getPosts } from '$lib/functions/functions.posts';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	const posts = await getPosts(fetch);

	return {
		tags: posts.tags
	};
}
