<script lang="ts">
	import Icon from '$lib/components/text/icon.svelte';
	import Detail from '$lib/components/text/detail.svelte';
	import Button from '$lib/components/buttons/button.svelte';
	import Profile from '$lib/components/social/profile.svelte';
	import type { BlogPost } from '$lib/types/types';
	import { getDateString } from '$lib/functions/functions';

	export let data: BlogPost;
</script>

<div class="mb-12 flex">
	<div class="inline-flex flex-col gap-4">
		<h1 class="text-6xl font-semibold">{data.metadata.title}</h1>
		<div>
			<Detail>
				<Icon slot="icon" icon="calendar_month" />
				<p slot="text">{getDateString(data.metadata.date)}</p>
			</Detail>
		</div>
		<div class="flex gap-2">
			{#each data.metadata.categories as category}
				<Button onClick={() => {}} classes="bg-gray-100 px-4 py-2.5 hover:bg-gray-200">
					<p class="font-semibold">{category.name}</p>
				</Button>
			{/each}
		</div>
		<Profile />
	</div>
	<div class="flex-1" />
	<div class="flex items-end">
		<Detail>
			<Icon slot="icon" icon="schedule" />
			<p slot="text">{data.metadata.readTime} minutes</p>
		</Detail>
	</div>
</div>
