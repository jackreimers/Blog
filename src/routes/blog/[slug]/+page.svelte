<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import BlogHeader from '$lib/components/layout/header-blog.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;

	console.log('data', data);
</script>

<BlogHeader />

<SvelteMarkdown source={data.content} />
