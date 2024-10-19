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

export type BasicGridProps = typeof __propDef.props;
export type BasicGridEvents = typeof __propDef.events;
export type BasicGridSlots = typeof __propDef.slots;

export default class BasicGrid extends SvelteComponent<
	BasicGridProps,
	BasicGridEvents,
	BasicGridSlots
> {}
export {};
