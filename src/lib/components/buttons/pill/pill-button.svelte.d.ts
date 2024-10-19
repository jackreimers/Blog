import type { ComponentProps } from '$lib/interfaces/props';
import type { Icon } from 'lucide-svelte';
import { type ComponentType, SvelteComponent } from 'svelte';

export interface PillButtonComponentProps extends ComponentProps {
	href?: string | null;
	target?: '_blank' | '_self' | '_parent' | '_top';
	text?: string | null;
	icon?: ComponentType<Icon> | null;
	color?: 'none' | 'primary' | 'secondary';
}

declare const __propDef: {
	props: PillButtonComponentProps;
	events: {
		[evt: string]: CustomEvent;
	};
	slots: {};
};

export type PillButtonProps = typeof __propDef.props;
export type PillButtonEvents = typeof __propDef.events;
export type PillButtonSlots = typeof __propDef.slots;

export default class PillButton extends SvelteComponent<
	PillButtonProps,
	PillButtonEvents,
	PillButtonSlots
> {}
export {};
