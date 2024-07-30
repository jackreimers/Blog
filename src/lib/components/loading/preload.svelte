<script lang="ts">
	import { blur } from 'svelte/transition';
	import Skeleton from '$lib/components/loading/skeleton.svelte';

	export let src: string | string[];
	export let classes: string = '';

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

<span class="bg-gray-300 {classes}">
	{#await preload()}
		<Skeleton >
			<slot />
		</Skeleton>
	{:then _}
		<span in:blur>
			<slot />
		</span>
	{/await}
</span>
