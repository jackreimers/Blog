<style>
	button {
		transition:
			visibility 0.2s,
			opacity 0.2s linear;
	}
</style>

<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let classes: string = '';

	let isOpen = false;

	export function open() {
		isOpen = true;
		document.querySelector('body')?.classList.add('overflow-hidden');
	}

	export function close() {
		isOpen = false;
		document.querySelector('body')?.classList.remove('overflow-hidden');
	}

	function handleClick(event: MouseEvent) {
		dispatch('click', event);
		close();
	}
</script>

<button
	class="fixed left-0 top-0 h-full w-full bg-black bg-opacity-50 {classes} {isOpen
		? ''
		: 'invisible opacity-0'}"
	on:click={handleClick}
/>
