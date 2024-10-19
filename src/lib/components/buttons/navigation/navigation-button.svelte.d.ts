import type { ComponentProps } from '$lib/interfaces/props';
import { SvelteComponent } from 'svelte';

export interface NavigationButtonComponentProps extends ComponentProps {
	active?: boolean;
	href: string;
	target?: '_blank' | '_self' | '_parent' | '_top';
	text?: string;
}

declare const __propDef: {
	props: NavigationButtonComponentProps;
	events: {
		[evt: string]: CustomEvent;
	};
	slots: {};
};

export type NavigationButtonProps = typeof __propDef.props;
export type NavigationButtonEvents = typeof __propDef.events;
export type NavigationButtonSlots = typeof __propDef.slots;

export default class NavigationButton extends SvelteComponent<
	NavigationButtonProps,
	NavigationButtonEvents,
	NavigationButtonSlots
> {}
export {};
