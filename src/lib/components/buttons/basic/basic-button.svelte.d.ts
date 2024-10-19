import type { ComponentProps } from '$lib/interfaces/props';
import type { Icon } from 'lucide-svelte';
import { type ComponentType, SvelteComponent } from 'svelte';

export interface BasicButtonComponentProps extends ComponentProps {
	active?: boolean;
	type?: 'button' | 'submit' | 'reset';
	disabled?: boolean;
	submitting?: boolean;
	href?: string;
	target?: '_blank' | '_self' | '_parent' | '_top';
	text?: string;
	icon?: ComponentType<Icon> | null;
	color?: 'none' | 'primary' | 'secondary' | 'tertiary' | 'error';
}

declare const __propDef: {
	props: BasicButtonComponentProps;
	events: {
		[evt: string]: CustomEvent;
	};
	slots: {};
};

export type BasicButtonProps = typeof __propDef.props;
export type BasicButtonEvents = typeof __propDef.events;
export type BasicButtonSlots = typeof __propDef.slots;

export default class BasicButton extends SvelteComponent<
	BasicButtonProps,
	BasicButtonEvents,
	BasicButtonSlots
> {}
export {};
