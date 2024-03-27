<script lang="ts">
	import { fly } from 'svelte/transition';
	import Icon from '$lib/components/text/icon.svelte';

	export let title: string | Promise<string> = 'Page Title';

	export let infoIcon: string | null = null;
	export let infoText: string | Promise<string> | null = null;
</script>

<div class="mb-8 border-b-2 border-gray-200 pb-4 sm:mb-12 sm:pb-8">
	<div class="flex flex-col gap-2.5 sm:gap-3.5">
		{#await title}
			<h1 class="skeleton text-4xl font-bold sm:text-5xl lg:text-6xl">Loading</h1>
		{:then title}
			<h1 class="text-4xl font-bold sm:text-5xl lg:text-6xl">{title}</h1>
		{/await}
		{#if infoIcon && infoText}
			<div
				class="flex items-center gap-2 text-sm font-semibold leading-none sm:gap-2.5 sm:text-base"
			>
				<Icon
					icon={infoIcon}
					weight={400}
					classes="rounded bg-gradient-to-br from-blue-600 to-blue-800 p-1 text-white shadow sm:p-1.5"
				/>
				{#await infoText}
					<div class="skeleton">
						<p class="text-transparent">0 Posts</p>
					</div>
				{:then infoText}
					<p in:fly>{infoText}</p>
				{/await}
			</div>
		{/if}
		<slot />
	</div>
</div>
