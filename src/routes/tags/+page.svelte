<script lang="ts">
	import Container from '$lib/components/layout/container.svelte';
	import Hero from '$lib/components/layout/headers/hero.svelte';
	import Icon from '$lib/components/text/icon.svelte';
	import HorizontalStack from '$lib/components/layout/stacks/stack-horizontal.svelte';
	import CardGrid from '$lib/components/layout/elements/card-grid.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;
</script>

<Hero
	title="Tags"
	subtitle="Discover posts that match your interests by filtering through post tags, or explore the range of topics I cover."
>
	<HorizontalStack>
		<a
			href="mailto:me@jackreimers.dev"
			class="rounded bg-blue-900 p-3 text-white transition-colors duration-200 hover:bg-blue-950"
		>
			<Icon icon="rss_feed" />
		</a>
	</HorizontalStack>
</Hero>
<Container>
	<CardGrid>
		{#each data.tags as tag}
			<a
				href="/tags/{tag.slug}"
				class="flex aspect-square flex-col justify-center overflow-hidden rounded-lg bg-white"
			>
				<div class="flex flex-1 items-center justify-center">
					<span class="text-9xl {tag.icon}" />
				</div>
			</a>
		{/each}
	</CardGrid>
</Container>
