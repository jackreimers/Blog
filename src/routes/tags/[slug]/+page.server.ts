import type { Tag } from '$lib/interfaces/tag';
import { getBlogPostsAndTags } from '$lib/functions/functions.blog';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
	const result = await getBlogPostsAndTags(fetch);
	const tag = result.tags.find((s: Tag) => s.slug === params.slug);

	return {
		posts: result.posts.filter((s) => s.tags.includes(tag)),
		tag: tag
	};
}

/** @type {import('./$types').EntryGenerator} */
export async function entries() {
	//TODO: Investigate making this dynamically populated
	return [{ slug: 'javascript' }, { slug: 'typescript' }, { slug: 'svelte' }];
}
