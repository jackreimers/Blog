import type { ButtonComponentProps } from '$lib/interfaces/component-props';
import { SvelteComponent } from 'svelte';

declare const __propDef: {
	props: ButtonComponentProps;
	events: {
		[evt: string]: CustomEvent;
	};
	slots: {};
};

export type BasicButtonProps = typeof __propDef.props;
export type BasicButtonEvents = typeof __propDef.events;
export type BasicButtonSlots = typeof __propDef.slots;

export default class BasicButton extends SvelteComponent<
	BasicButtonProps,
	BasicButtonEvents,
	BasicButtonSlots
> {}
export {};
