<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import BlogHeader from '$lib/components/layout/blog-header.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;
</script>

<BlogHeader {data} />
<SvelteMarkdown source={data.content} />
