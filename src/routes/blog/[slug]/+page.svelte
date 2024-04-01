<script lang="ts">
	import { getDateString } from '$lib/common/functions';
	import SvelteMarkdown from 'svelte-markdown';
	import PageHeader from '$lib/components/layout/header-page.svelte';
	import Icon from '$lib/components/text/icon.svelte';
	import BlockCodeRenderer from '$lib/components/renderers/code-renderer-block.svelte';
	import InlineCodeRenderer from '$lib/components/renderers/code-renderer-inline.svelte';
	import PageTitle from '$lib/components/layout/header-title.svelte';
	import { Direction, Size } from '$lib/common/enums';
	import Stack from '$lib/components/layout/stack.svelte';
	import Button from '$lib/components/buttons/button.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;
</script>

<svelte:head>
	<title>Jack Reimers | {data.post.title}</title>
</svelte:head>

<PageHeader>
	<PageTitle slot="title">{data.post.title}</PageTitle>
	<div slot="info">
		<div
			class="flex items-center gap-2 text-sm font-medium leading-none sm:gap-2.5 sm:text-base"
		>
			<Icon
				icon="calendar_month"
				weight={400}
				classes="rounded bg-gradient-to-br from-blue-600 to-blue-800 p-1 text-white shadow sm:p-1.5"
			/>
			<p class="text-gray-500">{getDateString(data.post.date)}</p>
		</div>
	</div>
	<Stack slot="actions" direction={Direction.Horizontal} size={Size.Small}>
		{#each data.post.tags as tag}
			<Button href="/blog?tags={tag.slug}">
				<p slot="text">{tag.name}</p>
			</Button>
		{/each}
	</Stack>
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
