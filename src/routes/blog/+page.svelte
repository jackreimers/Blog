<script lang="ts">
	import BlogCard from '$lib/components/layout/blog-card.svelte';
	import BlogListHeader from '$lib/components/layout/blog-list-header.svelte';
</script>

<BlogListHeader />

<div class="flex flex-col gap-7">
	<BlogCard />
	<BlogCard />
</div>
