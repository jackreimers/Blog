<script lang="ts">
	import { Frown, PartyPopper } from 'lucide-svelte';
	import Head from '$lib/components/seo/head.svelte';
	import Hero from '$lib/components/hero/hero.svelte';
	import EmptyState from '$lib/components/empty/empty-state.svelte';
	import PillButton from '$lib/components/buttons/button-pill.svelte';

	/** @type {import('./$types').ActionData} */
	export let form: any;
</script>

<Head
	canonical="https://jackreimers.dev/contact"
	description="Get in touch with Jack Reimers to ask questions or discuss your needs."
	title="Contact"
/>
<Hero subtitle="Get in touch to ask questions or discuss your needs." title="Contact" />
<EmptyState
	icon={form.success ? PartyPopper : Frown}
	subtitle={form.success
		? "Thank you for your message, I'll get back to you as soon as possible."
		: 'Please try again later or contact me if the issue persists.'}
	title={form.success ? 'Success' : 'An error occurred'}
>
	<PillButton color="lightGray" href="/" text="Return to home" />
</EmptyState>
