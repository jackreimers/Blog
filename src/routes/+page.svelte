<script lang="ts">
	import { contact } from '$lib/stores/store.elements';
	import { AppWindow, Database, Monitor } from 'lucide-svelte';
	import Head from '$lib/components/seo/head.svelte';
	import Hero from '$lib/components/hero/hero.svelte';
	import Container from '$lib/components/layout/container.svelte';
	import Section from '$lib/components/layout/section.svelte';
	import CallToAction from '$lib/components/banners/banner-cta.svelte';
	import Grid from '$lib/components/grid/grid.svelte';
	import CardGrid from '$lib/components/grid/grid-posts.svelte';
	import Card from '$lib/components/cards/card-post.svelte';
	import ButtonCard from '$lib/components/cards/card-button.svelte';
	import PillButton from '$lib/components/buttons/button-pill.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;
</script>

<Head
	canonical="https://jackreimers.dev"
	description="Jack Reimers is a full stack Software Engineer who is passionate about web and video game development."
	title="Jack Reimers"
/>
<Hero subtitle="I'm a Melbourne based Software Engineer." title="Jack Reimers" />
<Container>
	<Section>
		<h2 class="text-2xl font-bold sm:text-3xl md:text-4xl">Services</h2>
		<p class="mt-4 max-w-4xl text-gray-700">
			Enhance your online presence with a custom website, web application, or WordPress site
			designed from the ground up to elevate your brand and achieve your digital goals.
		</p>
		<Grid classes="mt-10">
			<ButtonCard
				action="Learn more"
				href="/services"
				text="Get a bespoke website that brings your vision to life and connects you with your audience."
				title="Websites"
			>
				<div class="inline-block rounded-full bg-blue-100 p-3 text-blue-900" slot="header">
					<Monitor size="1.875rem" />
				</div>
			</ButtonCard>
			<ButtonCard
				action="Learn more"
				href="/services"
				text="Need to do more than display content? I can build a custom web application to suit your business requirements."
				title="Web Applications"
			>
				<div class="inline-block rounded-full bg-blue-100 p-3 text-blue-900" slot="header">
					<AppWindow size="1.875rem" />
				</div>
			</ButtonCard>
			<ButtonCard
				action="Learn more"
				href="/services"
				text="Enjoy effortless content management with a custom designed WordPress site, or extend your existing one with a custom plugin."
				title="WordPress"
			>
				<div class="inline-block rounded-full bg-blue-100 p-3 text-blue-900" slot="header">
					<Database size="1.875rem" />
				</div>
			</ButtonCard>
		</Grid>
		<CallToAction
			classes="mt-10"
			on:click={() => $contact?.open()}
			text="Contact me now for a free consultation."
			title="Ready to get started?"
		/>
	</Section>
	<Section>
		<h2 class="text-2xl font-bold sm:text-3xl md:text-4xl">Latest</h2>
		<p class="mt-4 max-w-4xl text-gray-700">
			Read my latest posts and see some of the projects I've been working on.
		</p>
		<CardGrid classes="mt-10" itemCount={data.posts.length}>
			{#each data.posts as post}
				<Card
					href="/{post.type}/{post.slug}"
					imageHref={post.imageHref}
					date={post.dateString}
					title={post.title}
					content={post.excerpt}
				>
					<PillButton icon="chevron" href="/{post.type}/{post.slug}" text="Read more" />
				</Card>
			{/each}
		</CardGrid>
	</Section>
</Container>
