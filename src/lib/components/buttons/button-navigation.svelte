<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let href: string;
	export let text: string;
	export let active: boolean = false;
	export let classes: string = '';

	const dispatch = createEventDispatcher();

	function handleClick(event: MouseEvent) {
		dispatch('click', event);
	}
</script>

<a class="py-1 {classes}" {href} on:click={handleClick}>
	<div class="flex flex-1 items-center gap-3">
		<span
			class="items-center rounded p-2 transition-colors duration-200 {active
				? 'bg-blue-100 text-blue-900'
				: 'bg-gray-100 text-gray-400'}"
		>
			<slot />
		</span>
		<span class="text-lg font-semibold leading-none sm:text-lg">{text}</span>
	</div>
</a>
