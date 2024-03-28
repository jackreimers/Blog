<script lang="ts">
	import type { BlogPost } from '$lib/common/types';
	import { getDateString } from '$lib/common/functions';
	import { fade } from 'svelte/transition';
	import PageHeader from '$lib/components/layout/page-header.svelte';
	import PageTitle from '$lib/components/layout/page-title.svelte';
	import Card from '$lib/components/layout/card.svelte';
	import Icon from '$lib/components/text/icon.svelte';
	import Button from '$lib/components/buttons/button.svelte';
	import Dropdown from '$lib/components/buttons/dropdown.svelte';
	import Spinner from '$lib/components/text/spinner.svelte';
	import Skeleton from '$lib/components/layout/skeleton.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;

	let newest: boolean = true;

	function toggleSort() {
		newest = !newest;
		//posts = data.posts.sort((a: BlogPost, b: BlogPost) => {
		//if (newest) {
		//	return b.metadata.date.getTime() - a.metadata.date.getTime();
		//} else {
		//	return a.metadata.date.getTime() - b.metadata.date.getTime();
		//}
		//});
	}

	function getSentences(text: string, number: number) {
		let sentenceRegex = /[.!?] [A-Z]/g;
		let sentences = text.split(sentenceRegex);
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
				<p>{posts.length.toString()} {posts.length > 1 ? 'Posts' : 'Post'}</p>
			{/await}
		</div>
	</div>
	<div slot="actions">
		<div class="flex flex-wrap gap-2">
			<Button
				onClick={toggleSort}
				classes="btn-padding-icon btn-hover inline-flex items-center gap-0.5 rounded bg-white text-sm shadow duration-500 sm:text-base"
			>
				<span class="font-semibold">Date</span>
				<span class="transform-gpu {newest ? '-rotate-90' : 'rotate-90'}">
					<Icon icon="arrow_right_alt" />
				</span>
			</Button>
			<Dropdown title="Tags">
				<Button classes="text-sm sm:text-base">No tags found.</Button>
			</Dropdown>
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
