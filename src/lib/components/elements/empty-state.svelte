<script lang="ts">
	import { HelpCircle } from 'lucide-svelte';

	export let title: string;
	export let subtitle: string;
	export let classes: string = '';
</script>

<div class="text-center {classes}">
	<div class="mx-auto inline-block">
		<slot name="icon">
			<HelpCircle size="3rem" />
		</slot>
	</div>
	<span class="mt-4 block text-2xl font-bold sm:text-3xl md:text-4xl">{title}</span>
	<span class="mx-auto mt-4 block max-w-sm text-gray-700">{subtitle}</span>
	{#if $$slots.content}
		<div class="mt-10">
			<slot name="content" />
		</div>
	{/if}
</div>
