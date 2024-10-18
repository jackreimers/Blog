import type { ComponentType } from 'svelte';
import type { Icon } from 'lucide-svelte';

export interface ComponentProps {
	class?: string;
}

export interface TitledComponentProps extends ComponentProps {
	title: string;
	subtitle: string;
}

export interface LinkComponentProps extends ComponentProps {
	href: string;
	target?: '_blank' | '_self' | '_parent' | '_top';
	text: string;
	icon?: ComponentType<Icon> | null;
	color?: 'none' | 'primary' | 'secondary';
	ariaLabel?: string | null;
}

export interface ButtonComponentProps extends LinkComponentProps {
	href?: string;
	type?: 'button' | 'submit' | 'reset';
	disabled?: boolean;
	active?: boolean;
	submitting?: boolean;
}
