<script lang="ts">
	import { page } from '$app/stores';
	import { vs } from 'svelte-highlight/styles';

	export let title: string | null = null;
	export let description: string;
	export let canonical: string;
</script>

<svelte:head>
	<title>{title ? title + ' | Jack Reimers' : 'Jack Reimers'}</title>
	<meta content={description} name="description" />
	<meta content="Jack Reimers" property="og:site_name" />
	<meta content={title} property="og:title" />
	<meta content={description} property="og:description" />
	<meta content={'https://jackreimers.dev' + $page.url.pathname} property="og:url" />
	<meta content="https://jackreimers.dev/images/seo/og.png" property="og:image" />
	<meta content="summary" property="twitter:card" />
	<meta content={title} property="twitter:title" />
	<meta content={description} property="twitter:description" />
	<meta content="https://jackreimers.dev/images/seo/og.png" property="twitter:image" />
	<link href={canonical} rel="canonical" />
	{@html vs}
</svelte:head>
