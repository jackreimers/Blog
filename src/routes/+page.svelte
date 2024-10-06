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
	import Subheader from '$lib/components/header/subheader.svelte';

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
		<Subheader
			subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
			title="Services"
		/>
		<Grid>
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
			classes="mt-6 sm:mt-10 hidden"
			subtitle="Contact me now for an obligation free discussion about your digital needs."
			title="Unlock Your Online Potential"
		>
			<button
				class="inline-flex items-center gap-2 rounded-md bg-white px-3.5 py-2 text-sm font-semibold"
				on:click={$contact?.open}
			>
				Let's Chat
				<MessageCircle class="h-5 w-5" />
			</button>
		</Cta>
	</Section>
	<Section>
		<Subheader
			subtitle="Read my latest posts and see some of the projects I've been working on."
			title="Latest"
		/>
		<PostGrid itemCount={data.posts.length}>
			{#each data.posts as post}
				<PostCard data={post} displayType={true} />
			{/each}
		</PostGrid>
	</Section>
</Container>
