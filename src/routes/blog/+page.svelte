<script lang="ts">
	import PageHeader from '$lib/components/layout/page-header.svelte';
	import Card from '$lib/components/layout/card.svelte';
	import Button from '$lib/components/buttons/button.svelte';

	import { getDateString } from '$lib/functions/functions';

	/** @type {import('./$types').PageData} */
	export let data: any;
</script>

<svelte:head>
	<title>Jack Reimers | Blog</title>
</svelte:head>

<PageHeader title="Blog Posts" infoIcon="description" infoText="{data.posts.length} Posts">
	<div class="flex flex-wrap gap-2">
		<Button
			onClick={() => {}}
			classes="bg-gray-100 px-3 py-1.5 text-sm hover:bg-gray-200 sm:px-4 sm:py-2.5 sm:text-base"
		>
			<p class="font-semibold">Date</p>
		</Button>
		<Button
			onClick={() => {}}
			classes="bg-gray-100 px-3 py-1.5 text-sm hover:bg-gray-200 sm:px-4 sm:py-2.5 sm:text-base"
		>
			<p class="font-semibold">Category</p>
		</Button>
	</div>
</PageHeader>

<div class="grid gap-4">
	{#each data.posts as post}
		<Card
			href="/blog/{post.metadata.slug}"
			title={post.metadata.title}
			subText={getDateString(post.metadata.date)}
			bodyText={post.intro.substring(0, post.intro.indexOf('.') + 1)}
		/>
	{/each}
</div>
