import { getPost } from '$lib/functions/functions.posts';

//TODO: Reenable once the buttons are reenabled
export const prerender = false;

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
	return {
		post: await getPost(fetch, params.slug, 'projects')
	};
}
