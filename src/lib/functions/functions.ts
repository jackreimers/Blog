import { PUBLIC_APP_ROOT } from '$env/static/public';
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

export async function getPosts(): Promise<BlogPost[]> {
	const contents = await fetch(`${PUBLIC_APP_ROOT}/posts/_contents.md`);
	const contentsText = await contents.text();

	const postNames = contentsText.split('\n');
	const posts: BlogPost[] = [];

	for (let i = 0; i < postNames.length; i++) {
		const postName = postNames[i];
		const post = await getPost(postName);
		posts.push(post);
	}

	return posts;
}

export async function getPost(slug: string): Promise<BlogPost> {
	try {
		let blogText: string;

		const blogContent = await fetch(`${PUBLIC_APP_ROOT}/posts/${slug}.md`);
		blogText = await blogContent.text();

		const split = blogText.split('<!--endintro-->');

		const metadata = parseMetadata(split[0]);
		const intro = split[0].split('---').pop() || '';
		const content = split[1] || '';

		//Calculate time to read article
		const wordCount = intro.split(' ').length + content.split(' ').length;
		metadata.readTime = Math.ceil(wordCount / 200);

		return {
			metadata,
			intro,
			content
		};
	} catch (e) {
		console.log(e);
		throw error(404, 'Blog post not found!');
	}
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
		categories: parseCategories(mappedMetadata['categories'] as string[]),
		readTime: 0
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

function getOrdinalSuffix(i) {
	let j = i % 10,
		k = i % 100;

	if (j === 1 && k !== 11) return i + 'st';

	if (j === 2 && k !== 12) return i + 'nd';

	if (j === 3 && k !== 13) return i + 'rd';

	return i + 'th';
}
