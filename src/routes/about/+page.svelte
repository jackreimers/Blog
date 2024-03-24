<script lang="ts">
	import PageHeader from '$lib/components/layout/page-header.svelte';
	import Icon from '$lib/components/text/icon.svelte';
</script>

<svelte:head>
	<title>Jack Reimers | About</title>
</svelte:head>

<PageHeader title="About" />
<div class="mb-8 sm:mb-10">
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua. Posuere urna nec tincidunt praesent semper feugiat nibh.
	</p>
</div>
<div
	class="grid grid-cols-2 grid-rows-3 gap-3 min-[450px]:grid-cols-3 min-[450px]:grid-rows-2 sm:gap-5"
>
	<div
		class="col-start-1 col-end-3 row-start-1 row-end-3 flex gap-3 rounded bg-white shadow sm:gap-4"
	>
		<img
			src="/images/headshot-transparent.png"
			alt="Professional headshot of Jack Reimers"
			class="mx-auto w-[250px] sm:w-[300px]"
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
