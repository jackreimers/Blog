<script lang="ts">
	import HorizontalStack from '$lib/components/layout/stacks/stack-horizontal.svelte';
	import Icon from '$lib/components/text/icon.svelte';

	export let icon: string = 'question_mark';
	export let title: string = 'Title';
	export let subtitle: string = 'Subtitle';
	export let classes: string = '';
</script>

<div class="flex items-center gap-2.5 {classes}">
	<div class="rounded-full bg-orange-100 p-2.5 text-orange-700">
		<Icon {icon} weight={500} classes="text-3xl" />
	</div>
	<div class="flex-1">
		<h2 class="text-2xl font-medium">{title}</h2>
	</div>
	<slot />
</div>
