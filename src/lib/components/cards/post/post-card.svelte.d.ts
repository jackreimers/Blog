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

export type ContainerProps = typeof __propDef.props;
export type ContainerEvents = typeof __propDef.events;
export type ContainerSlots = typeof __propDef.slots;

export default class Container extends SvelteComponent<
	ContainerProps,
	ContainerEvents,
	ContainerSlots
> {}
export {};
