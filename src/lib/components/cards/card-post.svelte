<script lang="ts">
	import type { Tag } from '$lib/interfaces/interfaces.tags';
	import { CalendarDays, Image } from 'lucide-svelte';
	import { uppercaseWord } from '$lib/functions/functions.utilities';
	import Preload from '$lib/components/loading/preload.svelte';
	import PillButton from '$lib/components/buttons/button-pill.svelte';

	export let href: string = '/';
	export let imageHref: string | null = null;
	export let imageAlt: string | null = null;
	export let type: string;
	export let displayType: boolean = false;
	export let date: string = 'January 1, 1970';
	export let title: string = 'Title';
	export let content: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
	export let tags: Tag[] = [];
	export let classes: string = '';
</script>

<div
	class="relative overflow-hidden rounded-lg bg-white shadow transition-[transform,box-shadow] duration-300 focus:scale-[1.015] focus:shadow-md mhover:hover:scale-[1.015] mhover:hover:shadow-md {classes}"
>
	<a class="bg-gray-100" {href} tabindex="-1">
		{#if imageHref}
			<Preload src={imageHref} classes="aspect-[16/10]">
				<img src={imageHref} alt={imageAlt} class="block" />
			</Preload>
		{:else}
			<div class="flex h-full items-center justify-center">
				<Image class="h-20 w-20 text-gray-200" />
			</div>
		{/if}
	</a>
	<div class="p-4 sm:p-6">
		<div class="flex items-center justify-between">
			<p class="flex items-center gap-1.5 text-sm leading-none text-gray-700">
				<CalendarDays class="h-5 w-5" />
				{date}
			</p>
			{#if displayType}
				<PillButton
					bgColor="bg-gray-100"
					bgHoverColor="bg-gray-200"
					color="text-gray-900"
					href="/{type}"
					text={uppercaseWord(type)}
				/>
			{/if}
		</div>
		<a class="mt-4 leading-tight line-clamp-1 text-xl font-semibold tracking-tight" {href}>
			{title}
		</a>
		<p class="mt-4 line-clamp-4 text-sm leading-normal text-gray-700">{content}</p>
		<div class="mt-6 flex gap-1.5 overflow-x-auto">
			{#each tags as tag}
				<PillButton
					bgColor="bg-blue-100"
					bgHoverColor="bg-blue-200"
					hoverColor="text-blue-950"
					href="/tags/{tag.slug}"
					text={tag.name}
					color="text-blue-900"
				/>
			{/each}
		</div>
	</div>
</div>
