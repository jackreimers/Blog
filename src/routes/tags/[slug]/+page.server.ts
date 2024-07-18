import type { Tag } from '$lib/interfaces/tag';
import { getBlogPostsAndTags } from '$lib/functions/blog.functions';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
	const result = await getBlogPostsAndTags(fetch);
	const tag = result.tags.find((s: Tag) => s.slug === params.slug);

	return {
		posts: result.posts.filter((s) => s.tags.includes(tag)),
		tag: tag
	};
}
