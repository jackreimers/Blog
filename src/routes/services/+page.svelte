<script lang="ts">
	import { Brain, Cloud, Code, Cog, Globe, Zap } from 'lucide-svelte';
	import Head from '$lib/components/seo/head.svelte';
	import Hero from '$lib/components/hero/hero.svelte';
	import Container from '$lib/components/layout/container.svelte';
	import Section from '$lib/components/layout/section.svelte';
	import Grid from '$lib/components/grids/grid.svelte';
	import PostCard from '$lib/components/cards/card-post.svelte';
	import ServiceCard from '$lib/components/cards/card-service-2.svelte';
	import TestimonialCard from '$lib/components/cards/card-testimonial.svelte';
	import PostGrid from '$lib/components/grids/grid-posts.svelte';
	import Subheader from '$lib/components/header/subheader.svelte';

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
		<Subheader subtitle="See what people I've worked with have to say." title="What I Offer" />
		<Grid>
			<ServiceCard
				description="Custom designed and built websites tailored to your individual needs."
				features={[
					'Responsive design',
					'CMS integration (WordPress)',
					'Search engine optimisation (SEO)'
				]}
				icon={Globe}
				title="Website Development"
			/>
			<ServiceCard
				description="Robust and scalable RESTful APIs for your applications."
				features={[
					'RESTful API development',
					'Authentication and authorisation',
					'Database design'
				]}
				icon={Code}
				title="API Development"
			/>
			<ServiceCard
				description="Integrate cutting edge AI technologies into your project."
				features={['Natural language processing', 'Text embedding']}
				icon={Brain}
				title="Artificial Intelligence"
			/>
			<ServiceCard
				description="Reliable and scalable deployment and hosting solutions."
				features={[
					'Cloud infrastructure setup',
					'Continuous integration/deployment',
					'Custom domains and email addresses'
				]}
				icon={Cloud}
				title="Hosting"
			/>
			<ServiceCard
				description="Supercharge your existing websites and applications."
				features={['Content optimisation', 'Automated testing']}
				icon={Zap}
				title="Performance Optimisation"
			/>
			<ServiceCard
				description="Ongoing updates, enhancements and support for your projects."
				features={['Content and security updates', 'Performance monitoring', 'Bug fixes']}
				icon={Cog}
				title="Maintenance"
			/>
		</Grid>
	</Section>
	<!-- TODO: Not sure CTA -->
	<Section>
		<Subheader subtitle="See what people I've worked with have to say." title="Testimonials" />
		<Grid>
			{#each data.testimonials as testimonial}
				<TestimonialCard data={testimonial} />
			{/each}
		</Grid>
	</Section>
	<Section>
		<Subheader
			subtitle="Get a glimpse of some of the projects I've been working on."
			title="Recent Work"
		/>

		<PostGrid itemCount={data.posts.length}>
			{#each data.posts as post}
				<PostCard data={post} displayType={true} />
			{/each}
		</PostGrid>
	</Section>
	<!--
	<Section>
		<h2 class="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">Technical Details</h2>
		<p class="mt-2.5 max-w-4xl text-gray-700">
			Dive deeper into the technical details of my skillset and the services I offer.
		</p>
		<div class="mt-10 markdown">

			<SvelteMarkdown source={data.services} />
		</div>
	</Section>
	-->
</Container>
