<style>
	.root {
		transition:
			visibility 0.2s,
			opacity 0.2s linear;
	}
</style>

<script lang="ts">
	import Blocker from '$lib/components/interactivity/blocker.svelte';
	import Button from '$lib/components/buttons/button-primary.svelte';
	import Icon from '$lib/components/text/icon.svelte';

	let blocker: Blocker;
	let isOpen: boolean = false;

	export function open() {
		blocker.open();
		isOpen = true;
	}

	export function close() {
		blocker.close();
		isOpen = false;
	}
</script>

<Blocker bind:this={blocker} on:click={close} classes="z-10" />

<div
	class="root fixed left-1/2 top-1/2 z-10 min-w-[280px] -translate-x-1/2 -translate-y-1/2 transform rounded bg-gray-50 p-4 shadow sm:p-6 md:p-7 {isOpen
		? ''
		: 'invisible opacity-0'}"
>
	<div class="flex flex-col gap-4 sm:gap-6 md:gap-7">
		<div class="flex justify-end">
			<Button on:click={close} classes="bg-red-600 text-white mhover:hover:bg-red-700">
				<span slot="icon">
					<Icon icon="close" />
				</span>
			</Button>
		</div>
		<slot class="flex-1" />
	</div>
</div>
