/** @type {import('./$types').RequestHandler} */
export async function GET({ fetch }) {
	const htmlResponse = await fetch('/content/html/built-tag.html');
	const html = await htmlResponse.text();

	return new Response(String(html));
}
