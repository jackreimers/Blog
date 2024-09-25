<script>
	import { AlertOctagon } from 'lucide-svelte';
</script>

<blockquote class="my-4 flex max-w-prose">
	<div aria-hidden="true" class="w-[4px] rounded-lg bg-blue-900" />
	<div class="flex-1 py-3 pl-4">
		<div class="inline-flex items-center gap-2">
			<span class="text-blue-900">
				<AlertOctagon />
			</span>
			<p class="!m-0 text-lg font-semibold text-blue-900">Important</p>
		</div>
		<div class="max-w-prose font-medium text-gray-700 [&>p]:m-0">
			<slot />
		</div>
	</div>
</blockquote>
