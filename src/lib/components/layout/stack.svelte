<script lang="ts">
	import { Direction, Size } from '$lib/common/enums';

	export let direction: Direction = Direction.Horizontal;
	export let size: Size = Size.Medium;
	export let classes: string = '';
</script>

{#if size === Size.Small}
	<div
		class="flex flex-wrap gap-2 sm:gap-3 {direction === Direction.Horizontal
			? 'flex-wrap'
			: 'flex-col'}
		{classes}"
	>
		<slot />
	</div>
{:else if size === Size.Medium}
	<div
		class="flex flex-wrap gap-4 sm:gap-5 {direction === Direction.Horizontal
			? 'flex-wrap'
			: 'flex-col'}
		{classes}"
	>
		<slot />
	</div>
{:else if size === Size.Large}
	<div
		class="flex flex-wrap gap-6 sm:gap-7 {direction === Direction.Horizontal
			? 'flex-wrap'
			: 'flex-col'}
		{classes}"
	>
		<slot />
	</div>
{/if}
