<script lang="ts">
	import { page } from '$app/stores';
	import PageHeader from '$lib/components/layout/header-page.svelte';
	import PageTitle from '$lib/components/layout/header-title.svelte';
	import InfoBox from '$lib/components/layout/info-box.svelte';
</script>

<svelte:head>
	<title>Jack Reimers | Oops...</title>
</svelte:head>

<PageHeader>
	<PageTitle slot="title">Oops...</PageTitle>
</PageHeader>
<InfoBox
	title={$page.status.toString()}
	description={$page.status === 404
		? 'The requested resource was not found.'
		: 'An error occurred while trying to load the page. Please try again later.'}
	icon="error"
	iconClasses="from-red-600 to-red-800"
/>
