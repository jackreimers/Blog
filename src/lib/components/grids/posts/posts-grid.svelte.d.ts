import type { ComponentProps } from '$lib/interfaces/props';
import { SvelteComponent } from 'svelte';

export interface PostsGridComponentProps extends ComponentProps {
	itemCount: number;
}

declare const __propDef: {
	props: PostsGridComponentProps;
	events: {
		[evt: string]: CustomEvent;
	};
	slots: {
		default: {};
	};
};

export type PostGridProps = typeof __propDef.props;
export type PostGridEvents = typeof __propDef.events;
export type PostGridSlots = typeof __propDef.slots;

export default class PostGrid extends SvelteComponent<
	PostGridProps,
	PostGridEvents,
	PostGridSlots
> {}
export {};
