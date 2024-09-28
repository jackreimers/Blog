<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import Head from '$lib/components/seo/head.svelte';
	import Hero from '$lib/components/hero/hero.svelte';
	import Container from '$lib/components/layout/container.svelte';
	import Section from '$lib/components/layout/section.svelte';
	import Preload from '$lib/components/loading/preload.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;
</script>

<Head
	canonical="https://jackreimers.dev/about"
	description="Learn more about who Jack Reimers is and what he does."
	title="Jack Reimers | About"
/>
<Hero subtitle="Learn more about who I am and what I do." title="About" />
<Container>
	<Section>
		<div class="flex flex-col gap-7 md:flex-row md:gap-7">
			<Preload
				classes="overflow-hidden rounded-lg border border-gray-300"
				src="/images/about/headshot.png"
			>
				<div
					class="col-start-1 col-end-3 row-start-1 row-end-3 flex justify-center bg-gray-100"
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
		</div>
	</Section>
</Container>
