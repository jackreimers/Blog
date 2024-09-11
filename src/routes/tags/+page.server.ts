import type { Tag } from '$lib/interfaces/interfaces.tags';
import { getPosts, getTags } from '$lib/functions/functions.posts';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	const tagsResult = await getTags(fetch);
	const postsResult = await getPosts(fetch, tagsResult);

	//Get the post count for each tag
	for (const tag of postsResult.tags) {
		tag.count = postsResult.posts.filter((post) => post.tags.includes(tag)).length;
	}

	return {
		tags: postsResult.tags.sort((a: Tag, b: Tag) => (b.count ?? 0) - (a.count ?? 0))
	};
}
