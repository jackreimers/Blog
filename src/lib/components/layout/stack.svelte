<script lang="ts">
	import { Direction, Size } from '$lib/common/enums';

	export let direction: Direction = Direction.Horizontal;
	export let size: Size = Size.M;
	export let classes: string = '';
</script>

{#if size === Size.XXS}
	<span
		class="flex flex-wrap gap-0.5 {direction === Direction.Horizontal
			? 'flex-wrap'
			: 'flex-col'}
		{classes}"
	>
		<slot />
	</span>
{:else if size === Size.XS}
	<span
		class="flex flex-wrap gap-1 sm:gap-1.5 {direction === Direction.Horizontal
			? 'flex-wrap'
			: 'flex-col'}
		{classes}"
	>
		<slot />
	</span>
{:else if size === Size.S}
	<span
		class="flex flex-wrap gap-2 sm:gap-3 {direction === Direction.Horizontal
			? 'flex-wrap'
			: 'flex-col'}
		{classes}"
	>
		<slot />
	</span>
{:else if size === Size.M}
	<span
		class="flex flex-wrap gap-3 sm:gap-5 {direction === Direction.Horizontal
			? 'flex-wrap'
			: 'flex-col'}
		{classes}"
	>
		<slot />
	</span>
{:else if size === Size.L}
	<span
		class="flex flex-wrap gap-4 sm:gap-6 {direction === Direction.Horizontal
			? 'flex-wrap'
			: 'flex-col'}
		{classes}"
	>
		<slot />
	</span>
{/if}
