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
	import SocialLinks from '$lib/components/contact/social.svelte';
	import Button from '$lib/components/buttons/button.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;
</script>

<Head
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
			<HorizontalStack classes="mb-1 items-end">
				<div class="flex-1">
					<h2 class="mb-1 text-2xl font-bold sm:text-3xl">My Services</h2>
					<p class="max-w-prose text-gray-500">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor.
					</p>
				</div>
				<HorizontalStack classes="justify-end">
					<Button href="/blog" text="More">
						<ArrowRight />
					</Button>
				</HorizontalStack>
			</HorizontalStack>
			<div class="grid grid-cols-3 gap-2.5 text-center sm:gap-3.5">
				<ServiceCard slug="website-dev" title="Website Development" />
				<ServiceCard slug="application-dev" title="Application Development" />
				<ServiceCard slug="wordpress-dev" title="WordPress Development" />
			</div>
		</VerticalStack>
	</Section>
	<Section>
		<VerticalStack>
			<HorizontalStack classes="mb-1 items-end">
				<div class="flex-1">
					<h2 class="mb-1 text-2xl font-bold sm:text-3xl">Latest Posts</h2>
					<p class="max-w-prose text-gray-500">
						My latest blog posts on web development, game development, and more.
					</p>
				</div>
				<HorizontalStack classes="justify-end">
					<Button href="/tags" text="Tags">
						<Tags />
					</Button>
					<Button href="/blog" text="More">
						<ArrowRight />
					</Button>
				</HorizontalStack>
			</HorizontalStack>
			<HorizontalStack>
				<CardGrid itemCount={data.posts.length}>
					{#each data.posts as post}
						<Card
							href="/blog/{post.slug}"
							imageHref={post.imageHref}
							title={post.title}
							subtitle={post.dateString}
							content={post.intro}
						>
							<Button
								size="small"
								color="orange"
								href="/blog/{post.slug}"
								text="Read More"
							/>
						</Card>
					{/each}
				</CardGrid>
			</HorizontalStack>
		</VerticalStack>
	</Section>
</Container>
