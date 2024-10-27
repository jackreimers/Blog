import type { ComponentProps } from '$lib/interfaces/props';
import type { Post } from '$lib/interfaces/interfaces';
import { SvelteComponent } from 'svelte';

export interface PostCardComponentProps extends ComponentProps {
	data: Post;
	displayType?: boolean;
}

declare const __propDef: {
	props: PostCardComponentProps;
	events: {
		[evt: string]: CustomEvent;
	};
	slots: {};
};

export type PostCardProps = typeof __propDef.props;
export type PostCardEvents = typeof __propDef.events;
export type PostCardSlots = typeof __propDef.slots;

export default class PostCard extends SvelteComponent<
	PostCardProps,
	PostCardEvents,
	PostCardSlots
> {}
export {};
