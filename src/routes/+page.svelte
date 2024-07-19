<script lang="ts">
	import Head from '$lib/components/seo/head.svelte';
	import Container from '$lib/components/layout/container.svelte';
	import Hero from '$lib/components/layout/headers/hero.svelte';
	import Section from '$lib/components/layout/elements/section.svelte';
	import HorizontalStack from '$lib/components/layout/stacks/stack-horizontal.svelte';
	import VerticalStack from '$lib/components/layout/stacks/stack-vertical.svelte';
	import Card from '$lib/components/layout/elements/card.svelte';
	import CardGrid from '$lib/components/layout/elements/card-grid.svelte';
	import SocialLinks from '$lib/components/layout/elements/social-links.svelte';
	import Button from '$lib/components/buttons/button.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;
</script>

<Head
	title="Jack Reimers"
	description="I'm a full stack Software Engineer who is passionate about web and video game development."
/>

<Hero
	title="Jack Reimers"
	subtitle="I'm a full-stack software engineer who is passionate about web and video game development and specialises in .NET and JavaScript development."
>
	<SocialLinks />
</Hero>
<Container>
	<Section>
		<VerticalStack>
			<HorizontalStack classes="justify-end">
				<Button href="/tags" text="Tags" icon="tune" />
				<Button href="/blog" text="More" icon="arrow_forward" />
			</HorizontalStack>
			<HorizontalStack>
				<CardGrid itemCount={data.posts.length}>
					{#each data.posts as post}
						<Card
							href="/blog/{post.slug}"
							imageHref={post.imageHref}
							title={post.title}
							subtitle={post.dateString}
							content={post.intro}
						>
							<Button
								size="Small"
								color="Orange"
								href="/blog/{post.slug}"
								text="Read More"
							/>
						</Card>
					{/each}
				</CardGrid>
			</HorizontalStack>
		</VerticalStack>
	</Section>
</Container>
