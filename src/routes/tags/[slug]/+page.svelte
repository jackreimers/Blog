<script lang="ts">
	import Head from '$lib/components/seo/head.svelte';
	import Container from '$lib/components/page/container.svelte';
	import Section from '$lib/components/page/section.svelte';
	import Hero from '$lib/components/hero/hero.svelte';
	import VerticalStack from '$lib/components/stacks/stack-vertical.svelte';
	import HorizontalStack from '$lib/components/stacks/stack-horizontal.svelte';
	import Card from '$lib/components/cards/card.svelte';
	import CardGrid from '$lib/components/grids/grid-card.svelte';
	import Button from '$lib/components/buttons/button.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;
</script>

<Head
	description="Read my blog where I talk about web and game development."
	title="Jack Reimers | {data.tag.name}"
/>
<Hero
	subtitle="Read my blog where I talk about web and game development, plus any other topics or technologies I find interesting."
	title="Blog"
>
	<HorizontalStack>
		<Button color="BlueSolid" href="/" icon="rss_feed" />
		<Button color="Red" href="/blog" icon="close" text={data.tag.name} />
	</HorizontalStack>
</Hero>
<Container>
	<Section>
		<VerticalStack>
			<HorizontalStack classes="justify-end">
				<Button href="/tags" icon="tune" text="Tags" />
			</HorizontalStack>
			<HorizontalStack>
				<CardGrid horizontal={true} itemCount={data.posts.length}>
					{#each data.posts as post}
						<Card
							href="/blog/{post.slug}"
							imageHref={post.imageHref}
							title={post.title}
							subtitle={post.dateString}
							content={post.intro}
							horizontal={true}
						>
							<HorizontalStack classes="!gap-2 overflow-auto">
								{#each post.tags as tag}
									<Button
										size="Small"
										color="Orange"
										href="/tags/{tag.slug}"
										text={tag.name}
									/>
								{/each}
							</HorizontalStack>
						</Card>
					{/each}
				</CardGrid>
			</HorizontalStack>
		</VerticalStack>
	</Section>
</Container>
