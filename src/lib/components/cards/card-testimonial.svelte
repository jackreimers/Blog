<script lang="ts">
	import type { Testimonial } from '$lib/interfaces/interfaces.testimonials';
	import { UserRound } from 'lucide-svelte';
	import SvelteMarkdown from 'svelte-markdown';

	export let data: Testimonial;
	export let classes: string = '';
</script>

<div class="flex flex-col rounded-lg bg-white p-4 shadow sm:p-6 {classes}">
	<div class="flex-1 text-gray-700 [&>p]:mt-4 first:[&>p]:mt-0">
		<SvelteMarkdown source={data.content} />
	</div>
	<div class="mt-10 flex items-center gap-3">
		<div class="rounded-full bg-blue-600 p-2 text-white">
			<UserRound class="h-6 w-6" />
		</div>
		<div>
			<p class="font-semibold">{data.name}</p>
			<p class="text-sm text-gray-700">{data.organisation}</p>
		</div>
	</div>
</div>
