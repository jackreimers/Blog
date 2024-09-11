import { getPosts, getTags } from '$lib/functions/functions.posts';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	const tagsResult = await getTags(fetch);
	const postsResult = await getPosts(fetch, tagsResult, 'blog');

	return {
		...postsResult
	};
}
