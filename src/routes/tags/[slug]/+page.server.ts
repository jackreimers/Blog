import type { BlogPost } from '$lib/interfaces/post-blog';
import type { Tag } from '$lib/interfaces/tag';
import { parseBlogPost } from '$lib/functions/blog.functions';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
	//TODO: Extract to a function
	const directoryResponse = await fetch('/data/directory.json');
	const directoryData = await directoryResponse.json();

	const tagsResponse = await fetch(`/data/tags.json`);
	const tags: Tag[] = await tagsResponse.json();
	const tag = tags.find((s: Tag) => s.slug === params.slug) ?? error(404, 'Tag not found!');

	const fileNames = directoryData.posts;
	const posts: BlogPost[] = [];

	for (let i = 0; i < fileNames.length; i++) {
		const postResponse = await fetch(`/data/posts-blog/${fileNames[i]}.md`);
		const postData = await postResponse.text();

		posts.push(parseBlogPost(postData, tags));
	}

	return {
		posts: posts.filter((s) => s.tags.includes(tag)),
		tag: tag
	};
}
