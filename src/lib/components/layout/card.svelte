<script lang="ts">
	import { MoveRight } from 'lucide-svelte';

	export let href: string;
	export let title: string = 'Card Title';
	export let subText: string | null;
	export let bodyText: string | null = null;
	export let arrow: boolean = true;
</script>

<a {href} class="group flex rounded bg-white px-4 py-3 shadow sm:px-5 sm:py-4 md:px-7 md:py-6">
	<span class="flex flex-1 flex-col">
		<span class="font-bold md:text-2xl">{title}</span>
		{#if subText}
			<span class="text-sm text-gray-500 md:text-base {bodyText ? 'mb-8 sm:mb-10' : ''}">
				{subText}
			</span>
		{/if}
		{#if bodyText}
			<span class="text-sm md:text-base">{bodyText}</span>
		{/if}
	</span>
	{#if arrow}
		<span
			class="mr-3 flex items-center text-gray-400 transition-all duration-300 group-hover:mr-1.5 group-hover:text-gray-600"
		>
			<MoveRight />
		</span>
	{/if}
</a>
