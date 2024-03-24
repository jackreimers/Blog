import { error } from '@sveltejs/kit';
import { parseBlogPost } from '$lib/functions/functions';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	try {
		const postResponse = await fetch(`/posts/${params.slug}.md`);
		const postData = await postResponse.text();
		const post = parseBlogPost(postData);

		return { post: post };
	} catch (e) {
		throw error(500, 'There was an error fetching the blog post!');
	}
}
