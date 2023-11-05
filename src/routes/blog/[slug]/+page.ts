import { PUBLIC_APP_ROOT } from '$env/static/public';

interface PageLoadRequest {
	slug: string;
}

interface PageLoadResult {
	content: string;
}

/** @type {import('./$types').PageLoad} */
//TODO: Figure out what the type is for params
//@ts-ignore
export async function load({ params }): PageLoadResult {
	const blogContent = await fetch(`${PUBLIC_APP_ROOT}/posts/test.md`);
	return { content: await blogContent.text() };

	//throw error(404, 'Not found');
}
