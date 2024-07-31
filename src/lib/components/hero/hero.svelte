<script lang="ts">
	import Container from '$lib/components/page/container.svelte';
	import VerticalStack from '$lib/components/stacks/stack-vertical.svelte';

	export let title: string;
	export let subtitle: string | null = null;
	export let smallerTitle: boolean = false;
</script>

<Container classes="my-6 flex items-center bg-gray-50 sm:min-h-[400px]">
	<VerticalStack>
		<h1
			class="font-bold leading-none {smallerTitle
				? 'text-4xl sm:text-5xl md:text-6xl'
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
	</VerticalStack>
</Container>
