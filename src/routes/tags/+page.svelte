<script lang="ts">
	import Head from '$lib/components/seo/head.svelte';
	import Container from '$lib/components/page/container.svelte';
	import Section from '$lib/components/page/section.svelte';
	import Hero from '$lib/components/hero/hero.svelte';
	import Card from '$lib/components/cards/card-tag.svelte';
	import CardGrid from '$lib/components/grids/grid-tag.svelte';
	import SocialLinks from '$lib/components/contact/social.svelte';

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
				<Card {tag} />
			{/each}
		</CardGrid>
	</Section>
</Container>
