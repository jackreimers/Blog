<script lang="ts">
	import type { PageServerData } from './$types';
	import { onMount } from 'svelte';
	import { BookOpen, FolderGit2, Undo2 } from 'lucide-svelte';
	import Head from '$lib/components/seo/head.svelte';
	import Container from '$lib/components/container/container.svelte';
	import Section from '$lib/components/section/section.svelte';
	import Hero from '$lib/components/hero/hero.svelte';
	import BasicGrid from '$lib/components/grids/basic/basic-grid.svelte';
	import TagCard from '$lib/components/cards/card-tag.svelte';
	import BasicButton from '$lib/components/buttons/basic/basic-button.svelte';

	export let data: PageServerData;

	let previousPage: string | null;

	onMount(() => {
		previousPage = sessionStorage.getItem('previousPage');
	});
</script>

<Head
	canonical="https://jackreimers.dev/tags"
	description="Discover posts by Jack Reimers that match your interests by filtering through post tags."
	title="Tags"
/>
<Hero subtitle="Filter posts by topics that interest you." title="All Tags">
	<div class="flex flex-wrap items-center justify-center gap-3">
		{#if previousPage}
			{#if previousPage.startsWith('projects')}
				<BasicButton color="primary" href="/blog" icon={BookOpen} text="View Blog" />
			{/if}
			{#if previousPage.startsWith('blog')}
				<BasicButton
					color="primary"
					href="/projects"
					icon={FolderGit2}
					text="View Projects"
				/>
			{/if}
			<BasicButton color="secondary" href="/{previousPage}" icon={Undo2} text="Return" />
		{:else}
			<BasicButton color="primary" href="/blog" icon={BookOpen} text="View Blog" />
			<BasicButton
				color="secondary"
				href="/projects"
				icon={FolderGit2}
				text="View Projects"
			/>
		{/if}
	</div>
</Hero>
<Container>
	<Section>
		<BasicGrid>
			{#each data.tags as tag}
				<TagCard data={tag} />
			{/each}
		</BasicGrid>
	</Section>
</Container>
