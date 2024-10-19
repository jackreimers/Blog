import type { ComponentProps } from '$lib/interfaces/props';
import { SvelteComponent } from 'svelte';

declare const __propDef: {
	props: ComponentProps;
	events: {
		[evt: string]: CustomEvent;
	};
	slots: {};
};

export type GitHubProps = typeof __propDef.props;
export type GitHubEvents = typeof __propDef.events;
export type GitHubSlots = typeof __propDef.slots;

export default class GitHub extends SvelteComponent<GitHubProps, GitHubEvents, GitHubSlots> {}
export {};
