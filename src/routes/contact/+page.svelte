<script lang="ts">
	import type { ActionData } from './$types';
	import Head from '$lib/components/seo/head.svelte';
	import Hero from '$lib/components/hero/hero.svelte';
	import ErrorState from '$lib/components/error-state/error-state.svelte';
	import PillButton from '$lib/components/buttons/pill/pill-button.svelte';

	export let form: ActionData;
</script>

<Head
	canonical="https://jackreimers.dev/contact"
	description="Get in touch with Jack Reimers to ask questions or discuss your needs."
	title="Contact"
/>
<Hero subtitle="Get in touch to ask questions or discuss your needs." title="Contact" />
<ErrorState
	subtitle={form?.success
		? "Thank you for your message, I'll get back to you as soon as possible."
		: 'Please try again later or contact me if the issue persists.'}
	title={form?.success ? 'Success' : 'Error'}
>
	<PillButton color="secondary" href="/" text="Return to home" />
</ErrorState>
