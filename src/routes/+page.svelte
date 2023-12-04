<script lang="ts">
	import Button from '$lib/components/buttons/button.svelte';
	import Icon from '$lib/components/text/icon.svelte';
</script>

<svelte:head>
	<title>Jack Reimers</title>
</svelte:head>

<div class="mb-20">
	<p class="mb-3.5 text-2xl text-gray-500">Hi, my name is</p>
	<h1 class="text-gb mb-3 text-7xl font-semibold">Jack Reimers</h1>
	<p class="mb-5 text-4xl font-medium">
		I'm a full-stack Software Engineer at
		<Button
			href="https://ssw.com.au"
			target="_blank"
			classes="bg-gradient-to-b from-red-500 to-red-900 bg-clip-text font-bold text-transparent"
		>
			SSW Consulting.
		</Button>
	</p>
	<p class="max-w-prose text-gray-500">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua.
	</p>
</div>
<div class="grid w-full max-w-2xl grid-cols-3 gap-4">
	<Button
		href="blog"
		classes="flex w-full flex-col justify-center gap-2 rounded bg-gray-100 py-8 text-center"
	>
		<Icon icon="news" classes="text-5xl" />
		<span class="text-2xl font-medium">Blog</span>
	</Button>
	<Button
		href="projects"
		classes="flex w-full flex-col justify-center gap-2 rounded bg-gray-100 py-8 text-center"
	>
		<Icon icon="handyman" classes="text-5xl" />
		<span class="text-2xl font-medium">Projects</span>
	</Button>
	<Button
		href="about"
		classes="flex w-full flex-col justify-center gap-2 rounded bg-gray-100 py-8 text-center"
	>
		<Icon icon="person" classes="text-5xl" />
		<span class="text-2xl font-medium">About</span>
	</Button>
</div>

<!--
<Button href="blog">Go to blog</Button>
<Button href="blog/test">Go to blog post</Button>
-->
