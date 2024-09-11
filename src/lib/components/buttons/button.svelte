<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let size: 'small' | 'large' = 'large';
	export let color: 'blue' | 'green' | 'orange' | 'red' | 'purple' | 'gray' | 'blueSolid' | 'redSolid' = 'blue';

	export let href: string | null = null;
	export let target: string = '';
	export let type: 'button' | 'submit' | 'reset' = 'button';
	export let text: string | null = null;
	export let active: boolean = false;
	export let classes: string = '';

	const dispatch = createEventDispatcher();

	const smallClasses = !text ? 'p-2' : 'py-2 px-3 text-sm';
	const largeClasses = !text ? 'p-2.5 sm:p-3' : 'py-2.5 px-3.5 sm:py-3 sm:px-4';
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
		{type}
		class="group inline-flex items-center gap-2 rounded transition-colors duration-200
			{classes}
			{size === 'small' ? smallClasses : ''}
			{size === 'large' ? largeClasses : ''}
			{color === 'blue' ? blueClasses : ''}
			{color === 'orange' ? orangeClasses : ''}
			{color === 'red' ? redClasses : ''}
			{color === 'gray' ? (active ? grayActiveClasses : grayClasses) : ''}
			{color === 'blueSolid' ? blueSolidClasses : ''}
			{color === 'redSolid' ? redSolidClasses : ''}"
	>
		{#if text}
			<span class="font-medium">
				{text}
			</span>
		{/if}
		<slot />
	</a>
{:else}
	<button
		on:click={handleClick}
		{type}
		class="group inline-flex items-center gap-2 rounded transition-colors duration-200
			{classes}
			{size === 'small' ? smallClasses : ''}
			{size === 'large' ? largeClasses : ''}
			{color === 'blue' ? blueClasses : ''}
			{color === 'orange' ? orangeClasses : ''}
			{color === 'red' ? redClasses : ''}
			{color === 'gray' ? (active ? grayActiveClasses : grayClasses) : ''}
			{color === 'blueSolid' ? blueSolidClasses : ''}
			{color === 'redSolid' ? redSolidClasses : ''}"
	>
		{#if text}
			<span class="font-medium">
				{text}
			</span>
		{/if}
		<slot />
	</button>
{/if}
