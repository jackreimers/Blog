<script lang="ts">
	import { previousPageSlug } from '$lib/stores/store.page';
	import { onMount } from 'svelte';
	import Head from '$lib/components/seo/head.svelte';
	import Container from '$lib/components/container/container.svelte';
	import Section from '$lib/components/section/section.svelte';
	import Hero from '$lib/components/hero/hero.svelte';
	import PostCard from '$lib/components/cards/card-post.svelte';
	import PostGrid from '$lib/components/grids/grid-posts.svelte';
	import { Filter } from 'lucide-svelte';
	import BasicButton from '$lib/components/buttons/basic/basic-button.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;

	onMount(() => {
		previousPageSlug.set('blog');
	});
</script>

<Head
	canonical="https://jackreimers.dev/blog"
	description="Read Jack Reimers blog where he talks about web and game development."
	title="Blog"
/>
<Hero subtitle="Discover the tech topics I’m passionate about." title="Blog">
	<div class="mx-auto mt-10 flex items-center gap-4">
		<BasicButton
			color="primary"
			href="/tags"
			icon={Filter}
			text="Filter by tag"
		/>
	</div>
</Hero>
<Container>
	<Section>
		<PostGrid classes="mt-4" itemCount={data.posts.length}>
			{#each data.posts as post}
				<PostCard data={post} />
			{/each}
		</PostGrid>
	</Section>
</Container>
