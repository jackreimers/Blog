<script lang="ts">
	import { page } from '$app/stores';
	import { Frown } from 'lucide-svelte';
	import Container from '$lib/components/container/container.svelte';
	import Section from '$lib/components/section/section.svelte';
	import Hero from '$lib/components/hero/hero.svelte';
	import EmptyState from '$lib/components/empty/empty-state.svelte';
	import PillButton from '$lib/components/buttons/pill/pill-button.svelte';
</script>

<svelte:head>
	<title>Jack Reimers | Oops...</title>
</svelte:head>

<Hero subtitle="Something went wrong." title="Oops..." />
<Container>
	<Section>
		<EmptyState
			icon={Frown}
			subtitle={$page.status === 404
				? "The page you requested wasn't found, it may have been moved or deleted."
				: 'Please try again later or contact me if the issue persists.'}
			title={$page.status === 404 ? 'Not found' : 'An error occurred'}
		>
			<div class="flex justify-center gap-2">
				<PillButton color="secondary" href="/" text="Return to home" />
			</div>
		</EmptyState>
	</Section>
</Container>
