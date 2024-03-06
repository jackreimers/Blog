<script lang="ts">
	import PageHeader from '$lib/components/layout/page-header.svelte';
	import BlogCard from '$lib/components/layout/blog-card.svelte';
	import { getDateString } from '$lib/functions/functions';
	import Icon from '$lib/components/text/icon.svelte';
	import Button from '$lib/components/buttons/button.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;
</script>

<svelte:head>
	<title>Jack Reimers | Blog</title>
</svelte:head>

<PageHeader>
	<div class="flex flex-col gap-2.5 sm:gap-3.5">
		<h1 class="text-4xl font-bold sm:text-5xl lg:text-6xl">Blog Posts</h1>
		<div
			class="flex items-center gap-2 text-sm font-semibold leading-none sm:gap-2.5 sm:text-base"
		>
			<Icon
				icon="description"
				weight={400}
				classes="rounded bg-gradient-to-br from-blue-600 to-blue-800 p-1 text-white sm:p-1.5"
			/>
			<p>{data.posts.length} Posts</p>
		</div>
		<div class="flex flex-wrap gap-2">
			<Button
				onClick={() => {}}
				classes="bg-gray-100 px-3 py-1.5 text-sm hover:bg-gray-200 sm:px-4 sm:py-2.5 sm:text-base"
			>
				<p class="font-semibold">Date</p>
			</Button>
			<Button
				onClick={() => {}}
				classes="bg-gray-100 px-3 py-1.5 text-sm hover:bg-gray-200 sm:px-4 sm:py-2.5 sm:text-base"
			>
				<p class="font-semibold">Category</p>
			</Button>
		</div>
	</div>
</PageHeader>

<div class="grid gap-4">
	{#each data.posts as post}
		<BlogCard data={post} />
	{/each}
</div>
