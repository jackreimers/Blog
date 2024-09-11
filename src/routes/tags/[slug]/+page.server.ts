import { getPosts, getTags } from '$lib/functions/functions.posts';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
	const tagsResult = await getTags(fetch);

	if (!tagsResult.filter((tag) => tag.slug === params.slug).length) {
		{
			return {
				posts: []
			};
		}
	}

	const postsResult = await getPosts(fetch, tagsResult, null, params.slug);

	return {
		...postsResult
	};
}
