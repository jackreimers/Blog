<script lang="ts">
	export let title: string;
	export let subtitle: string;
	export let classes: string = '';
</script>

<div
	class="overflow-hidden rounded-lg bg-[url(/content/images/people.jpg)] bg-cover bg-center {classes}"
>
	<div class="h-full bg-black bg-opacity-65 text-center px-8 py-10 sm:p-16">
		<div>
			<h2
				class="text-xl font-bold leading-tight tracking-tight text-white sm:text-2xl md:text-4xl"
			>
				{title}
			</h2>
			<p class="mt-4 text-blue-50 tracking-tight text-lg">
				{subtitle}
			</p>
		</div>
		{#if $$slots.default}
			<div class="mt-10">
				<slot />
			</div>
		{/if}
	</div>
</div>
