<script lang="ts">
	import Icon from '$lib/components/text/icon.svelte';

	export let icon: string = 'info';
	export let message: string = 'Error message goes here...';
</script>

<div class="flex items-center gap-4 sm:gap-5">
	<div>
		<Icon {icon} classes="text-7xl text-gray-300 sm:text-8xl lg:text-9xl" />
	</div>
	<div>
		<p class="text-3xl font-semibold text-gray-300 sm:text-4xl lg:text-5xl">{message}</p>
	</div>
</div>
