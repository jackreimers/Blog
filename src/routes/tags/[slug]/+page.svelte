<script lang="ts">
	import { previousPageSlug } from '$lib/stores/store.page';
	import { Frown, X } from 'lucide-svelte';
	import { get } from 'svelte/store';
	import Head from '$lib/components/seo/head.svelte';
	import Hero from '$lib/components/hero/hero.svelte';
	import Container from '$lib/components/layout/container.svelte';
	import Section from '$lib/components/layout/section.svelte';
	import EmptyState from '$lib/components/elements/empty-state.svelte';
	import CardGrid from '$lib/components/grids/grid-posts.svelte';
	import Card from '$lib/components/cards/card-post.svelte';
	import PillButton from '$lib/components/buttons/button-pill.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;
</script>

<Head
	canonical="https://jackreimers.dev/tags{data.tagFilter?.slug ? '/' + data.tagFilter.slug : ''}"
	description="Discover posts by Jack Reimers that match your interests by filtering through post tags."
	title="Jack Reimers | {data.tagFilter?.name ?? 'Tags'}"
/>
<Hero subtitle="Filter my posts by topics that interest you." title="Tags" />
<Container>
	<Section>
		{#if data.posts.length === 0}
			<EmptyState
				title="Not found"
				subtitle="There are no posts associated with this tag yet."
			>
				<Frown size="3.5rem" slot="icon" />
				<div class="flex justify-center gap-2" slot="content">
					<PillButton
						color="lightGray"
						href="/blog"
						text="Browse all posts"
					/>
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
			<CardGrid itemCount={data.posts.length} classes="mt-4">
				{#each data.posts as post}
					<Card
						data={post}
						displayType={true}
					/>
				{/each}
			</CardGrid>
		{/if}
	</Section>
</Container>
