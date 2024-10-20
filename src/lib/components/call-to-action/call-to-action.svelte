<script lang="ts">
	export let title: string;
	export let subtitle: string;
</script>

<div
	class="overflow-hidden rounded-lg bg-[url(/content/images/people.jpg)] bg-cover bg-center
		{$$restProps.class ?? ''}"
>
	<div class="h-full bg-black bg-opacity-65 px-5 py-10 text-center sm:px-6 md:p-16">
		<div>
			<h2
				class="text-2xl font-bold leading-tight tracking-tight text-white sm:text-2xl md:text-4xl"
			>
				{title}
			</h2>
			<p class="mt-4 text-lg tracking-tight text-blue-50">
				{subtitle}
			</p>
		</div>
		{#if $$slots.default}
			<div class="mx-auto mt-6 inline-flex items-center sm:mt-10">
				<slot />
			</div>
		{/if}
	</div>
</div>
