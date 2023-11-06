<script lang="ts">
	export let onClick: Function | null = null;
	export let href: string = '';
	export let classes: string = '';
</script>

{#if onClick != null}
	<button
		class="flex items-center rounded transition-colors duration-700 {classes}"
		on:click={() => onClick}
	>
		<slot>
			<p>Button</p>
		</slot>
	</button>
{:else}
	<a {href} class="flex items-center rounded transition-colors duration-700 {classes}">
		<slot>
			<p>Button</p>
		</slot>
	</a>
{/if}
