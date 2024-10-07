<script lang="ts">
	export let title: string;
	export let subtitle: string;
	export let classes: string = '';
</script>

<div class="mb-6 border-b border-gray-300 pb-6 sm:mb-10 sm:pb-10 {classes}">
	<h2 class="text-2xl font-bold leading-tight tracking-tight sm:text-3xl">{title}</h2>
	<p class="mt-4 max-w-4xl text-gray-700">{subtitle}</p>
</div>
