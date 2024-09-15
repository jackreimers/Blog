/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	const servicesResponse = await fetch(`/content/services/services.md`);
	const servicesData = await servicesResponse.text();

	return {
		services: servicesData
	};
}
