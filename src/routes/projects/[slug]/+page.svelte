<script lang="ts">
	import { ArrowUpRightFromSquare } from 'lucide-svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import Head from '$lib/components/seo/head.svelte';
	import Container from '$lib/components/container/container.svelte';
	import Section from '$lib/components/section/section.svelte';
	import Hero from '$lib/components/hero/hero.svelte';
	import BasicButton from '$lib/components/buttons/basic/basic-button.svelte';
	import PillButton from '$lib/components/buttons/pill/pill-button.svelte';
	import AnchorRenderer from '$lib/components/renderers/renderer-anchor.svelte';
	import ImageRenderer from '$lib/components/renderers/renderer-image.svelte';
	import CodeRenderer from '$lib/components/renderers/renderer-code.svelte';
	import BlockquoteRenderer from '$lib/components/renderers/renderer-blockquote.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;
</script>

<Head
	canonical="https://jackreimers.dev/projects/{data.post.slug}"
	description={data.post.description}
	title={data.post.title}
/>
<Hero subtitle="Published on {data.post.dateString}" title={data.post.title} />
<Container>
	<Section class="!mb-16">
		<div class="flex gap-2 overflow-auto sm:justify-end">
			{#each data.post.tags as tag}
				<PillButton color="primary" href="/tags/{tag.slug}" text={tag.name} />
			{/each}
		</div>
		<div class="markdown box-content">
			<h2 class="!mt-6" id="introduction">Introduction</h2>
			<SvelteMarkdown source={data.post.excerpt} />
		</div>
		<BasicButton
			class="mt-6"
			color="primary"
			href={data.post.projectHref}
			icon={ArrowUpRightFromSquare}
			target="_blank"
			text={data.post.projectText}
		/>
	</Section>
	<Section>
		<div class="markdown box-content">
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
