import { getPosts } from '$lib/functions/functions.posts';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	return {
		posts: (await getPosts(fetch, null)).posts.slice(0, 3)
	};
}
