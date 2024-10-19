<script lang="ts">
	import EmptyCard from '$lib/components/cards/empty/empty-card.svelte';

	export let itemCount: number;
</script>

<div class="grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 {$$restProps.class ?? ''}">
	<slot />
	{#if itemCount === 1}
		<EmptyCard class="hidden md:inline-flex" />
		<EmptyCard class="hidden xl:inline-flex" />
	{:else if itemCount === 2}
		<EmptyCard class="hidden xl:inline-flex" />
	{/if}
</div>
