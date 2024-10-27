import type { ComponentProps } from '$lib/interfaces/props';
import type { Testimonial } from '$lib/interfaces/interfaces';
import { SvelteComponent } from 'svelte';

export interface TestimonialCardComponentProps extends ComponentProps {
	data: Testimonial;
}

declare const __propDef: {
	props: TestimonialCardComponentProps;
	events: {
		[evt: string]: CustomEvent;
	};
	slots: {};
};

export type TestimonialCardProps = typeof __propDef.props;
export type TestimonialCardEvents = typeof __propDef.events;
export type TestimonialCardSlots = typeof __propDef.slots;

export default class TestimonialCard extends SvelteComponent<
	TestimonialCardProps,
	TestimonialCardEvents,
	TestimonialCardSlots
> {}
export {};
