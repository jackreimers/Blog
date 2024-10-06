<script lang="ts">
	import { page } from '$app/stores';
	import { Frown } from 'lucide-svelte';
	import Hero from '$lib/components/hero/hero.svelte';
	import Container from '$lib/components/layout/container.svelte';
	import Section from '$lib/components/layout/section.svelte';
	import EmptyState from '$lib/components/elements/empty-state.svelte';
	import PillButton from '$lib/components/buttons/button-pill.svelte';
</script>

<svelte:head>
	<title>Jack Reimers | Oops...</title>
</svelte:head>

<Hero subtitle="Something went wrong." title="Oops..." />
<Container>
	<Section>
		<EmptyState
			subtitle={$page.status === 404
				? "The page you requested wasn't found, it may have been moved or deleted."
				: 'Please try again later or contact me if the issue persists.'}
			title={$page.status === 404 ? 'Not found' : 'An error occurred'}
		>
			<Frown size="3.5rem" slot="icon" />
			<div class="flex justify-center gap-2" slot="content">
				<PillButton
					bgColor="bg-gray-100"
					bgHoverColor="bg-gray-200"
					color="text-gray-900"
					href="/"
					text="Return to home"
				/>
			</div>
		</EmptyState>
	</Section>
</Container>
