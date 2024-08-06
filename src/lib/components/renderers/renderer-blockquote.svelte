<script>
	import { AlertOctagon } from 'lucide-svelte';
</script>

<blockquote
	class="mb-5 inline-block max-w-prose border-l-4 border-blue-900 px-4 py-2 sm:mb-6 sm:py-3"
>
	<div class="inline-flex items-center gap-2 text-blue-900">
		<AlertOctagon />
		<p class="text-lg font-semibold">Important</p>
	</div>
	<div class="max-w-prose">
		<slot />
	</div>
</blockquote>
