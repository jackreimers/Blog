<script lang="ts">
	import { ArrowRight, Tags } from 'lucide-svelte';
	import Head from '$lib/components/seo/head.svelte';
	import Container from '$lib/components/page/container.svelte';
	import Section from '$lib/components/page/section.svelte';
	import Hero from '$lib/components/hero/hero.svelte';
	import VerticalStack from '$lib/components/stacks/stack-vertical.svelte';
	import HorizontalStack from '$lib/components/stacks/stack-horizontal.svelte';
	import Card from '$lib/components/cards/card.svelte';
	import ServiceCard from '$lib/components/cards/card-service.svelte';
	import CardGrid from '$lib/components/grids/grid-card.svelte';
	import SocialLinks from '$lib/components/contact/links.svelte';
	import Button from '$lib/components/buttons/button.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;
</script>

<Head
	canonical="https://jackreimers.dev"
	description="I'm a full stack Software Engineer who is passionate about web and video game development."
	title="Jack Reimers"
/>
<Hero
	subtitle="I'm a passionate full-stack engineer specialising in .NET and JavaScript, with an interest in web and game development."
	title="Jack Reimers"
>
	<SocialLinks slot="below" />
</Hero>
<Container>
	<Section>
		<VerticalStack>
			<HorizontalStack classes="justify-end">
				<Button href="/services" text="More">
					<ArrowRight />
				</Button>
			</HorizontalStack>
			<div class="grid grid-cols-1 gap-2.5 sm:gap-3.5 lg:grid-cols-3">
				<ServiceCard
					description="Get a website that stands out and is crafted to align with your vision."
					href="services"
					title="Websites"
				/>
				<ServiceCard
					description="Need something that goes beyond a simple website? I can help."
					href="services"
					title="Web Applications"
				/>
				<ServiceCard
					description="I offer polished and high-performing WordPress solutions."
					href="services"
					title="WordPress"
				/>
			</div>
		</VerticalStack>
	</Section>
	<Section>
		<VerticalStack>
			<HorizontalStack classes="justify-end">
				<Button href="/tags" text="Tags">
					<Tags />
				</Button>
				<Button href="/blog" text="More">
					<ArrowRight />
				</Button>
			</HorizontalStack>
			<HorizontalStack>
				<CardGrid itemCount={data.posts.length}>
					{#each data.posts as post}
						<Card
							href="/{post.type}/{post.slug}"
							imageHref={post.imageHref}
							title={post.title}
							subtitle={post.dateString}
							content={post.excerpt}
							postType={post.type}
							showPostType={true}
						>
							<Button
								size="small"
								color="orange"
								href="/{post.type}/{post.slug}"
								text="Read More"
							/>
						</Card>
					{/each}
				</CardGrid>
			</HorizontalStack>
		</VerticalStack>
	</Section>
</Container>
