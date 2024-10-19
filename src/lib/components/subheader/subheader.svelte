<script lang="ts">
	export let title: string;
	export let subtitle: string;
</script>

<div class="mb-6 text-center sm:mb-10 {$$restProps.class ?? ''}">
	<h2 class="text-xl font-bold tracking-tight sm:text-2xl md:text-3xl">{title}</h2>
	<p class="mt-4 tracking-tight text-gray-700 sm:text-lg">
		{subtitle}
	</p>
</div>
