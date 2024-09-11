import { getPostData, getTags, parsePostData } from '$lib/functions/functions.posts';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
	const tagsResult = await getTags(fetch);

	const postData = await getPostData(fetch, `/content/blog/${params.slug}/post.md`);
	const post = parsePostData(postData, tagsResult, 'blog');

	return {
		post: post
	};
}
