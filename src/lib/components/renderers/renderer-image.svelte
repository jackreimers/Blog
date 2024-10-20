<script lang="ts">
	import Preload from '$lib/components/preload/preload.svelte';
	import { onMount } from 'svelte';

	export let href = '';
	export let title: string | null = null;
	export let text = '';

	let aspect: string;

	onMount(() => {
		const split = href.split('_');
		const dimensions = split[split.length - 1].split('.');
		const splitDimensions = dimensions[0].split('x');

		aspect = `${splitDimensions[0]}/${splitDimensions[1]}`;
	});
</script>

<Preload class="mx-auto my-10 block overflow-hidden rounded aspect-[{aspect}]" src={href}>
	<img alt={text} src={href} {title} />
</Preload>
