<script lang="ts">
	import Dropdown from '$lib/components/buttons/dropdown.svelte';
	import { getDateString } from '$lib/functions/functions';

	let dates: string[] = ['Ascending', 'Descending'];
	let categories: string[] = ['.NET', 'Angular', 'C#', 'Svelte'];
</script>

<div class="mb-8 flex flex-col gap-2.5 text-center sm:mb-12 sm:gap-3.5">
	<p class="mb-0.5 text-sm leading-none sm:text-base">2 Found</p>
	<h1 class="text-3xl font-bold sm:text-5xl lg:text-6xl">Blog Posts</h1>

	<div class="mb-3 mt-3 h-[2px] w-full rounded-full bg-gray-200" />
	<!--
    <div class="flex gap-2">
        <Dropdown name="Date" options={dates} />
        <Dropdown name="Category" options={categories} />
    </div>
    -->
</div>
