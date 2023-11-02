<script lang="ts">
	import Icon from '$lib/components/text/icon.svelte';

	export let icon: string = 'question_mark';
	export let text: string = 'Text';
</script>

<div class="inline-flex items-center rounded-full bg-gray-100">
	<div class="rounded-full bg-gray-200 p-2">
		<Icon {icon} weight={500} />
	</div>
	<p class="pl-2.5 pr-6 font-medium">{text}</p>
</div>
