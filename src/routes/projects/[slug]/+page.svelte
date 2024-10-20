<script lang="ts">
	import { onMount } from 'svelte';
	import { ArrowUpRightFromSquare } from 'lucide-svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import Head from '$lib/components/seo/head.svelte';
	import Container from '$lib/components/container/container.svelte';
	import Section from '$lib/components/section/section.svelte';
	import Hero from '$lib/components/hero/hero.svelte';
	import Preload from '$lib/components/preload/preload.svelte';
	import BasicButton from '$lib/components/buttons/basic/basic-button.svelte';
	import AnchorRenderer from '$lib/components/renderers/renderer-anchor.svelte';
	import ImageRenderer from '$lib/components/renderers/renderer-image.svelte';
	import CodeRenderer from '$lib/components/renderers/renderer-code.svelte';
	import BlockquoteRenderer from '$lib/components/renderers/renderer-blockquote.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;

	onMount(() => {
		sessionStorage.setItem('previousSlug', 'projects/' + data.post.slug);
	});
</script>

<Head
	canonical="https://jackreimers.dev/projects/{data.post.slug}"
	description={data.post.description}
	title={data.post.title}
/>
<Hero subtitle="Published on {data.post.dateString}" title={data.post.title}>
	<div class="flex flex-wrap items-center justify-center gap-3">
		{#each data.post.tags as tag}
			<BasicButton color="tertiary" href="/tags/{tag.slug}" text={tag.name} />
		{/each}
	</div>
</Hero>
<Container>
	<Section>
		<div class="rounded-xl bg-white p-6 shadow sm:p-10">
			{#if data.post.projectImage.src}
				<Preload class="mb-16 overflow-hidden rounded-lg" src={data.post.projectImage.src}>
					<img
						alt={data.post.projectImage.alt}
						class="mx-auto block aspect-[{data.post.projectImage.aspect}]"
						src={data.post.projectImage.src}
					/>
				</Preload>
			{/if}
			<div class="markdown box-content">
				<h2 class="!mt-0" id="introduction">Introduction</h2>
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
		</div>
	</Section>
</Container>
