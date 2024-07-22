<script lang="ts">
	import Container from '$lib/components/layout/container.svelte';
	import Section from '$lib/components/layout/elements/section.svelte';
	import Hero from '$lib/components/layout/headers/hero.svelte';
	import CardGrid from '$lib/components/layout/elements/card-grid-tag.svelte';
	import CardTag from '$lib/components/layout/elements/card-tag.svelte';
	import Head from '$lib/components/seo/head.svelte';
	import SocialLinks from '$lib/components/layout/elements/social-links.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;
</script>

<Head
	description="Discover posts that match your interests by filtering through post tags, or explore the range of topics I cover."
	title="Jack Reimers | Tags"
/>
<Hero
	subtitle="Discover posts that match your interests by filtering through post tags, or explore the range of topics I cover."
	title="Tags"
>
	<SocialLinks />
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
