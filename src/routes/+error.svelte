<script lang="ts">
	import { page } from '$app/stores';
	import { AlertCircle } from 'lucide-svelte';
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
			iconAlign="left"
			target="_blank"
			text={$page.status.toString()}
		>
			<AlertCircle />
		</Button>
	</div>
</Hero>

<Container>
	<Section>
		<p>
			{$page.status === 404
				? 'The requested resource was not found.'
				: ($page?.error?.message ?? 'Something went wrong.')}
		</p>
	</Section>
</Container>
