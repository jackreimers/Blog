<script>
	import { AlertOctagon } from 'lucide-svelte';
</script>

<blockquote class="mt-4 flex max-w-prose">
	<div class="w-[4px] rounded-lg bg-blue-900" />
	<div class="flex-1 py-2 pl-3.5 sm:py-3 sm:pl-4">
		<div class="inline-flex items-center gap-2 text-blue-900">
			<AlertOctagon />
			<p class="!m-0 font-semibold sm:text-lg">Important</p>
		</div>
		<div class="max-w-prose text-sm font-medium sm:text-base [&>p]:m-0">
			<slot />
		</div>
	</div>
</blockquote>
