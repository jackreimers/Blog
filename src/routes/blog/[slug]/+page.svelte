<script lang="ts">
	import Head from '$lib/components/seo/head.svelte';
	import Container from '$lib/components/layout/container.svelte';
	import Hero from '$lib/components/layout/headers/hero.svelte';
	import BlockCodeRenderer from '$lib/components/renderers/code-renderer-block.svelte';
	import Section from '$lib/components/layout/elements/section.svelte';
	import HorizontalStack from '$lib/components/layout/stacks/stack-horizontal.svelte';
	import VerticalStack from '$lib/components/layout/stacks/stack-vertical.svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import Icon from '$lib/components/text/icon.svelte';
	import HoriontalStack from '$lib/components/layout/stacks/stack-horizontal.svelte';
	import Button from '$lib/components/buttons/button.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;
</script>

<Head title="Jack Reimers | {data.post.title}" description={data.post.description} />

<Hero title={data.post.title} subtitle={data.post.description} smallerTitle={true}>
	<HoriontalStack classes="flex-wrap">
		<!--
		<div class="flex">
			<div
				class="flex items-center gap-2 rounded bg-gray-200 px-3.5 py-2 font-medium text-gray-600 shadow-inner sm:px-4 sm:py-3"
			>
				<Icon icon="calendar_month" weight={500} />
				<p class="mr-1 leading-none">{data.post.dateString}</p>
			</div>
		</div>
		-->
		{#each data.post.tags as tag}
			<Button color="Orange" href="/tags/{tag.slug}" text={tag.name} />
		{/each}
	</HoriontalStack>
</Hero>
<Container>
	<Section>
		<VerticalStack>
			<!--
			<div class="flex justify-end">
				<div
					class="flex items-center gap-1.5 rounded bg-orange-100 px-3 py-2 font-medium text-orange-900 sm:px-4 sm:py-3"
				>
					<Icon icon="calendar_month" weight={500} />
					<p>{data.post.dateString}</p>
				</div>
			</div>
			-->
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
