export interface Tag {
	name: string;
	slug: string;
	icon: string;
	count: number;
}

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

export interface ProjectPost extends Post {
	projectHref: string;
	projectText: string;
}
