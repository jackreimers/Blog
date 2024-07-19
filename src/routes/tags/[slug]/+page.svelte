<script lang="ts">
	import CardGrid from '$lib/components/layout/elements/card-grid.svelte';
	import VerticalStack from '$lib/components/layout/stacks/stack-vertical.svelte';
	import HorizontalStack from '$lib/components/layout/stacks/stack-horizontal.svelte';
	import Section from '$lib/components/layout/elements/section.svelte';
	import Container from '$lib/components/layout/container.svelte';
	import Hero from '$lib/components/layout/headers/hero.svelte';
	import Button from '$lib/components/buttons/button.svelte';
	import Icon from '$lib/components/text/icon.svelte';
	import Card from '$lib/components/layout/elements/card.svelte';
	import Head from '$lib/components/seo/head.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;
</script>

<Head
	title="Jack Reimers | {data.tag.name}"
	description="Read my blog where I talk about web and game development."
/>
<Hero
	title="Blog"
	subtitle="Read my blog where I talk about web and game development, plus any other topics or technologies I find interesting."
>
	<HorizontalStack>
		<Button href="/" color="BlueSolid" icon="rss_feed" />
		<Button color="Red" href="/blog" text={data.tag.name} icon="close" />
	</HorizontalStack>
</Hero>
<Container>
	<Section>
		<VerticalStack>
			<HorizontalStack classes="justify-end">
				<Button href="/tags" text="Tags" icon="tune" />
			</HorizontalStack>
			<HorizontalStack>
				<CardGrid itemCount={data.posts.length} horizontal={true}>
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
