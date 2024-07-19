<script lang="ts">
	import Head from '$lib/components/seo/head.svelte';
	import Container from '$lib/components/layout/container.svelte';
	import Hero from '$lib/components/layout/headers/hero.svelte';
	import BlockCodeRenderer from '$lib/components/renderers/code-renderer-block.svelte';
	import Section from '$lib/components/layout/elements/section.svelte';
	import VerticalStack from '$lib/components/layout/stacks/stack-vertical.svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import HoriontalStack from '$lib/components/layout/stacks/stack-horizontal.svelte';
	import Button from '$lib/components/buttons/button.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;
</script>

<Head title="Jack Reimers | {data.post.title}" description={data.post.description} />

<Hero title={data.post.title} subtitle={data.post.description} smallerTitle={true}>
	<HoriontalStack classes="flex-wrap">
		{#each data.post.tags as tag}
			<Button color="Blue" href="/tags/{tag.slug}" text={tag.name} />
		{/each}
	</HoriontalStack>
</Hero>
<Container>
	<Section>
		<VerticalStack>
			<div class="markdown box-content">
				<SvelteMarkdown source={data.post.intro} />
			</div>
		</VerticalStack>
	</Section>
	<Section>
		<div class="markdown box-content">
			<SvelteMarkdown source={data.post.content} renderers={{ code: BlockCodeRenderer }} />
		</div>
	</Section>
</Container>
