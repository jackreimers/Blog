<script lang="ts">
	import { onMount } from 'svelte';
	import Button from '$lib/components/buttons/button-primary.svelte';
	import Icon from '$lib/components/text/icon.svelte';

	export let title: string = 'Dropdown';

	let outerElement: HTMLElement;
	let open: boolean = false;

	onMount(() => {
		window.addEventListener('click', clickHandler);

		return () => {
			window.removeEventListener('click', clickHandler);
		};
	});

	function clickHandler(event: MouseEvent) {
		const target = event.target as Node;

		if (!outerElement.contains(target)) {
			open = false;
		}
	}
</script>

<div class="relative z-10" bind:this={outerElement}>
	<Button
		onClick={() => {
			open = !open;
		}}
		classes="h-full"
	>
		<span slot="text" class="flex-1 font-semibold">{title}</span>
		<span slot="icon" class="transform-gpu" class:-rotate-180={open}>
			<Icon icon="arrow_drop_down" />
		</span>
	</Button>
	<div
		class="absolute bottom-0 left-0 mt-2 w-auto min-w-full translate-y-full transition-opacity duration-200 {open
			? ''
			: 'pointer-events-none opacity-0'}"
	>
		<div class="mt-2 flex flex-col gap-2 whitespace-nowrap rounded bg-white p-2 shadow">
			<slot />
		</div>
	</div>
</div>
