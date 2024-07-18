<script lang="ts">
	import type { Tag } from '$lib/interfaces/tag';
	import Icon from '$lib/components/text/icon.svelte';

	export let tag: Tag;
</script>

<a
	href="/tags/{tag.slug}"
	class="flex aspect-square flex-col rounded-lg bg-white shadow transition-all duration-300 hover:scale-[1.015] hover:shadow-lg"
>
	<span class="flex flex-1 items-center justify-center text-9xl">
		<span class="colored overflow-hidden rounded-xl {tag.icon}" />
	</span>
	<span class="flex items-center border-t-2 p-4">
		<span class="flex flex-1 flex-col">
			<span class="text-xl font-semibold">{tag.name}</span>
		</span>
		<span class="flex items-center gap-1 text-gray-500">
			<span class="font-semibold">{tag.count}</span>
			<Icon icon="chevron_right" />
		</span>
	</span>
	<!--
	<div class="m-4 flex justify-center overflow-hidden rounded-lg">
		<span class="colored text-8xl {tag.icon}" />
	</div>
	<div>

	</div>
<div class="flex-1">
	<h2 class="font-semibold text-2xl">{tag.name}</h2>
	<p class="text-gray-500">10 Posts</p>
</div>
-->
</a>
