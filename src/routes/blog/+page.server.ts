import { getBlogPosts, getBlogPostsCount } from '$lib/common/functions';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	return {
		count: getBlogPostsCount(fetch),
		posts: getBlogPosts(fetch)
	};
}
