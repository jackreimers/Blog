<script lang="ts">
	import { Calendar } from 'lucide-svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import Head from '$lib/components/seo/head.svelte';
	import Container from '$lib/components/page/container.svelte';
	import Section from '$lib/components/page/section.svelte';
	import Hero from '$lib/components/hero/hero.svelte';
	import VerticalStack from '$lib/components/stacks/stack-vertical.svelte';
	import HoriontalStack from '$lib/components/stacks/stack-horizontal.svelte';
	import CodeRenderer from '$lib/components/renderers/renderer-code.svelte';
	import Button from '$lib/components/buttons/button.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;
</script>

<Head description={data.post.description} title="Jack Reimers | {data.post.title}" />
<Hero smallerTitle={true} title={data.post.title}>
	<div>
		<div
			class="inline-flex items-center rounded bg-gray-100 px-3 py-2 text-sm font-medium text-gray-600 shadow-inner sm:px-4 sm:py-3 sm:text-base"
		>
			<Calendar />
			<p class="ml-1.5 mr-1">{data.post.dateString}</p>
		</div>
	</div>
	<HoriontalStack classes="overflow-auto">
		{#each data.post.tags as tag}
			<Button color="blue" href="/tags/{tag.slug}" text={tag.name} />
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
			<SvelteMarkdown renderers={{ code: BlockCodeRenderer }} source={data.post.content} />
		</div>
	</Section>
</Container>
