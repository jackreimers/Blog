<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let href: string | null = null;
	export let target: string = '';
	export let classes: string = '';

	const dispatch = createEventDispatcher();

	function handleClick(event: MouseEvent) {
		dispatch('click', event);
	}
</script>

{#if href}
	<a
		{href}
		{target}
		class="inline-flex items-center rounded border-2 border-transparent bg-white shadow transition-colors duration-200 hover:border-gray-500 {classes} {$$slots.text
			? 'px-3 py-2 sm:px-4 sm:py-2.5'
			: 'p-1.5 sm:p-2.5'}"
	>
		<span
			class="font-semibold {$$slots.icon
				? 'mr-2 border-r-2 border-gray-100 pr-2 sm:mr-3 sm:pr-3'
				: ''}"
		>
			<slot name="text" />
		</span>
		<slot name="icon" />
	</a>
{:else}
	<button
		on:click={handleClick}
		class="inline-flex items-center rounded border-2 border-transparent bg-white shadow transition-colors duration-200 hover:border-gray-500 {classes} {$$slots.text
			? 'px-3 py-2 sm:px-4 sm:py-2.5'
			: 'p-1.5 sm:p-2.5'}"
	>
		<span
			class="font-semibold {$$slots.icon && $$slots.text
				? 'mr-2 border-r-2 border-gray-100 pr-2 sm:mr-3 sm:pr-3'
				: ''}"
		>
			<slot name="text" />
		</span>
		<slot name="icon" />
	</button>
{/if}
