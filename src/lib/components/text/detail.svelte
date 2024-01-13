<script lang="ts">
	import Icon from '$lib/components/text/icon.svelte';

	export let classes: string = '';
</script>

<div class="inline-flex items-center rounded-full bg-gray-100 {classes}">
	<div class="rounded-full bg-gray-200 p-1.5 sm:p-2.5">
		<slot name="icon">
			<Icon icon="question_mark" weight={500} />
		</slot>
	</div>
	<div class="pl-1.5 pr-4 text-sm font-medium sm:pl-2.5 sm:pr-6 sm:text-base">
		<slot name="text">
			<p>Missing</p>
		</slot>
	</div>
</div>
