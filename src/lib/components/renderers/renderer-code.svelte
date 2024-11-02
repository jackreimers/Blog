<script lang="ts">
	import { coffeescript, typescript } from 'svelte-highlight/languages';
	import { Clipboard, ClipboardCheck } from 'lucide-svelte';
	import { Highlight, HighlightSvelte, LineNumbers } from 'svelte-highlight';

	export let lang: string = '';
	export let text: string = '';

	let lineNumberColor: string = 'rgb(156 163 175)';
	let lineNumberBorderColor: string = 'rgb(209 213 219)';
	let copied: boolean = false;

	function copy() {
		navigator.clipboard.writeText(text);
		copied = true;

		setTimeout(() => {
			copied = false;
		}, 3000);
	}
</script>

<div class="group my-10">
	<div
		class="relative block w-full overflow-hidden overflow-x-auto rounded-lg border-2 border-gray-300 text-sm text-gray-300 sm:text-base"
	>
		{#if lang === 'svelte'}
			<HighlightSvelte code={text} let:highlighted>
				<LineNumbers
					--line-number-color={lineNumberColor}
					--border-color={lineNumberBorderColor}
					{highlighted}
				/>
			</HighlightSvelte>
		{:else if lang === 'typescript'}
			<Highlight language={typescript} code={text} let:highlighted>
				<LineNumbers
					--line-number-color={lineNumberColor}
					--border-color={lineNumberBorderColor}
					{highlighted}
				/>
			</Highlight>
		{:else if lang === 'bash'}
			<Highlight language={coffeescript} code={text} let:highlighted>
				<LineNumbers
					--line-number-color={lineNumberColor}
					--border-color={lineNumberBorderColor}
					{highlighted}
				/>
			</Highlight>
		{:else}
			<p>Missing language!</p>
		{/if}
		<button
			class="absolute right-3 top-3 z-10 rounded p-2.5 text-gray-400 opacity-0 transition-all duration-200 focus:bg-blue-100 focus:text-blue-700 focus:opacity-100 sm:right-4 sm:top-4 sm:p-2 mhover:hover:bg-blue-100 mhover:hover:text-blue-700 mhover:group-hover:opacity-100"
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
