<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import Head from '$lib/components/seo/head.svelte';
	import Container from '$lib/components/page/container.svelte';
	import Section from '$lib/components/page/section.svelte';
	import Preload from '$lib/components/loading/preload.svelte';
	import VerticalStack from '$lib/components/stacks/stack-vertical.svelte';
	import Hero from '$lib/components/hero/hero.svelte';
	import SocialLinks from '$lib/components/contact/social.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;
</script>

<Head
	description="I'm a full stack Software Engineer who is passionate about web and video game development."
	title="Jack Reimers | About"
/>
<Hero
	subtitle="Dive deeper into my professional background and expertise, and find out how to stay connected or reach out."
	title="About"
>
	<SocialLinks />
</Hero>
<Container>
	<Section>
		<VerticalStack classes="gap-5 sm:gap-7 md:flex-row">
			<Preload classes="overflow-hidden rounded-lg" src="/images/about/headshot.png">
				<div
					class="col-start-1 col-end-3 row-start-1 row-end-3 flex justify-center bg-gray-200"
				>
					<img
						alt="Professional headshot of Jack Reimers"
						class="mx-auto h-[250px] w-[250px] sm:h-[300px] sm:w-[300px]"
						src="/images/about/headshot.png"
					/>
				</div>
			</Preload>
			<div class="markdown flex-1">
				<SvelteMarkdown source={data.about} />
			</div>
		</VerticalStack>
	</Section>
</Container>
