<script lang="ts">
	import type { ComponentType } from 'svelte';
	import { type Icon, MoveRight } from 'lucide-svelte';

	export let href: string;
	export let icon: ComponentType<Icon>;
	export let title: string;
	export let description: string;
</script>

<a
	class="group inline-flex flex-col rounded-lg bg-white p-4 shadow transition-[transform,box-shadow] duration-300 focus:scale-[1.015] focus:shadow-md sm:p-6 mhover:hover:scale-[1.015] mhover:hover:shadow-md"
	{href}
>
	<span class="flex-1">
		<span class="flex items-center gap-2">
			<svelte:component
				class="h-6 w-6 text-blue-900 transition-colors duration-300 group-focus:text-blue-950 mhover:group-hover:text-blue-950"
				this={icon}
			/>
			<span class="font-semibold tracking-tight sm:text-xl">{title}</span>
		</span>
		<span class="mt-4 block text-gray-700">{description}</span>
	</span>
	<span
		class="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-900 transition-colors duration-300 group-focus:text-blue-950 mhover:group-hover:text-blue-950"
	>
		<span class="transition-[margin] duration-300 group-focus:mr-1 mhover:group-hover:mr-1">
			Learn more
		</span>
		<MoveRight class="h-5 w-5" />
	</span>
</a>
