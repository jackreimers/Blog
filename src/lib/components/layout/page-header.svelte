<script lang="ts">
	import PageTitle from '$lib/components/layout/page-title.svelte';
</script>

<div class="mb-8 flex flex-col gap-2.5 border-b-2 border-gray-200 pb-4 sm:mb-12 sm:gap-3.5 sm:pb-8">
	<slot name="title">
		<PageTitle>Page Title</PageTitle>
	</slot>
	<slot name="info" />
	<slot name="actions" />
</div>
