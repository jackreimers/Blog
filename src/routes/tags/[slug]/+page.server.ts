import type { PageServerLoad } from './$types';
import { getPosts } from '$lib/functions/functions.posts';

/** @type {import('./$types').PageServerLoad} */
export const load: PageServerLoad = async ({ fetch, params }) => {
	return {
		...(await getPosts(fetch, null, params.slug))
	};
};
