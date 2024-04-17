<script lang="ts">
	import { MoveRight } from 'lucide-svelte';

	export let href: string;
	export let arrow: boolean = true;
</script>

<a
	{href}
	class="mhover:hover:border-gray-500 group flex rounded border-2 border-transparent bg-white p-4 shadow transition-colors duration-200 sm:p-6 md:p-7"
>
	<span class="flex-1">
		<slot />
	</span>
	{#if arrow}
		<span
			class="mhover:group-hover:mr-1.5 mhover:group-hover:text-gray-700 mr-3 flex items-center text-gray-400 transition-all duration-200"
		>
			<MoveRight />
		</span>
	{/if}
</a>
