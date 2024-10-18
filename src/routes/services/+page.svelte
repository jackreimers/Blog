<script lang="ts">
	import { contact } from '$lib/stores/store.elements';
	import { Brain, Cloud, Code, Cog, Globe, MessageCircle, Zap } from 'lucide-svelte';
	import Head from '$lib/components/seo/head.svelte';
	import Container from '$lib/components/container/container.svelte';
	import Section from '$lib/components/section/section.svelte';
	import Hero from '$lib/components/hero/hero.svelte';
	import Subheader from '$lib/components/subheader/subheader.svelte';
	import Grid from '$lib/components/grids/grid.svelte';
	import ServiceCard from '$lib/components/cards/card-content.svelte';
	import TestimonialCard from '$lib/components/cards/card-testimonial.svelte';
	import PostCard from '$lib/components/cards/card-post.svelte';
	import PostGrid from '$lib/components/grids/grid-posts.svelte';
	import Cta from '$lib/components/banners/cta.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;
</script>

<Head
	canonical="https://jackreimers.dev/services"
	description="Find out what services Jack Reimers can provide to help you and your business."
	title="Services"
/>
<Hero subtitle="Find out how I can help you and your business." title="Services" />
<Container>
	<Section>
		<Subheader
			subtitle="Let me take care of your digital needs so you can focus on what you do best."
			title="What I Offer"
		/>
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
				features={['Generative AI', 'Natural language processing', 'Text embedding']}
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
		<Cta
			classes="mt-4 md:mt-10"
			subtitle="Contact me now for an obligation free discussion about your digital needs."
			title="Unlock Your Online Potential"
		>
			<button
				class="inline-flex items-center gap-2 rounded bg-white px-3.5 py-2 text-sm font-semibold transition-colors duration-300 focus:bg-gray-200 mhover:hover:bg-gray-200"
				on:click={$contact?.open}
			>
				Let's Chat
				<MessageCircle class="h-5 w-5" />
			</button>
		</Cta>
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
	<Section>
		<Subheader subtitle="See what people I've worked with have to say." title="Testimonials" />
		<Grid classes="md:!grid-cols-1 lg:!grid-cols-2">
			{#each data.testimonials as testimonial}
				<TestimonialCard data={testimonial} />
			{/each}
		</Grid>
	</Section>
</Container>
