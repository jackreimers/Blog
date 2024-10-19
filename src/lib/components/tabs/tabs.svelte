<script lang="ts">
	import type { Tab } from '$lib/interfaces/interfaces';

	export let data: Tab[];
	let activeIndex = 0;
</script>

<div class="flex justify-evenly gap-4 border-t-2 border-gray-300 sm:gap-6">
	{#each data as tab, i}
		<button
			class="flex w-full -translate-y-[2px] flex-col items-center border-t-2 pb-2 pt-4 transition-colors duration-300 sm:pb-4 sm:pt-6
			{activeIndex === i ? 'border-blue-600' : 'border-transparent mhover:hover:border-gray-500'}"
			on:click={() => (activeIndex = i)}
		>
			<span class="block text-sm font-semibold sm:text-xl">{tab.title}</span>
			<span class="mt-4 hidden flex-1 tracking-tight text-gray-700 sm:block">
				{tab.description}
			</span>
		</button>
	{/each}
</div>
<div class="mt-6 sm:mt-10">
	<svelte:component this={data[activeIndex].component} />
</div>
