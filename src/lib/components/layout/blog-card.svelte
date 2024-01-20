<script lang="ts">
	import type { BlogPost } from '$lib/types/types';

	import { getDateString } from '$lib/functions/functions';
	import { MoveRight } from 'lucide-svelte';

	import Button from '$lib/components/buttons/button.svelte';

	export let data: BlogPost;
</script>

<Button
	href="/blog/{data.metadata.slug}"
	classes="group flex gap-3 rounded bg-gray-100 px-4 py-3.5 sm:px-5 sm:py-4 md:px-6 md:py-5"
>
	<span class="flex-1">
		<span class="mb-1 block text-sm text-gray-500 sm:text-base"
			>{getDateString(data.metadata.date)}</span
		>
		<span class="mb-2.5 block font-bold sm:text-2xl">{data.metadata.title}</span>
		<span class="block max-w-prose">
			{data.intro.substring(0, 120)}<span
				class="bg-gradient-to-r from-gray-700 to-white bg-clip-text text-transparent"
				>{data.intro.substring(120, 130)}</span
			>
		</span>
	</span>

	<span
		class="mr-3 hidden items-center text-gray-400 transition-all duration-300 group-hover:mr-1.5 group-hover:text-gray-600 sm:flex"
	>
		<MoveRight />
	</span>
</Button>
