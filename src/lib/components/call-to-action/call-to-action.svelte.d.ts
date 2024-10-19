import type { TitledComponentProps } from '$lib/interfaces/props';
import { SvelteComponent } from 'svelte';

declare const __propDef: {
	props: TitledComponentProps;
	events: {
		[evt: string]: CustomEvent;
	};
	slots: {
		default: {};
	};
};

export type CallToActionProps = typeof __propDef.props;
export type CallToActionEvents = typeof __propDef.events;
export type CallToActionSlots = typeof __propDef.slots;

export default class CallToAction extends SvelteComponent<
	CallToActionProps,
	CallToActionEvents,
	CallToActionSlots
> {}
export {};
