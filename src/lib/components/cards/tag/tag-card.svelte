<script lang="ts">
	import type { Tag } from '$lib/interfaces/interfaces';
	import { logoComponents } from '$lib/constants/constants.js';

	export let data: Tag;
</script>

<a
	class="flex items-center gap-3 rounded-lg bg-white p-5 shadow transition-[transform,box-shadow] duration-300 focus:scale-[1.015] focus:shadow-md sm:p-6 mhover:hover:scale-[1.015] mhover:hover:shadow-md {$$restProps.class}"
	href="/tags/{data.slug}"
>
	<span class="aspect-square h-12 overflow-hidden rounded-md sm:h-14 md:h-16">
		<svelte:component this={logoComponents[data.slug]} />
	</span>
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
