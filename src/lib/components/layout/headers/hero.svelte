<script lang="ts">
	import Container from '$lib/components/layout/container.svelte';
	import Icon from '$lib/components/text/icon.svelte';

	//TODO: Remove colors if not used
	export let color: 'Blue' | 'Orange' | 'Red' = 'Orange';
	export let title: string;
	export let subtitle: string | null = null;
	export let icon: string | null = null;
	export let smallerTitle: boolean = false;

	const blueColors = 'bg-blue-100 text-blue-800';
	const orangeColors = 'bg-orange-100 text-orange-800';
	const redColors = 'bg-red-100 text-red-800';
</script>

<Container classes="flex flex-col justify-center gap-4 sm:min-h-[400px] bg-gray-50 my-6 overflow-hidden">
	<div class="flex items-center gap-3">
		{#if icon}
			<div
				class="rounded-full p-3
						{color === 'Blue' ? blueColors : ''}
						{color === 'Orange' ? orangeColors : ''}
						{color === 'Red' ? redColors : ''}"
			>
				<Icon {icon} classes="text-7xl" />
			</div>
		{/if}
		<h1
			class="font-bold {smallerTitle
						? 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl'
						: 'text-5xl sm:text-6xl md:text-7xl'}"
		>
			{title}
		</h1>
	</div>
	{#if subtitle}
		<p class="max-w-prose text-sm text-gray-500 sm:text-base">
			{subtitle}
		</p>
	{/if}
	<slot />
</Container>
