<script lang="ts">
	import HorizontalStack from '$lib/components/layout/stacks/stack-horizontal.svelte';
	import Icon from '$lib/components/text/icon.svelte';
</script>

<div class="flex rounded border-2 border-dashed border-gray-300 bg-white p-4 sm:p-5 md:p-7">
	<HorizontalStack classes="items-center">
		<Icon icon="info" classes="text-5xl text-gray-200 md:text-7xl" />
		<div class="border-l-2 pl-2.5 sm:pl-3.5">
			<p class="text-xl font-bold md:text-2xl">Empty...</p>
			<p class="text-gray-500 md:text-lg">Please check back later!</p>
		</div>
	</HorizontalStack>
</div>
