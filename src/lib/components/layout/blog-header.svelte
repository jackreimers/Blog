<script lang="ts">
	import type { BlogPost } from '$lib/types/types';
	import { getDateString } from '$lib/functions/functions';

	import PageHeader from '$lib/components/layout/page-header.svelte';
	import Button from '$lib/components/buttons/button.svelte';
	import Icon from '$lib/components/text/icon.svelte';

	export let data: BlogPost;
</script>

<PageHeader>
	<div class="flex flex-col gap-2.5 sm:gap-3.5">
		<h1 class="text-4xl font-bold sm:text-5xl lg:text-6xl">
			{data.metadata.title}
		</h1>
		<div
			class="flex items-center gap-2 text-sm font-semibold leading-none sm:gap-2.5 sm:text-base"
		>
			<Icon
				icon="calendar_month"
				weight={400}
				classes="rounded bg-gradient-to-br from-blue-600 to-blue-800 p-1 text-white sm:p-1.5"
			/>
			<p>{getDateString(data.metadata.date)}</p>
		</div>
		<div class="flex flex-wrap gap-2">
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
