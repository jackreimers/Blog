<script lang="ts">
	import type { ComponentType } from 'svelte';
	import { type Icon } from 'lucide-svelte';

	export let icon: ComponentType<Icon>;
	export let title: string;
	export let subtitle: string;
	export let classes: string = '';
</script>

<div class="text-center {classes}">
	<div class="mx-auto inline-block">
		<svelte:component this={icon} class="h-12 w-12" />
	</div>
	<p class="mt-4 text-2xl font-bold leading-tight tracking-tight sm:text-3xl">{title}</p>
	<p class="mx-auto mt-4 max-w-sm text-gray-700">{subtitle}</p>
	{#if $$slots.default}
		<div class="mt-6">
			<slot />
		</div>
	{/if}
</div>
