<script lang="ts">
	import type { PageServerData } from './$types';
	import { onMount } from 'svelte';
	import { Undo2 } from 'lucide-svelte';
	import Head from '$lib/components/seo/head.svelte';
	import Container from '$lib/components/container/container.svelte';
	import Section from '$lib/components/section/section.svelte';
	import Hero from '$lib/components/hero/hero.svelte';
	import BasicGrid from '$lib/components/grids/basic/basic-grid.svelte';
	import TagCard from '$lib/components/cards/card-tag.svelte';
	import BasicButton from '$lib/components/buttons/basic/basic-button.svelte';

	export let data: PageServerData;

	let previousSlug: string = '';

	onMount(() => {
		previousSlug = sessionStorage.getItem('previousSlug') ?? '';
	});
</script>

<Head
	canonical="https://jackreimers.dev/tags"
	description="Discover posts by Jack Reimers that match your interests by filtering through post tags."
	title="Tags"
/>
<Hero subtitle="Filter posts by topics that interest you." title="All Tags">
	<BasicButton color="secondary" href="/{previousSlug}" icon={Undo2} text="Return" />
</Hero>
<Container>
	<Section>
		<BasicGrid>
			{#each data.tags as tag}
				<TagCard data={tag} />
			{/each}
		</BasicGrid>
	</Section>
</Container>
