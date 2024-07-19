<script>
	import Icon from '$lib/components/text/icon.svelte';

	export let classes = '';
</script>

<div class="flex items-center justify-center rounded-lg bg-gray-100 {classes}">
	<Icon icon="pending" classes="text-7xl text-gray-300" />
</div>
