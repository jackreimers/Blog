<script lang="ts">
	import type { Testimonial } from '$lib/interfaces/interfaces';
	import { UserRound } from 'lucide-svelte';
	import SvelteMarkdown from 'svelte-markdown';

	export let data: Testimonial;
</script>

<div class="flex flex-col rounded-lg bg-white p-5 shadow sm:p-6 {$$restProps.class ?? ''}">
	<div class="flex-1 text-gray-700 [&>p]:mt-4 first:[&>p]:mt-0">
		<SvelteMarkdown source={data.content} />
	</div>
	<div class="mt-10 flex flex-col items-center gap-3 text-center sm:flex-row sm:text-left">
		<div class="rounded-full bg-blue-600 p-2 text-white">
			<UserRound class="h-8 w-8" />
		</div>
		<div>
			<p class="font-semibold">{data.name}</p>
			<p class="text-sm text-gray-700">{data.organisation}</p>
		</div>
	</div>
</div>
