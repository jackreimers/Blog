<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import Head from '$lib/components/seo/head.svelte';
	import Container from '$lib/components/page/container.svelte';
	import Section from '$lib/components/page/section.svelte';
	import Hero from '$lib/components/hero/hero.svelte';
	import VerticalStack from '$lib/components/stacks/stack-vertical.svelte';
	import HoriontalStack from '$lib/components/stacks/stack-horizontal.svelte';
	import AnchorRenderer from '$lib/components/renderers/renderer-anchor.svelte';
	import ImageRenderer from '$lib/components/renderers/renderer-image.svelte';
	import CodeRenderer from '$lib/components/renderers/renderer-code.svelte';
	import BlockquoteRenderer from '$lib/components/renderers/renderer-blockquote.svelte';
	import Button from '$lib/components/buttons/button.svelte';
	import Author from '$lib/components/contact/author.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;
</script>

<Head
	canonical="https://jackreimers.dev/blog/{data.post.slug}"
	description={data.post.description}
	title="Jack Reimers | {data.post.title}"
/>
<Hero smallerTitle={true} title={data.post.title}>
	<p class="text-sm text-gray-500 sm:text-base" slot="above">
		Published on {data.post.dateString}
	</p>
	<Author slot="below" />
</Hero>
<Container>
	<Section>
		<VerticalStack>
			<HoriontalStack classes="overflow-auto sm:justify-end">
				{#each data.post.tags as tag}
					<Button color="blue" href="/tags/{tag.slug}" text={tag.name} />
				{/each}
			</HoriontalStack>
			<div class="markdown box-content">
				<h2 class="!mt-4" id="introduction">Introduction</h2>
				<SvelteMarkdown source={data.post.excerpt} />
			</div>
		</VerticalStack>
	</Section>
	<Section>
		<div class="markdown box-content">
			<!-- TODO: Create markdown component to avoid passing in renderers repeatedly -->
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
