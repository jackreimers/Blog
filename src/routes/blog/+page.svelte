<script lang="ts">
	import type { Tag } from '$lib/common/types';
	import { goto } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import { getDateString } from '$lib/common/functions';
	import PageHeader from '$lib/components/layout/page-header.svelte';
	import PageTitle from '$lib/components/layout/page-header-title.svelte';
	import Spinner from '$lib/components/loading/spinner.svelte';
	import Skeleton from '$lib/components/loading/skeleton.svelte';
	import Modal from '$lib/components/interactivity/modal.svelte';
	import Card from '$lib/components/interactivity/card.svelte';
	import Button from '$lib/components/buttons/button-primary.svelte';
	import Icon from '$lib/components/text/icon.svelte';
	import GradientText from '$lib/components/text/gradient-text.svelte';
	import Error from '$lib/components/loading/error.svelte';

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
			data.filters.tags.active = tag.slug;
		}

		modal.close();
		updateQuery();
	}

	function updateQuery() {
		let query = new URLSearchParams();

		if (data.filters.newest == false) {
			query.append('newest', 'false');
		}

		if (data.filters.tags.active) {
			query.append('tag', data.filters.tags.active);
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
		<div class="flex flex-col gap-2.5 sm:gap-3.5">
			{#each tags as tag}
				<Button on:click={() => handleTagClicked(tag)} classes="text-left">
					<span slot="text" class="font-medium">{tag.name}</span>
				</Button>
			{/each}
		</div>
	{/await}
</Modal>

<PageHeader>
	<PageTitle slot="title">Blog</PageTitle>
	<div slot="info" class="flex items-center font-medium leading-none">
		<Icon
			icon="description"
			weight={400}
			classes="mr-2 rounded bg-gradient-to-br from-blue-600 to-blue-800 p-1 text-white shadow sm:mr-2.5 sm:p-1.5"
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
	<div slot="actions" class="flex flex-wrap gap-2.5 sm:gap-3.5">
		<Button on:click={handleSortClicked}>
			<span slot="text">Date</span>
			<span
				slot="icon"
				class="transform-gpu {data.filters.newest ? '-rotate-90' : 'rotate-90'}"
			>
				<Icon icon="arrow_right_alt" />
			</span>
		</Button>
		<Button on:click={modal.open}>
			<span slot="text">Tags</span>
			<Icon slot="icon" icon="sort" />
		</Button>
		{#await data.filters.tags.active then tag}
			{#if tag}
				<Button href="/blog">
					<span slot="text" class="font-normal">{tag.name}</span>
					<GradientText slot="icon" classes="from-red-600 to-red-800">
						<Icon icon="close" />
					</GradientText>
				</Button>
			{/if}
		{/await}
	</div>
</PageHeader>
{#await data.posts}
	<div class="flex justify-center pt-8 sm:pt-9">
		<Spinner />
	</div>
{:then data}
	<div in:fade>
		{#if data.length > 0}
			<div class="flex flex-col gap-3 sm:gap-4">
				{#each data as post}
					<Card href="/blog/{post.slug}" arrow={false}>
						<div class="flex flex-col gap-3 sm:gap-4">
							<div>
								<p class="font-bold sm:text-2xl">{post.title}</p>
								<p class="text-gray-500">{getDateString(post.date)}</p>
							</div>
							<p>{getSentences(post.intro, 2)}</p>
						</div>
					</Card>
				{/each}
			</div>
		{:else}
			<Error icon="quick_reference_all" message="Nothing found." />
		{/if}
	</div>
{/await}
