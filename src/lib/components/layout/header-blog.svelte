<script lang="ts">
	import Icon from '$lib/components/text/icon.svelte';
	import Detail from '$lib/components/text/detail.svelte';
	import Button from '$lib/components/buttons/button.svelte';
</script>

<h1 class="mb-4 text-6xl font-semibold">Article Title</h1>

<Detail>
	<Icon slot="icon" icon="calendar_month" />
	<p slot="text">Text</p>
</Detail>

<Button classes="bg-gray-100 px-3.5 py-2" onClick={() => {}}>
	<p>.NET</p>
</Button>
