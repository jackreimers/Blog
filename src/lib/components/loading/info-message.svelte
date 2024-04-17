<script lang="ts">
	import Icon from '$lib/components/text/icon.svelte';

	export let icon: string = 'info';
	export let message: string = 'Error message goes here...';
</script>

<div class="flex items-center gap-2.5 sm:gap-3.5">
	<div>
		<Icon {icon} classes="text-5xl text-gray-300 md:text-7xl" />
	</div>
	<div>
		<p class="text-2xl font-semibold text-gray-300 md:text-3xl">{message}</p>
	</div>
</div>
