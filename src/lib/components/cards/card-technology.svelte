<script lang="ts">
	import VerticalStack from '$lib/components/stacks/stack-vertical.svelte';
	import Preload from '$lib/components/loading/preload.svelte';

	export let href: string;
	export let title: string;
	export let imageHref: string;
	export let imageAlt: string;
</script>

<VerticalStack classes="text-center">
	<a
		class="flex aspect-square rounded-lg bg-white p-2.5 text-center shadow transition-[transform,box-shadow] duration-300 sm:p-3 mhover:hover:scale-[1.015] mhover:hover:shadow-lg"
		{href}
	>
		<div class="w-16 overflow-hidden rounded-lg sm:w-20">
			<Preload showSkeleton={false} src={imageHref}>
				<img alt={imageAlt} src={imageHref} />
			</Preload>
		</div>
	</a>
	<p class="text-sm font-medium sm:text-base">{title}</p>
</VerticalStack>
