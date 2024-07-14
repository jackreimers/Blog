<script lang="ts">
	import type { Tag } from '$lib/interfaces/tag';
	import HoriontalStack from '$lib/components/layout/stacks/stack-horizontal.svelte';
	import Button from '$lib/components/buttons/button.svelte';

	export let tags: Tag[];
</script>

<HoriontalStack>
	{#each tags as tag}
		<Button href="/tag/{tag.slug}" color="Orange" text={tag.name} />
	{/each}
</HoriontalStack>
