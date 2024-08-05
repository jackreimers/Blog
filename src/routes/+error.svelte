<script lang="ts">
	import { page } from '$app/stores';
	import { AlertCircle, Undo2 } from 'lucide-svelte';
	import Hero from '$lib/components/hero/hero.svelte';
	import HorizontalStack from '$lib/components/stacks/stack-horizontal.svelte';
	import Button from '$lib/components/buttons/button.svelte';
</script>

<svelte:head>
	<title>Jack Reimers | Oops...</title>
</svelte:head>

<Hero
	subtitle="An error occured whilst processing your request, please try again later or contact me if the issue persists."
	title="Oops..."
>
	<HorizontalStack>
		<Button
			color="red"
			href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/{$page.status}"
			target="_blank"
			text={$page.status.toString()}
		>
			<AlertCircle />
		</Button>
		<Button active={true} color="gray" href="/" text="Back to Homepage">
			<Undo2 />
		</Button>
	</HorizontalStack>
</Hero>
