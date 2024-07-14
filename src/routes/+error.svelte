<script lang="ts">
	import { page } from '$app/stores';
	import Container from '$lib/components/layout/container.svelte';
	import Section from '$lib/components/layout/elements/section.svelte';
	import Hero from '$lib/components/layout/headers/hero.svelte';
</script>

<svelte:head>
	<title>Jack Reimers | Oops...</title>
</svelte:head>

<Hero color="Red" title="Oops..." icon="error" />

<Container>
	<Section>
		<p class="max-w-prose">
			An error occured whilst processing your request. Please try again later or contact me if
			the issue persists.
		</p>
		<!--
		<p>
			{$page.status === 404
				? 'The requested resource was not found.'
				: 'An error occurred while trying to load the page.'}
		</p>
		-->
	</Section>
</Container>
