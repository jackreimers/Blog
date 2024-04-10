<script lang="ts">
	import { Direction, Typography } from '$lib/common/enums';
	import Stack from '$lib/components/layout/stack.svelte';
	import Card from '$lib/components/buttons/card.svelte';
	import GradientText from '$lib/components/text/gradient-text.svelte';
</script>

<svelte:head>
	<title>Jack Reimers</title>
</svelte:head>

<Stack direction={Direction.Vertical} classes="mb-8 gap-1.5 sm:mb-10 sm:gap-2">
	<p class="text-secondary text-sm md:text-base">Hi, my name is</p>
	<GradientText
		typography={Typography.H1}
		classes="text-4xl font-bold min-[450px]:text-6xl md:text-7xl xl:text-8xl"
	>
		Jack Reimers
	</GradientText>
	<p class="font-medium md:text-2xl">I'm a full stack Software Engineer.</p>
	<p class="text-secondary max-w-prose">
		I'm passionate about web and video game development and specialise in .NET development.
	</p>
</Stack>
<Stack direction={Direction.Vertical} classes="gap-2.5 sm:gap-3.5">
	<Card href="/blog">
		<Stack direction={Direction.Vertical}>
			<h2 class="font-bold sm:text-2xl">Blog</h2>
			<p class="text-secondary">Read my latest posts.</p>
		</Stack>
	</Card>
	<Card href="/about">
		<Stack direction={Direction.Vertical}>
			<h2 class="font-bold sm:text-2xl">About</h2>
			<p class="text-secondary">Learn more about me.</p>
		</Stack>
	</Card>
</Stack>
