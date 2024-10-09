<script lang="ts">
	import type { ComponentType } from 'svelte';
	import { type Icon } from 'lucide-svelte';

	export let href: string;
	export let target: '_blank' | '_self' = '_self';
	export let color: 'lightGray' | 'lightBlue' | 'lightRed' | 'darkBlue' = 'lightGray';
	export let text: string | null = null;
	export let icon: ComponentType<Icon> | null = null;
	export let iconSide: 'left' | 'right' = 'right';
	export let classes: string = '';

	const colors = {
		lightGray: 'bg-gray-100 text-gray-900 focus:bg-gray-200 mhover:hover:bg-gray-200',
		lightBlue:
			'bg-blue-100 text-blue-900 focus:bg-blue-200 focus:text-blue-950 mhover:hover:bg-blue-200 mhover:hover:text-blue-950',
		lightRed:
			'bg-red-100 text-red-900 focus:bg-red-200 focus:text-red-950 mhover:hover:bg-red-200 mhover:hover:text-red-950',
		darkBlue: 'bg-blue-900 text-white focus:bg-blue-950 mhover:hover:bg-blue-950'
	};
</script>

<a
	class="relative inline-flex items-center gap-1.5 rounded-full text-xs font-medium transition-colors duration-300 {text
		? 'px-3 py-1.5'
		: 'p-2'} {colors[color]} {classes}"
	class:flex-row-reverse={iconSide === 'left'}
	{href}
	{target}
>
	{#if text}
		{text}
	{/if}
	<svelte:component this={icon} class="h-4 w-4" />
</a>
