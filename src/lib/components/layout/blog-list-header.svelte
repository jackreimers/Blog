<script lang="ts">
	import Dropdown from '$lib/components/buttons/dropdown.svelte';

	let dates: string[] = ['Ascending', 'Descending'];
	let categories: string[] = ['.NET', 'Angular', 'C#', 'Svelte'];
</script>

<div class="mb-16 inline-flex flex-col gap-4">
	<h1 class="text-6xl font-semibold">Blog Posts</h1>
	<div class="flex gap-2">
		<Dropdown name="Date" options={dates} />
		<Dropdown name="Category" options={categories} />
	</div>
</div>
