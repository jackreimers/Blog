export type BlogPost = {
	metadata: BlogPostMetadata;
	intro: string;
	content: string;
};

export type BlogPostMetadata = {
	date: Date;
	title: string;
	slug: string;
	categories: Tag[];
};

export type Tag = {
	name: string;
	slug: string;
};
