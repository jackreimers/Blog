<script lang="ts">
	import { MoveRight } from 'lucide-svelte';

	export let href: string;
	export let arrow: boolean = true;
</script>

<div class="group relative rounded shadow">
	<div
		class="absolute left-0 top-0 -z-10 h-[calc(100%+4px)] w-[calc(100%+4px)] -translate-x-[2px] -translate-y-[2px] transform rounded-[calc(0.25rem+2px)] bg-white bg-gradient-to-br from-blue-600 to-blue-800 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
	/>
	<a {href} class="group flex rounded bg-white p-4 shadow sm:p-6 md:p-7">
		<span class="flex-1">
			<slot />
		</span>
		{#if arrow}
			<span
				class="text-tertiary group-hover:text-primary mr-3 flex items-center transition-all duration-300 group-hover:mr-1.5"
			>
				<MoveRight />
			</span>
		{/if}
	</a>
</div>
