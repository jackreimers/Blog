<script lang="ts">
	export let href: string | null = null;
	export let onClick: Function | null = null;
	export let classes: string = '';

	function handleClick(event: MouseEvent) {
		onClick?.call(event);
	}
</script>

<div class="group relative rounded shadow">
	<div
		class="absolute left-0 top-0 -z-10 h-[calc(100%+4px)] w-[calc(100%+4px)] -translate-x-[2px] -translate-y-[2px] transform rounded-[calc(0.25rem+2px)] bg-white bg-gradient-to-br from-blue-600 to-blue-800 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
	/>

	{#if href}
		<a
			{href}
			class="inline-flex items-center rounded bg-white px-3 py-1.5 sm:px-4 sm:py-2.5 {classes}"
		>
			<span
				class="font-semibold {$$slots.icon
					? 'mr-2 border-r-2 border-gray-100 pr-2 sm:mr-3 sm:pr-3'
					: ''}"
			>
				<slot name="text" />
			</span>
			<slot name="icon" />
		</a>
	{:else if onClick}
		<button
			on:click={handleClick}
			class="inline-flex items-center rounded bg-white px-3 py-1.5 sm:px-4 sm:py-2.5 {classes}"
		>
			<span
				class="font-semibold {$$slots.icon
					? 'mr-2 border-r-2 border-gray-100 pr-2 sm:mr-3 sm:pr-3'
					: ''}"
			>
				<slot name="text" />
			</span>
			<slot name="icon" />
		</button>
	{/if}
</div>
