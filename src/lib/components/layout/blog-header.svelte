<script lang="ts">
	import type { BlogPost } from '$lib/types/types';
	import { getDateString } from '$lib/functions/functions';

	import PageHeader from '$lib/components/layout/page-header.svelte';
	import Button from '$lib/components/buttons/button.svelte';

	export let data: BlogPost;
</script>

<PageHeader>
	<div class="text-center">
		<div
			class="mb-4 flex flex-col gap-2.5 border-b-2 border-gray-200 pb-4 text-center sm:mb-8 sm:gap-3.5 sm:pb-8"
		>
			<p class="mb-0.5 text-sm leading-none sm:text-base">
				{getDateString(data.metadata.date)}
			</p>
			<h1 class="text-3xl font-bold sm:text-5xl lg:text-6xl">
				{data.metadata.title}
			</h1>
		</div>
		<div class="mx-auto flex flex-wrap justify-center gap-2">
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
</PageHeader>
