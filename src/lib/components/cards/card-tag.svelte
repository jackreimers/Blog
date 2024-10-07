<script lang="ts">
	import type { Tag } from '$lib/interfaces/interfaces.tags';
	import { logoUrls } from '$lib/constants/logos.constants.js';
	import Preload from '$lib/components/loading/preload.svelte';

	export let data: Tag;
	export let classes: string = '';
</script>

<a
	class="flex items-center gap-3 rounded-lg bg-white p-4 shadow transition-[transform,box-shadow] duration-300 focus:scale-[1.015] focus:shadow-md mhover:hover:scale-[1.015] mhover:hover:shadow-md {classes}"
	href="/tags/{data.slug}"
>
	<Preload showSkeleton={false} src={logoUrls[data.slug]}>
		<img
			alt="{data.name} logo"
			class="block h-12 rounded-lg sm:h-14 md:h-16"
			src={logoUrls[data.slug]}
		/>
	</Preload>

	<span>
		<span class="block font-semibold tracking-tight sm:text-xl">
			{data.name}
		</span>
		<span class="block text-sm text-gray-700">
			{data.count}
			{data.count === 1 ? 'Post' : 'Posts'}
		</span>
	</span>
</a>
