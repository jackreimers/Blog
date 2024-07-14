<script lang="ts">
	import '../app.css';
	import { inject } from '@vercel/analytics';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import Header from '$lib/components/layout/headers/header.svelte';
	import Footer from '$lib/components/layout/footers/footer.svelte';

	inject();
	injectSpeedInsights();
</script>

<svelte:head>
	<meta property="og:image" content="https://jackreimers.dev/images/other/og.png" />
	<meta property="twitter:card" content="summary" />
</svelte:head>

<div class="h-[100dvh]">
	<div class="flex min-h-[100dvh] flex-col">
		<Header />
		<slot />
		<Footer />
	</div>
</div>
