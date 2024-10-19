<script lang="ts">
	import { previousPageSlug } from '$lib/stores/store.page';
	import { onMount } from 'svelte';
	import { Filter } from 'lucide-svelte';
	import Head from '$lib/components/seo/head.svelte';
	import Container from '$lib/components/container/container.svelte';
	import Section from '$lib/components/section/section.svelte';
	import Hero from '$lib/components/hero/hero.svelte';
	import PostCard from '$lib/components/cards/post/post-card.svelte';
	import PostGrid from '$lib/components/grids/posts/posts-grid.svelte';
	import BasicButton from '$lib/components/buttons/basic/basic-button.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;

	onMount(() => {
		previousPageSlug.set('projects');
	});
</script>

<Head
	canonical="https://jackreimers.dev/projects"
	description="See some of the projects that Jack Reimers has worked on in the past."
	title="Projects"
/>
<Hero subtitle="See some of the projects I've worked on in the past." title="My Projects">
	<BasicButton color="primary" href="/tags" icon={Filter} text="Filter by tag" />
</Hero>
<Container>
	<Section>
		<PostGrid classes="mt-4" itemCount={data.posts.length}>
			{#each data.posts as post}
				<PostCard data={post} />
			{/each}
		</PostGrid>
	</Section>
</Container>
