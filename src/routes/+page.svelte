<script lang="ts">
	import VerticalStack from '$lib/components/layout/stacks/stack-vertical.svelte';
	import Card from '$lib/components/interactivity/card.svelte';

	const title = 'Jack Reimers';
	const description =
		"I'm a full stack Software Engineer who is passionate about web and video game development.";
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content="https://jackreimers.dev" />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
</svelte:head>

<div class="mb-8 flex flex-col gap-1 sm:mb-9 sm:gap-2">
	<p class="text-gray-600">Hi, my name is</p>
	<h1 class="text-5xl font-bold text-blue-800 sm:text-6xl md:text-7xl xl:text-8xl">
		Jack Reimers
	</h1>
	<p class="text-lg font-semibold sm:text-xl md:text-2xl">I'm a full stack Software Engineer.</p>
	<p class="max-w-prose text-gray-600">
		I'm passionate about web and video game development and specialise in .NET development.
	</p>
</div>
<VerticalStack>
	<Card href="/blog">
		<h2 class="text-xl font-bold md:text-2xl">Blog</h2>
		<p class="text-gray-500 md:text-lg">Read my latest posts.</p>
	</Card>
	<Card href="/projects">
		<h2 class="text-xl font-bold md:text-2xl">Projects</h2>
		<p class="text-gray-500 md:text-lg">See my past projects.</p>
	</Card>
	<Card href="/about">
		<h2 class="text-xl font-bold md:text-2xl">About</h2>
		<p class="text-gray-500 md:text-lg">Learn more about me.</p>
	</Card>
</VerticalStack>
