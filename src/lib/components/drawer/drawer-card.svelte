<script lang="ts">
	import type { ComponentType } from 'svelte';
	import { type Icon } from 'lucide-svelte';

	export let title: string;
	export let icon: ComponentType<Icon>;
</script>

<div class="rounded-lg bg-white p-4 shadow">
	<div class="flex justify-center">
		<div class="rounded-full bg-blue-600 p-3 text-white">
			<svelte:component class="h-8 w-8" this={icon} />
		</div>
	</div>
	<p class="mt-4 text-lg font-semibold tracking-tight">{title}</p>
	<p class="mt-2 text-gray-700 tracking-tight">Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
</div>
