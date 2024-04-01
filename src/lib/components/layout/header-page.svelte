<script lang="ts">
	import Stack from '$lib/components/layout/stack.svelte';
	import { Direction, Size } from '$lib/common/enums';
</script>

<Stack
	direction={Direction.Vertical}
	size={Size.Small}
	classes="border-b-2 border-gray-200 pb-6 sm:pb-7"
>
	<slot name="title">
		<h1 class="pg-title">Page Title</h1>
	</slot>
	<slot name="info" />
	<slot name="actions" />
</Stack>
