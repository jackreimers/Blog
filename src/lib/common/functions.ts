import { error } from '@sveltejs/kit';
import type { BlogPost, Tag } from '$lib/common/types';

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

	const postData = await postResponse.text();
	const tagsData = await tagsResponse.json();

	return parseBlogPost(postData, tagsData);
}

export async function getBlogPosts(
	fetch: any,
	newest: boolean,
	tagFilter: string | null
): Promise<BlogPost[]> {
	//The directory file MUST be ordered chronologically
	const directoryResponse = await fetch('/posts/directory.json');
	const tagsResponse = await fetch('/data/tags.json');
	const directoryData = await directoryResponse.json();
	const tagsData = await tagsResponse.json();

	let fileNames = directoryData.files;

	if (!newest) {
		fileNames.reverse();
	}

	let posts: BlogPost[] = [];

	//TODO: Add pagination and only fetch the posts needed
	for (let i = 0; i < fileNames.length; i++) {
		const postResponse = await fetch(`/posts/${fileNames[i]}.md`);
		const postData = await postResponse.text();
		const post = parseBlogPost(postData, tagsData);

		if (!tagFilter || post.tags.some((s) => s.slug === tagFilter)) {
			posts.push(post);
		}
	}

	//Debugging purposes only
	//await new Promise((resolve) => setTimeout(resolve, 3000));
	return posts;
}

function parseBlogPost(data: string, allTags: Tag[]): BlogPost {
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
	const filteredTags = allTags.filter((f) => tags.includes(f.slug));

	const intro = split[0].split('---').pop() || '';
	const content = split[1] || '';

	return {
		date: new Date(mappedMetadata['date'] as string),
		tags: filteredTags,
		title: mappedMetadata['title'] as string,
		slug: mappedMetadata['slug'] as string,
		intro: intro,
		content: content
	};
}
