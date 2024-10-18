<script lang="ts">
	import Container from '$lib/components/container/container.svelte';

	export let title: string;
	export let subtitle: string;
</script>

<Container class="my-24 sm:my-32 flex flex-1 flex-col md:my-40 lg:my-48 xl:my-56">
	<h1
		class="mx-auto max-w-4xl text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
	>
		{title}
	</h1>
	<p class="mx-auto mt-4 max-w-2xl text-center tracking-tight text-gray-700 sm:text-lg">
		{subtitle}
	</p>
	<slot />
</Container>
