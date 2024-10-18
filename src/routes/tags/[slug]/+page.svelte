<script lang="ts">
	import { previousPageSlug } from '$lib/stores/store.page';
	import { Frown, X } from 'lucide-svelte';
	import { get } from 'svelte/store';
	import Head from '$lib/components/seo/head.svelte';
	import Container from '$lib/components/container/container.svelte';
	import Section from '$lib/components/section/section.svelte';
	import Hero from '$lib/components/hero/hero.svelte';
	import EmptyState from '$lib/components/empty/empty-state.svelte';
	import PostGrid from '$lib/components/grids/grid-posts.svelte';
	import PostCard from '$lib/components/cards/card-post.svelte';
	import PillButton from '$lib/components/buttons/pill/pill-button.svelte.js';

	/** @type {import('./$types').PageData} */
	export let data: any;
</script>

<Head
	canonical="https://jackreimers.dev/tags{data.tagFilter?.slug ? '/' + data.tagFilter.slug : ''}"
	description="Discover posts by Jack Reimers that match your interests by filtering through post tags."
	title={data.tagFilter?.name ?? 'Tags'}
/>
<Hero subtitle="Filter my posts by topics that interest you." title="Tags" />
<Container>
	<Section>
		{#if data.posts.length === 0}
			<EmptyState
				title="Not found"
				subtitle="There are no posts associated with this tag yet."
				icon={Frown}
			>
				<div class="flex justify-center gap-2">
					<PillButton color="lightGray" href="/blog" text="Browse all posts" />
					<PillButton
						color="lightRed"
						href="/tags"
						icon={X}
						text={data.tagFilter?.name ?? 'Clear'}
					/>
				</div>
			</EmptyState>
		{:else}
			<div class="flex justify-end">
				<PillButton
					color="lightRed"
					href="/{get(previousPageSlug) ?? 'tags'}"
					icon={X}
					text={data.tagFilter?.name ?? 'Clear'}
				/>
			</div>
			<PostGrid itemCount={data.posts.length} classes="mt-4">
				{#each data.posts as post}
					<PostCard data={post} displayType={true} />
				{/each}
			</PostGrid>
		{/if}
	</Section>
</Container>
