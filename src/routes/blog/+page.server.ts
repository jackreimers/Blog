import { getBlogPosts, getBlogPostsCountString } from '$lib/common/functions';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	return {
		count: getBlogPostsCountString(fetch),
		posts: getBlogPosts(fetch)
	};
}
