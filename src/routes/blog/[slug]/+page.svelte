<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import { page } from '$app/stores';

	/** @type {import('./$types').PageData} */
	export let data: any;

	console.log('data', data);
</script>

<p>Slug: {$page.params.slug}</p>
<p>Type: {typeof $page.params.slug}</p>

<p>Content: {data.content}</p>

<!--
<SvelteMarkdown source={load($page.params.slug)} />
-->
