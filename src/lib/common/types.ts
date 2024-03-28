export type BlogPost = {
	date: Date;
	tags: Tag[];
	title: string;
	slug: string;
	intro: string;
	content: string;
};

export type Tag = {
	name: string;
	slug: string;
};
