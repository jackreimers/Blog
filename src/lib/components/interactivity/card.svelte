<script lang="ts">
	import { MoveRight } from 'lucide-svelte';

	export let href: string;
	export let arrow: boolean = true;
</script>

<a
	{href}
	class="group flex rounded border-2 border-transparent bg-white p-4 shadow transition-colors duration-200 sm:p-5 md:p-7 mhover:hover:border-gray-500"
>
	<span class="flex-1">
		<slot />
	</span>
	{#if arrow}
		<span
			class="mr-3 flex items-center text-gray-400 transition-all duration-200 mhover:group-hover:mr-1.5 mhover:group-hover:text-gray-700"
		>
			<MoveRight />
		</span>
	{/if}
</a>
