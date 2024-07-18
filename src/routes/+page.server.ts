import { getBlogPostsAndTags } from '$lib/functions/blog.functions';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	const result = await getBlogPostsAndTags(fetch);

	return {
		posts: result.posts.slice(0, 3),
		tags: result.tags
	};
}
