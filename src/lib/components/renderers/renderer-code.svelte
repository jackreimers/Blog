<script lang="ts">
	import { fade } from 'svelte/transition';
	import { Highlight, HighlightSvelte } from 'svelte-highlight';
	import { coffeescript, typescript } from 'svelte-highlight/languages';
	import Icon from '$lib/components/text/icon.svelte';

	export let lang: string = '';
	export let text: string = '';

	let copied: boolean = false;

	function copy() {
		navigator.clipboard.writeText(text);
		copied = true;

		setTimeout(() => {
			copied = false;
		}, 2500);
	}
</script>

<div class="group mb-4">
	<div class="relative inline-block w-full overflow-hidden overflow-x-auto rounded shadow">
		{#if lang === 'svelte'}
			<HighlightSvelte code={text} />
		{:else if lang === 'typescript'}
			<Highlight language={typescript} code={text} />
		{:else if lang === 'bash'}
			<Highlight language={coffeescript} code={text} />
		{:else}
			<p>Missing language!</p>
		{/if}
		<button
			class="absolute right-3 top-3 rounded p-1.5 text-gray-400 opacity-0 transition-all duration-200 sm:right-4 sm:top-4 sm:p-2 mhover:hover:bg-gray-100 mhover:group-hover:opacity-100"
			on:click={copy}
		>
			{#if copied}
				<ClipboardCheck />
			{:else}
				<Clipboard />
			{/if}
		</button>
	</div>
</div>
