<script lang="ts">
	import Icon from '$lib/components/text/icon.svelte';

	export let title: string = 'Title';
	export let description: string = 'Description goes here.';
	export let icon: string = 'info';
	export let iconClasses = 'from-blue-600 to-blue-800';
</script>

<div class="flex items-center gap-4 rounded bg-white p-4 shadow sm:gap-5">
	<div class="{iconClasses} bg-gradient-to-br bg-clip-text font-extrabold text-transparent">
		<Icon {icon} classes="text-6xl sm:text-8xl" />
	</div>
	<div>
		<p class="font-semibold sm:text-2xl">{title}</p>
		<p class="text-sm text-gray-500 sm:text-base">{description}</p>
	</div>
</div>
