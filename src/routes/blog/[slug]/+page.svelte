<script lang="ts">
	import Head from '$lib/components/seo/head.svelte';
	import Container from '$lib/components/layout/container.svelte';
	import Hero from '$lib/components/layout/headers/hero-article.svelte';
	import BlockCodeRenderer from '$lib/components/renderers/code-renderer-block.svelte';
	import Section from '$lib/components/layout/elements/section.svelte';
	import SvelteMarkdown from 'svelte-markdown';

	/** @type {import('./$types').PageData} */
	export let data: any;
</script>

<Head title="Jack Reimers | {data.post.title}" description={data.post.description} />

<Hero
	title={data.post.title}
	subtitle={data.post.description}
	date={data.post.dateString}
	tags={data.post.tags}
/>
<Container>
	<Section>
		<div class="markdown box-content">
			<SvelteMarkdown source={data.post.intro} />
		</div>
	</Section>
	<Section>
		<div class="markdown box-content">
			<SvelteMarkdown source={data.post.content} renderers={{ code: BlockCodeRenderer }} />
		</div>
	</Section>
</Container>
