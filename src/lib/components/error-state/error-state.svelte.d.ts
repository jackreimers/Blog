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

export type ErrorStateProps = typeof __propDef.props;
export type ErrorStateEvents = typeof __propDef.events;
export type ErrorStateSlots = typeof __propDef.slots;

export default class ErrorState extends SvelteComponent<
	ErrorStateProps,
	ErrorStateEvents,
	ErrorStateSlots
> {}
export {};
