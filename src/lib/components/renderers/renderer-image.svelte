<script lang="ts">
	import Preload from '$lib/components/preload/preload.svelte';

	export let href = '';
	export let title: string | null = null;
	export let text = '';
</script>

<Preload class="mx-auto my-10 block overflow-hidden rounded" src={href}>
	<!-- TODO: Setting height and width here is a temporary workaround and will break if different resolution images used in markdown -->
	<img alt={text} height="1600" src={href} {title} width="2560" />
</Preload>
