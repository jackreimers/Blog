import { error } from '@sveltejs/kit';
import { parseBlogPost } from '$lib/common/functions';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	const postResponse = await fetch(`/posts/${params.slug}.md`);
	const tagsResponse = await fetch('/data/tags.json');

	if (!postResponse.ok) {
		throw error(404);
	}

	if (!tagsResponse.ok) {
		throw error(500);
	}

	const postData = await postResponse.text();
	const tagsData = await tagsResponse.json();
	const post = parseBlogPost(postData, tagsData);

	return { post: post };
}
