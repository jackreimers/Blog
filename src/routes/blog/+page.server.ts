import { getBlogPosts } from '$lib/common/functions';
import type { Tag } from '$lib/common/types';

export const prerender = false;

/** @type {import('./$types').PageServerLoad} */
export async function load({ url, fetch }) {
	const newest = JSON.parse(url.searchParams.get('newest') || 'true');
	const activeTags = url.searchParams.get('tags')?.split(',') ?? [];

	const tagResponse = await fetch('/data/tags.json');
	const allTags = await tagResponse.json();
	const mappedActiveTags = allTags.filter((f: Tag) => activeTags.includes(f.slug));

	return {
		filters: {
			newest: newest,
			tags: {
				active: mappedActiveTags,
				all: allTags
			}
		},
		posts: getBlogPosts(fetch, newest, activeTags)
	};
}
