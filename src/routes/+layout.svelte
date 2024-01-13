<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/layout/header.svelte';
	import Footer from '$lib/components/layout/footer.svelte';

	//TODO: https://kit.svelte.dev/docs/load#$page-data
</script>

<div class="h-screen">
	<div class="flex min-h-full flex-col">
		<Header />

		<div class="container mx-auto max-w-3xl flex-1 px-6 md:px-12">
			<slot />
		</div>

		<Footer />
	</div>
</div>
