<script lang="ts">
	import Icon from '$lib/components/text/icon.svelte';
	import Detail from '$lib/components/text/detail.svelte';
	import Button from '$lib/components/buttons/button.svelte';
	import Profile from '$lib/components/social/profile.svelte';
	import type { BlogPost } from '$lib/types/types';
	import { getDateString } from '$lib/functions/functions';

	export let data: BlogPost;
</script>

<div class="mb-2.5">
	<div class="flex flex-col gap-2.5 text-center sm:gap-3.5">
		<p class="mb-0.5 text-sm leading-none sm:text-base">{getDateString(data.metadata.date)}</p>
		<h1 class="text-3xl font-bold sm:text-5xl lg:text-6xl">
			{data.metadata.title}
		</h1>

		<div class="mb-3 mt-3 h-[2px] w-full rounded-full bg-gray-200" />

		<div class="mx-auto flex flex-col gap-2.5">
			<div class="flex gap-2">
				{#each data.metadata.categories as category}
					<Button
						onClick={() => {}}
						classes="bg-gray-100 px-3 py-1.5 text-sm hover:bg-gray-200 sm:px-4 sm:py-2.5 sm:text-base"
					>
						<p class="font-semibold">{category.name}</p>
					</Button>
				{/each}
			</div>
		</div>

		<div class="mb-3 mt-3 h-[2px] w-full rounded-full bg-gray-200" />
	</div>
</div>
