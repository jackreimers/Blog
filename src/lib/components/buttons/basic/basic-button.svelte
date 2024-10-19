<script lang="ts">
	import { type ComponentType, createEventDispatcher } from 'svelte';
	import { type Icon, Loader2 } from 'lucide-svelte';

	export let active: boolean = false;
	export let type: 'button' | 'submit' | 'reset' = 'button';
	export let disabled: boolean = false;
	export let submitting: boolean = false;
	export let href: string | null = null;
	export let target: '_blank' | '_self' | '_parent' | '_top' = '_self';
	export let text: string | null = null;
	export let icon: ComponentType<Icon> | null = null;
	export let color: 'none' | 'primary' | 'secondary' | 'tertiary' | 'error' = 'none';

	const dispatch = createEventDispatcher();
	const colors = {
		none: 'focus:bg-gray-200 mhover:hover:bg-gray-200',
		primary: 'bg-blue-600 text-white focus:bg-blue-700 mhover:hover:bg-blue-700',
		secondary: 'bg-gray-200 focus:bg-gray-300 mhover:hover:bg-gray-300',
		tertiary: 'bg-blue-100 text-blue-700 focus:bg-blue-200 mhover:hover:bg-blue-200',
		error: 'bg-red-100 text-red-900 focus:bg-red-200 mhover:hover:bg-red-200'
	};

	const activeColors = {
		none: 'bg-gray-200 focus:bg-gray-300 mhover:hover:bg-gray-300',
		primary: 'bg-blue-700 focus:bg-blue-800 mhover:hover:bg-blue-800',
		secondary: 'bg-gray-300 focus:bg-gray-400 mhover:hover:bg-gray-400',
		tertiary: 'bg-blue-200 focus:bg-blue-300 mhover:hover:bg-blue-300',
		error: 'bg-red-200 focus:bg-red-300 mhover:hover:bg-red-300'
	};

	const submittingColors = {
		none: '!bg-gray-200 cursor-wait',
		primary: '!bg-blue-700 cursor-wait',
		secondary: '!bg-gray-400 cursor-wait',
		tertiary: '!bg-blue-200 cursor-wait',
		error: '!bg-red-200 cursor-wait'
	};

	function handleClick(event: MouseEvent) {
		dispatch('click', event);
	}
</script>

{#if href}
	<a
		on:click={handleClick}
		{href}
		{target}
		{type}
		class="inline-flex items-center gap-2 rounded-full text-sm font-medium transition-colors duration-300 sm:text-base
			{text ? 'px-4 py-2 sm:px-5 sm:py-2.5' : 'p-2.5 sm:p-2.5'} 
			{colors[color]} 
			{active ? activeColors[color] : ''}
			{$$restProps.class ?? ''}"
	>
		{#if text}
			{text}
		{/if}
		<svelte:component this={icon} class="h-5 w-5 sm:h-6 sm:w-6" />
	</a>
{:else}
	<button
		on:click={handleClick}
		disabled={disabled || submitting}
		{type}
		class="inline-flex items-center gap-2 rounded-full text-sm font-medium transition-colors duration-300 sm:text-base
			{text ? 'px-4 py-2 sm:px-5 sm:py-2.5' : 'p-2 sm:p-2.5'}
			{colors[color]}
			{active ? activeColors[color] : ''}
			{submitting ? submittingColors[color] : ''}
			{$$restProps.class ?? ''}"
	>
		{#if submitting}
			<span
				class="absolute inset-0 flex min-w-full animate-spin items-center justify-center bg-blue-950"
			>
				<Loader2 />
			</span>
		{/if}
		{#if text}
			<span class:text-blue-700={submitting}>
				{text}
			</span>
		{/if}
		<svelte:component this={icon} class="h-5 w-5 sm:h-6 sm:w-6" />
	</button>
{/if}
