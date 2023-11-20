<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/layout/header.svelte';
	import Footer from '$lib/components/layout/footer.svelte';

	//TODO: https://kit.svelte.dev/docs/load#$page-data
</script>

<div class="flex h-screen flex-col">
	<Header />

	<div class="container mx-auto flex-1 px-8">
		<slot />
	</div>

	<Footer />
</div>
