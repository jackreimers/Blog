<style>
	.root {
		transition:
			visibility 0.2s,
			opacity 0.2s linear;
	}
</style>

<script lang="ts">
	import { blur } from 'svelte/transition';
	import { X } from 'lucide-svelte';
	import Blocker from '$lib/components/modal/blocker.svelte';
	import Button from '$lib/components/buttons/button.svelte';

	export let showOverlay: boolean = false;
	export let classes: string = '';

	export function open() {
		blocker.open();
		isOpen = true;
	}

	export function close() {
		blocker.close();
		isOpen = false;
	}

	let blocker: Blocker;
	let isOpen: boolean = false;
</script>

<Blocker bind:this={blocker} classes="z-20" on:close={close} />
<div
	class="root fixed left-1/2 top-1/2 z-30 w-full -translate-x-1/2 -translate-y-1/2 transform p-5 sm:max-w-xl md:max-w-2xl {isOpen
		? ''
		: 'invisible opacity-0'}"
>
	<div class="w-full overflow-hidden rounded-lg bg-gray-50 shadow {classes}">
		{#if showOverlay}
			<div
				in:blur
				class="absolute z-20 h-full w-full overflow-hidden rounded-lg bg-gray-50 p-6 sm:p-8"
			>
				<slot name="overlay" />
			</div>
		{/if}
		<div class="flex items-center px-6 pt-6 sm:px-8 sm:pt-8">
			<div class="flex-1">
				<slot name="header" />
			</div>
			<Button color="gray" on:click={close}>
				<X />
			</Button>
		</div>
		<div class="relative flex flex-col gap-4 p-6 sm:p-8">
			<slot name="body" />
		</div>
	</div>
</div>
