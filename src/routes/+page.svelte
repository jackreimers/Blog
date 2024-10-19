<script lang="ts">
	import { contact } from '$lib/stores/stores';
	import { MessageCircleMore, MoveRight } from 'lucide-svelte';
	import Head from '$lib/components/seo/head.svelte';
	import Container from '$lib/components/container/container.svelte';
	import Section from '$lib/components/section/section.svelte';
	import Hero from '$lib/components/hero/hero.svelte';
	import Subheader from '$lib/components/subheader/subheader.svelte';
	import BasicGrid from '$lib/components/grids/basic/basic-grid.svelte';
	import PostGrid from '$lib/components/grids/posts/posts-grid.svelte';
	import PostCard from '$lib/components/cards/post/post-card.svelte';
	import Tabs from '$lib/components/tabs/tabs.svelte';
	import TestimonialCard from '$lib/components/cards/testimonial/testimonial-card.svelte';
	import CallToAction from '$lib/components/call-to-action/call-to-action.svelte';
	import BasicButton from '$lib/components/buttons/basic/basic-button.svelte';
	import DevelopmentTab from '$lib/components/tabs-content/tab-development.svelte';
	import HostingTab from '$lib/components/tabs-content/tab-hosting.svelte';
	import MaintenanceTab from '$lib/components/tabs-content/tab-maintenance.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;

	let servicesData = [
		{
			title: 'Development',
			description:
				'Build something new or update your existing application to use modern web technologies.',
			component: DevelopmentTab
		},
		{
			title: 'Hosting',
			description:
				'Get your website or application online with a fast, secure, and reliable hosting solution.',
			component: HostingTab
		},
		{
			title: 'Maintenance',
			description: 'Sleep easy knowing your application is being monitored and maintained.',
			component: MaintenanceTab
		}
	];
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
		<div class="flex flex-wrap items-center justify-center gap-3">
			<BasicButton
				color="primary"
				icon={MessageCircleMore}
				on:click={$contact?.open}
				text="Get in touch"
			/>
			<BasicButton color="secondary" href="/projects" icon={MoveRight} text="See my work" />
		</div>
	</Hero>
	<Section>
		<Subheader
			class="m-0 border-none"
			subtitle="I offer a full range of digital services to help you get your project off the ground."
			title="How Can I Help You?"
		/>
		<Tabs data={servicesData} />
		<CallToAction
			class="mt-4 sm:mt-10"
			subtitle="Contact me now for an obligation free discussion about your digital needs."
			title="Unlock Your Online Potential"
		>
			<BasicButton
				color="primary"
				icon={MessageCircleMore}
				on:click={$contact?.open}
				text="Let's chat"
			/>
		</CallToAction>
	</Section>
	<Section>
		<Subheader
			subtitle="Read my latest posts and see some of the projects I've been working on."
			title="Latest from Me"
		/>
		<PostGrid itemCount={data.posts.length}>
			{#each data.posts as post}
				<PostCard data={post} displayType={true} />
			{/each}
		</PostGrid>
	</Section>
	<Section>
		<Subheader subtitle="See what people I've worked with have to say." title="Testimonials" />
		<BasicGrid class="md:!grid-cols-1 lg:!grid-cols-2">
			{#each data.testimonials as testimonial}
				<TestimonialCard data={testimonial} />
			{/each}
		</BasicGrid>
	</Section>
</Container>
