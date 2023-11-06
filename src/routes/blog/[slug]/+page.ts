import { PUBLIC_APP_ROOT } from '$env/static/public';

//TODO: Move these to their own files
interface PageLoadRequest {
	slug: string;
}

interface PageLoadResult {
	content: string;
}

const mockContent = `
# This is a header

This is a paragraph.

* This is a list
* With two items
    1. And a sublist
    2. That is ordered

    * With another
    * Sublist inside

| And this is | A table |
|-------------|---------|
| With two    | columns |
`;

/** @type {import('./$types').PageLoad} */
//TODO: Figure out what the type is for params
//@ts-ignore
export async function load({ params }): PageLoadResult {
	//TODO: Fix certificate issue so fetch works when running locally - returning mock content for now
	if (PUBLIC_APP_ROOT === 'https://localhost:5173') {
		return { content: mockContent };
	} else {
		const blogContent = await fetch(`${PUBLIC_APP_ROOT}/posts/test.md`);
		return { content: await blogContent.text() };
	}

	//throw error(404, 'Not found');
}
