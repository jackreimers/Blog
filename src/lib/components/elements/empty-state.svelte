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
	<p class="mt-4 text-2xl font-bold sm:text-3xl md:text-4xl">{title}</p>
	<p class="mx-auto mt-4 max-w-sm text-gray-700">{subtitle}</p>
	{#if $$slots.content}
		<div class="mt-10">
			<slot name="content" />
		</div>
	{/if}
</div>
