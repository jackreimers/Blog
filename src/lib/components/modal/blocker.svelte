<style>
	button {
		transition:
			visibility 0.3s,
			opacity 0.3s linear;
	}
</style>

<script lang="ts">
	import { openBlockers } from '$lib/stores/store.blockers';
	import { get } from 'svelte/store';
	import { createEventDispatcher } from 'svelte';

	export let classes: string = '';

	const dispatch = createEventDispatcher();
	let isOpen = false;

	export function open() {
		isOpen = true;
		openBlockers.set(get(openBlockers) + 1);
		document.querySelector('body')?.classList.add('overflow-hidden');
	}

	export function close() {
		isOpen = false;

		const updatedBlockerAmount = get(openBlockers) - 1;
		openBlockers.set(updatedBlockerAmount);

		if (updatedBlockerAmount === 0) {
			document.querySelector('body')?.classList.remove('overflow-hidden');
		}
	}

	function handleClick(event: MouseEvent) {
		dispatch('close', event);
		close();
	}

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			event.preventDefault();
			dispatch('close', event);
			close();
		}
	}
</script>

<button
	class="fixed left-0 top-0 h-full w-full bg-black bg-opacity-50 {classes} {isOpen
		? ''
		: 'invisible opacity-0'}"
	on:click={handleClick}
/>

<svelte:window on:keydown={handleKeyDown} />
