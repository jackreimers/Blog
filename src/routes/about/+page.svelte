<script lang="ts">
	import Head from '$lib/components/seo/head.svelte';
	import Preload from '$lib/components/loading/preload.svelte';
	import VerticalStack from '$lib/components/layout/stacks/stack-vertical.svelte';
	import HorizontalStack from '$lib/components/layout/stacks/stack-horizontal.svelte';
	import Hero from '$lib/components/layout/headers/hero.svelte';
	import Container from '$lib/components/layout/container.svelte';
	import Section from '$lib/components/layout/elements/section.svelte';
	import SocialLinks from '$lib/components/layout/elements/social-links.svelte';
</script>

<Head
	title="Jack Reimers | About"
	description="I'm a full stack Software Engineer who is passionate about web and video game development."
/>

<Hero
	title="About"
	subtitle="Dive deeper into my professional background and expertise, and find out how to stay connected or reach out."
>
	<SocialLinks />
</Hero>
<Container>
	<Section>
		<VerticalStack classes="gap-5 sm:flex-row sm:gap-7">
			<Preload src="/images/about/headshot.png">
				<div
					class="col-start-1 col-end-3 row-start-1 row-end-3 flex justify-center rounded-lg bg-gray-200"
				>
					<img
						src="/images/about/headshot.png"
						alt="Professional headshot of Jack Reimers"
						class="mx-auto h-[250px] w-[250px] sm:h-[300px] sm:w-[300px]"
					/>
				</div>
			</Preload>
			<div class="flex-1">
				<p class="mb-4">
					My name is Jack Reimers and I am currently living and working in Melbourne,
					Australia.
				</p>

				<p class="mb-4">
					I'm passionate about all things web and video game development and specialise in
					full stack .NET and JavaScript development with a focus on web-based
					technologies such as ASP.NET Core, Entity Framework Core, Blazor, and Angular.
				</p>

				<p class="mb-4">
					I also have extensive professional experience working with Artifical
					Intelligence and building custom AI solutions.
				</p>
			</div>
		</VerticalStack>
	</Section>
</Container>
