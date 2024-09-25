import { error } from '@sveltejs/kit';
import type { Post, PostData } from '$lib/interfaces/interfaces.posts';
import type { Tag } from '$lib/interfaces/interfaces.tags';

const metadataPattern = /^---([\s\S]*?)---/;
const arrayPattern = /^\[.*]$/;

export async function getTags(fetch: any): Promise<Tag[]> {
	const tagsResponse = await fetch(`/content/tags.json`);
	return await tagsResponse.json();
}

export async function getPostData(fetch: any, href: string): Promise<PostData> {
	const postResponse = await fetch(href);
	const postData = await postResponse.text();

	const matched = postData.match(metadataPattern);

	if (!matched) {
		error(500, 'Failed to read post data!');
	}

	const metadata = matched[1].split('\n');
	const accumulator = metadata.reduce((accumulator: [string, string | string[]][], line: any) => {
		const [key, ...value] = line.split(':').map((part: string) => part.trim());

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

	if (postData.match(/<!--endintro-->/)) {
		const split = postData.split('<!--endintro-->');

		return {
			metadata: mappedMetadata,
			excerpt: split[0].split('---').pop(),
			content: split[1]
		};
	} else {
		return {
			metadata: mappedMetadata,
			excerpt: '',
			content: postData.split('---').pop()
		};
	}
}

export async function getPosts(
	fetch: any,
	allTags: Tag[] | null = null,
	directory: 'blog' | 'projects' | null = null,
	filter: string | null = null
): Promise<{ tagFilter: Tag | null; posts: Post[]; tags: any }> {
	const directoryResponse = await fetch('/content/directory.json');
	const directoryData = await directoryResponse.json();

	let filePathDetails: { directory: string; slug: string }[];

	if (!directory) {
		const blogFilePathDetails = directoryData['blog'].map((s: string) => ({
			directory: 'blog',
			slug: s
		}));

		const projectsFilePaths = directoryData['projects'].map((s: string) => ({
			directory: 'projects',
			slug: s
		}));

		filePathDetails = blogFilePathDetails.concat(projectsFilePaths);
	} else {
		filePathDetails = directoryData[directory].map((s: string) => ({
			directory: directory,
			slug: s
		}));
	}

	if (!allTags) {
		allTags = await getTags(fetch);
	}

	const posts: Post[] = [];
	const relevantTags: Tag[] = [];
	let tagFilter: Tag | null = null;

	if (filter) {
		tagFilter = allTags.find((tagData: Tag) => tagData.slug === filter) ?? null;

		if (!tagFilter) {
			error(500, `Tag ${filter} not found!`);
		}
	}

	for (let i = 0; i < filePathDetails.length; i++) {
		const postData = await getPostData(
			fetch,
			`/content/${filePathDetails[i].directory}/${filePathDetails[i].slug}/post.md`
		);

		const post = parsePostData(postData, allTags, filePathDetails[i].directory);

		if (tagFilter && !post.tags.includes(tagFilter)) {
			continue;
		}

		posts.push(post);
		const tagSlugs = postData.metadata['tags'] as string[];

		//Filter out irrelevant tags
		for (let j = 0; j < tagSlugs.length; j++) {
			const tag = allTags.find((s: Tag) => s.slug === tagSlugs[j]);

			if (!tag) {
				error(500, `Tag ${tagSlugs[j]} not found!`);
			}

			if (!relevantTags.includes(tag)) {
				relevantTags.push(tag);
			}
		}
	}

	return {
		posts: posts.sort(compareDates) ?? [],
		tags: relevantTags ?? [],
		tagFilter: tagFilter
	};
}

export function parsePostData(data: PostData, tags: Tag[], postType: string): Post {
	const date = new Date(data.metadata['date'] as string);
	const dateString = `${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}, ${date.getFullYear()}`;

	const tagSlugs = data.metadata['tags'] as string[];
	const filteredTags = tags.filter((tag) => tagSlugs.includes(tag.slug));

	return {
		date: date,
		dateString: dateString,
		type: postType,
		tags: filteredTags,
		title: data.metadata['title'] as string,
		description: data.metadata['description'] as string,
		slug: data.metadata['slug'] as string,
		imageHref: (data.metadata['imageHref'] as string) ?? null,
		imageAlt: (data.metadata['imageAlt'] as string) ?? null,
		excerpt: data.excerpt,
		content: data.content
	};
}

//Orders by newest first
function compareDates(a: Post, b: Post) {
	if (a.date < b.date) {
		return 1;
	}
	if (a.date > b.date) {
		return -1;
	}
	return 0;
}
