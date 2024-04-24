<script lang="ts">
	import '../app.css';
	import { inject } from '@vercel/analytics';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import Header from '$lib/components/layout/header.svelte';
	import Footer from '$lib/components/layout/footer.svelte';

	inject();
	injectSpeedInsights();
</script>

<svelte:head>
	<meta property="og:image" content="/images/og.png" />
	<meta property="twitter:card" content="summary" />
</svelte:head>

<div class="h-screen">
	<div class="flex min-h-screen flex-col">
		<Header />
		<div class="container mx-auto max-w-3xl flex-1 p-4 sm:p-6 md:p-7 xl:max-w-5xl">
			<slot />
		</div>
		<Footer />
	</div>
</div>
