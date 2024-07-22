import { getBlogPostsAndTags } from '$lib/functions/functions.blog';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	const result = await getBlogPostsAndTags(fetch);

	return {
		posts: result.posts
	};
}
