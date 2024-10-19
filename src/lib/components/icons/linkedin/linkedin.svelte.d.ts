import type { ComponentProps } from '$lib/interfaces/props';
import { SvelteComponent } from 'svelte';

declare const __propDef: {
	props: ComponentProps;
	events: {
		[evt: string]: CustomEvent;
	};
	slots: {};
};

export type LinkedInProps = typeof __propDef.props;
export type LinkedInEvents = typeof __propDef.events;
export type LinkedInSlots = typeof __propDef.slots;

export default class LinkedIn extends SvelteComponent<
	LinkedInProps,
	LinkedInEvents,
	LinkedInSlots
> {}
export {};
