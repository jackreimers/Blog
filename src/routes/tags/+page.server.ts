import type { Tag } from '$lib/interfaces/tag';
import { getBlogPostsAndTags } from '$lib/functions/blog.functions';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	const result = await getBlogPostsAndTags(fetch);

	for (const tag of result.tags) {
		tag.count = result.posts.filter((post) => post.tags.includes(tag)).length;
	}

	return {
		tags: result.tags.sort((a: Tag, b: Tag) => (b.count ?? 0) - (a.count ?? 0))
	};
}
