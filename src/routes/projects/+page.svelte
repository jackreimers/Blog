<script lang="ts">
	import PageHeader from '$lib/components/layout/page-header.svelte';
	import { page } from '$app/stores';
	import Icon from '$lib/components/text/icon.svelte';
	import InfoBox from '$lib/components/layout/info-box.svelte';
</script>

<svelte:head>
	<title>Jack Reimers | Projects</title>
</svelte:head>

<PageHeader title="Projects" />

<InfoBox
	title="Under Construction"
	description="This page is still under construction."
	iconClasses="from-amber-600 to-amber-800"
/>
