<script lang="ts">
	import Prism from 'prismjs';
	import 'prismjs/themes/prism.css';
	import 'prismjs/components/prism-csharp';

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
	class="relative mb-4 inline-block w-full overflow-hidden overflow-x-auto rounded bg-white p-3 shadow sm:p-4"
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
