import type { ComponentProps } from '$lib/interfaces/props';
import { SvelteComponent } from 'svelte';

declare const __propDef: {
	props: ComponentProps;
	events: {
		[evt: string]: CustomEvent;
	};
	slots: {};
};

export type GraphQLProps = typeof __propDef.props;
export type GraphQLEvents = typeof __propDef.events;
export type GraphQLSlots = typeof __propDef.slots;

export default class GraphQL extends SvelteComponent<GraphQLProps, GraphQLEvents, GraphQLSlots> {}
export {};
