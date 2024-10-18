<script lang="ts">
	import { contact } from '$lib/stores/store.elements';
	import { MessageCircleMore, MoveRight } from 'lucide-svelte';
	import Head from '$lib/components/seo/head.svelte';
	import Container from '$lib/components/container/container.svelte';
	import Hero from '$lib/components/hero/hero.svelte';
	import Section from '$lib/components/section/section.svelte';
	import Grid from '$lib/components/grids/grid.svelte';
	import PostGrid from '$lib/components/grids/grid-posts.svelte';
	import PostCard from '$lib/components/cards/card-post.svelte';
	import Drawer from '$lib/components/drawer/drawer.svelte';
	import TestimonialCard from '$lib/components/cards/card-testimonial.svelte';
	import Cta from '$lib/components/banners/cta.svelte';
	import Subheader from '$lib/components/subheader/subheader.svelte';
	import BasicButton from '$lib/components/buttons/basic/basic-button.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;
</script>

<Head
	canonical="https://jackreimers.dev"
	description="Jack Reimers is a full stack Software Engineer who is passionate about web and video game development."
/>
<Container>
	<Hero
		subtitle="I build fast, responsive, secure, and modern websites and web applications."
		title="Turn Ideas into Reality"
	>
		<div class="mx-auto mt-10 flex flex-wrap justify-center items-center gap-4">
			<BasicButton
				color="primary"
				on:click={$contact?.open}
				text="Get in touch"
			/>
			<BasicButton
				color="secondary"
				href="/projects"
				icon={MoveRight}
				text="See my work"
			/>
		</div>
	</Hero>
	<Section>
		<Subheader
			subtitle="I offer a full range of digital services to help you get your project off the ground."
			title="How Can I Help You?"
		/>
		<Drawer />
		<Cta
			classes="mt-4 md:mt-10"
			subtitle="Contact me now for an obligation free discussion about your digital needs."
			title="Unlock Your Online Potential"
		>
			<BasicButton
				color="primary"
				icon={MessageCircleMore}
				on:click={$contact?.open}
				text="Let's chat"
			/>
		</Cta>
	</Section>
	<Section>
		<Subheader
			subtitle="Read my latest posts and see some of the projects I've been working on."
			title="Latest from Me"
		/>
		<PostGrid classes="mt-10" itemCount={data.posts.length}>
			{#each data.posts as post}
				<PostCard data={post} displayType={true} />
			{/each}
		</PostGrid>
	</Section>
	<Section>
		<Subheader subtitle="See what people I've worked with have to say." title="Testimonials" />
		<Grid classes="mt-10 md:!grid-cols-1 lg:!grid-cols-2">
			{#each data.testimonials as testimonial}
				<TestimonialCard data={testimonial} />
			{/each}
		</Grid>
	</Section>
</Container>
