<script lang="ts">
	import PageHeader from '$lib/components/layout/page-header.svelte';
	import Card from '$lib/components/layout/card.svelte';
	import Button from '$lib/components/buttons/button.svelte';
	import Icon from '$lib/components/text/icon.svelte';
	import Dropdown from '$lib/components/buttons/dropdown.svelte';

	import { getDateString } from '$lib/functions/functions';
	import type { BlogPost } from '$lib/types/types';

	/** @type {import('./$types').PageData} */
	export let data: any;

	let newest: boolean = true;

	$: posts = data.posts;

	function toggleSort() {
		newest = !newest;

		posts = data.posts.sort((a: BlogPost, b: BlogPost) => {
			if (newest) {
				return b.metadata.date.getTime() - a.metadata.date.getTime();
			} else {
				return a.metadata.date.getTime() - b.metadata.date.getTime();
			}
		});
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

<PageHeader title="Blog Posts" infoIcon="description" infoText="{posts.length} Posts">
	<div class="flex flex-wrap gap-2">
		<Button
			onClick={toggleSort}
			classes="btn-padding-icon btn-hover inline-flex items-center gap-0.5 rounded bg-white text-sm shadow duration-500 sm:text-base"
		>
			<span class="font-semibold">Date</span>
			<span class="transform-gpu" class:rotate-90={!newest} class:-rotate-90={newest}>
				<Icon icon="arrow_right_alt" />
			</span>
		</Button>
		<Dropdown title="Category">
			<Button classes="text-sm sm:text-base">No categories found.</Button>
		</Dropdown>
	</div>
</PageHeader>

<div class="grid gap-4 sm:gap-5">
	{#each posts as post}
		<Card
			href="/blog/{post.metadata.slug}"
			title={post.metadata.title}
			subText={getDateString(post.metadata.date)}
			bodyText={getSentences(post.intro, 2)}
		/>
	{/each}
</div>
