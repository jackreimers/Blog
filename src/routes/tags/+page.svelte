<script lang="ts">
	import Container from '$lib/components/layout/container.svelte';
	import Section from '$lib/components/layout/elements/section.svelte';
	import Hero from '$lib/components/layout/headers/hero.svelte';
	import Button from '$lib/components/buttons/button.svelte';
	import HorizontalStack from '$lib/components/layout/stacks/stack-horizontal.svelte';
	import CardGrid from '$lib/components/layout/elements/card-grid-tag.svelte';
	import CardTag from '$lib/components/layout/elements/card-tag.svelte';
	import Head from '$lib/components/seo/head.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;
</script>

<Head
	title="Jack Reimers | Tags"
	description="Discover posts that match your interests by filtering through post tags, or explore the range of topics I cover."
/>
<Hero
	title="Tags"
	subtitle="Discover posts that match your interests by filtering through post tags, or explore the range of topics I cover."
>
	<HorizontalStack>
		<Button href="/" color="BlueSolid" icon="rss_feed" />
	</HorizontalStack>
</Hero>
<Container>
	<Section>
		<CardGrid>
			{#each data.tags as tag}
				<CardTag {tag} />
			{/each}
		</CardGrid>
	</Section>
</Container>
