<script lang="ts">
	import type { Tag } from '$lib/common/types';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import { getDateString } from '$lib/common/functions';
	import Header from '$lib/components/layout/headers/header-page.svelte';
	import HorizontalStack from '$lib/components/layout/stacks/stack-horizontal.svelte';
	import VerticalStack from '$lib/components/layout/stacks/stack-vertical.svelte';
	import Modal from '$lib/components/interactivity/modal.svelte';
	import Spinner from '$lib/components/loading/spinner.svelte';
	import Card from '$lib/components/interactivity/card.svelte';
	import Button from '$lib/components/buttons/button-primary.svelte';
	import Icon from '$lib/components/text/icon.svelte';
	import InfoMessage from '$lib/components/loading/info-message.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;

	const title = 'Jack Reimers | Blog';
	const description =
		"I'm a full stack Software Engineer who is passionate about web and video game development.";

	let modal: Modal;

	async function handleSortClicked() {
		data.filters.newest = !data.filters.newest;
		await updateQuery();
	}

	async function handleTagClicked(tag: Tag) {
		const active = await data.filters.tags.active;
		if (active === tag) {
			data.filters.tags.active = null;
		} else {
			data.filters.tags.active = tag;
		}

		modal.close();
		await updateQuery();
	}

	async function updateQuery() {
		const active = await data.filters.tags.active;
		let query = new URLSearchParams();

		if (data.filters.newest == false) {
			query.append('newest', 'false');
		}

		if (active) {
			query.append('tag', active.slug);
		}

		//TODO: Use svelte specific function for replace state
		await goto('/blog?' + query, { replaceState: true, invalidateAll: false });
	}

	async function getPostCount(): Promise<string> {
		return new Promise(async (resolve) => {
			const posts = await data.posts;
			const value = `${posts.length.toString()} ${posts.length === 1 ? ' Post' : ' Posts'}`;
			resolve(value);
		});
	}

	function getPostSentences(text: string, number: number) {
		let sentencePattern = /[.!?] [A-Z]/g;
		let sentences = text.split(sentencePattern);
		if (sentences.length > number) {
			number = sentences.length;
		}

		return sentences.slice(0, number).join('');
	}
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={'https://jackreimers.dev' + $page.url.pathname} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
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

<Header title="Blog" infoIcon="description" infoText={getPostCount()}>
	<HorizontalStack>
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
					<span slot="icon" class="text-red-600">
						<Icon icon="close" />
					</span>
				</Button>
			{/if}
		{/await}
	</HorizontalStack>
</Header>
{#await data.posts}
	<div class="flex justify-center pt-8 sm:pt-9">
		<Spinner />
	</div>
{:then data}
	<div in:fade>
		{#if data.length > 0}
			<VerticalStack>
				{#each data as post}
					<Card href="/blog/{post.slug}" arrow={false}>
						<div class="flex flex-col gap-3 sm:gap-4">
							<div>
								<p class="text-xl font-bold md:text-2xl">{post.title}</p>
								<p class="text-gray-500 md:text-lg">
									{getDateString(post.date)}
								</p>
							</div>
							<p>{getPostSentences(post.intro, 2)}</p>
						</div>
					</Card>
				{/each}
			</VerticalStack>
		{:else}
			<InfoMessage icon="quick_reference_all" message="Nothing found." />
		{/if}
	</div>
{/await}
