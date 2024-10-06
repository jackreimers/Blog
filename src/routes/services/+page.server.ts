import { getTestimonials } from '$lib/functions/functions.testimonials';
import { getPosts } from '$lib/functions/functions.posts';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	const servicesResponse = await fetch(`/content/services/services.md`);

	return {
		testimonials: await getTestimonials(fetch),
		services: await servicesResponse.text(),
		...(await getPosts(fetch, 'projects'))
	};
}
