import type { BlogPost } from '$lib/interfaces/post-blog';
import { parseBlogPost } from '$lib/functions/blog.functions';

export const prerender = true;

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	const directoryResponse = await fetch('/data/directory.json');
	const directoryData = await directoryResponse.json();

	const tagsResponse = await fetch(`/data/tags.json`);
	const tagsData = await tagsResponse.json();

	const fileNames = directoryData.posts;
	const posts: BlogPost[] = [];

	//Only take three most recent posts
	for (let i = 0; i < Math.min(fileNames.length, 3); i++) {
		const postResponse = await fetch(`/data/posts-blog/${fileNames[i]}.md`);
		const postData = await postResponse.text();

		posts.push(parseBlogPost(postData, tagsData));
	}

	return {
		posts: posts,
		tags: tagsData
	};
}
