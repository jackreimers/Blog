<script lang="ts">
	import Preload from '$lib/components/preload/preload.svelte';

	export let href = '';
	export let title: string | null = null;
	export let text = '';

	let width: number;
	let height: number;

	const split = href.split('-');
	const dimensions = split[split.length - 1].split('.');
	const splitDimensions = dimensions[0].split('x');

	width = parseInt(splitDimensions[0]);
	height = parseInt(splitDimensions[1]);
</script>

<Preload class="mx-auto my-10 block overflow-hidden rounded" src={href}>
	<img alt={text} {height} src={href} {title} {width} />
</Preload>
