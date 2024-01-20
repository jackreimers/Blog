<script lang="ts">
	import BlogCard from '$lib/components/layout/blog-card.svelte';
	import BlogListHeader from '$lib/components/layout/blog-list-header.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;
</script>

<svelte:head>
	<title>Jack Reimers | Blog</title>
</svelte:head>

<BlogListHeader postCount={data.posts.length} />

<div class="grid gap-5">
	{#each data.posts as post}
		<BlogCard data={post} />
	{/each}
</div>
