<script lang="ts">
	import { previousPageSlug } from '$lib/stores/store.page';
	import { onMount } from 'svelte';
	import Head from '$lib/components/seo/head.svelte';
	import Hero from '$lib/components/hero/hero.svelte';
	import Container from '$lib/components/layout/container.svelte';
	import Section from '$lib/components/layout/section.svelte';
	import Card from '$lib/components/cards/card-post.svelte';
	import CardGrid from '$lib/components/grids/grid-posts.svelte';
	import PillButton from '$lib/components/buttons/button-pill.svelte';
	import { ChevronRight } from 'lucide-svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;

	onMount(() => {
		previousPageSlug.set('blog');
	});
</script>

<Head
	canonical="https://jackreimers.dev/blog"
	description="Read Jack Reimers blog where he talks about web and game development."
	title="Jack Reimers | Blog"
/>
<Hero subtitle="Discover the tech topics I’m passionate about." title="Blog" />
<Container>
	<Section>
		<div class="flex justify-end">
			<PillButton
				bgColor="bg-blue-100"
				bgHoverColor="bg-blue-200"
				color="text-blue-900"
				hoverColor="text-blue-950"
				href="/tags"
				icon={ChevronRight}
				text="Filter by tag"
			/>
		</div>
		<CardGrid classes="mt-3 sm:mt-4" itemCount={data.posts.length}>
			{#each data.posts as post}
				<Card
					href="/blog/{post.slug}"
					imageHref={post.imageHref}
					date={post.dateString}
					type={post.type}
					title={post.title}
					content={post.excerpt}
					tags={post.tags}
				>
					<div class="flex gap-2 overflow-auto">
						{#each post.tags as tag}
							<PillButton
								bgColor="bg-blue-100"
								bgHoverColor="bg-blue-200"
								color="text-blue-900"
								hoverColor="text-blue-950"
								href="/tags/{tag.slug}"
								text={tag.name}
							/>
						{/each}
					</div>
				</Card>
			{/each}
		</CardGrid>
	</Section>
</Container>
