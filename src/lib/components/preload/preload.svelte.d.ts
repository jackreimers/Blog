import type { ComponentProps } from '$lib/interfaces/props';
import { SvelteComponent } from 'svelte';

export interface PreloadComponentProps extends ComponentProps {
	src: string | string[];
	showSkeleton?: boolean;
}

declare const __propDef: {
	props: PreloadComponentProps;
	events: {
		[evt: string]: CustomEvent;
	};
	slots: {
		default: {};
	};
};

export type PreloadProps = typeof __propDef.props;
export type PreloadEvents = typeof __propDef.events;
export type PreloadSlots = typeof __propDef.slots;

export default class Preload extends SvelteComponent<PreloadProps, PreloadEvents, PreloadSlots> {}
export {};
