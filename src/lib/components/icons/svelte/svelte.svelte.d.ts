import type { ComponentProps } from '$lib/interfaces/props';
import { SvelteComponent } from 'svelte';

declare const __propDef: {
	props: ComponentProps;
	events: {
		[evt: string]: CustomEvent;
	};
	slots: {};
};

export type SvelteProps = typeof __propDef.props;
export type SvelteEvents = typeof __propDef.events;
export type SvelteSlots = typeof __propDef.slots;

export default class Svelte extends SvelteComponent<SvelteProps, SvelteEvents, SvelteSlots> {}
export {};
