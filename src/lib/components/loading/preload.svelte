<script lang="ts">
	import { fade } from 'svelte/transition';
	import Skeleton from '$lib/components/loading/skeleton.svelte';

	export let src: string;
	export let classes: string = '';

	function preload(src: string): Promise<void> {
		return new Promise<void>((resolve) => {
			const image = new Image();
			image.onload = () => resolve();
			image.src = src;
		});
	}
</script>

{#await preload(src)}
	<Skeleton {classes}>
		<slot />
	</Skeleton>
{:then _}
	<div in:fade class={classes}>
		<slot />
	</div>
{/await}
