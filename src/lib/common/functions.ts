import { error } from '@sveltejs/kit';
import type { BlogPost } from '$lib/common/types';

const metadataPattern = /^---([\s\S]*?)---/;
const arrayPattern = /^\[.*]$/;

export function getDateString(date: Date): string {
	return `
		${date.getDate()}
		${date.toLocaleString('default', { month: 'long' })}
		${date.getFullYear()}`;
}

export async function getBlogPost(fetch: any, slug: string): Promise<BlogPost> {
	const postResponse = await fetch(`/posts/${slug}.md`);
	const tagsResponse = await fetch('/data/tags.json');

	if (!postResponse.ok) {
		error(404);
	}

	if (!tagsResponse.ok) {
		error(500);
	}

	const postData = await postResponse.text();
	const tagsData = await tagsResponse.json();

	return parseBlogPost(postData, tagsData);
}

export async function getBlogPosts(fetch: any): Promise<BlogPost[]> {
	const directoryResponse = await fetch('/posts/directory.json');
	const tagsResponse = await fetch('/data/tags.json');

	const directoryData = await directoryResponse.json();
	const tagsData = await tagsResponse.json();
	const fileNames = directoryData.files;

	let posts: BlogPost[] = [];

	//TODO: Add pagination and only fetch the posts needed
	for (let i = 0; i < fileNames.length; i++) {
		const postResponse = await fetch(`/posts/${fileNames[i]}`);

		if (!postResponse.ok) {
			error(500);
		}

		const postData = await postResponse.text();
		const post = parseBlogPost(postData, tagsData);

		posts.push(post);
	}

	//TODO: Debugging purposes only
	await new Promise((resolve) => setTimeout(resolve, 2000));
	return posts;
}

function parseBlogPost(data: string, tagMappings: object): BlogPost {
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
	const tags = mappedMetadata['tags'] as string[];
	const mappedTags = tags.map((tag: string) => {
		return {
			// @ts-ignore
			name: tagMappings[tag] ?? tag,
			slug: tag
		};
	});

	const intro = split[0].split('---').pop() || '';
	const content = split[1] || '';

	return {
		date: new Date(mappedMetadata['date'] as string),
		tags: mappedTags,
		title: mappedMetadata['title'] as string,
		slug: mappedMetadata['slug'] as string,
		intro: intro,
		content: content
	};
}
