import { parseBlogPost } from '$lib/functions/blog.functions';

export const prerender = true;

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
	const postResponse = await fetch(`/data/posts-blog/${params.slug}.md`);
	const tagsResponse = await fetch(`/data/tags.json`);

	const postData = await postResponse.text();
	const tagsData = await tagsResponse.json();

	const post = parseBlogPost(postData, tagsData);

	return {
		post: post
	};
}

/** @type {import('./$types').EntryGenerator} */
export async function entries() {
	//TODO: Investigate making this dynamically populated
	return [{ slug: 'sending-emails-with-exchange' }, { slug: 'six-interesting-svelte-features' }];
}
