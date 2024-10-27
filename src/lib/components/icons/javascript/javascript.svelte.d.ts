import type { ComponentProps } from '$lib/interfaces/props';
import { SvelteComponent } from 'svelte';

declare const __propDef: {
	props: ComponentProps;
	events: {
		[evt: string]: CustomEvent;
	};
	slots: {};
};

export type JavaScriptProps = typeof __propDef.props;
export type JavaScriptEvents = typeof __propDef.events;
export type JavaScriptSlots = typeof __propDef.slots;

export default class JavaScript extends SvelteComponent<
	JavaScriptProps,
	JavaScriptEvents,
	JavaScriptSlots
> {}
export {};
