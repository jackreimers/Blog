<script lang="ts">
	import type { Tag } from '$lib/common/types';
	import { Direction, Size } from '$lib/common/enums';
	import { goto } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import { getDateString } from '$lib/common/functions';
	import PageHeader from '$lib/components/layout/header-page.svelte';
	import PageTitle from '$lib/components/layout/header-title.svelte';
	import Spinner from '$lib/components/loading/spinner.svelte';
	import Skeleton from '$lib/components/loading/skeleton.svelte';
	import Error from '$lib/components/loading/error.svelte';
	import Card from '$lib/components/buttons/card.svelte';
	import Dropdown from '$lib/components/clickable/dropdown.svelte';
	import Icon from '$lib/components/text/icon.svelte';
	import Stack from '$lib/components/layout/stack.svelte';
	import Button from '$lib/components/buttons/button.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;

	function handleSortClicked() {
		data.filters.newest = !data.filters.newest;
		updateQuery();
	}

	function handleTagClicked(tag: Tag) {
		if (data.filters.tags.active.includes(tag)) {
			const index = data.filters.tags.active.indexOf(tag);
			data.filters.tags.active.splice(index, 1);
		} else {
			data.filters.tags.active.push(tag);
		}

		updateQuery();
	}

	function updateQuery() {
		let query = new URLSearchParams();

		if (data.filters.newest == false) {
			query.append('newest', 'false');
		}

		if (data.filters.tags.active.length > 0) {
			query.append(
				'tags',
				data.filters.tags.active.map((m: Tag) => m.slug)
			);
		}

		goto('/blog?' + query, { replaceState: true, invalidateAll: false });
	}

	function getSentences(text: string, number: number) {
		let sentencePattern = /[.!?] [A-Z]/g;
		let sentences = text.split(sentencePattern);
		if (sentences.length > number) {
			number = sentences.length;
		}

		return sentences.slice(0, number).join('');
	}
</script>

<svelte:head>
	<title>Jack Reimers | Blog</title>
</svelte:head>

<PageHeader>
	<PageTitle slot="title">Blog Posts</PageTitle>
	<div
		slot="info"
		class="flex items-center gap-2 text-sm font-medium leading-none sm:gap-2.5 sm:text-base"
	>
		<Icon
			icon="description"
			weight={400}
			classes="rounded bg-gradient-to-br from-blue-600 to-blue-800 p-1 text-white shadow sm:p-1.5"
		/>
		{#await data.posts}
			<Skeleton>
				<p>0 Posts</p>
			</Skeleton>
		{:then posts}
			<p in:fade>
				{posts.length.toString()}
				{posts.length === 1 ? 'Post' : 'Posts'}
			</p>
		{/await}
	</div>
	<Stack slot="actions" direction={Direction.Horizontal} size={Size.S}>
		<Button onClick={handleSortClicked}>
			<span slot="text">Date</span>
			<span
				slot="icon"
				class="transform-gpu {data.filters.newest ? '-rotate-90' : 'rotate-90'}"
			>
				<Icon icon="arrow_right_alt" />
			</span>
		</Button>
		<Dropdown title="Tags">
			{#each data.filters.tags.all as tag}
				<Button
					onClick={() => handleTagClicked(tag)}
					classes="text-left text-sm sm:text-base {data.filters.tags.active.includes(tag)
						? 'bg-gray-100 hover:bg-gray-200'
						: 'hover:bg-gray-100'}"
				>
					<span slot="text">{tag.name}</span>
				</Button>
			{/each}
		</Dropdown>
		{#each data.filters.tags.active as tag}
			<button
				on:click={() => {
					handleTagClicked(tag);
				}}
				class="btn btn-hover btn-padding-icon inline-flex items-center gap-0.5 rounded border border-gray-200 bg-gray-50 text-sm sm:text-base"
			>
				<span class="font-semibold">{tag.name}</span>
				<Icon
					icon="close"
					classes="bg-gradient-to-br from-red-600 to-red-800 bg-clip-text text-transparent"
				/>
			</button>
		{/each}
	</Stack>
</PageHeader>
{#await data.posts}
	<div class="flex justify-center pt-8">
		<Spinner />
	</div>
{:then data}
	{#if data.length > 0}
		<div in:fade>
			<Stack direction={Direction.Vertical} size={Size.M}>
				{#each data as post}
					<Card href="/blog/{post.slug}" arrow={false}>
						<Stack direction={Direction.Vertical} size={Size.M}>
							<Stack direction={Direction.Vertical} size={Size.XXS}>
								<p class="font-bold sm:text-2xl">{post.title}</p>
								<p class="text-secondary">{getDateString(post.date)}</p>
							</Stack>
							<p>{getSentences(post.intro, 2)}</p>
						</Stack>
					</Card>
				{/each}
			</Stack>
		</div>
	{:else}
		<Error icon="quick_reference_all" message="No posts found." />
	{/if}
{/await}
