import type { LinkComponentProps } from '$lib/interfaces/component-props';
import { SvelteComponent } from 'svelte';

declare const __propDef: {
	props: LinkComponentProps;
	events: {
		[evt: string]: CustomEvent;
	};
	slots: {};
};

export type PillButtonProps = typeof __propDef.props;
export type PillButtonEvents = typeof __propDef.events;
export type PillButtonSlots = typeof __propDef.slots;

export default class PillButton extends SvelteComponent<
	PillButtonProps,
	PillButtonEvents,
	PillButtonSlots
> {}
export {};
