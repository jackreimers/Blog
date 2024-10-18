<script lang="ts">
	import { previousPageSlug } from '$lib/stores/store.page';
	import { onMount } from 'svelte';
	import Head from '$lib/components/seo/head.svelte';
	import Container from '$lib/components/container/container.svelte';
	import Section from '$lib/components/section/section.svelte';
	import Hero from '$lib/components/hero/hero.svelte';
	import Grid from '$lib/components/grids/grid.svelte';
	import TagCard from '$lib/components/cards/card-tag.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;

	onMount(() => {
		previousPageSlug.set('tags');
	});
</script>

<Head
	canonical="https://jackreimers.dev/tags"
	description="Discover posts by Jack Reimers that match your interests by filtering through post tags."
	title="Tags"
/>
<Hero subtitle="Filter my posts by topics that interest you." title="Tags" />
<Container>
	<Section>
		<Grid>
			{#each data.tags as tag}
				<TagCard data={tag} />
			{/each}
		</Grid>
	</Section>
</Container>
