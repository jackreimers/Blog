<script lang="ts">
	import PageHeader from '$lib/components/layout/page-header.svelte';
	import InfoBox from '$lib/components/layout/info-box.svelte';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Jack Reimers | Oops...</title>
</svelte:head>

<PageHeader title="Oops..." />
<InfoBox
	title={$page.status.toString()}
	description={$page.error?.message === 'Not Found'
		? 'The page could not be found.'
		: $page.error?.message}
	icon="error"
	iconClasses="from-red-600 to-red-800"
/>
