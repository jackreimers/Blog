<script lang="ts">
	import Head from '$lib/components/seo/head.svelte';
	import Container from '$lib/components/page/container.svelte';
	import Section from '$lib/components/page/section.svelte';
	import Hero from '$lib/components/hero/hero.svelte';
	import SocialLinks from '$lib/components/contact/links.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;
</script>

<Head canonical="https://jackreimers.dev/projects" description="" title="Jack Reimers | Projects" />
<Hero
	subtitle="Check out some of my past personal and professional projects and learn more about how I built and deployed them."
	title="Projects"
>
	<SocialLinks slot="below" />
</Hero>
<Container>
	<Section>
		<!--
		<VerticalStack>
			<HorizontalStack classes="justify-end">
				<Button href="/tags" text="Tags">
					<Tags />
				</Button>
			</HorizontalStack>
			<CardGrid horizontal={true} itemCount={data.posts.length}>
				{#each data.posts as post}
					<Card
						href="/projects/{post.slug}"
						imageHref={post.imageHref}
						title={post.title}
						subtitle={post.dateString}
						content={post.excerpt}
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
		</VerticalStack>
		-->
	</Section>
</Container>
