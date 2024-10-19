import type { ComponentType } from 'svelte';
import type { Icon } from 'lucide-svelte';

export interface ComponentProps {
	class?: string;
}

export interface TitledComponentProps extends ComponentProps {
	title: string;
	subtitle: string;
}

export interface TitledIconComponentProps extends TitledComponentProps {
	icon: ComponentType<Icon>;
}
