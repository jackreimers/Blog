<script lang="ts">
	import { ChevronLeft, ChevronRight, X } from 'lucide-svelte';

	export let href: string;
	export let text: string;
	export let color: 'blue' | 'red' | 'gray' = 'blue';
	export let icon: 'chevron' | 'cross' | null = null;
	export let iconSide: 'left' | 'right' = 'right';
	export let classes: string = '';

	const colorClasses: any = {
		'bg-blue-100 text-blue-900 mhover:hover:bg-blue-200 focus:bg-blue-200': color === 'blue',
		'bg-red-100 text-red-900 mhover:hover:bg-red-200 focus:bg-red-200': color === 'red',
		'bg-gray-200 mhover:hover:bg-gray-300 focus:bg-gray-300': color === 'gray'
	};

	classes = Object.keys(colorClasses)
		.filter((key) => colorClasses[key])
		.join(classes);
</script>

<a
	class="inline-flex items-center rounded-full px-3 py-2 text-sm font-medium transition-colors duration-300 {classes}"
	{href}
>
	{#if icon && iconSide === 'left'}
		{#if icon === 'chevron'}
			<ChevronLeft size="1.25rem" />
		{:else if icon === 'cross'}
			<X size="1.25rem" />
		{/if}
	{/if}
	<span class="mx-1.5">{text}</span>
	{#if icon && iconSide === 'right'}
		{#if icon === 'chevron'}
			<ChevronRight size="1.25rem" />
		{:else if icon === 'cross'}
			<X size="1.25rem" />
		{/if}
	{/if}
</a>
