<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let href: string | null = null;
	export let target: string = '';
	export let classes: string = '';

	function handleClick(event: MouseEvent) {
		dispatch('click', event);
	}
</script>

{#if href}
	<a
		on:click={handleClick}
		{href}
		{target}
		class="mhover:hover:border-gray-500 inline-flex items-center rounded border-2 border-transparent bg-white shadow transition-colors duration-200 {classes} {$$slots.text
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
		class="mhover:hover:border-gray-500 inline-flex items-center rounded border-2 border-transparent bg-white shadow transition-colors duration-200 {classes} {$$slots.text
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
