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
	<title>Jack Reimers | {data.post.metadata.title}</title>
</svelte:head>

<PageHeader
	title={data.post.metadata.title}
	infoIcon="calendar_month"
	infoText={getDateString(data.post.metadata.date)}
>
	<div class="flex flex-wrap gap-2">
		{#each data.post.metadata.categories as category}
			<Button
				onClick={() => {}}
				classes="btn-padding btn-hover bg-white text-sm shadow sm:text-base"
			>
				<p class="font-semibold">{category.name}</p>
			</Button>
		{/each}
	</div>
</PageHeader>

<div class="flex">
	<div class="w-[5px] rounded-full bg-gradient-to-b from-blue-600 to-blue-800" />
	<div class="flex-1 px-3 py-1 font-medium">
		<SvelteMarkdown source={data.post.intro} />
	</div>
</div>

<div class="markdown box-content">
	<SvelteMarkdown
		source={data.post.content}
		renderers={{ code: BlockCodeRenderer, codespan: InlineCodeRenderer }}
	/>
</div>
