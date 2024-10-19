<script lang="ts">
	export let title: string;
	export let subtitle: string;
</script>

<div class="text-center {$$restProps.class ?? ''}">
	<p
		class="mx-auto max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
	>
		{title}
	</p>
	<p class="mx-auto mt-4 max-w-prose text-gray-700">{subtitle}</p>
	{#if $$slots.default}
		<div class="mt-6">
			<slot />
		</div>
	{/if}
</div>
