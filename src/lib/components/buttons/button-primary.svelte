<script lang="ts">
	export let href: string | null = null;
	export let target: string = '';
	export let onClick: Function | null = null;
	export let classes: string = '';

	function handleClick(event: MouseEvent) {
		onClick?.call(event);
	}
</script>

{#if href}
	<a
		{href}
		{target}
		class="inline-flex items-center rounded border-2 border-transparent bg-white px-3 py-1.5 shadow transition-colors duration-200 hover:border-gray-700 sm:px-4 sm:py-2.5 {classes}"
	>
		<span
			class="font-semibold {$$slots.icon
				? 'mr-2 border-r-2 border-gray-100 pr-2 sm:mr-3 sm:pr-3'
				: ''}"
		>
			<slot name="text">Button</slot>
		</span>
		<slot name="icon" />
	</a>
{:else if onClick}
	<button
		on:click={handleClick}
		class="inline-flex items-center rounded border-2 border-transparent bg-white px-3 py-1.5 shadow transition-colors duration-200 hover:border-gray-700 sm:px-4 sm:py-2.5 {classes}"
	>
		<span
			class="font-semibold {$$slots.icon
				? 'mr-2 border-r-2 border-gray-100 pr-2 sm:mr-3 sm:pr-3'
				: ''}"
		>
			<slot name="text">Button</slot>
		</span>
		<slot name="icon" />
	</button>
{/if}
