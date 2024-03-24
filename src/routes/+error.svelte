<script lang="ts">
	import PageHeader from '$lib/components/layout/page-header.svelte';
	import InfoBox from '$lib/components/layout/info-box.svelte';
	import { page } from '$app/stores';

	//TODO: https://kit.svelte.dev/docs/hooks#shared-hooks-handleerror
</script>

<svelte:head>
	<title>Jack Reimers | Oops...</title>
</svelte:head>

<PageHeader title="Oops..." />
<InfoBox
	title={$page.status.toString()}
	description={$page.status === 404
		? 'The requested resource was not found.'
		: 'An error occurred while trying to load the page. Please try again later.'}
	icon="error"
	iconClasses="from-red-600 to-red-800"
/>
