<script lang="ts">
	import { ArrowUpRightFromSquare } from 'lucide-svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import Head from '$lib/components/seo/head.svelte';
	import Container from '$lib/components/layout/container.svelte';
	import Section from '$lib/components/layout/section.svelte';
	import Hero from '$lib/components/hero/hero.svelte';
	import AnchorRenderer from '$lib/components/renderers/renderer-anchor.svelte';
	import ImageRenderer from '$lib/components/renderers/renderer-image.svelte';
	import CodeRenderer from '$lib/components/renderers/renderer-code.svelte';
	import BlockquoteRenderer from '$lib/components/renderers/renderer-blockquote.svelte';
	import Button from '$lib/components/buttons/button.svelte';
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
	<Section classes="sm:mb-16">
		<div class="flex gap-2 overflow-auto sm:justify-end">
			{#each data.post.tags as tag}
				<PillButton color="lightBlue" href="/tags/{tag.slug}" text={tag.name} />
			{/each}
		</div>
		<div class="markdown box-content">
			<h2 class="!mt-6" id="introduction">Introduction</h2>
			<SvelteMarkdown source={data.post.excerpt} />
		</div>
		<Button
			classes="mt-6"
			color="darkBlue"
			href={data.post.projectHref}
			icon={ArrowUpRightFromSquare}
			target="_blank"
			text={data.post.projectText}
		/>
	</Section>
	<Section classes="sm:mb-16">
		<div class="markdown mt-16 box-content">
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
