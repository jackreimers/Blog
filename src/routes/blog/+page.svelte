<script lang="ts">
	import Head from '$lib/components/seo/head.svelte';
	import HorizontalStack from '$lib/components/layout/stacks/stack-horizontal.svelte';
	import VerticalStack from '$lib/components/layout/stacks/stack-vertical.svelte';
	import Modal from '$lib/components/interactivity/modal.svelte';
	import CardHorizontal from '$lib/components/layout/elements/card-horizontal.svelte';
	import CardGrid from '$lib/components/layout/elements/card-grid.svelte';
	import Button from '$lib/components/buttons/button.svelte';
	import Container from '$lib/components/layout/container.svelte';
	import Hero from '$lib/components/layout/headers/hero.svelte';
	import Section from '$lib/components/layout/elements/section.svelte';
	import Icon from '$lib/components/text/icon.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;
</script>

<Head
	title="Jack Reimers | Blog"
	description="I'm a full stack Software Engineer who is passionate about web and video game development."
/>
<Hero
	title="Blog"
	subtitle="Read my blog where I talk about web and game development, plus any other topics or technologies I find interesting."
>
	<HorizontalStack>
		<Button href="/" color="BlueSolid" icon="rss_feed" iconWeight={500} />
	</HorizontalStack>
</Hero>
<Container>
	<!-- TODO: Should this be it's own component so it can be reused for tags? -->
	<Section>
		<VerticalStack>
			<HorizontalStack classes="justify-end">
				<Button href="/tags" text="Tags" icon="tune" />
			</HorizontalStack>
			<HorizontalStack>
				<!-- TODO: May need it's own grid component -->
				<CardGrid classes="!grid-cols-1">
					{#each data.posts as post}
						<CardHorizontal
							href="/blog/{post.slug}"
							imageHref={post.imageHref}
							title={post.title}
							subtitle={post.dateString}
							tags={post.tags}
							content={post.intro}
						>
							<VerticalStack>
								<div>
									<p class="text-xl font-bold md:text-2xl">{post.title}</p>
									<p class="text-gray-500 md:text-lg">
										{post.dateString}
									</p>
								</div>
								<p>{post.intro}</p>
							</VerticalStack>
						</CardHorizontal>
					{/each}
				</CardGrid>
			</HorizontalStack>
		</VerticalStack>
	</Section>
</Container>
