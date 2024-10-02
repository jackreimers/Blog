<script lang="ts">
	import { Image } from 'lucide-svelte';
	import Preload from '$lib/components/loading/preload.svelte';

	export let href: string = '/';
	export let imageHref: string | null = null;
	export let imageAlt: string | null = null;
	export let date: string = 'January 1, 1970';
	export let title: string = 'Title';
	export let content: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
	export let horizontal: boolean = false;
	export let classes: string = '';
</script>

<div
	class="relative flex flex-col overflow-hidden rounded-lg bg-white shadow transition-[transform,box-shadow] duration-300 mhover:hover:scale-[1.015] mhover:hover:shadow-lg
		{horizontal ? 'md:flex-row' : ''}
		{classes}"
>
	<a
		class="relative {horizontal ? 'aspect-square flex-1 md:min-h-full' : ''}"
		{href}
		tabindex="-1"
	>
		{#if imageHref}
			<Preload src={imageHref} classes="flex aspect-square">
				<img src={imageHref} alt={imageAlt} />
			</Preload>
		{:else}
			<span class="flex aspect-square items-center justify-center bg-gray-100 text-gray-300">
				<Image size="4.5rem" />
			</span>
		{/if}
	</a>
	<div class="flex flex-1 flex-col p-6 sm:p-7 {horizontal ? ' md:flex-[3]' : ''}">
		<p class="text-gray-500">{date}</p>
		<a class="mt-2 line-clamp-1 text-xl font-semibold sm:text-2xl" {href}>
			{title}
		</a>
		<div class="mt-4 flex-1">
			<p class="line-clamp-3 text-gray-700">
				{content}
			</p>
		</div>
		<div class="mt-10">
			<slot />
		</div>
	</div>
</div>
