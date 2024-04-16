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
	import GradientText from '$lib/components/text/gradient-text.svelte';

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
	class="root fixed left-1/2 top-1/2 z-10 min-w-[300px] -translate-x-1/2 -translate-y-1/2 transform rounded bg-gray-100 p-4 shadow sm:p-6 md:p-7 {isOpen
		? ''
		: 'invisible opacity-0'}"
>
	<div class="flex flex-col gap-4 sm:gap-6 md:gap-7">
		<div class="flex justify-end">
			<Button on:click={close}>
				<GradientText slot="icon" classes="from-red-600 to-red-800">
					<Icon icon="close" />
				</GradientText>
			</Button>
		</div>
		<slot class="flex-1" />
	</div>
</div>
