<script lang="ts">
	//TODO: Try to get the autoloader working
	//TODO: Looks like Prism has a copy to clipboard plugin, try to get that working
	import Prism from 'prismjs';
	import 'prismjs/themes/prism.css';
	import 'prismjs/components/prism-csharp';

	export let lang: string = '';
	export let text: string = '';
</script>

<code class="{lang} whitespace-pre-wrap">
	{@html Prism.highlight(text, Prism.languages[lang], lang)}
</code>
