<script lang="ts">
	import Container from '$lib/components/page/container.svelte';

	export let title: string;
	export let subtitle: string | null = null;
	export let smallerTitle: boolean = false;
</script>

<Container classes="flex flex-col justify-center gap-4 sm:min-h-[400px] bg-gray-50 my-6 overflow-hidden">
	<h1
		class="font-bold {smallerTitle
			? 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl'
			: 'text-5xl sm:text-6xl md:text-7xl'}"
	>
		{title}
	</h1>
	{#if subtitle}
		<p class="max-w-prose text-sm text-gray-500 sm:text-base">
			{subtitle}
		</p>
	{/if}
	<slot />
</Container>
