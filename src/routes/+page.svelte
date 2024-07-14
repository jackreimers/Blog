<script lang="ts">
	import Head from '$lib/components/seo/head.svelte';
	import Container from '$lib/components/layout/container.svelte';
	import Hero from '$lib/components/layout/headers/hero.svelte';
	import Section from '$lib/components/layout/elements/section.svelte';
	import HorizontalStack from '$lib/components/layout/stacks/stack-horizontal.svelte';
	import VerticalStack from '$lib/components/layout/stacks/stack-vertical.svelte';
	import Card from '$lib/components/layout/elements/card.svelte';
	import CardEmpty from '$lib/components/layout/elements/card-empty.svelte';
	import CardGrid from '$lib/components/layout/elements/card-grid.svelte';
	import Icon from '$lib/components/text/icon.svelte';
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
				<CardGrid>
					<!-- TODO: Turn empty card into a wrapper component -->
					{#each data.posts as post}
						<Card
							href="/blog/{post.slug}"
							imageHref={post.imageHref}
							title={post.title}
							subtitle={post.dateString}
							content={post.intro}
						/>
					{/each}
					<CardEmpty />
					<CardEmpty />
				</CardGrid>
			</HorizontalStack>
		</VerticalStack>
	</Section>
	<!--
	<Section>
		<VerticalStack>
			<Subheader title="Projects" subtitle="Latest">
				<a
					href="/blog"
					class="rounded bg-blue-100 px-3 py-2 text-blue-800 transition-colors duration-300 hover:bg-blue-200 hover:text-blue-900 sm:px-5 sm:py-2.5"
				>
					<span class="font-medium">More</span>
					<Icon icon="arrow_right_alt" weight={400} classes="text-2xl" />
				</a>
			</Subheader>
			<HorizontalStack>
				<CardGrid>
					<Card
						title="Myrtle Creative"
						subtitle="3 June 2024"
						content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
					/>
					<CardEmpty />
					<CardEmpty />
				</CardGrid>
			</HorizontalStack>
		</VerticalStack>
	</Section>
	<Section>
		<VerticalStack>
			<Subheader icon="work" title="Freelance Development" subtitle="Services">
				<a
					href="/services"
					class="rounded bg-blue-100 px-3 py-2 text-blue-800 transition-colors duration-300 hover:bg-blue-200 hover:text-blue-900 sm:px-5 sm:py-2.5"
				>
					<span class="font-medium">More</span>
					<Icon icon="arrow_right_alt" weight={400} classes="text-2xl" />
				</a>
			</Subheader>
			<HorizontalStack>
				<div class="flex-1 rounded-lg bg-white p-4">
					<VerticalStack>
						<div class="flex-1">
							<p>
								If you need a website or application built I can develop an
								affordable solution to suit your needs.
							</p>
						</div>
					</VerticalStack>
				</div>
				<div class="rounded-lg bg-white p-4">
					<Contact />
				</div>
			</HorizontalStack>
		</VerticalStack>
	</Section>
	-->
</Container>
