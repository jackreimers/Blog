<script lang="ts">
	import type { Testimonial } from '$lib/interfaces/interfaces.testimonials';
	import { UserRound } from 'lucide-svelte';
	import SvelteMarkdown from 'svelte-markdown';

	export let data: Testimonial;
	export let classes: string = '';
</script>

<div class="flex flex-col gap-3 rounded-lg bg-white p-4 shadow {classes}">
	<div class="flex-1 text-sm leading-normal text-gray-700 [&>p]:mt-4 first:[&>p]:mt-0">
		<SvelteMarkdown source={data.content} />
	</div>
	<div class="mt-10 flex items-center gap-2.5">
		<div class="rounded-full bg-blue-100 p-2 text-blue-900">
			<UserRound class="h-5 w-5" />
		</div>
		<div>
			<p class="text-sm font-semibold">{data.name}</p>
			<p class="text-xs text-gray-700">{data.organisation}</p>
		</div>
	</div>
</div>
