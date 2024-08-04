<script lang="ts">
	import { blur } from 'svelte/transition';
	import { CheckCircle2 } from 'lucide-svelte';
	import Head from '$lib/components/seo/head.svelte';
	import Container from '$lib/components/page/container.svelte';
	import Section from '$lib/components/page/section.svelte';
	import Hero from '$lib/components/hero/hero.svelte';
	import SocialLinks from '$lib/components/contact/social.svelte';

	/** @type {import('./$types').ActionData} */
	export let form: any;
	//TODO: This will only exist as a fallback for the form submission
</script>

<Head
	description="I'm a full stack Software Engineer who is passionate about web and video game development."
	title="Jack Reimers | Contact"
/>
<Hero
	subtitle="Dive deeper into my professional background and expertise, and find out how to stay connected or reach out."
	title="Contact"
>
	<SocialLinks />
</Hero>
<Container>
	<Section>
		{#if form?.success}
			<div
				class="absolute z-10 flex h-full w-full flex-col items-center justify-center bg-white"
				in:blur
			>
				<div class="">
					<div class="inline-block text-green-500">
						<CheckCircle2 size="60" strokeWidth={2} />
					</div>
				</div>
				<div class="w-2/3 text-center">
					<p class="text-2xl font-semibold">Thank you for your message!</p>
					<p class="text-gray-500">
						I appreciate you taking the time to reach out, I will get back to you as
						soon as possible.
					</p>
				</div>
			</div>
		{/if}
	</Section>
</Container>
