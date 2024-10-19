import type { ComponentProps } from '$lib/interfaces/props';
import { SvelteComponent } from 'svelte';

declare const __propDef: {
	props: ComponentProps;
	events: {
		[evt: string]: CustomEvent;
	};
	slots: {
		default: {};
	};
};

export type SkeletonProps = typeof __propDef.props;
export type SkeletonEvents = typeof __propDef.events;
export type SkeletonSlots = typeof __propDef.slots;

export default class Skeleton extends SvelteComponent<
	SkeletonProps,
	SkeletonEvents,
	SkeletonSlots
> {}
export {};
