<script lang="ts">
	import { Direction } from '$lib/common/enums';
	import Stack from '$lib/components/layout/stack.svelte';
	import PageHeader from '$lib/components/layout/header-page.svelte';
	import PageTitle from '$lib/components/layout/header-title.svelte';
	import Preload from '$lib/components/loading/preload.svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import Icon from '$lib/components/text/icon.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;
</script>

<svelte:head>
	<title>Jack Reimers | About</title>
</svelte:head>

<PageHeader>
	<PageTitle slot="title">About</PageTitle>
</PageHeader>
<Stack direction={Direction.Vertical} classes="gap-3 sm:gap-5">
	<div class="markdown">
		<SvelteMarkdown source={data.about} />
	</div>
	<Preload
		src={['/images/headshot-transparent.png', '/images/melbourne.jpg', '/images/brisbane.jpg']}
	>
		<div
			class="grid grid-cols-2 grid-rows-3 gap-2.5 min-[450px]:grid-cols-3 min-[450px]:grid-rows-2 sm:gap-3.5"
		>
			<div
				class="col-start-1 col-end-3 row-start-1 row-end-3 flex justify-center rounded bg-white shadow"
			>
				<img
					src="/images/headshot-transparent.png"
					alt="Professional headshot of Jack Reimers"
					class="mx-auto h-[250px] sm:h-[300px]"
				/>
			</div>
			<div
				class="h-full overflow-hidden rounded bg-gray-100 bg-[url('/images/melbourne.jpg')] bg-cover text-white shadow"
			>
				<div
					class="flex h-full flex-col items-center justify-center gap-1.5 p-4 backdrop-blur-[2px] backdrop-brightness-75 backdrop-filter"
				>
					<Icon icon="location_on" weight={700} classes="text-4xl sm:text-6xl" />
					<p class="font-semibold">Melbourne</p>
				</div>
			</div>
			<div
				class="block h-full overflow-hidden rounded bg-gray-100 bg-[url('/images/brisbane.jpg')] bg-cover text-white shadow"
			>
				<div
					class="flex h-full flex-col items-center justify-center gap-1.5 p-4 backdrop-blur-[2px] backdrop-brightness-75 backdrop-filter"
				>
					<Icon icon="work" weight={700} classes="text-4xl sm:text-6xl" />
					<p class="font-semibold">SSW</p>
				</div>
			</div>
		</div>
	</Preload>
</Stack>
