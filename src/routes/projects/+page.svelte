<script lang="ts">
	import PageHeader from '$lib/components/layout/page-header.svelte';
	import InfoBox from '$lib/components/layout/info-box.svelte';
	import PageTitle from '$lib/components/layout/page-title.svelte';
</script>

<svelte:head>
	<title>Jack Reimers | Projects</title>
</svelte:head>

<PageHeader>
	<div slot="title">
		<PageTitle>Projects</PageTitle>
	</div>
</PageHeader><InfoBox
	title="Under Construction"
	description="This page is still under construction."
	iconClasses="from-amber-600 to-amber-800"
/>
