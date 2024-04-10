import { error } from '@sveltejs/kit';
import type { BlogPost, Tag } from '$lib/common/types';

const metadataPattern = /^---([\s\S]*?)---/;
const arrayPattern = /^\[.*]$/;

export function preloadImage(src: string): Promise<void> {
	return new Promise((resolve) => {
		const img = new Image();
		img.src = src;
		img.onload = resolve;
	});
}

export function getDateString(date: Date): string {
	return `
		${date.getDate()}
		${date.toLocaleString('default', { month: 'long' })}
		${date.getFullYear()}`;
}

export async function getTags(fetch: any): Promise<Tag[]> {
	const response = await fetch('/data/tags.json');
	return await response.json();
}

export async function getBlogPost(fetch: any, slug: string): Promise<BlogPost> {
	const response = await fetch(`/posts/${slug}.md`);
	const data = await response.text();

	return parseBlogPost(fetch, data);
}

export async function getBlogPosts(
	fetch: any,
	newest: boolean,
	tagFilter: string | null
): Promise<BlogPost[]> {
	//The directory file MUST be ordered chronologically
	const directoryResponse = await fetch('/posts/directory.json');
	const directoryData = await directoryResponse.json();

	let fileNames = directoryData.files;

	if (!newest) {
		fileNames.reverse();
	}

	let posts: BlogPost[] = [];

	//TODO: Add pagination and only fetch the posts needed
	for (let i = 0; i < fileNames.length; i++) {
		const postResponse = await fetch(`/posts/${fileNames[i]}.md`);
		const postData = await postResponse.text();
		const post = await parseBlogPost(fetch, postData);

		if (!tagFilter || post.tags.some((s) => s.slug === tagFilter)) {
			posts.push(post);
		}
	}

	//Debugging purposes only
	//await new Promise((resolve) => setTimeout(resolve, 3000));
	return posts;
}

async function parseTags(fetch: any, data: string[]): Promise<Tag[]> {
	const response = await fetch('/data/tags.json');
	const tags = await response.json();

	return tags.filter((f: Tag) => data.includes(f.slug));
}

async function parseBlogPost(fetch: any, data: string): Promise<BlogPost> {
	const split = data.split('<!--endintro-->');
	const matched = data.match(metadataPattern);
	if (!matched) {
		error(500);
	}

	const metadata = matched[1].split('\n');
	const accumulator = metadata.reduce((accumulator: [string, string | string[]][], line) => {
		const [key, ...value] = line.split(':').map((part) => part.trim());

		if (key) {
			const joinedValue = value[1] ? value.join(':') : value.join('');
			const isArray = arrayPattern.test(joinedValue);

			if (isArray) {
				accumulator.push([key, JSON.parse(joinedValue)]);
			} else {
				accumulator.push([key, joinedValue]);
			}
		}
		return accumulator;
	}, []);

	const mappedMetadata: { [key: string]: string | string[] } = Object.fromEntries(accumulator);
	const intro = split[0].split('---').pop() || '';
	const content = split[1] || '';

	return {
		date: new Date(mappedMetadata['date'] as string),
		tags: await parseTags(fetch, mappedMetadata['tags'] as string[]),
		title: mappedMetadata['title'] as string,
		slug: mappedMetadata['slug'] as string,
		intro: intro,
		content: content
	};
}
