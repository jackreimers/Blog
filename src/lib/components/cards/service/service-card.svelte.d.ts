import type { TitledIconComponentProps } from '$lib/interfaces/props';
import { SvelteComponent } from 'svelte';

declare const __propDef: {
	props: TitledIconComponentProps;
	events: {
		[evt: string]: CustomEvent;
	};
	slots: {};
};

export type ServiceCardProps = typeof __propDef.props;
export type ServiceCardEvents = typeof __propDef.events;
export type ServiceCardSlots = typeof __propDef.slots;

export default class ServiceCard extends SvelteComponent<
	ServiceCardProps,
	ServiceCardEvents,
	ServiceCardSlots
> {}
export {};
