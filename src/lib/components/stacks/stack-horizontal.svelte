<script lang="ts">
	export let inline: boolean = false;
	export let classes: string = '';
</script>

{#if inline}
	<span class="flex gap-2.5 sm:gap-3.5 {classes}">
		<slot />
	</span>
{:else}
	<div class="flex gap-2.5 sm:gap-3.5 {classes}">
		<slot />
	</div>
{/if}
