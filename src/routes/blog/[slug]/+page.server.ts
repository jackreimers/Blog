import { getBlogPost, parseBlogPost } from '$lib/common/functions';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
	const postResponse = await fetch(`/posts/${params.slug}.md`);
	const tagsResponse = await fetch('/data/tags.json');

	if (!postResponse.ok) {
		error(404);
	}

	if (!tagsResponse.ok) {
		error(500);
	}

	const postData = await postResponse.text();
	const tagsData = await tagsResponse.json();

	return { post: parseBlogPost(postData, tagsData) };
}
