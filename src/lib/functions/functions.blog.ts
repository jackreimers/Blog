import type { BlogPost } from '$lib/interfaces/post.blog';
import type { Tag } from '$lib/interfaces/tag';
import { error } from '@sveltejs/kit';

const metadataPattern = /^---([\s\S]*?)---/;
const arrayPattern = /^\[.*]$/;

export async function getBlogPostsAndTags(fetch: any) {
	const directoryResponse = await fetch('/data/directory.json');
	const directoryData = await directoryResponse.json();

	const tagsResponse = await fetch(`/data/tags.json`);
	const tags = await tagsResponse.json();

	const fileNames = directoryData.blog;
	const posts: BlogPost[] = [];

	for (let i = 0; i < fileNames.length; i++) {
		const postResponse = await fetch(`/data/blog/${fileNames[i]}/post.md`);
		const postData = await postResponse.text();

		posts.push(parseBlogPost(postData, tags));
	}

	return {
		posts: posts,
		tags: tags
	};
}

export function parseBlogPost(data: string, tags: Tag[]): BlogPost {
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

	const split = data.split('<!--endintro-->');

	const mappedMetadata: { [key: string]: string | string[] } = Object.fromEntries(accumulator);
	const intro = split[0].split('---').pop() || '';
	const content = split[1] || '';

	const date = new Date(mappedMetadata['date'] as string);
	const dateString = `${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}, ${date.getFullYear()}`;

	const tagSlugs = mappedMetadata['tags'] as string[];
	const filteredTags = tags.filter((tag) => tagSlugs.includes(tag.slug));

	return {
		date: new Date(mappedMetadata['date'] as string),
		dateString: dateString,
		tags: filteredTags,
		title: mappedMetadata['title'] as string,
		description: mappedMetadata['description'] as string,
		slug: mappedMetadata['slug'] as string,
		imageHref: (mappedMetadata['imageHref'] as string) ?? null,
		imageAlt: (mappedMetadata['imageAlt'] as string) ?? null,
		intro: intro,
		content: content
	};
}
