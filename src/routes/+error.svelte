<script lang="ts">
	import { page } from '$app/stores';
	import Container from '$lib/components/page/container.svelte';
	import Section from '$lib/components/page/section.svelte';
	import Hero from '$lib/components/hero/hero.svelte';
	import Button from '$lib/components/buttons/button.svelte';
</script>

<svelte:head>
	<title>Jack Reimers | Oops...</title>
</svelte:head>

<Hero
	subtitle="An error occured whilst processing your request, please try again later or contact me if the issue persists."
	title="Oops..."
>
	<div>
		<Button
			color="red"
			href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/{$page.status}"
			target="_blank"
			text={$page.status.toString()}
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
