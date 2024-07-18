<script lang="ts">
	import Container from '$lib/components/layout/container.svelte';
	import Section from '$lib/components/layout/elements/section.svelte';
	import Hero from '$lib/components/layout/headers/hero.svelte';
	import Button from '$lib/components/buttons/button.svelte';
	import Icon from '$lib/components/text/icon.svelte';
	import VerticalStack from '$lib/components/layout/stacks/stack-vertical.svelte';
	import HorizontalStack from '$lib/components/layout/stacks/stack-horizontal.svelte';
	import CardGrid from '$lib/components/layout/elements/card-grid.svelte';
	import CardTag from '$lib/components/layout/elements/card-tag.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;
</script>

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
		<VerticalStack>
			<HorizontalStack classes="justify-end">
				<Button href="/blog" text="Posts" icon="article" />
			</HorizontalStack>
			<CardGrid>
				{#each data.tags as tag}
					<CardTag {tag} />
				{/each}
			</CardGrid>
		</VerticalStack>
	</Section>
</Container>
