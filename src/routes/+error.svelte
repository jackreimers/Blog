<script lang="ts">
	import { page } from '$app/stores';
	import PageHeader from '$lib/components/layout/headers/header-page.svelte';
</script>

<svelte:head>
	<title>Jack Reimers | Oops...</title>
</svelte:head>

<PageHeader title="Oops.." infoIcon="error" infoText={$page.status}></PageHeader>

<p class="mt-3">
	{$page.status === 404
		? 'The requested resource was not found.'
		: 'An error occurred while trying to load the page.'}
</p>
