import type { PageServerLoad } from './$types';
import { getPosts } from '$lib/functions/functions.posts';

export const load: PageServerLoad = async ({ fetch }) => {
	return {
		...(await getPosts(fetch, 'blog'))
	};
};
