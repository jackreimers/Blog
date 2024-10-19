import type { ComponentProps } from '$lib/interfaces/props';
import type { Tab } from '$lib/interfaces/interfaces';
import { SvelteComponent } from 'svelte';

export interface TabsComponentProps extends ComponentProps {
	data: Tab[];
}

declare const __propDef: {
	props: TabsComponentProps;
	events: {
		[evt: string]: CustomEvent;
	};
	slots: {};
};

export type TabsProps = typeof __propDef.props;
export type TabsEvents = typeof __propDef.events;
export type TabsSlots = typeof __propDef.slots;

export default class Tabs extends SvelteComponent<TabsProps, TabsEvents, TabsSlots> {}
export {};
