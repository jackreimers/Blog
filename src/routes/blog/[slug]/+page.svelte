<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import CodeBlockRenderer from '$lib/components/renderers/code-block-renderer.svelte';
	import BlogHeader from '$lib/components/layout/blog-header.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;
</script>

<svelte:head>
	<title>Jack Reimers | {data.metadata.title}</title>
</svelte:head>

<BlogHeader {data} />

<div class="flex">
	<div class="w-[5px] rounded-full bg-gradient-to-b from-blue-600 to-blue-950" />
	<p class="max-w-prose flex-1 px-3 py-1 font-medium">{data.intro}</p>
</div>

<div class="markdown">
	<SvelteMarkdown source={data.content} renderers={{ code: CodeBlockRenderer }} />
</div>
