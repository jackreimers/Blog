<script lang="ts">
	export let title: string;
	export let subtitle: string;
</script>

<div class="mb-10 text-center {$$restProps.class}">
	<h2 class="text-3xl font-bold tracking-tight">{title}</h2>
	<p class="mt-4 text-lg tracking-tight text-gray-700">
		{subtitle}
	</p>
</div>
