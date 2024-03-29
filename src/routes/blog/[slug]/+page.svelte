<script lang="ts">
	import { getDateString } from '$lib/common/functions';
	import SvelteMarkdown from 'svelte-markdown';
	import PageHeader from '$lib/components/layout/header-page.svelte';
	import Icon from '$lib/components/text/icon.svelte';
	import BlockCodeRenderer from '$lib/components/renderers/code-renderer-block.svelte';
	import InlineCodeRenderer from '$lib/components/renderers/code-renderer-inline.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;
</script>

<svelte:head>
	<title>Jack Reimers | {data.post.title}</title>
</svelte:head>

<PageHeader>
	<div slot="title">
		<h1 class="pg-title">{data.post.title}</h1>
	</div>
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
	<div slot="actions">
		<div class="flex flex-wrap gap-2">
			{#each data.post.tags as tag}
				<a
					href="/blog?tags={tag.slug}"
					class="btn btn-padding btn-hover bg-white text-sm shadow sm:text-base"
				>
					<p class="font-semibold">{tag.name}</p>
				</a>
			{/each}
		</div>
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
