<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from '$lib/components/text/icon.svelte';

	export let title: string = 'Dropdown';

	let outerElement: HTMLElement;
	let buttonElement: HTMLElement;
	let open: boolean = false;

	onMount(() => {
		window.addEventListener('click', clickHandler);

		return () => {
			window.removeEventListener('click', clickHandler);
		};
	});

	function clickHandler(event: MouseEvent) {
		const target = event.target as Node;

		if (buttonElement.contains(target)) {
			open = !open;
		} else if (!outerElement.contains(target)) {
			open = false;
		}
	}
</script>

<div class="relative z-10" bind:this={outerElement}>
	<div
		class="btn-padding-icon btn-hover inline-flex h-full cursor-pointer items-center gap-0.5 rounded bg-white text-sm shadow duration-500 sm:text-base"
		bind:this={buttonElement}
	>
		<p class="flex-1 font-semibold">{title}</p>
		<span class="transform-gpu" class:-rotate-180={open}>
			<Icon icon="arrow_drop_down" />
		</span>
	</div>
	<div
		class="absolute bottom-0 left-0 mt-2 w-auto min-w-full translate-y-full transition-opacity duration-500"
		class:opacity-0={!open}
		class:pointer-events-none={!open}
	>
		<div class="mt-2 flex flex-col gap-2 whitespace-nowrap rounded bg-white p-2 shadow">
			<slot />
		</div>
	</div>
</div>
