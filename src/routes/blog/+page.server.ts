import { getPosts } from '$lib/functions/functions.posts';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	return {
		...(await getPosts(fetch, 'blog'))
	};
}
