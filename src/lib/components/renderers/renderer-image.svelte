<script lang="ts">
	import Preload from '$lib/components/loading/preload.svelte';

	export let href = '';
	export let title: string | null = null;
	export let text = '';
</script>

<Preload classes="mx-auto my-4 block overflow-hidden rounded-lg sm:my-6" src={href}>
	<div>
		<img alt={text} src={href} {title} />
	</div>
</Preload>
