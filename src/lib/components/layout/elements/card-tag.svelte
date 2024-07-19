<script lang="ts">
	import type { Tag } from '$lib/interfaces/tag';
	import Icon from '$lib/components/text/icon.svelte';

	export let tag: Tag;
</script>

<a
	href="/tags/{tag.slug}"
	class="flex flex-col rounded-lg bg-white shadow transition-all duration-300 hover:scale-[1.015] hover:shadow-lg sm:aspect-square"
>
	<span class="flex aspect-square flex-1 items-center justify-center sm:aspect-auto">
		<span class="w-1/2 overflow-hidden rounded-lg sm:w-2/5">
			<img src={tag.icon} alt="The {tag.name} logo." />
		</span>
	</span>
	<span class="flex flex-col items-center gap-2.5 p-3 sm:flex-row sm:gap-0 sm:p-4">
		<span class="flex flex-1 flex-col">
			<span class="text-lg font-semibold sm:text-xl">{tag.name}</span>
		</span>
		<span
			class="flex items-center gap-0.5 rounded-lg bg-blue-100 p-1 text-sm text-blue-900 md:text-base"
		>
			<span class="ml-2 text-sm font-medium sm:text-base">
				{#if tag.count}
					{tag.count}
					{tag.count === 1 ? 'Post' : 'Posts'}
				{:else}
					0 Posts
				{/if}
			</span>
			<Icon icon="chevron_right" classes="text-xl" />
		</span>
	</span>
</a>
