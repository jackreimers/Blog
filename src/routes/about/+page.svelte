<script lang="ts">
	import { PUBLIC_APP_ROOT } from '$env/static/public';
	import { Mail } from 'lucide-svelte';
	import { Linkedin } from 'lucide-svelte';
	import { Github } from 'lucide-svelte';

	import Icon from '$lib/components/text/icon.svelte';
	import Button from '$lib/components/buttons/button.svelte';

	const url = `${PUBLIC_APP_ROOT}/images/headshot.png`;
</script>

<svelte:head>
	<title>Jack Reimers | About</title>
</svelte:head>

<div class="md:flex md:gap-20">
	<div class="mb-12 flex flex-col gap-4 md:mb-0">
		<div
			class="mx-auto h-[170px] w-[170px] rounded-full border border-gray-300 bg-cover md:mx-0"
			style="background-image: url({url})"
		/>
		<div class="text-center md:text-left">
			<h2 class="text-3xl font-semibold">Jack Reimers</h2>
			<p class="font-medium text-gray-500">Software Engineer</p>
			<p class="font-medium text-[#CC4141]">SSW</p>
		</div>
		<div class="flex w-full justify-center gap-3 md:justify-start">
			<Button classes="rounded-full bg-gray-100 p-4 hover:bg-gray-200">
				<Mail />
			</Button>
			<Button classes="rounded-full bg-gray-100 p-4 hover:bg-gray-200">
				<Linkedin />
			</Button>
			<Button classes="rounded-full bg-gray-100 p-4 hover:bg-gray-200">
				<Github />
			</Button>
		</div>
	</div>
	<div class="rounded bg-gray-50 p-4 md:flex-1">
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
