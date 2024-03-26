import { error } from '@sveltejs/kit';
import type { BlogPost, BlogPostMetadata, Category } from '$lib/common/types';

const metadataPattern = /^---([\s\S]*?)---/;
const arrayPattern = /^\[.*]$/;

export function getDateString(date: Date): string {
	return `
		${date.getDate()}
		${date.toLocaleString('default', { month: 'long' })}
		${date.getFullYear()}`;
}

export function parseBlogPost(data: string, tags: object): BlogPost {
	const split = data.split('<!--endintro-->');

	const metadata = parseMetadata(split[0], tags);
	const intro = split[0].split('---').pop() || '';
	const content = split[1] || '';

	return {
		metadata,
		intro,
		content
	};
}

function parseMetadata(content: string, tags: object): BlogPostMetadata {
	const matched = content.match(metadataPattern);
	if (!matched) {
		throw error(500);
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

	return {
		date: new Date(Date.parse(mappedMetadata['date'] as string)),
		title: mappedMetadata['title'] as string,
		slug: mappedMetadata['slug'] as string,
		categories: parseCategories(mappedMetadata['categories'] as string[], tags)
	};
}

function parseCategories(categories: string[], tags: object): Category[] {
	return categories.map((category: string) => {
		return {
			// @ts-ignore
			name: tags[category] ?? category,
			slug: category
		};
	});
}
