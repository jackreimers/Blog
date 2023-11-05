<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/layout/header.svelte';

	//TODO: https://kit.svelte.dev/docs/load#$page-data
</script>

<Header />

<div class="container mx-auto px-8">
	<slot />
</div>
