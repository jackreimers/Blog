<!-- TODO: This is redundant now, remove it -->
<script lang="ts">
	export let onClick: Function | null = null;
	export let href: string = '';
	export let target: string = '';
	export let classes: string = '';
</script>

{#if onClick != null}
	<button class="rounded duration-500 {classes}" on:click={() => onClick?.call(null)}>
		<slot>
			<p>Button</p>
		</slot>
	</button>
{:else}
	<a {href} {target} class="rounded duration-500 {classes}">
		<slot>Button</slot>
	</a>
{/if}
