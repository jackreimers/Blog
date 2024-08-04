<script lang="ts">
	import { enhance } from '$app/forms';
	import { blur } from 'svelte/transition';
	import { CheckCircle2 } from 'lucide-svelte';
	import Head from '$lib/components/seo/head.svelte';
	import Container from '$lib/components/page/container.svelte';
	import Section from '$lib/components/page/section.svelte';
	import Hero from '$lib/components/hero/hero.svelte';
	import VerticalStack from '$lib/components/stacks/stack-vertical.svelte';
	import HorizontalStack from '$lib/components/stacks/stack-horizontal.svelte';
	import SocialLinks from '$lib/components/contact/social.svelte';
	import Input from '$lib/components/contact/input.svelte';

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
		<div class="flex">
			<div class="flex-1 rounded-lg bg-white p-3 sm:p-4">
				<h2 class="text-2xl font-semibold">Get In Touch</h2>
				<p>Fill out the form below and I'll get back to you as soon as possible.</p>
				<form class="relative" method="POST" use:enhance>
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
									I appreciate you taking the time to reach out, I will get back
									to you as soon as possible.
								</p>
							</div>
						</div>
					{/if}

					<VerticalStack>
						<HorizontalStack>
							<Input
								autocomplete="name"
								name="name"
								placeholder="Name"
								required={true}
							/>
							<Input
								autocomplete="email"
								name="email"
								placeholder="Email"
								required={true}
								type="email"
							/>
						</HorizontalStack>
						<Input name="subject" placeholder="Subject" required={true} />
						<Input name="message" placeholder="Message (optional)" type="textarea" />
						<div class="flex items-center justify-end">
							<!-- TODO: Use custom button component -->
							<button
								class="relative flex w-full items-center gap-2 rounded bg-blue-100 px-3 py-2 text-center font-medium text-blue-900 transition-colors duration-200 sm:px-4 sm:py-3 mhover:hover:bg-blue-200 mhover:hover:text-blue-950"
								type="submit"
							>
								<span class="mx-auto">Submit</span>
							</button>
						</div>
					</VerticalStack>
				</form>
			</div>
			<div class="flex-1"></div>
		</div>
	</Section>
</Container>
