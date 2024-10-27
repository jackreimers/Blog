<script lang="ts">
	import type { ComponentType } from 'svelte';
	import type { Icon } from 'lucide-svelte';

	export let title: string;
	export let subtitle: string;
	export let icon: ComponentType<Icon>;
</script>

<div class="rounded-lg bg-white p-5 shadow sm:p-6 {$$restProps.class ?? ''}">
	<div class="flex justify-center">
		<div class="rounded-full bg-blue-600 p-2 text-white sm:p-3">
			<svelte:component class="h-7 w-7 sm:h-8 sm:w-8" this={icon} />
		</div>
	</div>
	<p class="mt-4 text-lg font-semibold tracking-tight">{title}</p>
	<p class="mt-2 tracking-tight text-gray-700">{subtitle}</p>
</div>
