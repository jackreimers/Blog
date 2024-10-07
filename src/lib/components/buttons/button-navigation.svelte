<script lang="ts">
	import { type ComponentType, createEventDispatcher } from 'svelte';
	import type { Icon } from 'lucide-svelte';

	export let href: string;
	export let text: string;
	export let icon: ComponentType<Icon>;
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
			<svelte:component this={icon} />
		</span>
		<span class="font-semibold">{text}</span>
	</div>
</a>
