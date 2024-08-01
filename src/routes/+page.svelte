<script lang="ts">
	import { ArrowRight, Tags } from 'lucide-svelte';
	import Head from '$lib/components/seo/head.svelte';
	import Container from '$lib/components/page/container.svelte';
	import Section from '$lib/components/page/section.svelte';
	import Hero from '$lib/components/hero/hero.svelte';
	import VerticalStack from '$lib/components/stacks/stack-vertical.svelte';
	import HorizontalStack from '$lib/components/stacks/stack-horizontal.svelte';
	import Card from '$lib/components/cards/card.svelte';
	import CardGrid from '$lib/components/grids/grid-card.svelte';
	import SocialLinks from '$lib/components/contact/social.svelte';
	import Button from '$lib/components/buttons/button.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;
</script>

<Head
	description="I'm a full stack Software Engineer who is passionate about web and video game development."
	title="Jack Reimers"
/>
<Hero
	subtitle="I'm a passionate full-stack engineer specialising in .NET and JavaScript, with an interest in web and game development."
	title="Jack Reimers"
>
	<SocialLinks />
</Hero>
<Container>
	<Section>
		<VerticalStack>
			<HorizontalStack classes="justify-end">
				<Button href="/tags" text="Tags">
					<Tags />
				</Button>
				<Button href="/blog" text="More">
					<ArrowRight />
				</Button>
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
								size="small"
								color="orange"
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
