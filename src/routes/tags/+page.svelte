<script lang="ts">
	import { Notebook } from 'lucide-svelte';
	import Head from '$lib/components/seo/head.svelte';
	import Container from '$lib/components/page/container.svelte';
	import Section from '$lib/components/page/section.svelte';
	import Hero from '$lib/components/hero/hero.svelte';
	import VerticalStack from '$lib/components/stacks/stack-vertical.svelte';
	import HorizontalStack from '$lib/components/stacks/stack-horizontal.svelte';
	import TagCard from '$lib/components/cards/card-tag.svelte';
	import CardGrid from '$lib/components/grids/grid-tag.svelte';
	import SocialLinks from '$lib/components/contact/links.svelte';
	import Button from '$lib/components/buttons/button.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;
</script>

<Head
	canonical="https://jackreimers.dev/tags"
	description="Discover posts that match your interests by filtering through post tags, or explore the range of topics I cover."
	title="Jack Reimers | Tags"
/>
<Hero
	subtitle="Discover posts that match your interests by filtering through post tags, or explore the range of topics I talk about."
	title="Tags"
>
	<SocialLinks slot="below" />
</Hero>
<Container>
	<Section>
		<VerticalStack>
			<HorizontalStack classes="justify-end">
				<Button href="/blog" text="Posts">
					<Notebook />
				</Button>
			</HorizontalStack>
			<CardGrid>
				{#each data.tags as tag}
					<TagCard data={tag} />
				{/each}
			</CardGrid>
		</VerticalStack>
	</Section>
</Container>
