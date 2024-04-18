<script lang="ts">
	import { page } from '$app/stores';
	import { getDateString } from '$lib/common/functions';
	import SvelteMarkdown from 'svelte-markdown';
	import PageHeader from '$lib/components/layout/page-header.svelte';
	import PageTitle from '$lib/components/layout/page-header-title.svelte';
	import Button from '$lib/components/buttons/button-primary.svelte';
	import Icon from '$lib/components/text/icon.svelte';
	import BlockCodeRenderer from '$lib/components/renderers/code-renderer-block.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;

	const title = 'Jack Reimers | ' + data.post.title;
	const description = data.post.description;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={'https://jackreimers.dev' + $page.url.pathname} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
</svelte:head>

<PageHeader>
	<PageTitle slot="title">{data.post.title}</PageTitle>
	<div slot="info">
		<div class="flex items-center font-medium leading-none">
			<Icon
				icon="calendar_month"
				weight={400}
				classes="mr-2 rounded bg-gradient-to-br from-blue-600 to-blue-800 p-1 text-white shadow sm:mr-2.5 sm:p-1.5"
			/>
			<p class="font-semibold">{getDateString(data.post.date)}</p>
		</div>
	</div>
	<div slot="actions" class="flex gap-2.5 sm:gap-3.5">
		{#each data.post.tags as tag}
			<Button href="/blog?tag={tag.slug}">
				<p slot="text">{tag.name}</p>
			</Button>
		{/each}
	</div>
</PageHeader>
<div class="mb-7 flex sm:mb-9">
	<div class="w-[5px] rounded-full bg-gradient-to-b from-blue-600 to-blue-800" />
	<div class="flex-1 px-3 py-1 font-medium">
		<SvelteMarkdown source={data.post.intro} />
	</div>
</div>
<div class="markdown box-content">
	<SvelteMarkdown source={data.post.content} renderers={{ code: BlockCodeRenderer }} />
</div>
