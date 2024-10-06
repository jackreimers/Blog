<script lang="ts">
	import { Image } from 'lucide-svelte';
	import { uppercaseWord } from '$lib/functions/functions.utilities';
	import Preload from '$lib/components/loading/preload.svelte';
	import PillButton from '$lib/components/buttons/button-pill.svelte';
	import type { Post } from '$lib/interfaces/interfaces.posts';

	export let data: Post;
	export let displayType: boolean = false;
	export let classes: string = '';
</script>

<div
	class="relative overflow-hidden rounded-lg bg-white shadow transition-[transform,box-shadow] duration-300 focus:scale-[1.015] focus:shadow-md mhover:hover:scale-[1.015] mhover:hover:shadow-md {classes}"
>
	<a class="bg-gray-100" href={`/${data.type}/${data.slug}`} tabindex="-1">
		{#if data.imageHref}
			<Preload src={data.imageHref} classes="aspect-[16/10]">
				<img src={data.imageHref} alt={data.imageAlt} class="block" />
			</Preload>
		{:else}
			<div class="flex h-full items-center justify-center">
				<Image class="h-20 w-20 text-gray-200" />
			</div>
		{/if}
	</a>
	<div class="p-4 sm:p-6">
		<div class="flex items-center gap-2">
			{#if displayType}
				<a
					href="/{data.type}"
					class="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-700 transition-colors duration-300"
				>
					{uppercaseWord(data.type)}
				</a>
				<!--
				<PillButton
					bgColor="bg-gray-100"
					bgHoverColor="bg-gray-200"
					color="text-gray-900"
					href="/{type}"
					text={uppercaseWord(type)}
				/>
				-->
			{/if}
			<time
				class="flex items-center gap-1.5 text-sm text-gray-700"
				datetime={data.date.toISOString()}
			>
				{data.dateString}
			</time>
		</div>
		<a
			class="mt-4 line-clamp-1 text-xl font-semibold leading-tight tracking-tight sm:text-2xl"
			href={`/${data.type}/${data.slug}`}
		>
			{data.title}
		</a>
		<p class="mt-4 line-clamp-3 leading-normal text-gray-700">{data.excerpt}</p>
		<div class="mt-6 flex gap-2 overflow-x-auto sm:mt-10">
			{#each data.tags as tag}
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
