<script lang="ts">
	import { blur } from 'svelte/transition';
	import Skeleton from '$lib/components/skeleton/skeleton.svelte';

	export let src: string | string[];
	export let showSkeleton: boolean = true;

	async function preload() {
		if (src instanceof Array) {
			await handlePreloadMultiple(src);
		} else {
			await handlePreload(src);
		}
	}

	function handlePreload(src: string) {
		return new Promise(function (resolve) {
			let image = new Image();
			image.onload = resolve;
			image.src = src;
		});
	}

	async function handlePreloadMultiple(srcs: string[]): Promise<void> {
		await Promise.all(srcs.map((src) => handlePreload(src)));
	}
</script>

<span class="block {$$restProps.class ?? ''}">
	{#await preload()}
		{#if showSkeleton}
			<Skeleton>
				<slot />
			</Skeleton>
		{:else}
			<slot />
		{/if}
	{:then _}
		<span class="block" in:blur>
			<slot />
		</span>
	{/await}
</span>
