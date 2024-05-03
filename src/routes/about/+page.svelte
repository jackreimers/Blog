<script lang="ts">
	import { page } from '$app/stores';
	import SvelteMarkdown from 'svelte-markdown';
	import Preload from '$lib/components/loading/preload.svelte';
	import PageHeader from '$lib/components/layout/page-header.svelte';
	import PageTitle from '$lib/components/layout/page-header-title.svelte';
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

<PageHeader>
	<PageTitle slot="title">About</PageTitle>
	<div slot="info" class="flex items-center font-medium leading-none">
		<Icon
			icon="location_on"
			weight={400}
			classes="mr-2 rounded bg-gradient-to-br from-blue-600 to-blue-800 p-1 text-white shadow sm:mr-2.5 sm:p-1.5"
		/>
		<p class="font-semibold">Melbourne</p>
	</div>
	<div slot="actions" class="flex gap-2.5 sm:gap-3.5">
		<Button on:click={() => {}}>
			<span slot="text">Resume</span>
			<Icon slot="icon" icon="download" />
		</Button>
	</div>
</PageHeader>
<div class="flex flex-col-reverse gap-4 sm:gap-6 md:flex-row md:gap-7">
	<Preload src="/images/about/headshot.png">
		<div
			class="col-start-1 col-end-3 row-start-1 row-end-3 flex justify-center rounded bg-white shadow"
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
