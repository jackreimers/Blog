export type BlogPost = {
	metadata: BlogPostMetadata;
	intro: string;
	content: string;
};

export type BlogPostMetadata = {
	date: Date;
	title: string;
	slug: string;
	categories: Category[];
};

export type Category = {
	name: string;
	slug: string;
};
