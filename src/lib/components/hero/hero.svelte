<script lang="ts">
	import Container from '$lib/components/container/container.svelte';

	export let title: string;
	export let subtitle: string;
</script>

<Container class="my-24 md:my-64 flex flex-1 flex-col">
	<h1
		class="mx-auto max-w-4xl text-center text-3xl font-bold tracking-tight sm:text-5xl md:text-7xl"
	>
		{title}
	</h1>
	<p class="mx-auto mt-4 max-w-2xl text-center sm:text-lg tracking-tight text-gray-700">
		{subtitle}
	</p>
	<slot />
</Container>
