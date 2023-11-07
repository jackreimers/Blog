<script lang="ts">
	import Icon from '$lib/components/text/icon.svelte';
	import Button from '$lib/components/buttons/button.svelte';

	export let name: string = 'Dropdown';
	export let options: string[];

	let open: boolean = false;
</script>

<div class="relative">
	<Button
		classes="inline-flex gap-1 rounded-full bg-gray-100 py-2 pl-5 pr-3 transition-colors duration-500 hover:bg-gray-200"
		onClick={() => {
			open = !open;
		}}
	>
		<p class="flex-1 font-bold">{name}</p>
		<span class="transition-transform duration-500" class:-rotate-180={open}>
			<Icon icon="arrow_drop_down" />
		</span>
	</Button>
	<!-- TODO: Close this when user clicks outside the dropdown -->
	<div
		class="absolute bottom-0 left-0 mt-2 w-auto min-w-full translate-y-full transition-opacity duration-500"
		class:opacity-0={!open}
		class:pointer-events-none={!open}
	>
		<div class="mt-2 flex flex-col gap-2 whitespace-nowrap rounded bg-gray-100 p-5 py-3.5">
			{#each options as option}
				<p>{option}</p>
			{/each}
		</div>
	</div>
</div>
