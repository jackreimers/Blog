<script lang="ts">
	import Icon from '$lib/components/text/icon.svelte';

	export let icon: string = 'info';
	export let message: string = 'Error message goes here...';
</script>

<div class="flex items-center gap-4 sm:gap-5">
	<div>
		<Icon {icon} classes="text-9xl text-gray-300" />
	</div>
	<div>
		<p class="text-4xl font-semibold text-gray-300">{message}</p>
	</div>
</div>
