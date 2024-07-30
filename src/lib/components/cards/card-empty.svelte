<script lang="ts">
	import Icon from '$lib/components/text/icon.svelte';

	export let classes = '';
</script>

<div class="flex shadow-inner items-center justify-center rounded-lg bg-gray-100 {classes}">
	<Icon classes="text-7xl text-gray-300" icon="pending" />
</div>
