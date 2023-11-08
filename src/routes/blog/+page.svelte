<script lang="ts">
	import BlogCard from '$lib/components/layout/blog-card.svelte';
	import BlogListHeader from '$lib/components/layout/blog-list-header.svelte';
	import { getPosts } from '$lib/functions/functions';

	/** @type {import('./$types').PageData} */
	export let data: any;
</script>

<BlogListHeader />

<div class="flex flex-col gap-7">
	{#each data as post}
		<BlogCard data={post} />
	{/each}
</div>
