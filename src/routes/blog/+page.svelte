<script lang="ts">
	import type { BlogPost } from '$lib/common/types';
	import { getDateString } from '$lib/common/functions';
	import { fly } from 'svelte/transition';
	import PageHeader from '$lib/components/layout/page-header.svelte';
	import Card from '$lib/components/layout/card.svelte';
	import Icon from '$lib/components/text/icon.svelte';
	import Button from '$lib/components/buttons/button.svelte';
	import Dropdown from '$lib/components/buttons/dropdown.svelte';
	import Spinner from '$lib/components/text/spinner.svelte';

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

<PageHeader title="Blog Posts" infoIcon="description" infoText={data.count}>
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
</PageHeader>
{#await data.posts}
	<div class="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-1/2 transform">
		<Spinner />
	</div>
{:then data}
	<div class="grid gap-4 sm:gap-5" in:fly>
		{#each data as post}
			<Card
				href="/blog/{post.metadata.slug}"
				title={post.metadata.title}
				subText={getDateString(post.metadata.date)}
				bodyText={getSentences(post.intro, 2)}
				arrow={false}
			/>
		{/each}
	</div>
{/await}
