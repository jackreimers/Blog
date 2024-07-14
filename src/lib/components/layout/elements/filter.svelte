<script lang="ts">
	import type { Tag } from '$lib/interfaces/tag';
	import VerticalStack from '$lib/components/layout/stacks/stack-vertical.svelte';
	import Button from '$lib/components/buttons/button.svelte';

	export let tags: Tag[];
</script>

<div class="bg-white p-4">
	<VerticalStack>
		{#each tags as tag}
			<Button href="/tag/{tag.slug}" color="Orange" text={tag.name} />
		{/each}
	</VerticalStack>
</div>
