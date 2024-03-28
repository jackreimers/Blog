<script lang="ts">
	import { getDateString } from '$lib/common/functions';
	import SvelteMarkdown from 'svelte-markdown';
	import PageHeader from '$lib/components/layout/page-header.svelte';
	import PageTitle from '$lib/components/layout/page-title.svelte';
	import Button from '$lib/components/buttons/button.svelte';
	import BlockCodeRenderer from '$lib/components/renderers/code-renderer-block.svelte';
	import InlineCodeRenderer from '$lib/components/renderers/code-renderer-inline.svelte';
	import Icon from '$lib/components/text/icon.svelte';

	//TODO: Investigate if this can be prerendered
	export const prerender = false;

	/** @type {import('./$types').PageData} */
	export let data: any;
</script>

<svelte:head>
	<title>Jack Reimers | {data.post.title}</title>
</svelte:head>

<PageHeader>
	<div slot="title">
		<PageTitle>{data.post.title}</PageTitle>
	</div>
	<div slot="info">
		<div
			class="flex items-center gap-2 text-sm font-semibold leading-none sm:gap-2.5 sm:text-base"
		>
			<Icon
				icon="calendar_month"
				weight={400}
				classes="rounded bg-gradient-to-br from-blue-600 to-blue-800 p-1 text-white shadow sm:p-1.5"
			/>
			<p>{getDateString(data.post.date)}</p>
		</div>
	</div>
	<div slot="actions">
		<div class="flex flex-wrap gap-2">
			{#each data.post.tags as tag}
				<Button
					onClick={() => {}}
					classes="btn-padding btn-hover bg-white text-sm shadow sm:text-base"
				>
					<p class="font-semibold">{tag.name}</p>
				</Button>
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
