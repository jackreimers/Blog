<script lang="ts">
	import type { PageServerData } from './$types';
	import { onMount } from 'svelte';
	import { Undo2, X } from 'lucide-svelte';
	import Head from '$lib/components/seo/head.svelte';
	import Container from '$lib/components/container/container.svelte';
	import Section from '$lib/components/section/section.svelte';
	import Hero from '$lib/components/hero/hero.svelte';
	import PostGrid from '$lib/components/grids/posts/posts-grid.svelte';
	import PostCard from '$lib/components/cards/post/post-card.svelte';
	import BasicButton from '$lib/components/buttons/basic/basic-button.svelte';
	import { error } from '@sveltejs/kit';

	export let data: PageServerData;

	let previousPage: string | null = null;

	onMount(() => {
		previousPage = sessionStorage.getItem('previousPage');
	});
</script>

<Head
	canonical="https://jackreimers.dev/tags{data.tagFilter?.slug ? '/' + data.tagFilter.slug : ''}"
	description="Discover posts by Jack Reimers that match your interests by filtering through post tags."
	title={data.tagFilter?.name ?? 'Tags'}
/>
<Hero
	subtitle="All of the posts I've written about {data.tagFilter?.name}."
	title={data.tagFilter?.name ?? error(404)}
>
	<div class="flex flex-wrap items-center justify-center gap-3">
		<BasicButton color="error" href="/tags" icon={X} text="Clear" />
		{#if previousPage}
			<BasicButton color="secondary" href="/{previousPage}" icon={Undo2} text="Return" />
		{/if}
	</div>
</Hero>
<Container>
	<Section>
		<PostGrid itemCount={data.posts.length}>
			{#each data.posts as post}
				<PostCard data={post} displayType={true} />
			{/each}
		</PostGrid>
	</Section>
</Container>
