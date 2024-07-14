import type { BlogPost } from '$lib/interfaces/post-blog';
import { parseBlogPost } from '$lib/functions/blog.functions';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	const directoryResponse = await fetch('/data/directory.json');
	const directoryData = await directoryResponse.json();

	const tagsResponse = await fetch(`/data/tags.json`);
	const tags = await tagsResponse.json();

	const fileNames = directoryData.posts;
	const posts: BlogPost[] = [];

	for (let i = 0; i < fileNames.length; i++) {
		const postResponse = await fetch(`/data/posts-blog/${fileNames[i]}.md`);
		const postData = await postResponse.text();

		posts.push(parseBlogPost(postData, tags));
	}

	return {
		posts: posts
	};
}
