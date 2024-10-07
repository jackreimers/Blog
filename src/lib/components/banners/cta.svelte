<script lang="ts">
	export let title: string;
	export let subtitle: string;
	export let classes: string = '';
</script>

<div
	class="overflow-hidden rounded-lg bg-[url(/content/images/people.jpg)] bg-cover bg-center {classes}"
>
	<div class="h-full bg-black bg-opacity-60">
		<div
			class="bg-gradient-to-br from-blue-900 from-25% px-4 py-8 text-center sm:px-6 sm:py-10"
		>
			<div>
				<h2
					class="text-xl font-bold leading-tight tracking-tight text-white sm:text-2xl md:text-3xl"
				>
					{title}
				</h2>
				<p class="mt-4 text-gray-200">
					{subtitle}
				</p>
			</div>
			{#if $$slots.default}
				<div class="mt-6">
					<slot />
				</div>
			{/if}
		</div>
	</div>
</div>
