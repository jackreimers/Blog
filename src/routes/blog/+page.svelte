<script lang="ts">
	import type { PageServerData } from './$types';
	import { Filter } from 'lucide-svelte';
	import Head from '$lib/components/seo/head.svelte';
	import Container from '$lib/components/container/container.svelte';
	import Section from '$lib/components/section/section.svelte';
	import Hero from '$lib/components/hero/hero.svelte';
	import PostGrid from '$lib/components/grids/posts/posts-grid.svelte';
	import PostCard from '$lib/components/cards/post/post-card.svelte';
	import BasicButton from '$lib/components/buttons/basic/basic-button.svelte';

	export let data: PageServerData;
</script>

<Head
	canonical="https://jackreimers.dev/blog"
	description="Read Jack Reimers blog where he talks about web and game development."
	title="Blog"
/>
<Hero subtitle="Discover the tech topics I’m working with and passionate about." title="My Blog">
	<BasicButton
		color="primary"
		href="/tags"
		icon={Filter}
		on:click={() => sessionStorage.setItem('previousPage', 'blog')}
		text="Filter by tag"
	/>
</Hero>
<Container>
	<Section>
		<PostGrid itemCount={data.posts.length}>
			{#each data.posts as post}
				<PostCard data={post} />
			{/each}
		</PostGrid>
	</Section>
</Container>
