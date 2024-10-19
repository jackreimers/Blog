<script lang="ts">
	import { page } from '$app/stores';
	import { Undo2 } from 'lucide-svelte';
	import Container from '$lib/components/container/container.svelte';
	import Section from '$lib/components/section/section.svelte';
	import ErrorState from '$lib/components/error-state/error-state.svelte';
	import BasicButton from '$lib/components/buttons/basic/basic-button.svelte';
</script>

<svelte:head>
	<title>Oops... | Jack Reimers</title>
</svelte:head>

<Container>
	<Section>
		<ErrorState
			class="my-24 sm:my-32 md:my-40 lg:my-48 xl:my-56"
			subtitle={$page.status === 404
				? "The page you requested wasn't found, it may have been moved or deleted."
				: 'Please try again later or contact me if the issue persists.'}
			title={$page.status === 404 ? 'Not Found' : 'Error'}
		>
			<div class="flex justify-center gap-2">
				<BasicButton color="primary" href="/" icon={Undo2} text="Return to home" />
			</div>
		</ErrorState>
	</Section>
</Container>
