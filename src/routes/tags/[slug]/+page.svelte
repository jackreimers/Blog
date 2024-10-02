<script lang="ts">
	import { previousPageSlug } from '$lib/stores/store.page';
	import { Frown } from 'lucide-svelte';
	import { get } from 'svelte/store';
	import { uppercaseWord } from '$lib/functions/functions.utilities';
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
					<PillButton href="/blog" text="Browse all posts" color="gray" />
					<PillButton
						color="red"
						href="/tags"
						icon="cross"
						iconSide="left"
						text={data.tagFilter?.name ?? 'Clear'}
					/>
				</div>
			</EmptyState>
		{:else}
			<div class="flex justify-end">
				<PillButton
					color="red"
					href="/{get(previousPageSlug) ?? 'tags'}"
					icon="cross"
					iconSide="left"
					text={data.tagFilter?.name ?? 'Clear'}
				/>
			</div>
			<CardGrid horizontal={true} itemCount={data.posts.length} classes="mt-4">
				{#each data.posts as post}
					<Card
						href="/{post.type}/{post.slug}"
						imageHref={post.imageHref}
						date={post.dateString}
						title={post.title}
						content={post.excerpt}
						horizontal={true}
					>
						<div class="flex gap-2 overflow-auto">
							<PillButton color="gray" href="/{post.type}" text={uppercaseWord(post.type)} />
							{#each post.tags as tag}
								<PillButton href="/tags/{tag.slug}" text={tag.name} />
							{/each}
						</div>
					</Card>
				{/each}
			</CardGrid>
		{/if}
	</Section>
</Container>
