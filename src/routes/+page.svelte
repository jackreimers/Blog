<script lang="ts">
	import { MoveRight } from 'lucide-svelte';

	import Button from '$lib/components/buttons/button.svelte';
</script>

<svelte:head>
	<title>Jack Reimers</title>
</svelte:head>

<div class="mb-8 flex flex-col gap-2 leading-normal">
	<p class="text-sm text-gray-500 md:text-base">Hi, my name is</p>
	<h1
		class="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-4xl font-extrabold text-transparent min-[380px]:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
	>
		Jack Reimers
	</h1>
	<p class="mb-4 font-medium md:text-2xl">I'm a full-stack Software Engineer.</p>
	<p class="max-w-prose">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua.
	</p>
</div>
<div class="flex flex-col gap-4">
	<Button
		href="/blog"
		classes="group flex bg-gray-100 px-3.5 py-2.5 hover:bg-gray-200 sm:px-5 sm:py-4 md:px-6 md:py-5"
	>
		<span class="flex flex-1 flex-col">
			<span class="font-bold sm:text-2xl">Blog</span>
			<span class="text-sm text-gray-500 sm:text-base">Read my latest posts.</span>
		</span>
		<span
			class="mr-3 flex items-center text-gray-400 transition-all duration-300 group-hover:mr-1.5 group-hover:text-gray-600"
		>
			<MoveRight />
		</span>
	</Button>
	<Button
		href="/projects"
		classes="group flex bg-gray-100 px-3.5 py-2.5 hover:bg-gray-200 sm:px-5 sm:py-4 md:px-6 md:py-5"
	>
		<span class="flex flex-1 flex-col">
			<span class="font-bold sm:text-2xl">Projects</span>
			<span class="text-sm text-gray-500 sm:text-base">See my past projects.</span>
		</span>
		<span
			class="mr-3 flex items-center text-gray-400 transition-all duration-300 group-hover:mr-1.5 group-hover:text-gray-600"
		>
			<MoveRight />
		</span>
	</Button>
	<Button
		href="/about"
		classes="group flex bg-gray-100 px-3.5 py-2.5 hover:bg-gray-200 sm:px-5 sm:py-4 md:px-6 md:py-5"
	>
		<span class="flex flex-1 flex-col">
			<span class="font-bold sm:text-2xl">About</span>
			<span class="text-sm text-gray-500 sm:text-base">Learn more about me.</span>
		</span>
		<span
			class="mr-3 flex items-center text-gray-400 transition-all duration-300 group-hover:mr-1.5 group-hover:text-gray-600"
		>
			<MoveRight />
		</span>
	</Button>
</div>
