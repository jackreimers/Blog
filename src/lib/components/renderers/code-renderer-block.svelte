<script lang="ts">
	import { fade } from 'svelte/transition';
	import Prism from 'prismjs';
	import Icon from '$lib/components/text/icon.svelte';
	import 'prismjs/themes/prism.css';
	import 'prismjs/components/prism-csharp';
	import 'prism-svelte';

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
	<div
		class="relative inline-block w-full overflow-hidden overflow-x-auto rounded bg-white p-3 shadow sm:p-4"
	>
		<code class="{lang} whitespace-pre">
			{@html Prism.highlight(text, Prism.languages[lang], lang)}
		</code>
		<button
			class="absolute right-3 top-3 rounded p-1.5 text-gray-400 opacity-0 transition-all duration-200 sm:right-4 sm:top-4 sm:p-2.5 mhover:hover:bg-gray-100 mhover:group-hover:opacity-100"
			on:click={copy}
		>
			{#if copied}
				<span in:fade>
					<Icon icon="check" weight={400} />
				</span>
			{:else}
				<span in:fade>
					<Icon icon="content_copy" weight={400} />
				</span>
			{/if}
		</button>
	</div>
</div>
