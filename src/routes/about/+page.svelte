<script lang="ts">
	import { Mail } from 'lucide-svelte';
	import { Linkedin } from 'lucide-svelte';
	import { Github } from 'lucide-svelte';

	import Button from '$lib/components/buttons/button.svelte';
</script>

<svelte:head>
	<title>Jack Reimers | About</title>
</svelte:head>

<div class="md:flex md:gap-20">
	<div class="mb-8 flex flex-col gap-4 sm:mb-12 md:mb-0">
		<div
			class="mx-auto h-[170px] w-[170px] rounded-full border border-gray-300 bg-[url('/images/headshot.png')] bg-cover md:mx-0"
		/>
		<div class="text-center md:text-left">
			<h2 class="text-3xl font-semibold">Jack Reimers</h2>
			<p class="font-medium text-gray-500">Software Engineer</p>
			<p class="font-semibold text-[#CC4141]">SSW</p>
		</div>
		<div class="flex w-full justify-center gap-3 md:justify-start">
			<Button classes="rounded-full bg-gray-100 p-4 hover:bg-gray-200">
				<Mail />
			</Button>
			<Button
				href="https://www.linkedin.com/in/jackreimers/"
				target="_blank"
				classes="rounded-full bg-gray-100 p-4 hover:bg-gray-200"
			>
				<Linkedin />
			</Button>
			<Button
				href="https://github.com/jackreimers"
				target="_blank"
				classes="rounded-full bg-gray-100 p-4 hover:bg-gray-200"
			>
				<Github />
			</Button>
		</div>
	</div>
	<div class="rounded bg-gray-100 px-4 py-3.5 sm:px-5 sm:py-4 md:flex-1 md:px-6 md:py-5">
		<p class="mb-5">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua. Posuere urna nec tincidunt praesent semper
			feugiat nibh.
		</p>
		<p class="">
			In vitae turpis massa sed elementum tempus. Laoreet id donec ultrices tincidunt arcu non
			sodales neque sodales. Velit laoreet id donec ultrices. Pulvinar neque laoreet
			suspendisse interdum consectetur libero id. Mi bibendum neque egestas congue.
		</p>
	</div>
</div>
