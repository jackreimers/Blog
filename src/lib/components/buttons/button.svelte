<script lang="ts">
	import { type Icon, Loader2 } from 'lucide-svelte';
	import { type ComponentType, createEventDispatcher } from 'svelte';

	export let color: 'lightGray' | 'lightBlue' | 'darkBlue' | 'none' = 'lightGray';
	export let isActive: boolean = false;
	export let isSubmitting: boolean = false;
	export let ariaLabel: string | null = null;
	export let href: string | null = null;
	export let target: string = '';
	export let type: 'button' | 'submit' = 'button';
	export let text: string | null = null;
	export let icon: ComponentType<Icon> | null = null;
	export let classes: string = '';

	const dispatch = createEventDispatcher();
	const colors = {
		lightGray: 'bg-gray-200 mhover:hover:bg-gray-300 focus:bg-gray-300',
		lightBlue:
			'bg-blue-100 text-blue-900 focus:bg-blue-200 focus:text-blue-950 mhover:hover:bg-blue-200 mhover:hover:text-blue-950',
		darkBlue: 'bg-blue-900 text-white mhover:hover:bg-blue-950 focus:bg-blue-950',
		none: 'mhover:hover:bg-gray-200 focus:bg-gray-200'
	};

	function handleClick(event: MouseEvent) {
		dispatch('click', event);
	}
</script>

{#if href}
	<a
		on:click={handleClick}
		aria-label={ariaLabel}
		{href}
		{target}
		{type}
		class="inline-flex items-center gap-2 rounded font-medium transition-colors duration-300 {text
			? 'px-4 py-2.5'
			: 'p-2.5'} {colors[color]} {classes} {isActive
			? 'bg-gray-200 focus:!bg-gray-300 mhover:hover:!bg-gray-300'
			: ''}"
	>
		{#if text}
			{text}
		{/if}
		<svelte:component this={icon} />
	</a>
{:else}
	<button
		on:click={handleClick}
		disabled={isSubmitting}
		aria-label={ariaLabel}
		{type}
		class="relative inline-flex items-center gap-2 overflow-hidden rounded font-medium transition-colors duration-300 {text
			? 'px-4 py-2'
			: 'p-2'} {colors[color]} {classes} {isActive
			? 'bg-gray-200 focus:!bg-gray-300 mhover:hover:!bg-gray-300'
			: ''} {isSubmitting ? 'cursor-wait !bg-blue-950' : ''}"
	>
		{#if isSubmitting}
			<span
				class="absolute inset-0 flex min-w-full animate-spin items-center justify-center bg-blue-950"
			>
				<Loader2 />
			</span>
		{/if}
		{#if text}
			{text}
		{/if}
		<svelte:component this={icon} />
	</button>
{/if}
