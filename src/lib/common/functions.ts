import type { BlogPost, Tag } from '$lib/common/types';
import { error } from '@sveltejs/kit';

const metadataPattern = /^---([\s\S]*?)---/;
const arrayPattern = /^\[.*]$/;

export function getDateString(date: Date): string {
	return `
		${date.getDate()}
		${date.toLocaleString('default', { month: 'long' })}
		${date.getFullYear()}`;
}

export async function getBlogPost(fetch: any, slug: string): Promise<BlogPost> {
	const response = await fetch(`/data/blog-posts/${slug}.md`);
	const data = await response.text();

	return parseBlogPost(fetch, data);
}

export async function getBlogPosts(
	fetch: any,
	newest: boolean,
	tagFilter: string | null
): Promise<BlogPost[]> {
	//The directory file MUST be ordered chronologically
	const directoryResponse = await fetch('/data/directory.json');
	const directoryData = await directoryResponse.json();

	let fileNames = directoryData.posts;

	if (!newest) {
		fileNames.reverse();
	}

	let posts: BlogPost[] = [];

	//TODO: Add pagination and only fetch the posts needed
	for (let i = 0; i < fileNames.length; i++) {
		const postResponse = await fetch(`/data/blog-posts/${fileNames[i]}.md`);
		const postData = await postResponse.text();
		const post = await parseBlogPost(fetch, postData);

		if (!tagFilter || post.tags.some((s) => s.slug === tagFilter)) {
			posts.push(post);
		}
	}

	//Debugging purposes only
	await new Promise((resolve) => setTimeout(resolve, 500));
	return posts;
}

export async function getTag(fetch: any, tag: string | null): Promise<Tag | null> {
	if (tag === null) return null;

	const tags = await getTags(fetch);
	return tags.find((f) => f.slug === tag) ?? null;
}

export async function getTags(fetch: any): Promise<Tag[]> {
	const response = await fetch('/data/tags.json');
	return await response.json();
}

export async function getProjectPost() {}

export async function getProjectPosts() {}

export async function getAbout(fetch: any): Promise<string> {
	const response = await fetch('/data/about/about.md');
	return await response.text();
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
		description: mappedMetadata['description'] as string,
		slug: mappedMetadata['slug'] as string,
		intro: intro,
		content: content
	};
}
