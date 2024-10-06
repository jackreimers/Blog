<script lang="ts">
	import { contact } from '$lib/stores/store.elements';
	import { Brain, Cloud, Code, Cog, Globe, MessageCircle, Zap } from 'lucide-svelte';
	import Head from '$lib/components/seo/head.svelte';
	import Hero from '$lib/components/hero/hero.svelte';
	import Container from '$lib/components/layout/container.svelte';
	import Section from '$lib/components/layout/section.svelte';
	import Grid from '$lib/components/grids/grid.svelte';
	import PostGrid from '$lib/components/grids/grid-posts.svelte';
	import PostCard from '$lib/components/cards/card-post.svelte';
	import ServiceCard from '$lib/components/cards/card-service.svelte';
	import Cta from '$lib/components/banners/cta.svelte';

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
		<!--
		<h2 class="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">Services</h2>
		<p class="mt-2.5 max-w-4xl text-gray-700">
			I specialise in building custom, high-performance websites and applications to help you
			get the most out of your online presence and achieve your digital goals.
		</p>
		-->
		<Grid classes="">
			<ServiceCard
				description="Custom designed and built websites tailored to your individual needs."
				href="/services"
				icon={Globe}
				title="Website Development"
			/>
			<ServiceCard
				description="Robust and scalable RESTful APIs for your applications."
				href="/services"
				icon={Code}
				title="API Development"
			/>
			<ServiceCard
				description="Integrate cutting edge AI technologies into your project."
				href="/services"
				icon={Brain}
				title="Artificial Intelligence"
			/>
			<ServiceCard
				description="Reliable and scalable deployment and hosting solutions."
				href="/services"
				icon={Cloud}
				title="Hosting"
			/>
			<ServiceCard
				description="Supercharge your existing websites and applications."
				href="/services"
				icon={Zap}
				title="Performance Optimisation"
			/>
			<ServiceCard
				description="Ongoing updates, enhancements and support for your projects."
				href="/services"
				icon={Cog}
				title="Maintenance"
			/>
		</Grid>
		<Cta
			classes="mt-4"
			subtitle="Contact me now for an obligation free discussion about your digital needs."
			title="Unlock Your Online Potential"
		>
			<button
				class="rounded-md inline-flex gap-2 items-center bg-white px-3.5 py-2 text-sm font-semibold"
				on:click={$contact?.open}>
				Let's Chat
				<MessageCircle class="h-5 w-5" />
			</button>
		</Cta>
	</Section>
	<Section>
		<h2 class="text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl">Latest</h2>
		<p class="mt-4 max-w-4xl text-gray-700 sm:text-base">
			Read my latest posts and see some of the projects I've been working on.
		</p>
		<PostGrid classes="mt-6" itemCount={data.posts.length}>
			{#each data.posts as post}
				<PostCard
					href="/{post.type}/{post.slug}"
					imageHref={post.imageHref}
					imageAlt={post.imageAlt}
					type={post.type}
					displayType={true}
					date={post.dateString}
					title={post.title}
					content={post.excerpt}
					tags={post.tags}
				/>
			{/each}
		</PostGrid>
	</Section>
</Container>
