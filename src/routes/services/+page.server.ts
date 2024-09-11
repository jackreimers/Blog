/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	const websiteResponse = await fetch(`/content/services/website-development.md`);
	const websiteData = await websiteResponse.text();

	const webApplicationResponse = await fetch(`/content/services/web-application-development.md`);
	const webApplicationData = await webApplicationResponse.text();

	const wordpressResponse = await fetch(`/content/services/wordpress-development.md`);
	const wordpressData = await wordpressResponse.text();

	return {
		services: {
			website: websiteData,
			webApplication: webApplicationData,
			wordpress: wordpressData
		}
	};
}
