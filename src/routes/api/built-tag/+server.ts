/** @type {import('./$types').RequestHandler} */
export async function GET({ fetch }) {
	const htmlResponse = await fetch('/content/html/built-tag.html');
	const html = await htmlResponse.text();

	const response = new Response(String(html));
	response.headers.append('Access-Control-Allow-Origin', '*');

	return response;
}
