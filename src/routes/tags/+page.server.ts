import type { PageServerLoad } from './$types';
import { getPosts } from '$lib/functions/functions.posts';

export const load: PageServerLoad = async ({ fetch }) => {
	const posts = await getPosts(fetch);

	return {
		tags: posts.tags
	};
};
