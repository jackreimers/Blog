<script lang="ts">
	import Container from '$lib/components/container/container.svelte';

	export let title: string;
	export let subtitle: string;
</script>

<Container
	class="mb-24 mt-20 flex flex-1 flex-col text-center sm:mb-32 sm:mt-[6.5rem] md:mb-40 md:mt-[8.5rem] lg:mb-48 lg:mt-[11.5rem] xl:mb-56 xl:mt-[12.5rem]"
>
	<h1
		class="mx-auto max-w-5xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
	>
		{title}
	</h1>
	<p class="mx-auto mt-4 max-w-prose tracking-tight text-gray-700 sm:text-lg">
		{subtitle}
	</p>
	<div class="mx-auto mt-6 sm:mt-10">
		<slot />
	</div>
</Container>
