<script lang="ts">
	import type { Tag } from '$lib/common/types';
	import { Direction } from '$lib/common/enums';
	import { goto } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import { getDateString } from '$lib/common/functions';
	import PageHeader from '$lib/components/layout/header-page.svelte';
	import PageTitle from '$lib/components/layout/header-title.svelte';
	import Spinner from '$lib/components/loading/spinner.svelte';
	import Skeleton from '$lib/components/loading/skeleton.svelte';
	import Error from '$lib/components/loading/error.svelte';
	import Card from '$lib/components/buttons/card.svelte';
	import Icon from '$lib/components/text/icon.svelte';
	import Stack from '$lib/components/layout/stack.svelte';
	import Button from '$lib/components/buttons/button-primary.svelte';
	import GradientText from '$lib/components/text/gradient-text.svelte';
	import Modal from '$lib/components/interactivity/modal.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;

	let modal: Modal;

	function handleSortClicked() {
		data.filters.newest = !data.filters.newest;
		updateQuery();
	}

	function handleTagClicked(tag: Tag) {
		if (data.filters.tags.active === tag) {
			data.filters.tags.active = null;
		} else {
			data.filters.tags.active = tag;
		}

		modal.set(false);
		updateQuery();
	}

	function updateQuery() {
		let query = new URLSearchParams();

		if (data.filters.newest == false) {
			query.append('newest', 'false');
		}

		if (data.filters.tags.active) {
			query.append('tag', data.filters.tags.active.slug);
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

<Modal bind:this={modal}>
	{#await data.filters.tags.all}
		<p>Loading</p>
	{:then tags}
		<Stack direction={Direction.Vertical} classes="gap-2.5 sm:gap-3.5">
			{#each tags as tag}
				<Button on:click={() => handleTagClicked(tag)} classes="text-left">
					<span slot="text" class="font-medium">{tag.name}</span>
				</Button>
			{/each}
		</Stack>
	{/await}
</Modal>

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
			<p in:fade class="font-semibold">
				{posts.length.toString()}
				{posts.length === 1 ? 'Post' : 'Posts'}
			</p>
		{/await}
	</div>
	<Stack slot="actions" direction={Direction.Horizontal} classes="gap-2.5 sm:gap-3.5">
		<Button on:click={handleSortClicked}>
			<span slot="text">Date</span>
			<span
				slot="icon"
				class="transform-gpu {data.filters.newest ? '-rotate-90' : 'rotate-90'}"
			>
				<Icon icon="arrow_right_alt" />
			</span>
		</Button>
		<Button on:click={() => modal.set(true)}>
			<span slot="text">Tags</span>
			<span slot="icon">
				<Icon icon="sort" />
			</span>
		</Button>
		{#if data.filters.tags.active}
			<Button href="/blog">
				<span slot="text" class="font-normal">Clear Filter</span>
				<GradientText slot="icon" classes="from-red-600 to-red-800">
					<Icon icon="close" />
				</GradientText>
			</Button>
		{/if}
	</Stack>
</PageHeader>
{#await data.posts}
	<div class="flex justify-center pt-8">
		<Spinner />
	</div>
{:then data}
	{#if data.length > 0}
		<div in:fade>
			<Stack direction={Direction.Vertical} classes="gap-2.5 sm:gap-3.5">
				{#each data as post}
					<Card href="/blog/{post.slug}" arrow={false}>
						<Stack direction={Direction.Vertical} classes="gap-2.5 sm:gap-3.5">
							<div>
								<p class="font-bold sm:text-2xl">{post.title}</p>
								<p class="text-secondary">{getDateString(post.date)}</p>
							</div>
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
