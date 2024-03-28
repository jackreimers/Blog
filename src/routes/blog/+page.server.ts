import { getBlogPosts } from '$lib/common/functions';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	return {
		posts: getBlogPosts(fetch)
	};
}
