<script lang="ts">
	export let classes: string = '';
</script>

<div class="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 {classes}">
	<slot />
</div>
