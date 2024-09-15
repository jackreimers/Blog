<script lang="ts">
	import { MoveRight } from 'lucide-svelte';
	import { createEventDispatcher } from 'svelte';

	export let title: string;
	export let text: string;
	export let classes: string = '';

	const dispatch = createEventDispatcher();
</script>

<button
	class="group flex w-full items-center justify-between rounded-lg bg-blue-900 p-7 text-left shadow transition-[transform,box-shadow,background-color] duration-300 sm:p-10 mhover:hover:scale-[1.015] mhover:hover:bg-blue-950 mhover:hover:shadow-lg {classes}"
	on:click={() => dispatch('click')}
>
	<span class="block">
		<span class="block text-xl font-semibold text-white sm:text-2xl">
			{title}
		</span>
		<span class="mt-1 block text-blue-200">{text}</span>
	</span>
	<span
		aria-hidden="true"
		class="hidden items-center gap-7 sm:gap-10 text-white transition-[margin] duration-300 sm:mr-3 sm:flex mhover:group-hover:mr-0"
	>
		<MoveRight size="2rem" />
	</span>
</button>
