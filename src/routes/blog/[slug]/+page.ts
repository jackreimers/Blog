import { error } from '@sveltejs/kit';
import { parseBlogPost } from '$lib/functions/functions';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	const postResponse = await fetch(`/posts/${params.slug}.md`);

	if (!postResponse.ok) {
		throw error(404, 'Blog post not found!');
	}

	const postData = await postResponse.text();
	const post = parseBlogPost(postData);

	return { post: post };
}
