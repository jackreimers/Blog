<script lang="ts">
	import { Tags, X } from 'lucide-svelte';
	import Head from '$lib/components/seo/head.svelte';
	import Container from '$lib/components/page/container.svelte';
	import Section from '$lib/components/page/section.svelte';
	import Hero from '$lib/components/hero/hero.svelte';
	import VerticalStack from '$lib/components/stacks/stack-vertical.svelte';
	import HorizontalStack from '$lib/components/stacks/stack-horizontal.svelte';
	import Card from '$lib/components/cards/card.svelte';
	import CardGrid from '$lib/components/grids/grid-card.svelte';
	import SocialLinks from '$lib/components/contact/links.svelte';
	import Button from '$lib/components/buttons/button.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;
</script>

<Head
	canonical="https://jackreimers.dev/tags"
	description="Discover posts that match your interests by filtering through post tags, or explore the range of topics I cover."
	title="Jack Reimers | {data.tagFilter?.name ?? 'Tags'}"
/>
<Hero
	subtitle="Discover posts that match your interests by filtering through post tags, or explore the range of topics I talk about."
	title="Tags"
>
	<HorizontalStack slot="below">
		<SocialLinks />
		<Button color="red" href="/tags" text={data.tagFilter?.name ?? 'Clear'}>
			<X />
		</Button>
	</HorizontalStack>
</Hero>
<Container>
	<Section>
		<VerticalStack>
			<HorizontalStack classes="justify-end">
				<Button href="/tags" text="Tags">
					<Tags />
				</Button>
			</HorizontalStack>
			{#if data.posts.length === 0}
				<p class="">No posts on this topic yet.</p>
			{:else}
				<HorizontalStack>
					<CardGrid horizontal={true} itemCount={data.posts.length}>
						{#each data.posts as post}
							<Card
								href="/{post.type}/{post.slug}"
								imageHref={post.imageHref}
								title={post.title}
								subtitle={post.dateString}
								content={post.excerpt}
								postType={post.type}
								showPostType={true}
								horizontal={true}
							>
								<HorizontalStack classes="!gap-2 overflow-auto">
									{#each post.tags as tag}
										<Button
											size="small"
											color="orange"
											href="/tags/{tag.slug}"
											text={tag.name}
										/>
									{/each}
								</HorizontalStack>
							</Card>
						{/each}
					</CardGrid>
				</HorizontalStack>
			{/if}
		</VerticalStack>
	</Section>
</Container>
