import type { ComponentProps } from '$lib/interfaces/props';
import { SvelteComponent } from 'svelte';

declare const __propDef: {
	props: ComponentProps;
	events: {
		[evt: string]: CustomEvent;
	};
	slots: {};
};

export type AzureProps = typeof __propDef.props;
export type AzureEvents = typeof __propDef.events;
export type AzureSlots = typeof __propDef.slots;

export default class Azure extends SvelteComponent<AzureProps, AzureEvents, AzureSlots> {}
export {};
