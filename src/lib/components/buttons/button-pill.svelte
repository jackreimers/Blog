<script lang="ts">
	import type { ComponentType } from 'svelte';
	import { type Icon } from 'lucide-svelte';

	export let href: string;
	export let target: '_blank' | '_self' = '_self';
	export let text: string | null = null;
	export let color: string;
	export let hoverColor: string | null = null;
	export let bgColor: string;
	export let bgHoverColor: string;
	export let icon: ComponentType<Icon> | null = null;
	export let iconSide: 'left' | 'right' = 'right';
	export let classes: string = '';

	const colorClasses: string = ` ${color} ${bgColor} focus:${hoverColor ?? color} focus:${bgHoverColor} mhover:hover:${hoverColor ?? color} mhover:hover:${bgHoverColor}`;
	classes += colorClasses;
</script>

<a
	class="inline-flex items-center gap-1 rounded-full text-xs font-semibold leading-none transition-colors duration-300 {text
		? 'px-3 py-2'
		: 'p-2'} {classes}"
	{href}
	{target}
>
	{#if icon && iconSide === 'left'}
		<svelte:component this={icon} class="h-4 w-4" />
	{/if}
	{#if text}
		<span
			class:ml-1={icon && iconSide === 'right'}
			class:mr-1={icon && iconSide === 'left'}
			class:mx-1={!icon}
			class:my-0.5={!icon}
		>
			{text}
		</span>
	{/if}
	{#if icon && iconSide === 'right'}
		<svelte:component this={icon} class="h-4 w-4" />
	{/if}
</a>
