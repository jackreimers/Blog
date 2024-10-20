import type { Image, MarkdownData, Post, ProjectPost, Tag } from '$lib/interfaces/interfaces';
import { error } from '@sveltejs/kit';
import { getMarkdownData } from '$lib/functions/functions.markdown';

export async function getPost(fetch: any, slug: string, postType: string): Promise<Post> {
	const tags = await getTags(fetch);
	const markdownData = await getMarkdownData(fetch, `/content/${postType}/${slug}/post.md`);

	return parsePostData(markdownData, tags, postType);
}

export async function getPosts(
	fetch: any,
	postType: 'blog' | 'projects' | null = null,
	filter: string | null = null
): Promise<{ tagFilter: Tag | null; posts: Post[]; tags: any }> {
	const directoryResponse = await fetch('/content/directory.json');
	const directoryData = await directoryResponse.json();

	let filePathDetails: { directory: string; slug: string }[] = [];
	let directories = postType == null ? ['blog', 'projects'] : [postType];

	for (let i = 0; i < directories.length; i++) {
		filePathDetails = filePathDetails.concat(
			directoryData[directories[i]].map((s: string) => ({
				directory: directories[i],
				slug: s
			}))
		);
	}

	const tags = await getTags(fetch);
	const tagFilter = tags.find((tagData: Tag) => tagData.slug === filter) ?? null;

	if (filter && !tagFilter) {
		error(500, `Tag ${filter} not found!`);
	}

	const posts: Post[] = [];
	const relevantTags: Map<string, Tag> = new Map<string, Tag>();

	for (let i = 0; i < filePathDetails.length; i++) {
		const post = await getPost(fetch, filePathDetails[i].slug, filePathDetails[i].directory);

		if (filter && !post.tags.find((tag) => tag.slug == filter)) {
			continue;
		}

		posts.push(post);

		//Get all relevant tags
		for (let j = 0; j < post.tags.length; j++) {
			const relevantTag = relevantTags.get(post.tags[j].slug);

			if (!relevantTag) {
				const tag = post.tags[j];
				tag.count++;
				relevantTags.set(post.tags[j].slug, tag);
			} else {
				relevantTag.count++;
			}
		}
	}

	return {
		posts: posts.sort(compareDates) ?? [],
		tags: [...relevantTags.values()].sort(compareTags),
		tagFilter: tagFilter
	};
}

function parsePostData(data: MarkdownData, tags: Tag[], postType: string): Post | ProjectPost {
	const date = new Date(data.metadata['date'] as string);
	const dateString = `${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}, ${date.getFullYear()}`;

	const tagSlugs = data.metadata['tags'] as string[];
	const filteredTags = tags.filter((tag) => tagSlugs.includes(tag.slug));

	let excerpt: string = '';
	let content: string = data.content;

	if (data.content.match(/<!--endintro-->/)) {
		const split = data.content.split('<!--endintro-->');

		excerpt = split[0].split('---').pop() ?? '';
		content = split[1];
	}

	const post: Post | ProjectPost = {
		date: date,
		dateString: dateString,
		type: postType,
		tags: filteredTags,
		title: data.metadata['title'] as string,
		description: data.metadata['description'] as string,
		slug: data.metadata['slug'] as string,
		image: parseImageData(
			data.metadata['imageHref'] as string,
			data.metadata['imageAlt'] as string
		),
		excerpt: excerpt,
		content: content
	};

	if (postType === 'projects') {
		const projectPost = post as ProjectPost;
		projectPost.projectHref = data.metadata['projectHref'] as string;
		projectPost.projectText = data.metadata['projectText'] as string;
		projectPost.projectImage = parseImageData(
			data.metadata['projectImageHref'] as string,
			data.metadata['projectImageAlt'] as string
		);

		return projectPost;
	}

	return post;
}

async function getTags(fetch: any): Promise<Tag[]> {
	const tagsResponse = await fetch(`/content/tags.json`);
	const tags = await tagsResponse.json();

	tags.forEach((tag: Tag) => {
		tag.count = 0;
	});

	return tags;
}

function parseImageData(src: string, alt: string): Image {
	const split = src.split('-');
	const dimensions = split[split.length - 1].split('.');
	const splitDimensions = dimensions[0].split('x');

	return {
		src: src,
		alt: alt,
		width: parseInt(splitDimensions[0]),
		height: parseInt(splitDimensions[1])
	};
}

function compareDates(a: Post, b: Post) {
	//Orders by newest first
	if (a.date < b.date) {
		return 1;
	}
	if (a.date > b.date) {
		return -1;
	}
	return 0;
}

function compareTags(a: Tag, b: Tag) {
	//Orders largest count first
	if ((a.count ?? 0) < (b.count ?? 0)) {
		return 1;
	}
	if ((a.count ?? 0) > (b.count ?? 0)) {
		return -1;
	}
	return 0;
}
