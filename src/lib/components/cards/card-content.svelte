<script lang="ts">
	import type { ComponentType } from 'svelte';
	import { type Icon } from 'lucide-svelte';

	export let icon: ComponentType<Icon>;
	export let title: string;
	export let description: string;
	export let features: string[];
</script>

<div class="rounded-lg bg-white p-4 shadow sm:p-6">
	<span class="flex items-center gap-2">
		<svelte:component
			this={icon}
			class="h-6 w-6 text-blue-900 transition-colors duration-300"
		/>
		<span class="font-semibold tracking-tight sm:text-xl">{title}</span>
	</span>
	<span class="mt-4 block text-gray-700">{description}</span>
	<ul class="mt-4 list-disc pl-6 text-gray-700">
		{#each features as feature}
			<li class="mt-1">{feature}</li>
		{/each}
	</ul>
</div>
