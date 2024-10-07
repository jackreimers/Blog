<script>
	import { AlertOctagon } from 'lucide-svelte';
</script>

<blockquote class="my-4 flex max-w-prose">
	<div aria-hidden="true" class="w-[4px] rounded-lg bg-blue-900" />
	<div class="flex-1 py-3 pl-4">
		<div class="inline-flex items-center gap-2">
			<AlertOctagon class="text-blue-900" />
			<p class="!m-0 text-lg font-semibold !text-blue-900">Important</p>
		</div>
		<div class="mt-2 max-w-prose text-sm font-medium text-gray-700 [&>p]:m-0">
			<slot />
		</div>
	</div>
</blockquote>
