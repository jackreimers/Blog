<script lang="ts">
	import { previousPageSlug } from '$lib/stores/store.page';
	import { onMount } from 'svelte';
	import Head from '$lib/components/seo/head.svelte';
	import Hero from '$lib/components/hero/hero.svelte';
	import Card from '$lib/components/cards/card-post.svelte';
	import Section from '$lib/components/layout/section.svelte';
	import CardGrid from '$lib/components/grids/grid-posts.svelte';
	import PillButton from '$lib/components/buttons/button-pill.svelte';
	import Container from '$lib/components/layout/container.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;

	onMount(() => {
		previousPageSlug.set('projects');
	});
</script>

<Head
	canonical="https://jackreimers.dev/projects"
	description="See some of the projects that Jack Reimers has worked on in the past."
	title="Jack Reimers | Projects"
/>
<Hero subtitle="See some of the projects I've worked on in the past." title="Projects" />
<Container>
	<Section>
		<div class="flex justify-end">
			<PillButton href="/tags" icon="chevron" text="Filter by tag" />
		</div>
		<CardGrid classes="mt-4" horizontal={true} itemCount={data.posts.length}>
			{#each data.posts as post}
				<Card
					href="/projects/{post.slug}"
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
