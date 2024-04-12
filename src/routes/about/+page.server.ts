export async function load({ fetch }) {
	return {
		about: await getAbout(fetch)
	};
}

async function getAbout(fetch: any): Promise<string> {
	const response = await fetch('/data/about/about.md');
	return await response.text();
}
