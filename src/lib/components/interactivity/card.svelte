<script lang="ts">
	import { MoveRight } from 'lucide-svelte';

	export let href: string;
	export let title: string = 'Card Title';
	export let subTitle: string | null;
	export let bodyText: string | null = null;
	export let arrow: boolean = true;
</script>

<a {href} class="group flex rounded bg-white px-4 py-3 shadow sm:px-6 sm:py-5 md:px-7 md:py-6">
	<span class="flex flex-1 flex-col">
		<span class="font-bold sm:text-2xl">{title}</span>
		{#if subTitle}
			<span class="text-gray-500 {bodyText ? 'mb-8 sm:mb-10' : ''}">
				{subTitle}
			</span>
		{/if}
		{#if bodyText}
			<span class="text-gray-500">{bodyText}</span>
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
