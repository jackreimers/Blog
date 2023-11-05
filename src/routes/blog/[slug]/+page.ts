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
	//TODO: Figure out how to use relative paths and HTTPS here - https://github.com/sveltejs/kit/issues/3479 | https://kit.svelte.dev/docs/modules
	//http://localhost:5173

	// @ts-ignore
	FetchEvent;
	const blogContent = await fetch('/posts/test.md');
	return { content: await blogContent.text() };

	//throw error(404, 'Not found');
}
