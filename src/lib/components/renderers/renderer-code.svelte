<script lang="ts">
	import { Highlight, HighlightSvelte, LineNumbers } from 'svelte-highlight';
	import { coffeescript, typescript } from 'svelte-highlight/languages';
	import { Clipboard, ClipboardCheck } from 'lucide-svelte';

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

<div class="group my-4 sm:my-6">
	<div
		class="relative inline-block w-full overflow-hidden overflow-x-auto rounded-lg text-sm text-gray-300 sm:text-base"
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
			class="absolute right-3 top-3 z-10 rounded p-1.5 text-gray-400 opacity-0 transition-all duration-200 sm:right-4 sm:top-4 sm:p-2 mhover:hover:bg-orange-100 mhover:hover:text-orange-900 mhover:group-hover:opacity-100"
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
