<script lang="ts">
	import { page } from '$app/stores';
	import { getDateString } from '$lib/common/functions';
	import SvelteMarkdown from 'svelte-markdown';
	import Header from '$lib/components/layout/headers/header-page.svelte';
	import HorizontalStack from '$lib/components/layout/stacks/stack-horizontal.svelte';
	import Button from '$lib/components/buttons/button-primary.svelte';
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

<Header title={data.post.title} infoIcon="calendar_month" infoText={getDateString(data.post.date)}>
	<HorizontalStack>
		{#each data.post.tags as tag}
			<Button href="/blog?tag={tag.slug}">
				<p slot="text">{tag.name}</p>
			</Button>
		{/each}
	</HorizontalStack>
</Header>
<div class="markdown box-content font-medium">
	<SvelteMarkdown source={data.post.intro} />
</div>
<div class="markdown box-content">
	<SvelteMarkdown source={data.post.content} renderers={{ code: BlockCodeRenderer }} />
</div>
