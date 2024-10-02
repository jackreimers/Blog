import { getPosts } from '$lib/functions/functions.posts';

//TODO: Reenable once the buttons are reenabled
export const prerender = false;

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	const postsResult = await getPosts(fetch, 'projects');

	return {
		...postsResult
	};
}
