<script lang="ts">
	import { previousPageSlug } from '$lib/stores/store.page';
	import { onMount } from 'svelte';
	import { Filter } from 'lucide-svelte';
	import Head from '$lib/components/seo/head.svelte';
	import Container from '$lib/components/layout/container.svelte';
	import Section from '$lib/components/layout/section.svelte';
	import Hero from '$lib/components/hero/hero.svelte';
	import PostCard from '$lib/components/cards/card-post.svelte';
	import PostGrid from '$lib/components/grids/grid-posts.svelte';
	import PillButton from '$lib/components/buttons/button-pill.svelte';

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
<Hero subtitle="See some of the projects I've worked on." title="Projects" />
<Container>
	<Section>
		<div class="flex justify-end">
			<PillButton color="lightBlue" href="/tags" icon={Filter} text="Filter by tag" />
		</div>
		<PostGrid classes="mt-4" itemCount={data.posts.length}>
			{#each data.posts as post}
				<PostCard data={post} />
			{/each}
		</PostGrid>
	</Section>
</Container>
