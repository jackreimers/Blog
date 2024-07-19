<script lang="ts">
	import { page } from '$app/stores';
	import Container from '$lib/components/layout/container.svelte';
	import Section from '$lib/components/layout/elements/section.svelte';
	import Hero from '$lib/components/layout/headers/hero.svelte';
	import Button from '$lib/components/buttons/button.svelte';
</script>

<svelte:head>
	<title>Jack Reimers | Oops...</title>
</svelte:head>

<Hero
	title="Oops..."
	subtitle="An error occured whilst processing your request, please try again later or contact me if the issue persists."
>
	<div>
		<Button
			color="Red"
			href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/{$page.status}"
			target="_blank"
			text={$page.status}
			icon="error"
			iconWeight={500}
		/>
	</div>
</Hero>

<Container>
	<Section>
		<p class="max-w-prose"></p>
		<p>
			{$page.status === 404
				? 'The requested resource was not found.'
				: 'An error occurred while trying to load the page.'}
		</p>
	</Section>
</Container>
