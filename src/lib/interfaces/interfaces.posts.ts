import type { Tag } from '$lib/interfaces/interfaces.tags';

export interface Post {
	date: Date;
	dateString: string;
	type: string;
	tags: Tag[];
	title: string;
	description: string;
	slug: string;
	imageHref: string | null;
	imageAlt: string | null;
	excerpt: string;
	content: string;
}
