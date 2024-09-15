<script lang="ts">
	import { Frown, PartyPopper } from 'lucide-svelte';
	import Head from '$lib/components/seo/head.svelte';
	import Hero from '$lib/components/hero/hero.svelte';
	import EmptyState from '$lib/components/elements/empty-state.svelte';
	import PillButton from '$lib/components/buttons/button-pill.svelte';

	/** @type {import('./$types').ActionData} */
	export let form: any;
</script>

<Head
	canonical="https://jackreimers.dev/contact"
	description="I'm a full stack Software Engineer who is passionate about web and video game development."
	title="Jack Reimers | Contact"
/>
<Hero subtitle="Get in touch to ask questions or discuss your needs." title="Contact" />
<EmptyState
	subtitle={form.success
		? "Thank you for your message, I'll get back to you as soon as possible."
		: 'Please try again later or contact me if the issue persists.'}
	title={form.success ? 'Success' : 'An error occurred'}
>
	{#if form.success}
		<PartyPopper size="3.5rem" slot="icon" />
	{:else}
		<Frown size="3.5rem" slot="icon" />
	{/if}
	<PillButton color="gray" href="/" slot="content" text="Return to home" />
</EmptyState>
