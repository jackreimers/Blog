<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/layout/header.svelte';
</script>

<Header />

<div class="container mx-auto px-8">
	<slot />
</div>
