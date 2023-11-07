<script lang="ts">
	export let onClick: Function | null = null;
	export let href: string = '';
	export let classes: string = '';
</script>

<!-- TODO: Figure out how to get rid of this -->
<div class="flex">
	{#if onClick != null}
		<button
			class="flex items-center rounded transition-colors duration-500 {classes}"
			on:click={() => onClick?.call(null)}
		>
			<slot>
				<p>Button</p>
			</slot>
		</button>
	{:else}
		<a {href} class="flex items-center rounded transition-colors duration-500 {classes}">
			<slot>
				<p>Button</p>
			</slot>
		</a>
	{/if}
</div>
