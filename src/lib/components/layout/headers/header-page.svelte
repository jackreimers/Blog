<script lang="ts">
	import { fade } from 'svelte/transition';
	import Skeleton from '$lib/components/loading/skeleton.svelte';
	import Icon from '$lib/components/text/icon.svelte';

	export let title: string = 'Page Title';
	export let infoIcon: string = 'question_mark';
	export let infoText: Promise<string> | string = 'Empty';
</script>

<div class="mb-8 flex flex-col gap-2.5 border-b-2 border-gray-200 pb-8 sm:mb-9 sm:gap-3.5 sm:pb-9">
	<h1 class="text-4xl font-bold leading-none sm:text-5xl md:text-6xl">
		{title}
	</h1>
	<div class="flex items-center font-medium leading-none">
		<Icon
			icon={infoIcon}
			weight={400}
			classes="mr-2 rounded bg-blue-800 p-1 text-white sm:mr-2.5 sm:p-1.5"
		/>
		{#await infoText}
			<Skeleton>
				<p class="font-semibold sm:text-lg">Empty</p>
			</Skeleton>
		{:then text}
			<p in:fade class="font-semibold sm:text-lg">{text}</p>
		{/await}
	</div>
	<slot />
</div>
