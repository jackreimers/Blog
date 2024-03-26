import { error } from '@sveltejs/kit';
import { parseBlogPost } from '$lib/common/functions';
import type { BlogPost } from '$lib/common/types';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	const directoryResponse = await fetch('/posts/directory.json');
	const tagsResponse = await fetch('/data/tags.json');

	if (!directoryResponse.ok) {
		throw error(500);
	}

	if (!tagsResponse.ok) {
		throw error(500);
	}

	const directoryData = await directoryResponse.json();
	const tagsData = await tagsResponse.json();
	const fileNames = directoryData.files;

	let posts: BlogPost[] = [];

	//TODO: Add pagination and only fetch the posts needed
	for (let i = 0; i < fileNames.length; i++) {
		const postResponse = await fetch(`/posts/${fileNames[i]}`);

		if (!postResponse.ok) {
			throw error(500);
		}

		const postData = await postResponse.text();
		const post = parseBlogPost(postData, tagsData);

		posts.push(post);
	}

	return { posts: posts };
}
