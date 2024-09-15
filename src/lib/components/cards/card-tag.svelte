<script lang="ts">
	import type { Tag } from '$lib/interfaces/interfaces.tags';
	import { logoUrls } from '$lib/constants/logos.constants.js';
	import Preload from '$lib/components/loading/preload.svelte';
	import Pill from '$lib/components/elements/pill.svelte';

	export let data: Tag;
	export let classes: string = '';
</script>

<a
	class="flex gap-4 rounded-lg bg-white p-5 shadow transition-[transform,box-shadow] duration-300 mhover:hover:scale-[1.015] mhover:hover:shadow-lg {classes}"
	href="/tags/{data.slug}"
>
	<span class="inline-block aspect-square h-full max-w-24 flex-1 overflow-hidden rounded-lg">
		<Preload showSkeleton={false} src={logoUrls[data.slug]}>
			<img alt="The {data.name} logo." class="block w-full" src={logoUrls[data.slug]} />
		</Preload>
	</span>
	<span class="flex w-full flex-[5] items-center justify-between">
		<span class="text-xl font-semibold leading-none sm:text-2xl">{data.name}</span>
		<Pill
			classes="hidden sm:inline-flex"
			showChevron={true}
			text="{data.count} {data.count === 1 ? 'Post' : 'Posts'}"
		/>
	</span>
</a>
