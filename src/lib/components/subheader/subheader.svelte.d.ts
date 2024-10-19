import type { TitledComponentProps } from '$lib/interfaces/props';
import { SvelteComponent } from 'svelte';

declare const __propDef: {
	props: TitledComponentProps;
	events: {
		[evt: string]: CustomEvent;
	};
	slots: {};
};

export type SubheaderProps = typeof __propDef.props;
export type SubheaderEvents = typeof __propDef.events;
export type SubheaderSlots = typeof __propDef.slots;

export default class Subheader extends SvelteComponent<
	SubheaderProps,
	SubheaderEvents,
	SubheaderSlots
> {}
export {};
