<script lang="ts">
	import { Undo2 } from 'lucide-svelte';
	import Hero from '$lib/components/hero/hero.svelte';
	import HorizontalStack from '$lib/components/stacks/stack-horizontal.svelte';
	import Button from '$lib/components/buttons/button.svelte';
	import SocialLinks from '$lib/components/contact/links.svelte';
</script>

<svelte:head>
	<title>Jack Reimers | Oops...</title>
</svelte:head>

<Hero
	subtitle="An error occured whilst processing your request, please try again later or contact me if the issue persists."
	title="Oops..."
>
	<HorizontalStack slot="below">
		<Button active={true} color="gray" href="/" text="Back">
			<Undo2 />
		</Button>
		<SocialLinks />
	</HorizontalStack>
</Hero>
