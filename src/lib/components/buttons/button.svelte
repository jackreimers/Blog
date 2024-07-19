<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Icon from '$lib/components/text/icon.svelte';

	export let size: 'Small' | 'Large' = 'Large';
	export let color: 'Blue' | 'Orange' | 'Red' | 'Gray' | 'BlueSolid' | 'RedSolid' = 'Blue';

	export let href: string | null = null;
	export let target: string = '';
	export let text: string | null = null;
	export let icon: string | null = null;
	export let iconWeight: number = 400;
	export let active: boolean = false;
	export let classes: string = '';

	const dispatch = createEventDispatcher();

	const smallClasses = icon && !text ? 'p-1.5 sm:p-2' : 'py-2 px-3 sm:px-4 text-sm';
	const largeClasses = icon && !text ? 'p-2 sm:p-3' : 'py-2 px-3 sm:py-3 sm:px-4';
	const blueClasses =
		'bg-blue-100 text-blue-900 mhover:hover:bg-blue-200 mhover:hover:text-blue-950';
	const orangeClasses =
		'bg-orange-100 text-orange-900 mhover:hover:bg-orange-200 mhover:hover:text-orange-950';
	const redClasses = 'bg-red-100 text-red-900 mhover:hover:bg-red-200 mhover:hover:text-red-950';
	const grayClasses = 'mhover:hover:bg-gray-300';
	const grayActiveClasses = 'bg-gray-200 mhover:hover:bg-gray-300';
	const blueSolidClasses = 'bg-blue-900 text-white mhover:hover:bg-blue-950';
	const redSolidClasses = 'bg-red-600 text-white mhover:hover:bg-red-700';

	function handleClick(event: MouseEvent) {
		dispatch('click', event);
	}
</script>

{#if href}
	<a
		on:click={handleClick}
		{href}
		{target}
		class="group inline-flex items-center gap-1.5 rounded transition-colors duration-200
			{classes}
			{size === 'Small' ? smallClasses : ''}
			{size === 'Large' ? largeClasses : ''}
			{color === 'Blue' ? blueClasses : ''}
			{color === 'Orange' ? orangeClasses : ''}
			{color === 'Red' ? redClasses : ''}
			{color === 'Gray' ? (active ? grayActiveClasses : grayClasses) : ''}
			{color === 'BlueSolid' ? blueSolidClasses : ''}
			{color === 'RedSolid' ? redSolidClasses : ''}"
	>
		{#if text}
			<span class="font-medium {icon ? '' : ''}">
				{text}
			</span>
		{/if}
		{#if icon}
			<Icon {icon} weight={iconWeight} />
		{/if}
	</a>
{:else}
	<button
		on:click={handleClick}
		class="group inline-flex gap-1.5 rounded transition-colors duration-200
			{classes}
			{size === 'Small' ? smallClasses : ''}
			{size === 'Large' ? largeClasses : ''}
			{color === 'Blue' ? blueClasses : ''}
			{color === 'Orange' ? orangeClasses : ''}
			{color === 'Red' ? redClasses : ''}
			{color === 'Gray' ? (active ? grayActiveClasses : grayClasses) : ''}
			{color === 'BlueSolid' ? blueSolidClasses : ''}
			{color === 'RedSolid' ? redSolidClasses : ''}"
	>
		{#if text}
			<span class="font-medium {icon ? 'mr-1.5' : ''}">
				{text}
			</span>
		{/if}
		{#if icon}
			<Icon {icon} weight={iconWeight} />
		{/if}
	</button>
{/if}
