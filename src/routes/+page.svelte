<script lang="ts">
	import Button from '$lib/components/buttons/button.svelte';
	import Icon from '$lib/components/text/icon.svelte';
</script>

<svelte:head>
	<title>Jack Reimers</title>
</svelte:head>

<div class="mb-14 flex flex-col gap-2 leading-normal sm:mb-20 sm:gap-3">
	<!-- 2xl -->
	<p class="text-sm text-gray-500 sm:text-base md:text-2xl">Hi, my name is</p>
	<!-- 7xl -->
	<h1 class="text-gb text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl">Jack Reimers</h1>
	<!-- 4xl -->
	<p class="font-medium sm:text-2xl md:text-3xl lg:text-4xl">
		I'm a full-stack Software Engineer at
		<Button
			href="https://ssw.com.au"
			target="_blank"
			classes="bg-gradient-to-b from-red-500 to-red-900 bg-clip-text font-bold text-transparent"
		>
			SSW Consulting.
		</Button>
	</p>
	<!-- 1xl -->
	<p class="max-w-prose text-sm text-gray-500 sm:text-base">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua.
	</p>
</div>
<div class="grid w-full max-w-2xl gap-4 sm:grid-cols-3">
	<!-- TODO: Put these cards into components -->
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
		</span>
	</Button>
</div>

<!--
<Button href="blog">Go to blog</Button>
<Button href="blog/test">Go to blog post</Button>
-->
