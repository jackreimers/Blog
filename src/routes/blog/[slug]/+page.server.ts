import { parseBlogPostData } from '$lib/functions/functions.blog';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
	const postResponse = await fetch(`/data/blog/${params.slug}/post.md`);
	const tagsResponse = await fetch(`/data/tags.json`);

	const postData = await postResponse.text();
	const tagsData = await tagsResponse.json();

	const post = parseBlogPostData(postData, tagsData);

	return {
		post: post
	};
}

/** @type {import('./$types').EntryGenerator} */
export async function entries() {
	//TODO: Investigate making this dynamically populated
	return [{ slug: 'sending-emails-with-ms-graph' }, { slug: 'six-interesting-svelte-features' }];
}
