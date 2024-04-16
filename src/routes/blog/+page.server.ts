import { getTag, getTags, getBlogPosts } from '$lib/common/functions';

export const prerender = false;

/** @type {import('./$types').PageServerLoad} */
export async function load({ url, fetch }) {
	const newest = JSON.parse(url.searchParams.get('newest') || 'true');
	const tag = url.searchParams.get('tag') || null;

	return {
		filters: {
			newest: newest,
			tags: {
				active: getTag(fetch, tag),
				all: getTags(fetch)
			}
		},
		posts: getBlogPosts(fetch, newest, tag)
	};
}
