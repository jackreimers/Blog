<script lang="ts">
	import { GitCommitVertical } from 'lucide-svelte';
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

<a class="flex items-center gap-3 py-1 {classes}" {href} on:click={handleClick}>
	<span
		class="items-center rounded-full p-1.5 transition-colors duration-200 {active
			? 'bg-blue-100 text-blue-900'
			: 'bg-gray-100 text-gray-300'}"
	>
		<GitCommitVertical />
	</span>
	<span class="text-lg font-semibold leading-none sm:text-lg">{text}</span>
</a>
