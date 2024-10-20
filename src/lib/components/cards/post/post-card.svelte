<script lang="ts">
	import type { Post } from '$lib/interfaces/interfaces';
	import { uppercaseWord } from '$lib/functions/functions.utilities';
	import { Image } from 'lucide-svelte';
	import Preload from '$lib/components/preload/preload.svelte';
	import PillButton from '$lib/components/buttons/pill/pill-button.svelte';

	export let data: Post;
	export let displayType: boolean = false;
</script>

<div
	class="overflow-hidden rounded-lg bg-white shadow transition-[transform,box-shadow] duration-300 focus:scale-[1.015] focus:shadow-md mhover:hover:scale-[1.015] mhover:hover:shadow-md
		{$$restProps.class ?? ''}"
>
	<a href={`/${data.type}/${data.slug}`}>
		{#if data.image.src}
			<Preload src={data.image.src} class="aspect-[16/10] bg-gray-200">
				<img
					src={data.image.src}
					alt={data.image.alt}
					width={data.image.width}
					height={data.image.height}
					class="block"
				/>
			</Preload>
		{:else}
			<div class="flex aspect-[16/10] items-center justify-center bg-gray-100">
				<Image class="h-20 w-20 text-gray-200" />
			</div>
		{/if}
	</a>
	<div class="p-5 sm:p-6">
		<div class="flex items-center justify-between gap-3">
			<time class="text-sm text-gray-700" datetime={data.date.toISOString()}>
				{data.dateString}
			</time>
			{#if displayType}
				<PillButton color="secondary" href="/{data.type}" text={uppercaseWord(data.type)} />
			{/if}
		</div>
		<a
			class="mt-4 line-clamp-1 text-xl font-semibold leading-tight tracking-tight sm:text-2xl"
			href={`/${data.type}/${data.slug}`}
		>
			{data.title}
		</a>
		<p class="mt-4 line-clamp-3 text-gray-700">{data.excerpt}</p>
		<div class="mt-6 flex gap-2 overflow-x-auto">
			{#each data.tags as tag}
				<PillButton href="/tags/{tag.slug}" text={tag.name} color="primary" />
			{/each}
		</div>
	</div>
</div>
