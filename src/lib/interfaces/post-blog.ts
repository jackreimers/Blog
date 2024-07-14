import type { Tag } from '$lib/interfaces/tag';

export interface BlogPost {
	date: Date;
	dateString: string;
	tags: Tag[];
	title: string;
	description: string;
	slug: string;
	imageHref: string | null;
	imageAlt: string | null;
	intro: string;
	content: string;
}
