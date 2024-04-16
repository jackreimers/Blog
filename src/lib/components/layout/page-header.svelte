<script lang="ts">
	import HeaderTitle from '$lib/components/layout/page-header-title.svelte';
</script>

<div class="mb-8 flex flex-col gap-2.5 border-b-2 border-gray-200 pb-8 sm:mb-9 sm:gap-3.5 sm:pb-9">
	<slot name="title">
		<HeaderTitle>Page Title</HeaderTitle>>
	</slot>
	<slot name="info" />
	<slot name="actions" />
</div>
