<script lang="ts">
	import PageHeader from '$lib/components/layout/page-header.svelte';
	import BlogCard from '$lib/components/layout/blog-card.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;
</script>

<svelte:head>
	<title>Jack Reimers | Blog</title>
</svelte:head>

<PageHeader>
	<div class="flex flex-col gap-2.5 text-center sm:gap-3.5">
		<p class="mb-0.5 text-sm leading-none sm:text-base">{data.posts.length} Posts</p>
		<h1 class="text-3xl font-bold sm:text-5xl lg:text-6xl">Blog Posts</h1>
	</div>
</PageHeader>

<div class="grid gap-5">
	{#each data.posts as post}
		<BlogCard data={post} />
	{/each}
</div>
