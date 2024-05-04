<script lang="ts">
	import { page } from '$app/stores';
	import SvelteMarkdown from 'svelte-markdown';
	import Preload from '$lib/components/loading/preload.svelte';
	import Header from '$lib/components/layout/headers/header-page.svelte';
	import HorizontalStack from '$lib/components/layout/stacks/stack-horizontal.svelte';
	import Button from '$lib/components/buttons/button-primary.svelte';
	import Icon from '$lib/components/text/icon.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;

	const title = 'Jack Reimers | About';
	const description =
		"I'm a full stack Software Engineer who is passionate about web and video game development.";
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={'https://jackreimers.dev' + $page.url.pathname} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
</svelte:head>

<Header title="About" infoIcon="location_on" infoText="Melbourne">
	<HorizontalStack>
		<Button on:click={() => {}}>
			<span slot="text">Resume</span>
			<Icon slot="icon" icon="download" />
		</Button>
	</HorizontalStack>
</Header>
<div class="flex flex-col-reverse gap-8 sm:gap-9 md:flex-row">
	<Preload src="/images/about/headshot.png">
		<div
			class="col-start-1 col-end-3 row-start-1 row-end-3 flex justify-center rounded bg-gray-200"
		>
			<img
				src="/images/about/headshot.png"
				alt="Professional headshot of Jack Reimers"
				class="mx-auto h-[250px] w-[250px] sm:h-[300px] sm:w-[300px]"
			/>
		</div>
	</Preload>
	<div class="flex-1">
		<div class="markdown flex-1">
			<SvelteMarkdown source={data.about} />
		</div>
	</div>
</div>
