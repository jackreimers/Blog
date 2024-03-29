<script lang="ts">
	import { goto } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import { getDateString } from '$lib/common/functions';
	import PageHeader from '$lib/components/layout/page-header.svelte';
	import PageTitle from '$lib/components/layout/page-title.svelte';
	import Card from '$lib/components/layout/card.svelte';
	import Icon from '$lib/components/text/icon.svelte';
	import Button from '$lib/components/buttons/button.svelte';
	import Dropdown from '$lib/components/buttons/dropdown.svelte';
	import Spinner from '$lib/components/text/spinner.svelte';
	import Skeleton from '$lib/components/layout/skeleton.svelte';
	import type { Tag } from '$lib/common/types';

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

		goto('/blog?' + query);
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
	<div slot="title">
		<PageTitle>Blog Posts</PageTitle>
	</div>
	<div slot="info">
		<div
			class="flex items-center gap-2 text-sm font-semibold leading-none sm:gap-2.5 sm:text-base"
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
				<p in:fade>{posts.length.toString()} {posts.length > 1 ? 'Posts' : 'Post'}</p>
			{/await}
		</div>
	</div>
	<div slot="actions">
		<div class="flex flex-wrap gap-2">
			<Button
				onClick={handleSortClicked}
				classes="btn-padding-icon btn-hover inline-flex items-center gap-0.5 rounded bg-white text-sm shadow duration-500 sm:text-base"
			>
				<span class="font-semibold">Date</span>
				<span class="transform-gpu {data.filters.newest ? '-rotate-90' : 'rotate-90'}">
					<Icon icon="arrow_right_alt" />
				</span>
			</Button>
			<Dropdown title="Tags">
				{#each data.filters.tags.all as tag}
					<Button
						onClick={() => handleTagClicked(tag)}
						classes="btn-padding text-left text-sm sm:text-base {data.filters.tags.active.includes(
							tag
						)
							? 'bg-gray-50'
							: ''}"
					>
						{tag.name}
					</Button>
				{/each}
			</Dropdown>
			{#each data.filters.tags.active as tag}
				<Button
					onClick={() => {
						handleTagClicked(tag);
					}}
					classes="btn-hover btn-padding-icon inline-flex items-center gap-1.5 rounded border border-gray-200 bg-gray-50 text-sm duration-500 sm:text-base"
				>
					<span class="font-semibold">{tag.name}</span>
					<Icon
						icon="close"
						classes="bg-gradient-to-br from-red-600 to-red-800 bg-clip-text text-transparent"
					/>
				</Button>
			{/each}
		</div>
	</div>
</PageHeader>
{#await data.posts}
	<div class="flex justify-center pt-8">
		<Spinner />
	</div>
{:then data}
	<div class="grid gap-4 sm:gap-5" in:fade>
		{#each data as post}
			<Card
				href="/blog/{post.slug}"
				title={post.title}
				subText={getDateString(post.date)}
				bodyText={getSentences(post.intro, 2)}
				arrow={false}
			/>
		{/each}
	</div>
{/await}
