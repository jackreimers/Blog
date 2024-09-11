import { getPosts, getTags } from '$lib/functions/functions.posts';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	const tagsResult = await getTags(fetch);
	const postsResult = await getPosts(fetch, tagsResult, null);

	return {
		posts: postsResult.posts.slice(0, 3)
	};
}
