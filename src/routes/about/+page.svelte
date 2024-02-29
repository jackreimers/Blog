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
	<h1 class="text-3xl font-bold sm:text-5xl lg:text-6xl">About</h1>
</PageHeader>

<div class="grid grid-cols-6 grid-rows-6 gap-5">
	<div class="col-start-1 col-end-3 row-start-1 row-end-3 rounded bg-gray-100">
		<img
			src="/images/headshot-transparent.png"
			alt="Professional headshot of Jack Reimers"
			width="300"
			class="mx-auto"
		/>
	</div>
	<div class="col-start-3 col-end-5 rounded bg-gray-100">
		<div class="flex h-full flex-col items-center justify-center gap-1.5">
			<Icon icon="badge" classes="text-5xl" />
			<p class="font-semibold">Software Engineer</p>
		</div>
	</div>
	<div class="rounded bg-gray-100">
		<div class="flex h-full flex-col items-center justify-center gap-1.5">
			<Icon icon="work" classes="text-5xl" />
			<p class="font-semibold">SSW</p>
		</div>
	</div>
	<div></div>
	<div class="rounded bg-gray-100">
		<div class="flex h-full flex-col items-center justify-center gap-1.5">
			<Icon icon="location_on" classes="text-5xl" />
			<p class="font-semibold">Brisbane</p>
		</div>
	</div>
</div>

<!--
<div class="flex gap-3 sm:gap-8">
	<div class="flex flex-col rounded bg-gray-100 px-6 py-5 text-center">
		<div class="mx-auto mb-4 overflow-hidden rounded-full border-2 bg-gray-50">
			<img
				src="/images/headshot-transparent.png"
				alt="Professional headshot of Jack Reimers"
				width="300"
			/>
		</div>
		<p class="text-3xl font-semibold">Jack Reimers</p>
		<p class="text-gray-500">Software Engineer</p>
	</div>
	<div class="flex-1">
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua. Posuere urna nec tincidunt praesent semper
			feugiat nibh.
		</p>
		<div class="flex">
			<div class="flex">
				<Icon icon="location_on" />
				<p>Brisbane, Australia</p>
			</div>
		</div>
	</div>
</div>

<div class="mb-8 flex flex-col gap-4">
	<div class="flex gap-3 sm:gap-4">
		<div class="flex flex-1 overflow-hidden rounded bg-gray-100">
			<div class="mx-auto w-[200px] xl:w-[300px]">
				<img
					src="/images/headshot-transparent.png"
					alt="Professional headshot of Jack Reimers"
					width="300"
				/>
			</div>
		</div>
		<div class="flex flex-col justify-between gap-3 sm:gap-4 xl:justify-normal">
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
	<div>
		<p class="text-2xl font-bold sm:text-3xl">Jack Reimers</p>
		<div
			class="flex items-center gap-2 text-sm font-semibold leading-none sm:gap-2.5 sm:text-base"
		>
			<Icon
				icon="work"
				weight={400}
				classes="rounded bg-gradient-to-br from-blue-600 to-blue-800 p-1 text-white sm:p-1.5"
			/>
			<p>Software Engineer at SSW</p>
		</div>
	</div>

	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua. Posuere urna nec tincidunt praesent semper feugiat nibh.
	</p>
</div>
-->
