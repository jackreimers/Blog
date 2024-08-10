<script lang="ts">
	import '../app.css';
	import { inject } from '@vercel/analytics';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import Header from '$lib/components/header/header.svelte';
	import Footer from '$lib/components/footer/footer.svelte';

	inject();
	injectSpeedInsights();
</script>

<div class="h-[100dvh]">
	<div class="flex min-h-[100dvh] flex-col">
		<Header />
		<div class="flex-1">
			<slot />
		</div>
		<Footer />
	</div>
</div>
