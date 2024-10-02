<script lang="ts">
	import type { Testimonial } from '$lib/interfaces/interfaces.testimonials';
	import { Quote } from 'lucide-svelte';

	export let data: Testimonial;
	export let classes: string = '';
</script>

<div class="flex gap-3 rounded-lg border border-gray-300 bg-gray-100 p-5 {classes}">
	<div class="text-blue-900">
		<Quote />
	</div>
	<div class="flex flex-col">
		<p class="flex-1 text-gray-700">{data.content}</p>
		<p class="mt-4 font-semibold">{data.name}</p>
		<p class="text-gray-700">{data.organisation}</>
	</div>
</div>
