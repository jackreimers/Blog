<script lang="ts">
	import { getDateString } from '$lib/common/functions';
	import SvelteMarkdown from 'svelte-markdown';
	import PageHeader from '$lib/components/layout/page-header.svelte';
	import Button from '$lib/components/buttons/button.svelte';
	import BlockCodeRenderer from '$lib/components/renderers/code-renderer-block.svelte';
	import InlineCodeRenderer from '$lib/components/renderers/code-renderer-inline.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;
</script>

<svelte:head>
	<title>Jack Reimers | {data.post.metadata.title}</title>
</svelte:head>

{#await data.post}
	<p>Loading post...</p>
{:then post}
	<PageHeader
		title={post.metadata.title}
		infoIcon="calendar_month"
		infoText={getDateString(post.metadata.date)}
	>
		<div class="flex flex-wrap gap-2">
			{#each post.metadata.categories as category}
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
			<SvelteMarkdown source={post.intro} />
		</div>
	</div>
	<div class="markdown box-content">
		<SvelteMarkdown
			source={post.content}
			renderers={{ code: BlockCodeRenderer, codespan: InlineCodeRenderer }}
		/>
	</div>
{/await}
