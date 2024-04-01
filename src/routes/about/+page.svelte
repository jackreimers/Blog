<script lang="ts">
	import Stack from '$lib/components/layout/stack.svelte';
	import PageHeader from '$lib/components/layout/header-page.svelte';
	import PageTitle from '$lib/components/layout/header-title.svelte';
	import Icon from '$lib/components/text/icon.svelte';
	import { Direction, Size } from '$lib/common/enums';
</script>

<svelte:head>
	<title>Jack Reimers | About</title>
</svelte:head>

<PageHeader>
	<PageTitle slot="title">About</PageTitle>
</PageHeader>
<Stack direction={Direction.Vertical} size={Size.XL}>
	<Stack direction={Direction.Vertical} size={Size.M}>
		<p>
			My name is <span class="font-semibold">Jack Reimers</span> and I am currently living and
			working in Brisbane, Australia.
		</p>
		<p>
			I'm passionate about all things web and video game development and specialise in full
			stack .NET development with a focus on web-based technologies such as
			<span class="font-semibold">ASP.NET Core</span>,
			<span class="font-semibold">EF Core</span> and
			<span class="font-semibold">Blazor</span>.
		</p>
		<p>
			I also have extensive professional experience working with AI technologies and building
			custom AI solutions.
		</p>
	</Stack>
	<div
		class="grid grid-cols-2 grid-rows-3 gap-4 min-[450px]:grid-cols-3 min-[450px]:grid-rows-2 sm:gap-6"
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
			class="overflow-hidden rounded bg-gray-100 bg-[url('/images/brisbane-river.jpg')] bg-cover text-white shadow"
		>
			<div
				class="flex h-full flex-col items-center justify-center gap-1.5 backdrop-blur-[2px] backdrop-brightness-75 backdrop-filter"
			>
				<Icon icon="location_on" weight={700} classes="text-4xl sm:text-6xl" />
				<p class="font-semibold">Brisbane</p>
			</div>
		</div>
		<div
			class="overflow-hidden rounded bg-gray-100 bg-[url('/images/brisbane.jpg')] bg-cover text-white shadow"
		>
			<div
				class="flex h-full flex-col items-center justify-center gap-1.5 p-4 backdrop-blur-[2px] backdrop-brightness-75 backdrop-filter"
			>
				<Icon icon="work" weight={700} classes="text-4xl sm:text-6xl" />
				<p class="font-semibold">SSW</p>
			</div>
		</div>
	</div>
</Stack>
