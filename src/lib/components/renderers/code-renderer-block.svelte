<script lang="ts">
	import 'prismjs/themes/prism.css';
	import 'prismjs/components/prism-csharp';

	import Prism from 'prismjs';
	import Button from '$lib/components/buttons/button.svelte';

	export let lang: string = '';
	export let text: string = '';

	function copy() {
		navigator.clipboard.writeText(text);
	}

	function getLanguageFriendlyName(lang: string): string {
		switch (lang) {
			case 'csharp':
				return 'C#';
			default:
				return lang;
		}
	}
</script>

<div
	class="relative mb-5 inline-block w-full overflow-hidden overflow-x-auto rounded bg-gray-50 px-2.5 py-2 text-sm sm:px-5 sm:py-3.5 sm:text-base"
>
	<code class="{lang} whitespace-pre">
		{@html Prism.highlight(text, Prism.languages[lang], lang)}
	</code>
</div>

<!--
<Button
		onClick={copy}
		classes="absolute right-4 top-4 p-2 text-gray-400 hover:bg-gray-200 hover:text-gray-700"
	>
		<Icon icon="content_copy" weight={400} />
	</Button>
-->
