<script lang="ts">
	import { MoveRight } from 'lucide-svelte';

	export let href: string;
	export let arrow: boolean = true;
</script>

<a
	{href}
	class="group flex rounded border-2 border-transparent bg-white p-4 shadow transition-colors duration-200 hover:border-gray-500 sm:p-6 md:p-7"
>
	<span class="flex-1">
		<slot />
	</span>
	{#if arrow}
		<span
			class="text-tertiary group-hover:text-primary mr-3 flex items-center transition-all duration-200 group-hover:mr-1.5"
		>
			<MoveRight />
		</span>
	{/if}
</a>
