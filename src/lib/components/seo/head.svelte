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
	<meta content="https://jackreimers.dev/content/images/banner_1200x630.png" property="og:image" />
	<meta content="summary" property="twitter:card" />
	<meta content={title} property="twitter:title" />
	<meta content={description} property="twitter:description" />
	<meta content="https://jackreimers.dev/content/images/banner_1200x630.png" property="twitter:image" />
	<link href={canonical} rel="canonical" />
	<link href="/favicon-48x48.png" rel="icon" sizes="48x48" type="image/png" />
	<link href="/favicon.svg" rel="icon" type="image/svg+xml" />
	<link href="/favicon.ico" rel="shortcut icon" />
	<link href="/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
	<meta content="Jack Reimers" name="apple-mobile-web-app-title" />
	<link href="/site.webmanifest" rel="manifest" />
	{@html vs}
</svelte:head>
