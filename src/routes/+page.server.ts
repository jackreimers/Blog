import type { PageServerLoad } from './$types';
import { getPosts } from '$lib/functions/functions.posts';
import { getTestimonials } from '$lib/functions/functions.testimonials';

export const load: PageServerLoad = async ({ fetch }) => {
	return {
		posts: (await getPosts(fetch, null)).posts.slice(0, 3),
		testimonials: await getTestimonials(fetch)
	};
};
