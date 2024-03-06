<script lang="ts">
	import { Mail } from 'lucide-svelte';
	import { Linkedin } from 'lucide-svelte';
	import { Github } from 'lucide-svelte';

	import PageHeader from '$lib/components/layout/page-header.svelte';
	import Button from '$lib/components/buttons/button.svelte';
	import Icon from '$lib/components/text/icon.svelte';
</script>

<svelte:head>
	<title>Jack Reimers | About</title>
</svelte:head>

<PageHeader>
	<h1 class="text-4xl font-bold sm:text-5xl lg:text-6xl">About</h1>
</PageHeader>
<div class="mb-8 sm:mb-10">
	<p class="mb-3 text-2xl font-semibold sm:text-3xl">Jack Reimers</p>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua. Posuere urna nec tincidunt praesent semper feugiat nibh.
	</p>
</div>
<div
	class="grid grid-cols-2 grid-rows-3 gap-3 min-[450px]:grid-cols-[repeat(3,_1fr)_auto] min-[450px]:grid-rows-2 sm:gap-5"
>
	<div
		class="col-start-1 col-end-3 row-start-1 row-end-3 flex gap-3 rounded bg-gray-100 sm:gap-4"
	>
		<img
			src="/images/headshot-transparent.png"
			alt="Professional headshot of Jack Reimers"
			class="mx-auto w-[250px] sm:w-[300px]"
		/>
	</div>
	<div
		class="overflow-hidden rounded bg-gray-100 bg-[url('/images/brisbane-river.jpg')] bg-cover text-white"
	>
		<div
			class="flex h-full flex-col items-center justify-center gap-1.5 backdrop-blur-[2px] backdrop-brightness-75 backdrop-filter"
		>
			<Icon icon="location_on" weight={700} classes="text-4xl sm:text-6xl" />
			<p class="font-semibold">Brisbane</p>
		</div>
	</div>
	<div
		class="overflow-hidden rounded bg-gray-100 bg-[url('/images/brisbane.jpg')] bg-cover text-white"
	>
		<div
			class="flex h-full flex-col items-center justify-center gap-1.5 p-4 backdrop-blur-[2px] backdrop-brightness-75 backdrop-filter"
		>
			<Icon icon="work" weight={700} classes="text-4xl sm:text-6xl" />
			<p class="font-semibold">SSW</p>
		</div>
	</div>
	<div
		class="flex gap-3 min-[450px]:col-end-5 min-[450px]:row-start-1 min-[450px]:row-end-3 min-[450px]:flex-col sm:gap-5"
	>
		<Button classes="rounded bg-gray-100 p-4 hover:bg-gray-200">
			<Mail />
		</Button>
		<Button
			href="https://www.linkedin.com/in/jackreimers"
			target="_blank"
			classes="rounded bg-gray-100 p-4 hover:bg-gray-200"
		>
			<Linkedin />
		</Button>
		<Button
			href="https://github.com/jackreimers"
			target="_blank"
			classes="rounded bg-gray-100 p-4 hover:bg-gray-200"
		>
			<Github />
		</Button>
	</div>
</div>
