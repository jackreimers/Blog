<script lang="ts">
	import { Undo2, X } from 'lucide-svelte';
	import Head from '$lib/components/seo/head.svelte';
	import Container from '$lib/components/container/container.svelte';
	import Section from '$lib/components/section/section.svelte';
	import Hero from '$lib/components/hero/hero.svelte';
	import PostGrid from '$lib/components/grids/posts/posts-grid.svelte';
	import PostCard from '$lib/components/cards/post/post-card.svelte';
	import BasicButton from '$lib/components/buttons/basic/basic-button.svelte';
	import { onMount } from 'svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;

	let previousSlug: string = '';

	onMount(() => {
		previousSlug = sessionStorage.getItem('previousSlug') ?? '';
	});
</script>

<Head
	canonical="https://jackreimers.dev/tags{data.tagFilter?.slug ? '/' + data.tagFilter.slug : ''}"
	description="Discover posts by Jack Reimers that match your interests by filtering through post tags."
	title={data.tagFilter?.name ?? 'Tags'}
/>
<Hero subtitle="All of the posts I've written about {data.tagFilter?.name}."
	  title={data.tagFilter?.name}>
	<div class="flex flex-wrap items-center justify-center gap-3">
		<BasicButton color="secondary" href="/{previousSlug}" icon={Undo2} text="Return" />
		<BasicButton color="error" href="/tags" icon={X} text="Clear" />
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
