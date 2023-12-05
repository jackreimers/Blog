<script lang="ts">
	//TODO: Try to get the autoloader working
	import Button from '$lib/components/buttons/button.svelte';
	import Icon from '$lib/components/text/icon.svelte';
	import Prism from 'prismjs';
	import 'prismjs/themes/prism.css';
	import 'prismjs/components/prism-csharp';

	export let lang: string = '';
	export let text: string = '';

	function copy() {
		navigator.clipboard.writeText(text);
	}
</script>

<div class="relative inline-block rounded bg-gray-50 py-4 pl-6 pr-20">
	<Button
		onClick={copy}
		classes="absolute right-4 top-4 p-2 text-gray-400 hover:bg-gray-200 hover:text-gray-700"
	>
		<Icon icon="content_copy" weight={400} />
	</Button>
	<code class="{lang} whitespace-pre-wrap">
		{@html Prism.highlight(text, Prism.languages[lang], lang)}
	</code>
</div>
