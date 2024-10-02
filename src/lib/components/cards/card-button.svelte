<script lang="ts">
	import { MoveRight } from 'lucide-svelte';
	import { createEventDispatcher } from 'svelte';

	export let href: string | null = null;
	export let title: string;
	export let text: string;
	export let action: string | null = null;
	export let classes: string = '';

	const dispatch = createEventDispatcher();
</script>

{#if href}
	<a
		class="group flex flex-col rounded-lg bg-white p-6 shadow transition-[transform,box-shadow] duration-300 sm:p-7 mhover:hover:scale-[1.015] mhover:hover:shadow-lg {classes}"
		{href}
		on:click={() => dispatch('click')}
	>
		{#if $$slots.header}
			<span class="mb-4 block">
				<slot name="header" />
			</span>
		{/if}
		<span class="flex-1 text-left">
			<span class="block text-xl font-semibold sm:text-2xl">{title}</span>
			<span class="mt-4 block text-gray-700">{text}</span>
			{#if $$slots.content}
				<span class="mt-10 block">
					<slot name="content" />
				</span>
			{/if}
		</span>
		{#if action}
			<span
				class="mt-10 inline-flex items-center gap-2 font-medium text-blue-900 transition-colors"
			>
				<span class="transition-[margin] duration-300 mhover:group-hover:mr-1">
					{action}
				</span>
				<MoveRight size="1.25rem" />
			</span>
		{/if}
	</a>
{:else}
	<button
		class="group flex flex-col rounded-lg bg-white p-7 shadow transition-[transform,box-shadow] duration-300 mhover:hover:scale-[1.015] mhover:hover:shadow-lg {classes}"
		on:click={() => dispatch('click')}
	>
		{#if $$slots.header}
			<span class="mb-4 block">
				<slot name="header" />
			</span>
		{/if}
		<span class="flex-1 text-left">
			<span class="block text-xl font-semibold sm:text-2xl">{title}</span>
			<span class="mt-4 block text-gray-700">{text}</span>
			{#if $$slots.content}
				<span class="mt-10 block">
					<slot name="content" />
				</span>
			{/if}
		</span>
		{#if action}
			<span
				class="mt-10 inline-flex items-center gap-2 font-medium text-blue-900 transition-colors"
			>
				<span class="transition-[margin] duration-300 mhover:group-hover:mr-1"
					>{action}</span
				>
				<MoveRight size="1.25rem" />
			</span>
		{/if}
	</button>
{/if}
