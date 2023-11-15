<script lang="ts">
	import Icon from '$lib/components/text/icon.svelte';
	import Button from '$lib/components/buttons/button.svelte';
	import type { BlogPost } from '$lib/types/types';
	import { getDateString } from '$lib/functions/functions';

	export let data: BlogPost;
</script>

<div class="flex flex-col gap-2 rounded border border-gray-300 p-10">
	<p class="font-medium">{getDateString(data.metadata.date)}</p>
	<!-- TODO: Hover effects on links -->
	<Button href="/blog/test" classes="flex">
		<p class="text-4xl font-semibold">{data.metadata.title}</p>
	</Button>
	<div class="mb-8 flex gap-2">
		{#each data.metadata.categories as category}
			<Button
				onClick={() => {}}
				classes="border-2 border-gray-200 bg-gray-100 px-3.5 py-2 hover:border-gray-400"
			>
				<p class="font-semibold">{category.name}</p>
			</Button>
		{/each}
	</div>
	<p class="mb-8">{data.intro}</p>
	<div class="flex">
		<Button href="/blog/{data.metadata.slug}">
			<p class="font-bold">Read more &nbsp</p>
			<Icon icon="arrow_forward" />
		</Button>
	</div>
</div>
