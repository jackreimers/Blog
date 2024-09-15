<script lang="ts">
	import { ChevronRight } from 'lucide-svelte';

	export let text: string = '';
	export let showChevron: boolean = false;
	export let classes: string = '';
</script>

<span
	class="inline-flex rounded-full bg-blue-100 px-3 py-2 text-sm font-medium text-blue-900 {classes}"
>
	<span class="mx-1.5">{text}</span>
	{#if showChevron}
		<ChevronRight size="1.25rem" />
	{/if}
</span>
