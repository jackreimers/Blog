import type { ComponentProps } from '$lib/interfaces/props';
import { SvelteComponent } from 'svelte';

declare const __propDef: {
	props: ComponentProps;
	events: {
		[evt: string]: CustomEvent;
	};
	slots: {};
};

export type EmptyCardProps = typeof __propDef.props;
export type EmptyCardEvents = typeof __propDef.events;
export type EmptyCardSlots = typeof __propDef.slots;

export default class EmptyCard extends SvelteComponent<
	EmptyCardProps,
	EmptyCardEvents,
	EmptyCardSlots
> {}
export {};
