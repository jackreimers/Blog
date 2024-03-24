import { error } from '@sveltejs/kit';
import type { BlogPost, BlogPostMetadata, Category } from '$lib/types/types';
import { categoryMappings } from '$lib/objects/objects';

const metadataPattern = /^---([\s\S]*?)---/;
const arrayPattern = /^\[.*]$/;

export function getDateString(date: Date): string {
	return `
		${date.getDate()}
		${date.toLocaleString('default', { month: 'long' })}
		${date.getFullYear()}`;
}

export function parseBlogPost(data: string): BlogPost {
	const split = data.split('<!--endintro-->');

	const metadata = parseMetadata(split[0]);
	const intro = split[0].split('---').pop() || '';
	const content = split[1] || '';

	return {
		metadata,
		intro,
		content
	};
}

function parseMetadata(content: string): BlogPostMetadata {
	const matched = content.match(metadataPattern);
	if (!matched) {
		throw error(500, 'Blog post is missing metadata!');
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
		categories: parseCategories(mappedMetadata['categories'] as string[])
	};
}

function parseCategories(categories: string[]): Category[] {
	return categories.map((category) => {
		return {
			name: categoryMappings.find((i) => i.slug == category)?.name ?? category,
			slug: category
		};
	});
}
