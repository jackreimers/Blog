import { getTestimonials } from '$lib/functions/functions.testimonials';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	const testimonials = await getTestimonials(fetch);

	const servicesResponse = await fetch(`/content/services/services.md`);
	const servicesData = await servicesResponse.text();

	return {
		services: servicesData,
		testimonials: testimonials
	};
}
