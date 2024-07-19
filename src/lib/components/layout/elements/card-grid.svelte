<script lang="ts">
	import EmptyCard from '$lib/components/layout/elements/card-empty.svelte';

	export let itemCount: number;
	export let horizontal: boolean = false;
	export let classes: string = '';
</script>

<div
	class="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3.5
	{horizontal ? 'md:grid-cols-1' : 'md:grid-cols-3'}
	{classes}"
>
	<slot />
	<EmptyCard
		classes="hidden
		{!horizontal && itemCount % 2 === 0 ? 'md:inline-flex' : 'sm:inline-flex md:hidden'}"
	/>
</div>
