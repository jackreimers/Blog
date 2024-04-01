<script lang="ts">
	import { Direction, Size, Typography } from '$lib/common/enums';
	import Stack from '$lib/components/layout/stack.svelte';
	import Card from '$lib/components/interactivity/card.svelte';
	import GradientText from '$lib/components/text/gradient-text.svelte';
</script>

<svelte:head>
	<title>Jack Reimers</title>
</svelte:head>

<Stack direction={Direction.Vertical} size={Size.Small} classes="mb-8 sm:mb-10">
	<p class="text-sm text-gray-500 md:text-base">Hi, my name is</p>
	<GradientText
		typography={Typography.H1}
		classes="text-4xl font-bold min-[450px]:text-6xl md:text-7xl xl:text-8xl"
	>
		Jack Reimers
	</GradientText>
	<p class="font-medium md:text-2xl">I'm a Full Stack Software Engineer.</p>
	<p class="max-w-prose text-gray-500">
		I'm passionate about web and video game development and specialise in .NET development.
	</p>
</Stack>
<Stack direction={Direction.Vertical} size={Size.Medium}>
	<Card href="/blog" title="Blog" subTitle="Read my latest posts." />
	<Card href="/projects" title="Projects" subTitle="See my past projects." />
	<Card href="/about" title="About" subTitle="Learn more about me." />
</Stack>
