import { getBlogPosts } from '$lib/common/functions';
import type { Tag } from '$lib/common/types';

export const prerender = false;

/** @type {import('./$types').PageServerLoad} */
export async function load({ url, fetch }) {
	const newest = JSON.parse(url.searchParams.get('newest') || 'true');
	const activeTag = url.searchParams.get('tag') || null;

	const tagResponse = await fetch('/data/tags.json');
	const allTags = await tagResponse.json();
	const mappedActiveTag = allTags.filter((f: Tag) => activeTag === f.slug)[0];

	return {
		filters: {
			newest: newest,
			tags: {
				active: mappedActiveTag,
				all: allTags
			}
		},
		posts: getBlogPosts(fetch, newest, activeTag)
	};
}
