<script lang="ts">
	import EmptyCard from '$lib/components/cards/card-empty.svelte';

	export let itemCount: number;
	export let horizontal: boolean = false;
	export let classes: string = '';
</script>

<div
	class="grid w-full grid-cols-1 gap-5 sm:grid-cols-2
	{horizontal ? 'md:grid-cols-1' : 'lg:grid-cols-3'}
	{classes}"
>
	<slot />
	{#if horizontal}
		{#each { length: itemCount % 2 } as _}
			<EmptyCard classes="hidden sm:inline-flex md:hidden" />
		{/each}
	{:else}
		{#each { length: (3 - itemCount) % 3 } as _}
			<EmptyCard classes="hidden lg:inline-flex" />
		{/each}
	{/if}
</div>
