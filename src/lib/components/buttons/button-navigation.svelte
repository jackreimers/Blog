<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Icon from '$lib/components/text/icon.svelte';

	export let href: string;
	export let text: string;
	export let icon: string;
	export let active: boolean = false;
	export let classes: string = '';

	const dispatch = createEventDispatcher();

	function handleClick(event: MouseEvent) {
		dispatch('click', event);
	}
</script>

<a
	on:click={handleClick}
	{href}
	class="flex items-center overflow-hidden rounded-lg bg-white {classes}"
>
	<span
		class="flex items-center p-2 transition-colors duration-200 {active
			? 'bg-blue-900 text-white'
			: 'bg-orange-100 text-orange-900'}"
	>
		<Icon {icon} weight={400} classes="text-3xl" />
	</span>
	<span class="px-3.5 py-2 font-semibold leading-none sm:px-4 sm:py-3">{text}</span>
</a>
