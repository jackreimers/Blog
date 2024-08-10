<script lang="ts">
	import Preload from '$lib/components/loading/preload.svelte';

	export let href = '';
	export let title: string | null = null;
	export let text = '';
</script>

<Preload classes="mx-auto my-4 block overflow-hidden rounded-lg sm:my-6" src={href}>
	<div>
		<!-- TODO: Setting height and width here is a temporary workaround and will break if different resolution images used in markdown -->
		<img alt={text} height="1600" src={href} {title} width="2560" />
	</div>
</Preload>
