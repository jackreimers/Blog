<script lang="ts">
	import { previousPageSlug } from '$lib/stores/store.page';
	import { X } from 'lucide-svelte';
	import { get } from 'svelte/store';
	import Head from '$lib/components/seo/head.svelte';
	import Container from '$lib/components/container/container.svelte';
	import Section from '$lib/components/section/section.svelte';
	import Hero from '$lib/components/hero/hero.svelte';
	import PostGrid from '$lib/components/grids/posts/posts-grid.svelte';
	import PostCard from '$lib/components/cards/post/post-card.svelte';
	import PillButton from '$lib/components/buttons/pill/pill-button.svelte';

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
		<div class="flex justify-end">
			<PillButton
				color="primary"
				href="/{get(previousPageSlug) ?? 'tags'}"
				icon={X}
				text={data.tagFilter?.name ?? 'Clear'}
			/>
		</div>
		<PostGrid class="mt-4" itemCount={data.posts.length}>
			{#each data.posts as post}
				<PostCard data={post} displayType={true} />
			{/each}
		</PostGrid>
	</Section>
</Container>
