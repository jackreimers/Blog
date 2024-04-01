<script lang="ts">
	import { Direction, Size } from '$lib/common/enums';
	import Stack from '$lib/components/layout/stack.svelte';
	import HeaderTitle from '$lib/components/layout/header-title.svelte';
</script>

<Stack
	direction={Direction.Vertical}
	size={Size.M}
	classes="mb-6 border-b-2 border-gray-200 pb-6 sm:mb-8 sm:pb-8"
>
	<slot name="title">
		<HeaderTitle>Page Title</HeaderTitle>>
	</slot>
	<slot name="info" />
	<slot name="actions" />
</Stack>
