import type { ComponentProps } from '$lib/interfaces/props';
import { SvelteComponent } from 'svelte';

export interface InputComponentProps extends ComponentProps {
	name: string;
	type?: 'text' | 'email' | 'textarea';
	label?: string;
	placeholder?: string;
	autocomplete?: string;
	required?: boolean;
	disabled?: boolean;
}

declare const __propDef: {
	props: InputComponentProps;
	events: {
		[evt: string]: CustomEvent;
	};
	slots: {};
};

export type InputProps = typeof __propDef.props;
export type InputEvents = typeof __propDef.events;
export type InputSlots = typeof __propDef.slots;

export default class Input extends SvelteComponent<InputProps, InputEvents, InputSlots> {}
export {};
