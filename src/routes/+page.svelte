<script lang="ts">
	import Card from '$lib/components/interactivity/card.svelte';
	import GradientText from '$lib/components/text/gradient-text.svelte';
</script>

<svelte:head>
	<title>Jack Reimers</title>
	<meta
		name="description"
		content="I'm a full stack Software Engineer who is passionate about web and video game development."
	/>
	<meta property="og:title" content="Jack Reimers" />
	<meta
		property="og:description"
		content="I'm a full stack Software Engineer who is passionate about web and video game development."
	/>
</svelte:head>

<div class="mb-8 flex flex-col gap-1.5 sm:mb-9 sm:gap-2">
	<p class="text-sm text-gray-500 md:text-base">Hi, my name is</p>
	<h1 class="text-5xl font-bold sm:text-6xl md:text-7xl xl:text-8xl">
		<GradientText>Jack Reimers</GradientText>
	</h1>
	<p class="font-medium md:text-2xl">I'm a full stack Software Engineer.</p>
	<p class="max-w-prose text-gray-500">
		I'm passionate about web and video game development and specialise in .NET development.
	</p>
</div>
<div class="flex flex-col gap-2.5 sm:gap-3.5">
	<Card href="/blog">
		<h2 class="font-bold sm:text-2xl">Blog</h2>
		<p class="text-gray-500">Read my latest posts.</p>
	</Card>
	<Card href="/about">
		<h2 class="font-bold sm:text-2xl">About</h2>
		<p class="text-gray-500">Learn more about me.</p>
	</Card>
</div>
