<script lang="ts">
	import { Undo2 } from 'lucide-svelte';
	import Head from '$lib/components/seo/head.svelte';
	import Hero from '$lib/components/hero/hero.svelte';
	import HorizontalStack from '$lib/components/stacks/stack-horizontal.svelte';
	import Button from '$lib/components/buttons/button.svelte';
	import SocialLinks from '$lib/components/contact/links.svelte';

	/** @type {import('./$types').ActionData} */
	export let form: any;
</script>

<Head
	canonical="https://jackreimers.dev/contact"
	description="I'm a full stack Software Engineer who is passionate about web and video game development."
	title="Jack Reimers | Contact"
/>
<Hero
	subtitle="Thank you for your message, I appreciate you taking the time to reach out and I will get back to you as soon as possible."
	title="Success!"
>
	<HorizontalStack slot="below">
		<Button active={true} color="gray" href="/" text="Back">
			<Undo2 />
		</Button>
		<SocialLinks />
	</HorizontalStack>
</Hero>
