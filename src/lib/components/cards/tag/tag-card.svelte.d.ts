import type { TitledIconComponentProps } from '$lib/interfaces/props';
import { SvelteComponent } from 'svelte';

declare const __propDef: {
	props: TitledIconComponentProps;
	events: {
		[evt: string]: CustomEvent;
	};
	slots: {};
};

export type TagCardProps = typeof __propDef.props;
export type TagCardEvents = typeof __propDef.events;
export type TagCardSlots = typeof __propDef.slots;

export default class TagCard extends SvelteComponent<TagCardProps, TagCardEvents, TagCardSlots> {}
export {};
