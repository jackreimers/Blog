<script lang="ts">
	import Button from '$lib/components/buttons/button.svelte';
	import Icon from '$lib/components/text/icon.svelte';
</script>

<svelte:head>
	<title>Jack Reimers</title>
</svelte:head>

<div class="mb-8 flex flex-col gap-2 leading-normal">
	<p class="text-sm text-gray-500 md:text-base">Hi, my name is</p>
	<h1
		class="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl lg:text-7xl"
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
	<Button href="blog">
		<div class="w-full rounded-[4px] bg-gradient-to-r from-blue-600 to-blue-800 p-0.5">
			<div class="h-full w-full rounded-[2px] bg-white">
				<span class="flex flex-col px-3.5 py-2.5">
					<span class="font-semibold">Blog</span>
					<span class="text-sm text-gray-500">Read my latest posts.</span>
				</span>
			</div>
		</div>
	</Button>
	<Button href="projects">
		<div class="w-full rounded-[4px] bg-gradient-to-r from-blue-600 to-blue-800 p-0.5">
			<div class="h-full w-full rounded-[2px] bg-white">
				<span class="flex flex-col px-3.5 py-2.5">
					<span class="font-semibold">Projects</span>
					<span class="text-sm text-gray-500">View projects I've worked on.</span>
				</span>
			</div>
		</div>
	</Button>
	<Button href="about">
		<div class="w-full rounded-[4px] bg-gradient-to-r from-blue-600 to-blue-800 p-0.5">
			<div class="h-full w-full rounded-[2px] bg-white">
				<span class="flex flex-col px-3.5 py-2.5">
					<span class="font-semibold">About</span>
					<span class="text-sm text-gray-500">Learn more about me.</span>
				</span>
			</div>
		</div>
	</Button>
</div>

<!--
<div class="grid w-full">
	<Button
		href="blog"
		classes="flex w-full flex-col overflow-hidden rounded border border-gray-200"
	>
		<span class="flex justify-center bg-gray-100 py-8 align-middle">
			<Icon icon="newsmode" weight={300} classes="text-7xl text-gray-400" />
		</span>
		<span class="h-[2px] w-full bg-gradient-to-r from-blue-600 to-blue-950" />
		<span class="flex flex-col px-3.5 py-2.5">
			<span class="font-semibold">Blog</span>
			<span class="text-sm text-gray-500">Read my latest posts.</span>
		</span>
	</Button>
	<Button
		href="blog"
		classes="flex w-full flex-col overflow-hidden rounded border border-gray-200"
	>
		<span class="flex justify-center bg-gray-100 py-8 align-middle">
			<Icon icon="handyman" weight={300} classes="text-7xl text-gray-400" />
		</span>
		<span class="h-[2px] w-full bg-gradient-to-r from-blue-600 to-blue-950" />
		<span class="flex flex-col px-3.5 py-2.5">
			<span class="font-semibold">Projects</span>
			<span class="text-sm text-gray-500">View projects I've worked on.</span>
		</span>
	</Button>
	<Button
		href="blog"
		classes="flex w-full flex-col overflow-hidden rounded border border-gray-200"
	>
		<span class="flex justify-center bg-gray-100 py-8 align-middle">
			<Icon icon="person" weight={300} classes="text-7xl text-gray-400" />
		</span>
		<span class="h-[2px] w-full bg-gradient-to-r from-blue-600 to-blue-950" />
		<span class="flex flex-col px-3.5 py-2.5">
			<span class="font-semibold">About</span>
			<span class="text-sm text-gray-500">Learn more about me.</span>
		</span>
	</Button>
</div>

<Button href="blog">Go to blog</Button>
<Button href="blog/test">Go to blog post</Button>
-->
