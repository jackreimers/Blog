export type BlogPost = {
	metadata: BlogPostMetadata;
	intro: string;
	content: string;
};

export type BlogPostMetadata = {
	date: Date;
	title: string;
	readTime: number;
};
