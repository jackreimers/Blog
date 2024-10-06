<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import Head from '$lib/components/seo/head.svelte';
	import Hero from '$lib/components/hero/hero.svelte';
	import Container from '$lib/components/layout/container.svelte';
	import Section from '$lib/components/layout/section.svelte';
	import AnchorRenderer from '$lib/components/renderers/renderer-anchor.svelte';
	import ImageRenderer from '$lib/components/renderers/renderer-image.svelte';
	import CodeRenderer from '$lib/components/renderers/renderer-code.svelte';
	import BlockquoteRenderer from '$lib/components/renderers/renderer-blockquote.svelte';
	import PillButton from '$lib/components/buttons/button-pill.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;
</script>

<Head
	canonical="https://jackreimers.dev/projects/{data.post.slug}"
	description={data.post.description}
	title="Jack Reimers | {data.post.title}"
/>
<Hero subtitle="Published on {data.post.dateString}" title={data.post.title} />
<Container>
	<Section>
		<div class="flex gap-2 overflow-auto sm:justify-end">
			{#each data.post.tags as tag}
				<PillButton
					bgColor="bg-blue-100"
					bgHoverColor="bg-blue-200"
					color="text-blue-900"
					hoverColor="text-blue-950"
					href="/tags/{tag.slug}"
					text={tag.name}
				/>
			{/each}
		</div>
		<div class="markdown box-content">
			<h2 class="!mt-4" id="introduction">Introduction</h2>
			<SvelteMarkdown source={data.post.excerpt} />
		</div>
		<div class="markdown mt-12 box-content sm:mt-14 md:mt-16">
			<SvelteMarkdown
				renderers={{
					link: AnchorRenderer,
					image: ImageRenderer,
					code: CodeRenderer,
					blockquote: BlockquoteRenderer
				}}
				source={data.post.content}
			/>
		</div>
	</Section>
</Container>
