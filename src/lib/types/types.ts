export type BlogPost = {
	metadata: BlogPostMetadata;
	intro: string;
	content: string;
};

export type BlogPostMetadata = {
	date: Date;
	title: string;
	categories: Category[];
	readTime: number;
};

export type Category = {
	name: string;
	slug: string;
};
