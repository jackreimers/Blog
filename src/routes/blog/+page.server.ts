import { getTags, mapTag, getBlogPosts } from '$lib/common/functions';

export const prerender = false;

/** @type {import('./$types').PageServerLoad} */
export async function load({ url, fetch }) {
	const newest = JSON.parse(url.searchParams.get('newest') || 'true');
	const activeTag = url.searchParams.get('tag') || null;

	return {
		filters: {
			newest: newest,
			tags: {
				all: getTags(fetch),
				active: mapTag(fetch, activeTag)
			}
		},
		posts: getBlogPosts(fetch, newest, activeTag)
	};
}
