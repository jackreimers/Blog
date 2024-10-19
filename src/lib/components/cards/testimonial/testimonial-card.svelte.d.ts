import type { ComponentProps } from '$lib/interfaces/props';
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

export type TestimonialProps = typeof __propDef.props;
export type TestimonialEvents = typeof __propDef.events;
export type TestimonialSlots = typeof __propDef.slots;

export default class Testimonial extends SvelteComponent<
	TestimonialProps,
	TestimonialEvents,
	TestimonialSlots
> {}
export {};
