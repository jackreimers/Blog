<script lang="ts">
	import { Direction } from '$lib/common/enums';

	export let direction: Direction = Direction.Horizontal;
	export let classes: string = '';
</script>

<span
	class="flex {direction === Direction.Horizontal ? '' : 'flex-col'}
		{classes}"
>
	<slot />
</span>
