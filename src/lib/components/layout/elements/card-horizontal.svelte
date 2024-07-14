<script lang="ts">
	import type { Tag } from '$lib/interfaces/tag';
	import Preload from '$lib/components/loading/preload.svelte';
	import Button from '$lib/components/buttons/button.svelte';
	import Icon from '$lib/components/text/icon.svelte';

	export let href: string = '/';
	export let imageHref: string | null = null;
	export let imageAlt: string | null = null;
	export let title: string = 'Title';
	export let subtitle: string = 'Subtitle';
	export let tags: Tag[] = [];
	export let content: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
</script>

<div class="grid grid-cols-4 overflow-hidden rounded-lg bg-white">
	{#if imageHref}
		<Preload src={imageHref}>
			<img src={imageHref} alt={imageAlt} />
		</Preload>
	{:else}
		<div class="flex items-center justify-center bg-gray-100">
			<Icon icon="image" classes="text-7xl text-gray-300" />
		</div>
	{/if}
	<div class="col-start-2 col-end-5 flex flex-col px-7 py-6">
		<div class="mb-2">
			<p class="font-medium text-gray-500">{subtitle}</p>
			<span class="line-clamp-1 overflow-ellipsis">
				<a
					{href}
					class="border-b-2 border-transparent text-2xl font-semibold transition-colors duration-200 hover:border-gray-800"
				>
					{title}
				</a>
			</span>
		</div>
		<p class="line-clamp-3 text-gray-500">{content}</p>
		<div class="flex-1" />
		<div class="mt-6 flex gap-2">
			{#each tags as tag}
				<Button size="Small" color="Orange" href="/tags/{tag.slug}" text={tag.name} />
			{/each}
		</div>
	</div>
</div>
