<script lang="ts">
	import type { Tag } from '$lib/interfaces/interfaces.tags';
	import { ArrowRight } from 'lucide-svelte';
	import { logoUrls } from '$lib/constants/logos.constants.js';
	import VerticalStack from '$lib/components/stacks/stack-vertical.svelte';
	import Preload from '$lib/components/loading/preload.svelte';

	export let data: Tag;
</script>

<a
	class="flex flex-col rounded-lg bg-white shadow transition-[transform,box-shadow] duration-300 sm:aspect-square mhover:hover:scale-[1.015] mhover:hover:shadow-lg"
	href="/tags/{data.slug}"
>
	<span class="flex aspect-square flex-1 items-center justify-center sm:aspect-auto">
		<span class="w-1/2 overflow-hidden rounded-lg sm:w-2/5">
			<Preload showSkeleton={false} src={logoUrls[data.slug]}>
				<img alt="The {data.name} logo." src={logoUrls[data.slug]} />
			</Preload>
		</span>
	</span>
	<VerticalStack classes="items-center p-4 sm:flex-row md:p-5">
		<span class="flex flex-1 flex-col">
			<span class="text-lg font-semibold sm:text-xl">{data.name}</span>
		</span>
		<span class="flex gap-2 rounded bg-blue-100 px-3 py-2 text-sm text-blue-900">
			<span class="text-sm font-semibold">
				{#if data.count}
					{data.count}
					{data.count === 1 ? 'Post' : 'Posts'}
				{:else}
					0 Posts
				{/if}
			</span>
			<ArrowRight size="20" />
		</span>
	</VerticalStack>
</a>
