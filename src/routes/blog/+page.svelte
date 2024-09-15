<script lang="ts">
	import { onMount } from 'svelte';
	import { previousPageSlug } from '$lib/stores/store.page';
	import Head from '$lib/components/seo/head.svelte';
	import Hero from '$lib/components/hero/hero.svelte';
	import Container from '$lib/components/layout/container.svelte';
	import Section from '$lib/components/layout/section.svelte';
	import Card from '$lib/components/cards/card-post.svelte';
	import CardGrid from '$lib/components/grid/grid-posts.svelte';
	import PillButton from '$lib/components/buttons/button-pill.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;

	onMount(() => {
		previousPageSlug.set('blog');
	});
</script>

<Head
	canonical="https://jackreimers.dev/blog"
	description="Read my blog where I talk about web and game development."
	title="Jack Reimers | Blog"
/>
<Hero subtitle="Discover the tech topics I’m passionate about." title="Blog" />
<Container>
	<Section>
		<div class="flex justify-end">
			<PillButton href="/tags" icon="chevron" text="Filter by tag" />
		</div>
		<CardGrid classes="mt-4" horizontal={true} itemCount={data.posts.length}>
			{#each data.posts as post}
				<Card
					href="/blog/{post.slug}"
					imageHref={post.imageHref}
					date={post.dateString}
					title={post.title}
					content={post.excerpt}
					horizontal={true}
				>
					<div class="flex gap-2 overflow-auto">
						{#each post.tags as tag}
							<PillButton href="/tags/{tag.slug}" text={tag.name} />
						{/each}
					</div>
				</Card>
			{/each}
		</CardGrid>
	</Section>
</Container>
