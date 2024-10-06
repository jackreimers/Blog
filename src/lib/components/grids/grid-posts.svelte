<script lang="ts">
	import EmptyCard from '$lib/components/cards/card-empty.svelte';

	export let itemCount: number;
	export let classes: string = '';
</script>

<div class="grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 {classes}">
	<slot />
	{#each { length: (3 - itemCount) % 3 } as _}
		<EmptyCard classes="hidden xl:inline-flex" />
	{/each}
</div>
