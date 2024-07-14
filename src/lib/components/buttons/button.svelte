<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Icon from '$lib/components/text/icon.svelte';

	export let size: 'Small' | 'Large' = 'Large';
	export let color: 'Blue' | 'Orange' | 'Red' | 'Header' = 'Blue';

	export let href: string | null = null;
	export let target: string = '';
	export let text: string | null = null;
	export let icon: string | null = null;
	export let active: boolean = false;
	export let classes: string = '';

	const dispatch = createEventDispatcher();

	const smallClasses = icon && !text ? 'p-2' : 'px-4 py-2 text-sm';
	const largeClasses = icon && !text ? 'p-2' : 'px-3 py-2 sm:px-4 sm:py-2.5';
	const blueClasses = 'bg-blue-100 text-blue-900 hover:bg-blue-200 hover:text-blue-950';
	const orangeClasses = 'bg-orange-100 text-orange-900 hover:bg-orange-200 hover:text-orange-900';
	const redClasses = 'bg-red-600 text-white hover:bg-red-700';
	const headerClasses = 'hover:bg-gray-300';
	const headerActiveClasses = 'bg-gray-200 hover:bg-gray-300';

	function handleClick(event: MouseEvent) {
		dispatch('click', event);
	}
</script>

{#if href}
	<a
		on:click={handleClick}
		{href}
		{target}
		class="group inline-block rounded transition-colors duration-200
			{classes}
			{size === 'Small' ? smallClasses : ''}
			{size === 'Large' ? largeClasses : ''}
			{color === 'Blue' ? blueClasses : ''}
			{color === 'Orange' ? orangeClasses : ''}
			{color === 'Red' ? redClasses : ''}
			{color === 'Header' ? (active ? headerActiveClasses : headerClasses) : ''}"
	>
		{#if text}
			<span class="font-medium {icon ? '' : ''}">
				{text}
			</span>
		{/if}
		{#if icon}
			<Icon {icon} weight={400} />
		{/if}
	</a>
{:else}
	<button
		on:click={handleClick}
		class="group inline-block rounded transition-colors duration-200
			{classes}
			{size === 'Small' ? smallClasses : ''}
			{size === 'Large' ? largeClasses : ''}
			{color === 'Blue' ? blueClasses : ''}
			{color === 'Orange' ? orangeClasses : ''}
			{color === 'Red' ? redClasses : ''}
			{color === 'Header' ? (active ? headerActiveClasses : headerClasses) : ''}"
	>
		{#if text}
			<span class="font-medium {icon ? 'mr-1.5' : ''}">
				{text}
			</span>
		{/if}
		{#if icon}
			<Icon {icon} weight={400} />
		{/if}
	</button>
{/if}
