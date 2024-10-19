import { getMarkdownData } from '$lib/functions/functions.markdown';
import type { Testimonial } from '$lib/interfaces/interfaces';

export async function getTestimonials(fetch: any): Promise<Testimonial[]> {
	const directoryResponse = await fetch('/content/directory.json');
	const directoryData = await directoryResponse.json();

	const testimonials: Testimonial[] = [];

	for (let i = 0; i < directoryData.testimonials.length; i++) {
		const testimonial = await getMarkdownData(
			fetch,
			`/content/testimonials/${directoryData.testimonials[i]}.md`
		);

		testimonials.push({
			name: testimonial.metadata['name'] as string,
			organisation: testimonial.metadata['organisation'] as string,
			content: testimonial.content
		});
	}

	return testimonials;
}
