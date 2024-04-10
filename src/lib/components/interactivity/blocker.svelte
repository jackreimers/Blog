<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	//TODO: Fix close animation not working
	//TODO: Fix blocker not blocking scroll

	export let classes: string = '';

	const dispatch = createEventDispatcher();
	let open = false;

	export function set(value: boolean) {
		open = value;
	}

	function handleClick(event: MouseEvent) {
		dispatch('click', event);
		open = false;
	}
</script>

<button
	on:click={handleClick}
	class="fixed left-0 top-0 h-full w-full bg-black bg-opacity-50 transition-opacity duration-200 {classes} {open
		? ''
		: 'invisible opacity-0'}"
/>
