<script lang="ts">
	import Card from '$lib/components/layout/card.svelte';
</script>

<svelte:head>
	<title>Jack Reimers</title>
</svelte:head>

<p class="mb-2 text-sm text-gray-500 md:text-base">Hi, my name is</p>
<h1
	class="mb-2 bg-gradient-to-br from-blue-600 to-blue-800 bg-clip-text text-4xl font-extrabold text-transparent min-[380px]:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
>
	Jack Reimers
</h1>
<p class="mb-4 font-medium md:text-2xl">I'm a Full Stack Software Engineer.</p>
<p class="mb-8 max-w-prose sm:mb-10">
	I'm passionate about development and enjoy working on a range of different technologies, many of
	which you'll find me talking about here.
</p>
<div class="flex flex-col gap-4 sm:gap-5">
	<Card href="/blog" title="Blog" subText="Read my latest posts." />
	<Card href="/projects" title="Projects" subText="See my past projects." />
	<Card href="/about" title="About" subText="Learn more about me." />
</div>
