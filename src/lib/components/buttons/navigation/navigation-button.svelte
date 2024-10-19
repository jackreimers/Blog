<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let active: boolean = false;
	export let href: string;
	export let target: '_blank' | '_self' | '_parent' | '_top' = '_self';
	export let text: string;

	const dispatch = createEventDispatcher();

	function handleClick(event: MouseEvent) {
		dispatch('click', event);
	}
</script>

<a
	class="rounded-lg p-3.5 font-semibold leading-none tracking-tight transition-colors duration-300 {active
		? 'bg-blue-100 text-blue-700'
		: ''} {$$restProps.class ?? ''}"
	{href}
	on:click={handleClick}
	{target}
>
	{text}
</a>
