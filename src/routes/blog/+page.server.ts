import { getPosts } from '$lib/functions/functions.posts';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	const postsResult = await getPosts(fetch, null, 'blog');

	return {
		...postsResult
	};
}
