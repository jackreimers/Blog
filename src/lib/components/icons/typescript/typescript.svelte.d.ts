import type { ComponentProps } from '$lib/interfaces/props';
import { SvelteComponent } from 'svelte';

declare const __propDef: {
	props: ComponentProps;
	events: {
		[evt: string]: CustomEvent;
	};
	slots: {};
};

export type TypeScriptProps = typeof __propDef.props;
export type TypeScriptEvents = typeof __propDef.events;
export type TypeScriptSlots = typeof __propDef.slots;

export default class TypeScript extends SvelteComponent<
	TypeScriptProps,
	TypeScriptEvents,
	TypeScriptSlots
> {}
export {};
