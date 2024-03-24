<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import PageHeader from '$lib/components/layout/page-header.svelte';
	import BlockCodeRenderer from '$lib/components/renderers/code-renderer-block.svelte';
	import InlineCodeRenderer from '$lib/components/renderers/code-renderer-inline.svelte';
	import { getDateString } from '$lib/functions/functions';
	import Button from '$lib/components/buttons/button.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;
</script>

<svelte:head>
	<title>Jack Reimers | {data.metadata.title}</title>
</svelte:head>

<PageHeader
	title={data.metadata.title}
	infoIcon="calendar_month"
	infoText={getDateString(data.metadata.date)}
>
	<div class="flex flex-wrap gap-2">
		{#each data.metadata.categories as category}
			<Button
				onClick={() => {}}
				classes="bg-gray-100 px-3 py-1.5 text-sm hover:bg-gray-200 sm:px-4 sm:py-2.5 sm:text-base"
			>
				<p class="font-semibold">{category.name}</p>
			</Button>
		{/each}
	</div>
</PageHeader>

<div class="flex">
	<div class="w-[5px] rounded-full bg-gradient-to-b from-blue-600 to-blue-800" />
	<div class="flex-1 px-3 py-1 font-medium">
		<SvelteMarkdown source={data.intro} />
	</div>
</div>

<div class="markdown box-content">
	<SvelteMarkdown
		source={data.content}
		renderers={{ code: BlockCodeRenderer, codespan: InlineCodeRenderer }}
	/>
</div>
