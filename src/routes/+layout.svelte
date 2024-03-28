<script lang="ts">
	import { inject } from '@vercel/analytics';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

	import '../app.css';
	import Header from '$lib/components/layout/header.svelte';
	import Footer from '$lib/components/layout/footer.svelte';

	inject();
	injectSpeedInsights();
</script>

<div class="h-screen">
	<div class="flex min-h-full flex-col">
		<Header />
		<div class="container mx-auto max-w-3xl flex-1 px-6 sm:px-8 md:px-12 xl:max-w-5xl">
			<slot />
		</div>
		<Footer />
	</div>
</div>
