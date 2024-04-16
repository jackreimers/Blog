<script lang="ts">
	import Card from '$lib/components/interactivity/card.svelte';
	import GradientText from '$lib/components/text/gradient-text.svelte';
</script>

<svelte:head>
	<title>Jack Reimers</title>
</svelte:head>

<div class="mb-8 flex flex-col gap-1.5 sm:mb-9 sm:gap-2">
	<p class="text-secondary text-sm md:text-base">Hi, my name is</p>
	<h1 class="text-5xl font-bold sm:text-6xl md:text-7xl xl:text-8xl">
		<GradientText>Jack Reimers</GradientText>
	</h1>
	<p class="font-medium md:text-2xl">I'm a full stack Software Engineer.</p>
	<p class="text-secondary max-w-prose">
		I'm passionate about web and video game development and specialise in .NET development.
	</p>
</div>
<div class="flex flex-col gap-2.5 sm:gap-3.5">
	<Card href="/blog">
		<h2 class="font-bold sm:text-2xl">Blog</h2>
		<p class="text-secondary">Read my latest posts.</p>
	</Card>
	<Card href="/about">
		<h2 class="font-bold sm:text-2xl">About</h2>
		<p class="text-secondary">Learn more about me.</p>
	</Card>
</div>
