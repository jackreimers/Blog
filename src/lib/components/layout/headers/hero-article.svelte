<script lang="ts">
	//TODO: Combine this component with the hero component
	import type { Tag } from '$lib/interfaces/tag';
	import Container from '$lib/components/layout/container.svelte';
	import VerticalStack from '$lib/components/layout/stacks/stack-vertical.svelte';
	import TagBar from '$lib/components/layout/elements/bar-tags.svelte';
	import Icon from '$lib/components/text/icon.svelte';

	export let title: string;
	export let subtitle: string;
	export let date: string;
	export let tags: Tag[];
</script>

<div class="bg-gray-50 py-6">
	<Container classes="flex !py-0 sm:min-h-[400px]">
		<div class="flex flex-1 flex-col justify-center gap-4">
			<div class="flex items-center gap-3">
				<h1 class="text-4xl font-bold sm:text-6xl">{title}</h1>
			</div>
			<!--
			{#if subtitle}
				<p class="max-w-prose text-sm text-gray-500 sm:text-base">
					{subtitle}
				</p>
			{/if}
			-->
			<TagBar {tags} />
			<slot />
		</div>
	</Container>
</div>
