<script lang="ts">
	import { contact } from '$lib/stores/store.elements';
	import { CloudCog, Gauge, Shield, Sparkles, UnfoldHorizontal } from 'lucide-svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import Head from '$lib/components/seo/head.svelte';
	import Hero from '$lib/components/hero/hero.svelte';
	import Container from '$lib/components/layout/container.svelte';
	import Section from '$lib/components/layout/section.svelte';
	import CallToAction from '$lib/components/banners/banner-cta.svelte';
	import Grid from '$lib/components/grid/grid.svelte';
	import ButtonCard from '$lib/components/cards/card-button.svelte';
	import CalloutCard from '$lib/components/cards/card-callout.svelte';
	import PillButton from '$lib/components/elements/pill.svelte';
	import TickListItem from '$lib/components/lists/list-item-tick.svelte';
	import Testimonial from '$lib/components/testimonials/testimonial.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;
</script>

<Head
	canonical="https://jackreimers.dev/services"
	description="Find out what services Jack Reimers can provide to help you and your business."
	title="Jack Reimers | Services"
/>
<Hero subtitle="Find out how I can help you and your business." title="Services" />
<Container>
	<Section>
		<h2 class="text-2xl font-bold sm:text-3xl md:text-4xl">
			Unlock the Full Potential of Your Website
		</h2>
		<p class="mt-4 max-w-4xl text-gray-700">
			In the digital age, your website is often the first point of contact between you and
			your audience, so it's important to make a good impression.
		</p>
		<Grid classes="mt-10">
			<CalloutCard
				text="Built from the ground up to align with your vision."
				title="Bespoke."
			>
				<Sparkles />
			</CalloutCard>
			<CalloutCard text="Because you don't want to keep your visitors waiting." title="Fast.">
				<Gauge />
			</CalloutCard>
			<CalloutCard text="Looks great on any device, even a smart fridge." title="Responsive.">
				<UnfoldHorizontal />
			</CalloutCard>
			<CalloutCard text="So you can spend more time on what you do best." title="Reliable.">
				<CloudCog />
			</CalloutCard>
			<CalloutCard text="I know I'm sick of getting data breach emails." title="Secure.">
				<Shield />
			</CalloutCard>
		</Grid>
	</Section>
	<Section>
		<h2 class="text-2xl font-bold sm:text-3xl md:text-4xl">What I Offer</h2>
		<p class="mt-4 max-w-4xl text-gray-700">
			I offer a range of services to help you make that great first impression and get the
			most out of your online presence.
		</p>
		<Grid classes="mt-10">
			<ButtonCard
				action="Let's chat"
				on:click={() => $contact?.open()}
				text="Whether you need a simple static site or a feature-rich dynamic website, I have the expertise to deliver high-quality solutions that align with your goals."
				title="Websites"
			>
				<ul class="flex flex-col gap-2" slot="content">
					<TickListItem text="Bespoke design and branding" />
					<TickListItem text="Custom email addresses" />
					<TickListItem text="Site hosting and management" />
				</ul>
			</ButtonCard>
			<ButtonCard
				action="Let's chat"
				on:click={() => $contact?.open()}
				text="With extensive experience using a wide range of frameworks and technologies, I can leverage the best tools to create a solution customised for your needs."
				title="Web Applications"
			>
				<div class="flex flex-wrap gap-2" slot="content">
					<PillButton text="Angular" />
					<PillButton text="Blazor" />
					<PillButton text="Svelte" />
					<PillButton text=".NET" />
					<PillButton text="Node.js" />
					<PillButton text="Azure" />
					<PillButton text="AI" />
				</div>
			</ButtonCard>
			<ButtonCard
				action="Let's chat"
				on:click={() => $contact?.open()}
				text="I can help you break free from the constraints of off-the-shelf themes and plugins, and create a custom WordPress solution that meets your requirements."
				title="WordPress"
			>
				<ul class="flex flex-col gap-2" slot="content">
					<TickListItem text="Headless WordPress websites" />
					<TickListItem text="Custom built plugins" />
					<TickListItem text="Online stores" />
				</ul>
			</ButtonCard>
		</Grid>
		<CallToAction
			classes="mt-10"
			on:click={() => $contact?.open()}
			text="Contact me now for an obligation free discussion."
			title="Not sure what's right for you?"
		/>
	</Section>
	<Section>
		<h2 class="text-2xl font-bold sm:text-3xl md:text-4xl">Testimonials</h2>
		<p class="mt-4 max-w-4xl text-gray-700">
			See what people I've worked with have to say.
		</p>
		<Grid classes="mt-10">
			{#each data.testimonials as testimonial}
				<Testimonial data={testimonial} />
			{/each}
		</Grid>
	</Section>
	<Section classes="markdown">
		<SvelteMarkdown source={data.services} />
	</Section>
</Container>
