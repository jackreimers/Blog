<script>
	import { AlertOctagon } from 'lucide-svelte';
</script>

<blockquote class="my-4 flex max-w-prose">
	<div aria-hidden="true" class="w-[4px] rounded-lg bg-blue-600" />
	<div class="flex-1 py-4 pl-4">
		<div class="inline-flex items-center gap-2">
			<AlertOctagon class="h-7 w-7 text-blue-600" />
			<p class="!m-0 text-lg font-semibold tracking-tight !text-blue-600 sm:text-xl">
				Important
			</p>
		</div>
		<div class="mt-2 max-w-prose font-medium tracking-tight [&>p]:m-0 [&>p]:!text-gray-700">
			<slot />
		</div>
	</div>
</blockquote>
