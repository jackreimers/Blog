export interface MarkdownData {
	metadata: { [key: string]: string | string[] };
	content: string;
}

export interface Tag {
	name: string;
	slug: string;
	icon: string;
	count: number;
}

export interface Image {
	src: string;
	alt: string;
	width: number;
	height: number;
}

export interface Post {
	date: Date;
	dateString: string;
	type: string;
	tags: Tag[];
	title: string;
	description: string;
	slug: string;
	image: Image;
	excerpt: string;
	content: string;
}

export interface ProjectPost extends Post {
	projectHref: string;
	projectText: string;
	projectImage: Image;
}

export interface Testimonial {
	name: string;
	organisation: string;
	content: string;
}

export interface Tab {
	title: string;
	description: string;
	component: any;
}
