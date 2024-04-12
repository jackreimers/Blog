<script lang="ts">
	import { fade } from 'svelte/transition';
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

	async function handlePreload(src: string): Promise<void> {
		//Debugging purposes only
		//await new Promise((resolve) => setTimeout(resolve, 500));

		return new Promise<void>((resolve) => {
			const image = new Image();
			image.onload = () => resolve();
			image.src = src;
		});
	}

	async function handlePreloadMultiple(srcs: string[]): Promise<void> {
		await Promise.all(srcs.map((src) => handlePreload(src)));
	}
</script>

{#await preload()}
	<Skeleton {classes}>
		<slot />
	</Skeleton>
{:then _}
	<div in:fade class={classes}>
		<slot />
	</div>
{/await}
