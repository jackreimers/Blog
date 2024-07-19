<script lang="ts">
	export let classes: string = '';
</script>

<div
	class="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3.5 md:grid-cols-3 [&>*:last-child]:hidden md:[&>*:last-child]:inline-flex {classes}"
>
	<slot />
</div>
