<script lang="ts">
	import { page } from '$app/stores';
	import { vs } from 'svelte-highlight/styles';

	export let title: string;
	export let description: string;
</script>

<svelte:head>
	<title>{title}</title>
	<meta content={description} name="description" />
	<meta content={title} property="og:title" />
	<meta content={description} property="og:description" />
	<meta content={'https://jackreimers.dev' + $page.url.pathname} property="og:url" />
	<meta content="https://jackreimers.dev/images/other/og.png" property="og:image" />
	<meta content="summary" property="twitter:card" />
	<meta content={title} property="twitter:title" />
	<meta content={description} property="twitter:description" />
	{@html vs}
</svelte:head>
