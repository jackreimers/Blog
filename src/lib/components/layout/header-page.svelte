<script lang="ts">
	import { Direction } from '$lib/common/enums';
	import Stack from '$lib/components/layout/stack.svelte';
	import HeaderTitle from '$lib/components/layout/header-title.svelte';
</script>

<Stack
	direction={Direction.Vertical}
	classes="mb-7 gap-2.5 border-b-2 border-gray-200 pb-7 sm:mb-9 sm:gap-3.5 sm:pb-9"
>
	<slot name="title">
		<HeaderTitle>Page Title</HeaderTitle>>
	</slot>
	<slot name="info" />
	<slot name="actions" />
</Stack>
