<script lang="ts">
	import type { ComponentType } from 'svelte';
	import type { Icon } from 'lucide-svelte';

	export let href: string | null = null;
	export let target: '_blank' | '_self' | '_parent' | '_top' = '_self';
	export let text: string | null = null;
	export let icon: ComponentType<Icon> | null = null;
	export let color: 'none' | 'primary' | 'secondary' = 'none';

	const colors = {
		none: 'focus:bg-gray-200 mhover:hover:bg-gray-200',
		primary: 'bg-blue-100 text-blue-700 focus:bg-blue-200 mhover:hover:bg-blue-200',
		secondary: 'bg-gray-100 focus:bg-gray-200 mhover:hover:bg-gray-200'
	};
</script>

<a
	class="relative inline-flex items-center gap-1.5 rounded-full text-xs font-medium transition-colors duration-300 {text
		? 'px-3 py-1.5'
		: 'p-2'} {colors[color]} {$$restProps.class ?? ''}"
	{href}
	{target}
>
	{#if text}
		{text}
	{/if}
	<svelte:component class="h-4 w-4" this={icon} />
</a>
