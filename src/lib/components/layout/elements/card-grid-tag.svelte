<script lang="ts">
	export let classes: string = '';
</script>

<div
	class="tag-grid grid grid-cols-2 gap-2.5 sm:grid-cols-2 sm:gap-3.5 md:grid-cols-3 lg:grid-cols-4 {classes}"
>
	<slot />
</div>
