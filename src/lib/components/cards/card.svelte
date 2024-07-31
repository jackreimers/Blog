<script lang="ts">
	import { Image } from 'lucide-svelte';
	import Preload from '$lib/components/loading/preload.svelte';

	export let href: string = '/';
	export let imageHref: string | null = null;
	export let imageAlt: string | null = null;
	export let title: string = 'Title';
	export let subtitle: string = 'Subtitle';
	export let content: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
	export let horizontal: boolean = false;
	export let classes: string = '';
</script>

<div
	class="flex flex-col overflow-hidden rounded-lg bg-white shadow transition-all duration-300 mhover:hover:scale-[1.015] mhover:hover:shadow-lg
		{horizontal ? 'md:flex-row' : ''}
		{classes}"
>
	{#if imageHref}
		<a {href} class={horizontal ? 'aspect-square flex-1 md:min-h-full' : ''}>
			<Preload src={imageHref} classes="flex aspect-square">
				<img src={imageHref} alt={imageAlt} />
			</Preload>
		</a>
	{:else}
		<a {href} class={horizontal ? 'aspect-square flex-1 md:min-h-full' : ''}>
			<span class="flex aspect-square items-center justify-center bg-gray-100 text-gray-300">
				<Image size="72" />
			</span>
		</a>
	{/if}
	<div class="flex flex-1 flex-col p-4 md:p-5 {horizontal ? ' md:flex-[3]' : ''}">
		<div class="mb-2">
			<p class="font-medium text-gray-500">{subtitle}</p>
			<span class="line-clamp-1 overflow-ellipsis">
				<a
					class="border-b-2 border-transparent text-xl font-semibold transition-colors duration-200 sm:text-2xl mhover:hover:border-gray-800"
					{href}
				>
					{title}
				</a>
			</span>
		</div>
		<div class="flex-1">
			<p class="line-clamp-3 text-sm text-gray-500 sm:text-base">
				{content}
			</p>
		</div>
		<div class="mt-6">
			<slot />
		</div>
	</div>
</div>
