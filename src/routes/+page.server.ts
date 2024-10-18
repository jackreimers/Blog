import { getPosts } from '$lib/functions/functions.posts';
import { getTestimonials } from '$lib/functions/functions.testimonials';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	return {
		posts: (await getPosts(fetch, null)).posts.slice(0, 3),
		testimonials: await getTestimonials(fetch)
	};
}
