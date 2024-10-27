import type { PageServerLoad } from './$types';
import type { ProjectPost } from '$lib/interfaces/interfaces';
import { getPost } from '$lib/functions/functions.posts';

export const load: PageServerLoad = async ({ fetch, params }) => {
	return {
		post: (await getPost(fetch, params.slug, 'projects')) as ProjectPost
	};
};
